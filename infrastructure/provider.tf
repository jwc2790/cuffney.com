# use s3 bucket as a remote backend for terraform
terraform {
  backend "s3" {
    bucket = "com.cuffney.terraform"
    key    = "cuffney.com/terraform.tfstate"
    region = "us-east-1"
    profile = "cuffney"
  }
}

provider "aws" {
  region  = "us-east-1"
  profile = "cuffney"
}