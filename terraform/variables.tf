variable "aws_region" {
  description = "AWS region for FleetOps Lite resources"
  type        = string
  default     = "us-east-2"
}

variable "shipments_table_name" {
  description = "DynamoDB table name for FleetOps Lite shipments"
  type        = string
  default     = "FleetOpsShipments"
}