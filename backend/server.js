const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import middleware and routes
const { requestLogger, securityHeaders, errorHandler } = require('./middleware');
const apiRoutes = require('./routes');
const { testConnection } = require('./database');

const app = express();
const PORT = process.env.PORT || 5000;

// Security and logging middleware
app.use(requestLogger);
app.use(securityHeaders);

// CORS and body parsing middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'development' ? true : process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Static file serving
app.use(express.static('public'));

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to The Veritas Foundation API',
    version: '1.0.0',
    documentation: `${req.protocol}://${req.get('host')}/test.html`,
    endpoints: {
      health: '/api/health',
      contact: '/api/contact',
      newsletter: '/api/newsletter',
      donation: '/api/donation',
      scholars: '/api/scholars',
      achievements: '/api/achievements',
      gallery: '/api/gallery',
      statistics: '/api/statistics'
    },
    status: 'operational',
    timestamp: new Date().toISOString()
  });
});

// Mount API routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use(errorHandler);

// 404 handler - must be after all other routes
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: `${req.method} ${req.originalUrl} is not a valid endpoint`,
    availableEndpoints: [
      'GET /',
      'GET /api/health',
      'POST /api/contact',
      'GET /api/contacts',
      'POST /api/newsletter',
      'GET /api/newsletters',
      'POST /api/donation',
      'GET /api/donations',
      'GET /api/achievements',
      'GET /api/scholars',
      'POST /api/scholars',
      'GET /api/scholars/:id',
      'PUT /api/scholars/:id',
      'DELETE /api/scholars/:id',
      'GET /api/gallery',
      'GET /api/statistics'
    ]
  });
});

// Start server
const server = app.listen(PORT, async () => {
  console.log('🚀 Veritas Foundation API Server Started');
  console.log(`📍 Running on: http://localhost:${PORT}`);
  console.log(`🌟 Environment: ${process.env.NODE_ENV || 'development'}`);
  
  // Test database connection
  try {
    await testConnection();
    console.log('🗄️  Database connection verified');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  }
  
  console.log(`📚 Test Console: http://localhost:${PORT}/test.html`);
  console.log(`🔍 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`📊 Statistics: http://localhost:${PORT}/api/statistics`);
  console.log('📡 Ready to accept connections...\n');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\n🔄 SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('✅ Process terminated');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\n🔄 SIGINT received. Shutting down gracefully...');
  server.close(() => {
    console.log('✅ Process terminated');
    process.exit(0);
  });
});

module.exports = app;