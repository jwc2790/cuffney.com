# use s3 bucket as a remote backend for terraform
terraform {
  backend "s3" {
    bucket = "com.cuffney.terraform"
    key    = "cuffney.com/terraform.tfstate"
    region = "us-east-1"
  }

  depends_on = "${aws_s3_bucket.terraform_backend_store}"
}

provider "aws" {
  region  = "us-east-1"
  profile = "cuffney"
}