terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_dynamodb_table" "shipments" {
  name         = var.shipments_table_name
  billing_mode = "PAY_PER_REQUEST"

  hash_key = "shipment_id"

  attribute {
    name = "shipment_id"
    type = "S"
  }

  tags = {
    Project   = "FleetOps Lite"
    ManagedBy = "Terraform"
  }
}