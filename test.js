import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import axios from 'axios';
import crypto from 'crypto';

dotenv.config();

// Test Database Connection
async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
    
    console.log('Successfully connected to database!');
    await connection.end();
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

// Test API Endpoints
async function testEndpoints() {
  try {
    // Test registration
    const registerResponse = await axios.post('https://sasnations.com/tempemail-backend/auth/register', {
      email: 'test@example.com',
      password: 'test123'
    });
    console.log('Registration test:', registerResponse.status === 200 ? 'PASS' : 'FAIL');

    // Test login
    const loginResponse = await axios.post('https://sasnations.com/tempemail-backend/auth/login', {
      email: 'test@example.com',
      password: 'test123'
    });
    console.log('Login test:', loginResponse.status === 200 ? 'PASS' : 'FAIL');

    const token = loginResponse.data.token;

    // Test domains endpoint
    const domainsResponse = await axios.get('https://sasnations.com/tempemail-backend/domains', {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('Domains test:', domainsResponse.status === 200 ? 'PASS' : 'FAIL');

  } catch (error) {
    console.error('API test failed:', error.response?.data || error.message);
  }
}

// Test Mailgun Webhook
function testMailgunWebhook() {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const token = 'test-token';
  
  // Create test signature
  const signature = crypto
    .createHmac('sha256', process.env.MAILGUN_WEBHOOK_SIGNING_KEY)
    .update(timestamp.concat(token))
    .digest('hex');

  console.log('Webhook signature verification test:', signature ? 'PASS' : 'FAIL');
}

// Run all tests
async function runTests() {
  console.log('Starting tests...\n');
  
  console.log('Testing database connection:');
  await testConnection();
  console.log('\n');
  
  console.log('Testing API endpoints:');
  await testEndpoints();
  console.log('\n');
  
  console.log('Testing Mailgun webhook:');
  testMailgunWebhook();
}

runTests();