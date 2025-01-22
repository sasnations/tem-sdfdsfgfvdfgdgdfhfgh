# Temporary Email Service Setup Documentation

## Overview
This document details the complete setup and configuration for the temporary email service that handles unlimited email prefixes for multiple domains.

## Domain Configuration
Currently configured domains:
- yahóo.com
- xn--yaho-sqa.com
- mail.brashbeat.online

## Server Configuration

### Postfix Configuration Files

1. `/etc/postfix/main.cf`:
```conf
# Basic Configuration
myhostname = mail.boomlify.com
mydomain = boomlify.com
myorigin = $mydomain
inet_interfaces = all
inet_protocols = ipv4
mydestination = $myhostname, localhost.$mydomain, localhost

# TLS parameters
smtpd_tls_cert_file=/etc/letsencrypt/live/mail.boomlify.com/fullchain.pem
smtpd_tls_key_file=/etc/letsencrypt/live/mail.boomlify.com/privkey.pem
smtpd_use_tls=yes
smtpd_tls_security_level = may
smtpd_tls_protocols = !SSLv2, !SSLv3

# Virtual domains and aliases
virtual_alias_domains = hash:/etc/postfix/virtual_domains
virtual_alias_maps = hash:/etc/postfix/virtual
transport_maps = hash:/etc/postfix/transport

# Allow any recipient
local_recipient_maps =

# SMTP restrictions
smtpd_recipient_restrictions =
    permit_mynetworks,
    permit_sasl_authenticated,
    permit_virtual_alias_domains,
    reject_unauth_destination

# Size limits
message_size_limit = 10240000
mailbox_size_limit = 51200000
```

2. `/etc/postfix/virtual_domains`:
```
# Temporary email domains
yahóo.com OK
xn--yaho-sqa.com OK
mail.brashbeat.online OK
```

3. `/etc/postfix/transport`:
```
# Transport mappings
yahóo.com webhook:
xn--yaho-sqa.com webhook:
mail.brashbeat.online webhook:
```

4. `/etc/postfix/virtual`:
```
# Virtual email mappings
@yahóo.com webhook
@xn--yaho-sqa.com webhook
@mail.brashbeat.online webhook
```

5. `/etc/postfix/master.cf`:
```
# Service    Type   Private Unpriv  Chroot  Wakeup  Maxproc Command + args
smtp         inet   n       -       n       -       -       smtpd
submission   inet   n       -       n       -       -       smtpd
  -o syslog_name=postfix/submission
  -o smtpd_tls_security_level=encrypt
  -o smtpd_sasl_auth_enable=yes
  -o smtpd_tls_auth_only=yes

# Custom transport for webhook
webhook   unix  -       n       n       -       -       pipe
  flags=FR user=www-data argv=/etc/postfix/pipe-to-webhook.sh ${recipient} ${sender} ${original_subject}
```

6. `/etc/postfix/pipe-to-webhook.sh`:
```bash
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
```

## Backend Configuration

### Environment Variables (.env)
```
CORS_ORIGINS=https://boomlify.com/
DB_HOST=srv1578.hstgr.io
DB_NAME=u542980509_tempemail_db
DB_PASSWORD=khankimagi12@A
DB_USER=u542980509_tempemail_db
JWT_SECRET=jwt-f7af876e1a84d35e7bbc78f7d3c6f6e89a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6
NODE_ENV=production
PORT=3000
```

### Dependencies
Required npm packages:
```json
{
  "dependencies": {
    "express": "^4.18.3",
    "mysql2": "^3.9.2",
    "uuid": "^9.0.1",
    "crypto": "^1.0.1",
    "axios": "^1.6.7",
    "body-parser": "^1.20.2",
    "multer": "^1.4.5-lts.1"
  }
}
```

## Setup Instructions

1. Install Postfix:
```bash
sudo apt-get update
sudo apt-get install postfix
```

2. Configure Postfix files:
```bash
sudo nano /etc/postfix/main.cf
sudo nano /etc/postfix/virtual_domains
sudo nano /etc/postfix/transport
sudo nano /etc/postfix/virtual
sudo nano /etc/postfix/master.cf
```

3. Create webhook script:
```bash
sudo nano /etc/postfix/pipe-to-webhook.sh
sudo chmod +x /etc/postfix/pipe-to-webhook.sh
```

4. Update Postfix maps:
```bash
sudo postmap /etc/postfix/virtual
sudo postmap /etc/postfix/transport
sudo postmap /etc/postfix/virtual_domains
```

5. Restart Postfix:
```bash
sudo systemctl restart postfix
```

## Maintenance

### Monitoring Logs
```bash
sudo tail -f /var/log/mail.log
```

### Common Issues and Solutions

1. Relay Access Denied:
- Check smtpd_recipient_restrictions in main.cf
- Ensure permit_virtual_alias_domains is included
- Verify domain is properly configured in virtual_domains

2. Connection Timeouts:
- Check firewall settings
- Verify port 25 is open
- Check network connectivity

3. Virtual Domain Issues:
- Ensure proper format in virtual_domains file
- Run postmap after any changes
- Restart Postfix

## Security Considerations

1. SSL/TLS Configuration:
- Keep certificates up to date
- Use strong SSL protocols
- Regular security audits

2. Access Control:
- Restrict server access
- Monitor authentication logs
- Regular password rotation

3. Rate Limiting:
- Implement connection rate limiting
- Monitor for abuse
- Block suspicious IPs

## Backup Procedures

1. Configuration Backup:
```bash
sudo cp -r /etc/postfix /etc/postfix.bak
```

2. Database Backup:
```bash
mysqldump -u [user] -p [database] > backup.sql
```

## Monitoring

1. Check Postfix Status:
```bash
sudo systemctl status postfix
```

2. Monitor Mail Queue:
```bash
mailq
```

3. Check Active Connections:
```bash
sudo netstat -tulpn | grep :25
```