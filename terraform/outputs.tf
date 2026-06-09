output "shipments_table_name" {
  description = "Name of the DynamoDB shipments table"
  value       = aws_dynamodb_table.shipments.name
}

output "shipments_table_arn" {
  description = "ARN of the DynamoDB shipments table"
  value       = aws_dynamodb_table.shipments.arn
}