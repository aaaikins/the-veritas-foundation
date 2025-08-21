// Simple test script to verify API endpoints
const baseURL = 'http://localhost:5000';

// Test functions
async function testAPI() {
  console.log('🧪 Testing Veritas Foundation API...\n');

  // Test 1: Health check
  try {
    console.log('1. Testing health endpoint...');
    const response = await fetch(`${baseURL}/api/health`);
    const data = await response.json();
    console.log('✅ Health check:', data.status);
  } catch (error) {
    console.log('❌ Health check failed:', error.message);
  }

  // Test 2: Contact form submission
  try {
    console.log('\n2. Testing contact form submission...');
    const response = await fetch(`${baseURL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'API Test',
        message: 'This is a test message from the API test script.'
      })
    });
    const data = await response.json();
    console.log('✅ Contact form:', data.message);
  } catch (error) {
    console.log('❌ Contact form failed:', error.message);
  }

  // Test 3: Newsletter subscription
  try {
    console.log('\n3. Testing newsletter subscription...');
    const response = await fetch(`${baseURL}/api/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'newsletter@example.com',
        name: 'Newsletter Subscriber'
      })
    });
    const data = await response.json();
    console.log('✅ Newsletter subscription:', data.message);
  } catch (error) {
    console.log('❌ Newsletter subscription failed:', error.message);
  }

  // Test 4: Donation submission
  try {
    console.log('\n4. Testing donation submission...');
    const response = await fetch(`${baseURL}/api/donation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 50,
        donorName: 'Generous Donor',
        donorEmail: 'donor@example.com',
        message: 'Keep up the great work!',
        anonymous: false
      })
    });
    const data = await response.json();
    console.log('✅ Donation:', `${data.message} - Amount: $${data.amount}`);
  } catch (error) {
    console.log('❌ Donation failed:', error.message);
  }

  // Test 5: Get achievements
  try {
    console.log('\n5. Testing achievements endpoint...');
    const response = await fetch(`${baseURL}/api/achievements`);
    const data = await response.json();
    console.log('✅ Achievements:', `Scholars: ${data.scholarsSupported}, SAT: ${data.averageSatScore}`);
  } catch (error) {
    console.log('❌ Achievements failed:', error.message);
  }

  // Test 6: Add a scholar
  try {
    console.log('\n6. Testing scholar creation...');
    const response = await fetch(`${baseURL}/api/scholars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test Scholar',
        university: 'Test University',
        major: 'Computer Science',
        graduationYear: '2024',
        achievements: ['Dean\'s List', 'Outstanding Student Award'],
        bio: 'A dedicated student with a passion for technology.'
      })
    });
    const data = await response.json();
    console.log('✅ Scholar creation:', data.message);
  } catch (error) {
    console.log('❌ Scholar creation failed:', error.message);
  }

  // Test 7: Get all scholars
  try {
    console.log('\n7. Testing scholars list...');
    const response = await fetch(`${baseURL}/api/scholars`);
    const data = await response.json();
    console.log('✅ Scholars list:', `Found ${data.total} scholars`);
  } catch (error) {
    console.log('❌ Scholars list failed:', error.message);
  }

  console.log('\n🎉 API testing complete!');
}

// Check if running in Node.js environment
if (typeof window === 'undefined') {
  // Node.js environment - we need to install node-fetch
  console.log('To run this test in Node.js, install node-fetch first:');
  console.log('npm install node-fetch');
  console.log('\nThen uncomment the next lines and run: node test-api.js');
  
  // Uncomment these lines after installing node-fetch:
  // const fetch = require('node-fetch');
  // testAPI();
} else {
  // Browser environment
  testAPI();
}

module.exports = { testAPI };
