// API Routes for The Veritas Foundation Backend
const express = require('express');
const { Contact, NewsletterSubscriber, Donation, Scholar, GalleryItem, Achievements } = require('./models');
const {
  validateContactForm,
  validateNewsletter,
  validateDonation,
  validateScholar
} = require('./middleware');

// Create router
const router = express.Router();

// In-memory storage (replace with database in production)
let contacts = [];
let newsletters = [];
let donations = [];
let scholars = [];
let gallery = [
  new GalleryItem({
    id: 1,
    title: 'Veritas Foundation Group Photo',
    description: 'Our team coming together for our annual meeting',
    imageUrl: '/hero-image.jpg',
    category: 'events'
  }),
  new GalleryItem({
    id: 2,
    title: 'Career Preview Event',
    description: 'Scholars attending career preview sessions',
    imageUrl: '/gallery/career-preview.jpg',
    category: 'events'
  }),
  new GalleryItem({
    id: 3,
    title: 'Caltech Scholar',
    description: 'One of our scholars at Caltech',
    imageUrl: '/gallery/caltech-scholar.png',
    category: 'scholars'
  })
];

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0'
  });
});

// Contact form routes
router.post('/contact', validateContactForm, (req, res) => {
  try {
    const contact = new Contact(req.body);
    contacts.push(contact);

    res.status(201).json({
      message: 'Contact form submitted successfully',
      id: contact.id
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to process contact form',
      message: error.message
    });
  }
});

router.get('/contacts', (req, res) => {
  try {
    const { status, limit = 50, offset = 0 } = req.query;
    let filteredContacts = [...contacts];

    if (status) {
      filteredContacts = filteredContacts.filter(c => c.status === status);
    }

    const paginatedContacts = filteredContacts
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    res.json({
      contacts: paginatedContacts,
      total: filteredContacts.length,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve contacts',
      message: error.message
    });
  }
});

// Newsletter routes
router.post('/newsletter', validateNewsletter, (req, res) => {
  try {
    // Check for existing subscription
    const existingSubscriber = newsletters.find(sub => sub.email === req.body.email);
    if (existingSubscriber) {
      return res.status(409).json({
        error: 'Email already subscribed'
      });
    }

    const subscriber = new NewsletterSubscriber(req.body);
    newsletters.push(subscriber);

    res.status(201).json({
      message: 'Successfully subscribed to newsletter',
      id: subscriber.id
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to process newsletter subscription',
      message: error.message
    });
  }
});

router.get('/newsletters', (req, res) => {
  try {
    const activeSubscribers = newsletters
      .filter(sub => sub.active)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.json({
      subscribers: activeSubscribers,
      total: activeSubscribers.length
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve newsletter subscribers',
      message: error.message
    });
  }
});

// Donation routes
router.post('/donation', validateDonation, (req, res) => {
  try {
    const donation = new Donation(req.body);
    donations.push(donation);

    res.status(201).json({
      message: 'Donation received successfully',
      id: donation.id,
      amount: donation.amount,
      receipt: donation.receiptNumber,
      transactionId: donation.transactionId
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to process donation',
      message: error.message
    });
  }
});

router.get('/donations', (req, res) => {
  try {
    const { status = 'completed', limit = 50, offset = 0 } = req.query;
    
    const filteredDonations = donations
      .filter(d => d.status === status)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    const totalAmount = filteredDonations.reduce((sum, d) => sum + d.amount, 0);
    const paginatedDonations = filteredDonations
      .slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    res.json({
      donations: paginatedDonations,
      total: filteredDonations.length,
      totalAmount: parseFloat(totalAmount.toFixed(2)),
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve donations',
      message: error.message
    });
  }
});

// Achievement routes
router.get('/achievements', (req, res) => {
  try {
    const achievements = Achievements.calculateFromData(scholars, donations);
    res.json(achievements);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve achievements',
      message: error.message
    });
  }
});

