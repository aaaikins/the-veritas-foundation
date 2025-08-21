// Middleware functions for the Veritas Foundation API

// Rate limiting configuration (for future use with express-rate-limit)
const createRateLimit = (windowMs = 15 * 60 * 1000, max = 100) => {
  // This is a placeholder for when you install express-rate-limit
  return (req, res, next) => {
    // For now, just pass through
    next();
  };
};

// Input validation middleware
const validateContactForm = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Valid email is required');
  }

  if (!subject || subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long');
  }

  if (!message || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors
    });
  }

  next();
};

// Newsletter validation middleware
const validateNewsletter = (req, res, next) => {
  const { email } = req.body;
  const errors = [];

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Valid email is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors
    });
  }

  next();
};

// Donation validation middleware
const validateDonation = (req, res, next) => {
  const { amount, donorName, donorEmail, anonymous } = req.body;
  const errors = [];

  if (!amount || isNaN(amount) || amount <= 0) {
    errors.push('Valid donation amount greater than 0 is required');
  }

  if (amount > 10000) {
    errors.push('Donation amount cannot exceed $10,000 per transaction');
  }

  if (!anonymous) {
    if (!donorName || donorName.trim().length < 2) {
      errors.push('Donor name is required for non-anonymous donations');
    }

    if (!donorEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorEmail)) {
      errors.push('Valid donor email is required for non-anonymous donations');
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors
    });
  }

  next();
};

// Scholar validation middleware
const validateScholar = (req, res, next) => {
  const { name, university } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Scholar name must be at least 2 characters long');
  }

  if (!university || university.trim().length < 2) {
    errors.push('University name must be at least 2 characters long');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors
    });
  }

  next();
};

// CORS configuration for production
const corsOptions = {
  origin: function (origin, callback) {
    // In development, allow all origins
    if (process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    
    // In production, define allowed origins
    const allowedOrigins = [
      'https://your-frontend-domain.com',
      'https://www.your-frontend-domain.com'
    ];
    
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

// Request logging middleware
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path} - ${req.ip}`);
  next();
};

// Security headers middleware
const securityHeaders = (req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  if (process.env.NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }
  
  next();
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  // Default error
  let error = {
    message: 'Internal server error',
    status: 500
  };

  // Handle specific error types
  if (err.name === 'ValidationError') {
    error = {
      message: 'Validation failed',
      status: 400,
      details: err.message
    };
  }

  if (err.code === 'LIMIT_FILE_SIZE') {
    error = {
      message: 'File too large',
      status: 413
    };
  }

  // Send error response
  res.status(error.status).json({
    error: error.message,
    ...(error.details && { details: error.details }),
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

// API key authentication middleware (placeholder for future use)
const requireApiKey = (req, res, next) => {
  const apiKey = req.header('X-API-Key');
  
  // For now, just pass through - implement when API keys are needed
  if (process.env.REQUIRE_API_KEY === 'true') {
    if (!apiKey || apiKey !== process.env.API_KEY) {
      return res.status(401).json({
        error: 'Valid API key required'
      });
    }
  }
  
  next();
};

module.exports = {
  createRateLimit,
  validateContactForm,
  validateNewsletter,
  validateDonation,
  validateScholar,
  corsOptions,
  requestLogger,
  securityHeaders,
  errorHandler,
  requireApiKey
};
