// Database-powered API Routes for The Veritas Foundation Backend
const express = require('express');
const { query } = require('./database');
const {
  validateContactForm,
  validateNewsletter,
  validateDonation,
  validateScholar
} = require('./middleware');

// Create router
const router = express.Router();

// Health check endpoint
router.get('/health', async (req, res) => {
  try {
    // Test database connection
    await query('SELECT NOW() as db_time');
    res.json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: '1.0.0'
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      database: 'disconnected',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Contact form routes
router.post('/contact', validateContactForm, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    const result = await query(
      'INSERT INTO contact_messages (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING id, created_at',
      [name, email, subject || 'General Inquiry', message]
    );

    res.status(201).json({
      message: 'Contact form submitted successfully',
      id: result.rows[0].id,
      timestamp: result.rows[0].created_at
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Failed to process contact form',
      message: error.message
    });
  }
});

router.get('/contacts', async (req, res) => {
  try {
    const { limit = 50, offset = 0 } = req.query;
    
    const result = await query(
      'SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT $1 OFFSET $2',
      [parseInt(limit), parseInt(offset)]
    );

    const countResult = await query('SELECT COUNT(*) as total FROM contact_messages');
    
    res.json({
      contacts: result.rows,
      total: parseInt(countResult.rows[0].total),
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      error: 'Failed to retrieve contacts',
      message: error.message
    });
  }
});

// Newsletter routes
router.post('/newsletter', validateNewsletter, async (req, res) => {
  try {
    const { email, name } = req.body;
    
    // Check for existing subscription
    const existingResult = await query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (existingResult.rows.length > 0) {
      return res.status(409).json({
        error: 'Email already subscribed'
      });
    }

    const result = await query(
      'INSERT INTO users (email, name) VALUES ($1, $2) RETURNING id, created_at',
      [email, name || 'Newsletter Subscriber']
    );

    res.status(201).json({
      message: 'Successfully subscribed to newsletter',
      id: result.rows[0].id,
      timestamp: result.rows[0].created_at
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      error: 'Failed to process newsletter subscription',
      message: error.message
    });
  }
});

router.get('/newsletters', async (req, res) => {
  try {
    const { limit = 50, offset = 0 } = req.query;
    
    const result = await query(
      'SELECT email, name, created_at FROM users ORDER BY created_at DESC LIMIT $1 OFFSET $2',
      [parseInt(limit), parseInt(offset)]
    );

    const countResult = await query('SELECT COUNT(*) as total FROM users');
    
    res.json({
      subscribers: result.rows,
      total: parseInt(countResult.rows[0].total),
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    console.error('Get newsletters error:', error);
    res.status(500).json({
      error: 'Failed to retrieve newsletter subscribers',
      message: error.message
    });
  }
});

// Donation routes
router.post('/donation', validateDonation, async (req, res) => {
  try {
    const { amount, donation_type, message, user_id } = req.body;
    
    const result = await query(
      'INSERT INTO donations (user_id, amount, donation_type, message) VALUES ($1, $2, $3, $4) RETURNING id, created_at',
      [user_id || null, parseFloat(amount), donation_type || 'general', message || null]
    );

    res.status(201).json({
      message: 'Donation received successfully',
      id: result.rows[0].id,
      amount: parseFloat(amount),
      timestamp: result.rows[0].created_at
    });
  } catch (error) {
    console.error('Donation error:', error);
    res.status(500).json({
      error: 'Failed to process donation',
      message: error.message
    });
  }
});

router.get('/donations', async (req, res) => {
  try {
    const { limit = 50, offset = 0 } = req.query;
    
    const result = await query(
      'SELECT d.*, u.name as donor_name, u.email as donor_email FROM donations d LEFT JOIN users u ON d.user_id = u.id ORDER BY d.created_at DESC LIMIT $1 OFFSET $2',
      [parseInt(limit), parseInt(offset)]
    );

    const countResult = await query('SELECT COUNT(*) as total, SUM(amount) as total_amount FROM donations');
    
    res.json({
      donations: result.rows,
      total: parseInt(countResult.rows[0].total),
      totalAmount: parseFloat(countResult.rows[0].total_amount || 0),
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    console.error('Get donations error:', error);
    res.status(500).json({
      error: 'Failed to retrieve donations',
      message: error.message
    });
  }
});

// Statistics route
router.get('/statistics', async (req, res) => {
  try {
    const contactsResult = await query('SELECT COUNT(*) as total FROM contact_messages');
    const usersResult = await query('SELECT COUNT(*) as total FROM users');
    const donationsResult = await query('SELECT COUNT(*) as total, SUM(amount) as total_amount FROM donations');
    
    const stats = {
      contacts: {
        total: parseInt(contactsResult.rows[0].total),
      },
      newsletter: {
        total: parseInt(usersResult.rows[0].total)
      },
      donations: {
        total: parseInt(donationsResult.rows[0].total),
        totalAmount: parseFloat(donationsResult.rows[0].total_amount || 0)
      },
      database: {
        connected: true,
        lastUpdated: new Date().toISOString()
      }
    };

    res.json(stats);
  } catch (error) {
    console.error('Statistics error:', error);
    res.status(500).json({
      error: 'Failed to retrieve statistics',
      message: error.message
    });
  }
});

// Simple gallery endpoint (you can expand this later)
router.get('/gallery', (req, res) => {
  try {
    // For now, return static gallery items
    // You can create a gallery table later if needed
    const gallery = [
      {
        id: 1,
        title: 'Veritas Foundation Group Photo',
        description: 'Our team coming together for our annual meeting',
        imageUrl: '/hero-image.jpg',
        category: 'events'
      },
      {
        id: 2,
        title: 'Career Preview Event',
        description: 'Scholars attending career preview sessions',
        imageUrl: '/gallery/career-preview.jpg',
        category: 'events'
      },
      {
        id: 3,
        title: 'Caltech Scholar',
        description: 'One of our scholars at Caltech',
        imageUrl: '/gallery/caltech-scholar.png',
        category: 'scholars'
      }
    ];

    res.json({
      gallery,
      total: gallery.length
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve gallery items',
      message: error.message
    });
  }
});

// Achievement routes (calculated from database data)
router.get('/achievements', async (req, res) => {
  try {
    const donationsResult = await query('SELECT COUNT(*) as total, SUM(amount) as total_amount FROM donations');
    const usersResult = await query('SELECT COUNT(*) as total FROM users');
    const contactsResult = await query('SELECT COUNT(*) as total FROM contact_messages');
    
    const achievements = {
      totalDonations: parseFloat(donationsResult.rows[0].total_amount || 0),
      totalDonors: parseInt(donationsResult.rows[0].total),
      newsletterSubscribers: parseInt(usersResult.rows[0].total),
      contactMessages: parseInt(contactsResult.rows[0].total),
      lastUpdated: new Date().toISOString()
    };

    res.json(achievements);
  } catch (error) {
    console.error('Achievements error:', error);
    res.status(500).json({
      error: 'Failed to retrieve achievements',
      message: error.message
    });
  }
});

module.exports = router;