// Scholar routes
router.get('/scholars', (req, res) => {
  try {
    const { status, university, limit = 50, offset = 0 } = req.query;
    let filteredScholars = [...scholars];

    if (status) {
      filteredScholars = filteredScholars.filter(s => s.status === status);
    }

    if (university) {
      filteredScholars = filteredScholars.filter(s => 
        s.university.toLowerCase().includes(university.toLowerCase())
      );
    }

    const paginatedScholars = filteredScholars
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    res.json({
      scholars: paginatedScholars,
      total: filteredScholars.length,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve scholars',
      message: error.message
    });
  }
});

router.post('/scholars', validateScholar, (req, res) => {
  try {
    const scholar = new Scholar(req.body);
    scholars.push(scholar);

    res.status(201).json({
      message: 'Scholar added successfully',
      scholar: scholar
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to add scholar',
      message: error.message
    });
  }
});

router.get('/scholars/:id', (req, res) => {
  try {
    const scholar = scholars.find(s => s.id === parseInt(req.params.id));
    
    if (!scholar) {
      return res.status(404).json({
        error: 'Scholar not found'
      });
    }

    res.json(scholar);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve scholar',
      message: error.message
    });
  }
});

router.put('/scholars/:id', validateScholar, (req, res) => {
  try {
    const scholarIndex = scholars.findIndex(s => s.id === parseInt(req.params.id));
    
    if (scholarIndex === -1) {
      return res.status(404).json({
        error: 'Scholar not found'
      });
    }

    const updatedScholar = new Scholar({
      ...scholars[scholarIndex],
      ...req.body,
      id: scholars[scholarIndex].id,
      updatedAt: new Date().toISOString()
    });

    scholars[scholarIndex] = updatedScholar;

    res.json({
      message: 'Scholar updated successfully',
      scholar: updatedScholar
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to update scholar',
      message: error.message
    });
  }
});

router.delete('/scholars/:id', (req, res) => {
  try {
    const scholarIndex = scholars.findIndex(s => s.id === parseInt(req.params.id));
    
    if (scholarIndex === -1) {
      return res.status(404).json({
        error: 'Scholar not found'
      });
    }

    const deletedScholar = scholars.splice(scholarIndex, 1)[0];

    res.json({
      message: 'Scholar deleted successfully',
      scholar: deletedScholar
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to delete scholar',
      message: error.message
    });
  }
});

// Gallery routes
router.get('/gallery', (req, res) => {
  try {
    const { category, limit = 50, offset = 0 } = req.query;
    let filteredGallery = gallery.filter(item => item.isPublic);

    if (category) {
      filteredGallery = filteredGallery.filter(item => item.category === category);
    }

    const paginatedGallery = filteredGallery
      .sort((a, b) => b.sortOrder - a.sortOrder || new Date(b.uploadDate) - new Date(a.uploadDate))
      .slice(parseInt(offset), parseInt(offset) + parseInt(limit));

    res.json({
      gallery: paginatedGallery,
      total: filteredGallery.length,
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve gallery items',
      message: error.message
    });
  }
});

// Statistics route
router.get('/statistics', (req, res) => {
  try {
    const stats = {
      contacts: {
        total: contacts.length,
        unread: contacts.filter(c => c.status === 'new').length
      },
      newsletter: {
        total: newsletters.filter(s => s.active).length
      },
      donations: {
        total: donations.filter(d => d.status === 'completed').length,
        totalAmount: donations
          .filter(d => d.status === 'completed')
          .reduce((sum, d) => sum + d.amount, 0)
      },
      scholars: {
        total: scholars.length,
        active: scholars.filter(s => s.status === 'active').length,
        graduated: scholars.filter(s => s.status === 'graduated').length
      },
      gallery: {
        total: gallery.length,
        public: gallery.filter(item => item.isPublic).length
      },
      lastUpdated: new Date().toISOString()
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve statistics',
      message: error.message
    });
  }
});

module.exports = router;
