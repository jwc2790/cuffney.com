## ############################################################################
## S3 Buckets & Bucket Policy
## ############################################################################

resource "aws_s3_bucket" "origin" {
  bucket = "${var.domain_name}"
  policy   = "${data.template_file.bucket_policy.rendered}"
}

resource "aws_s3_bucket" "www_redirect" {
  # booleans are transformed to 1 and 0.
  count = "${var.www_redirect}"
  bucket = "www.${var.domain_name}"

  website {
    redirect_all_requests_to = "https://${var.domain_name}"
  }
}

data "template_file" "bucket_policy" {
  template = "${file("${path.module}/bucket_policy.json")}"

  vars {
    bucket = "${var.domain_name}"
    orign_access_identity_id = "${aws_cloudfront_origin_access_identity.default.id}"
  }
}

## ############################################################################
## Origin Access Identity
## ############################################################################

resource "aws_cloudfront_origin_access_identity" "default" {
  comment = ""
  # comment = "${module.distribution_label.id}"
}

## ############################################################################
## CloudFront Distrobution
## ############################################################################

resource "aws_cloudfront_distribution" "default" {
  enabled             = "true"
  is_ipv6_enabled     = "true"
  comment             = "..."
  default_root_object = "index.html"
  price_class         = "PriceClass_All"
  depends_on          = ["aws_s3_bucket.origin"]

  aliases = []

  origin {
    domain_name = "${var.domain_name}.s3.amazonaws.com"
    origin_id   = "S3Origin"

    s3_origin_config {
      origin_access_identity = "${aws_cloudfront_origin_access_identity.default.cloudfront_access_identity_path}"
    }
  }

  viewer_certificate {
    acm_certificate_arn = "${var.acm_certificate_arn}"
    ssl_support_method = "sni-only"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3Origin"
    compress         = "true"
    # trusted_signers  = ""

    forwarded_values {
      query_string = "true"
      # headers      = ["${var.forward_header_values}"]

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    # default_ttl            = "${var.default_ttl}"
    # min_ttl                = "${var.min_ttl}"
    # max_ttl                = "${var.max_ttl}"

  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }
}
