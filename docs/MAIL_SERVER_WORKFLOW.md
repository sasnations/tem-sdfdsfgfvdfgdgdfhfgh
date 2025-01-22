# Mail Server Workflow Documentation

## System Overview

### Components
1. Mail Server (Postfix + Dovecot)
2. Backend API (Node.js)
3. Database (MySQL)
4. Frontend (React)

### Flow
1. Email Received → Mail Server
2. Mail Server → Webhook (Backend API)
3. Backend API → Database
4. Frontend ← Backend API (Real-time updates)

## Configuration Requirements

### Mail Server
- Postfix for SMTP
- Dovecot for IMAP/POP3
- SSL/TLS certificates
- SPF, DKIM, DMARC records
- Anti-spam configuration

### DNS Records Needed
```
# MX Records
@ IN MX 10 mail.yourdomain.com.

# SPF Record
@ IN TXT "v=spf1 ip4:YOUR_SERVER_IP ~all"

# DKIM Record
mail._domainkey IN TXT "v=DKIM1; k=rsa; p=YOUR_PUBLIC_KEY"

# DMARC Record
_dmarc IN TXT "v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com"
```

### Environment Variables
```
# Mail Server
MAIL_SERVER_HOST=mail.yourdomain.com
MAIL_SERVER_PORT=25
MAIL_SERVER_USERNAME=your-username
MAIL_SERVER_PASSWORD=your-password

# Database
DB_HOST=localhost
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name

# Backend
API_PORT=3000
JWT_SECRET=your-jwt-secret
```

## Migration Steps

### Moving to New VPS
1. Database Migration:
   ```bash
   # On old server
   mysqldump -u root -p your_db_name > backup.sql
   
   # On new server
   mysql -u root -p new_db_name < backup.sql
   ```

2. Mail Server Migration:
   ```bash
   # Copy mail configuration
   scp -r /etc/postfix/* new-server:/etc/postfix/
   scp -r /etc/dovecot/* new-server:/etc/dovecot/
   
   # Copy SSL certificates
   scp -r /etc/letsencrypt/* new-server:/etc/letsencrypt/
   ```

3. Backend Migration:
   ```bash
   # Copy backend code
   scp -r /path/to/backend/* new-server:/path/to/backend/
   
   # Copy environment variables
   scp .env new-server:/path/to/backend/
   ```

### DNS Updates
1. Update A records to point to new VPS IP
2. Update MX records
3. Update SPF records with new IP
4. Update DKIM if key changes
5. Allow 24-48 hours for DNS propagation

## Monitoring

### Key Metrics to Monitor
1. Mail Server:
   - Queue size
   - Delivery rate
   - Spam rejection rate
   - Disk usage
   - Memory usage

2. Backend:
   - API response time
   - Error rates
   - Connection pool status
   - Memory usage

3. Database:
   - Query performance
   - Connection count
   - Disk usage
   - Replication lag (if applicable)

## Backup Strategy

### Daily Backups
1. Database:
   ```bash
   # Automated backup script
   mysqldump -u root -p --all-databases > /backup/db_$(date +%Y%m%d).sql
   ```

2. Mail Server Configuration:
   ```bash
   # Backup script
   tar -czf /backup/mail_config_$(date +%Y%m%d).tar.gz /etc/postfix /etc/dovecot
   ```

3. SSL Certificates:
   ```bash
   # Backup certificates
   tar -czf /backup/ssl_$(date +%Y%m%d).tar.gz /etc/letsencrypt
   ```

### Retention Policy
- Keep daily backups for 7 days
- Keep weekly backups for 1 month
- Keep monthly backups for 6 months

## Security Checklist

### Mail Server
- [ ] SSL/TLS enabled and configured
- [ ] DKIM signing enabled
- [ ] SPF records configured
- [ ] DMARC policy set
- [ ] Rate limiting enabled
- [ ] Anti-spam measures active
- [ ] Firewall rules configured

### Backend
- [ ] API endpoints secured
- [ ] JWT authentication implemented
- [ ] Rate limiting enabled
- [ ] Input validation
- [ ] SQL injection prevention
- [ ] XSS protection

### Database
- [ ] Remote access restricted
- [ ] Strong passwords set
- [ ] Regular security updates
- [ ] Backup encryption
- [ ] Access logging enabled

## Domain Configuration

### Primary Domain
- Domain: boomlify.com
- Mail Server: mail.boomlify.com

### Temporary Email Domains
- temp1.com
- temp2.com
(Add more domains as needed)

### Required DNS Records (per domain)
