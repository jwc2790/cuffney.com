provider "aws" {
  region  = "us-east-1"
  profile = "cuffney"

  # assume_role {
  #   role_arn     = "arn:aws:iam::255964265911:user/jcuffney"
  #   # session_name = "SESSION_NAME"
  #   # external_id  = "EXTERNAL_ID"
  # }
}