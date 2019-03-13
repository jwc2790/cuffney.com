## ############################################################################
## S3 Buckets & Bucket Policy
## ############################################################################

resource "aws_s3_bucket" "origin" {
  bucket = "${var.domain_name}"
  policy   = "${data.template_file.bucket_policy.rendered}"
  force_destroy = true
}

resource "aws_s3_bucket" "www_redirect" {
  count = "${var.www_redirect}"         # booleans are transformed to 1 and 0.
  bucket = "www.${var.domain_name}"
  force_destroy = true

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
}

## ############################################################################
## DNS Records
## ############################################################################

resource "aws_route53_record" "a_record" {
  zone_id     = "${var.target_zone_id}"
  name        = ""
  type        = "A"
  depends_on  = ["aws_cloudfront_distribution.default"]

  alias {
    name                   = "${aws_cloudfront_distribution.default.domain_name}"
    evaluate_target_health = "true"
    zone_id                = "${aws_cloudfront_distribution.default.hosted_zone_id }"
  }
}

resource "aws_route53_record" "www_record" {
  count = "${var.www_redirect}"         # booleans are transformed to 1 and 0.
  
  zone_id     = "${var.target_zone_id}"
  name        = "www"
  type        = "A"
  depends_on  = ["aws_s3_bucket.www_redirect"]

  alias {
    name                   = "${aws_s3_bucket.www_redirect.website_endpoint}"
    evaluate_target_health = "true"
    zone_id                = "${aws_s3_bucket.www_redirect.hosted_zone_id }"
  }
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

  aliases = ["${var.domain_name}", "www.${var.domain_name}"]

  origin {
    domain_name = "${aws_s3_bucket.origin.bucket_regional_domain_name}"
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

    forwarded_values {
      query_string = "true"

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    default_ttl            = "86400"
    min_ttl                = "0"
    max_ttl                = "31536000"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }
}
