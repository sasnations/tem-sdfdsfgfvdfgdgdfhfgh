#!/bin/bash

# Read email content
email_content=$(cat)

# Extract recipient from command line argument
recipient="$1"

# Forward to webhook
curl -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode "recipient=$recipient" \
  --data-urlencode "sender=$2" \
  --data-urlencode "subject=$3" \
  --data-urlencode "body=$email_content" \
  http://localhost:3000/webhook/email/incoming