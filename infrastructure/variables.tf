variable "domain_name" {
  type    = "string"
  default = "cuffney.com"
}

variable "www_redirect" {
  type    = "string"
  default = true
}

variable "acm_certificate_arn" {
  type    = "string"
  default = "arn:aws:acm:us-east-1:255964265911:certificate/3a6c2c22-cb43-4c9b-9462-cf261b498eea"
}

variable "tags" {
  type        = "map"
  default     = {
    app = "cuffney.com"
  }
  description = "Additional tags (e.g. map(`BusinessUnit`,`XYZ`)"
}