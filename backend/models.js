// Data models and schemas for The Veritas Foundation API

/**
 * Contact Form Model
 */
class Contact {
  constructor(data) {
    this.id = data.id || Date.now();
    this.name = data.name;
    this.email = data.email;
    this.subject = data.subject;
    this.message = data.message;
    this.timestamp = data.timestamp || new Date().toISOString();
    this.status = data.status || 'new'; // new, read, responded, closed
    this.response = data.response || null;
    this.responseTimestamp = data.responseTimestamp || null;
  }

  static validate(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    }
    
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Valid email is required');
    }
    
    if (!data.subject || data.subject.trim().length < 3) {
      errors.push('Subject must be at least 3 characters long');
    }
    
    if (!data.message || data.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long');
    }
    
    return errors;
  }
}

/**
 * Newsletter Subscriber Model
 */
class NewsletterSubscriber {
  constructor(data) {
    this.id = data.id || Date.now();
    this.email = data.email;
    this.name = data.name || '';
    this.timestamp = data.timestamp || new Date().toISOString();
    this.active = data.active !== undefined ? data.active : true;
    this.confirmationToken = data.confirmationToken || null;
    this.confirmed = data.confirmed !== undefined ? data.confirmed : true; // Auto-confirm for now
    this.preferences = data.preferences || {
      generalNews: true,
      scholarUpdates: true,
      eventNotifications: true
    };
  }

  static validate(data) {
    const errors = [];
    
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Valid email is required');
    }
    
    return errors;
  }
}

/**
 * Donation Model
 */
class Donation {
  constructor(data) {
    this.id = data.id || Date.now();
    this.amount = parseFloat(data.amount);
    this.donorName = data.anonymous ? 'Anonymous' : data.donorName;
    this.donorEmail = data.anonymous ? '' : data.donorEmail;
    this.message = data.message || '';
    this.anonymous = Boolean(data.anonymous);
    this.timestamp = data.timestamp || new Date().toISOString();
    this.status = data.status || 'completed'; // pending, completed, failed, refunded
    this.paymentMethod = data.paymentMethod || 'credit_card';
    this.transactionId = data.transactionId || `VF-${this.id}`;
    this.receiptNumber = data.receiptNumber || `RCP-${this.id}`;
    this.taxDeductible = data.taxDeductible !== undefined ? data.taxDeductible : true;
  }

  static validate(data) {
    const errors = [];
    
    if (!data.amount || isNaN(data.amount) || data.amount <= 0) {
      errors.push('Valid donation amount greater than 0 is required');
    }
    
    if (data.amount > 10000) {
      errors.push('Donation amount cannot exceed $10,000 per transaction');
    }
    
    if (!data.anonymous) {
      if (!data.donorName || data.donorName.trim().length < 2) {
        errors.push('Donor name is required for non-anonymous donations');
      }
      
      if (!data.donorEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.donorEmail)) {
        errors.push('Valid donor email is required for non-anonymous donations');
      }
    }
    
    return errors;
  }
}

/**
 * Scholar Model
 */
class Scholar {
  constructor(data) {
    this.id = data.id || Date.now();
    this.name = data.name;
    this.university = data.university;
    this.major = data.major || '';
    this.graduationYear = data.graduationYear || '';
    this.achievements = Array.isArray(data.achievements) ? data.achievements : [];
    this.bio = data.bio || '';
    this.profileImage = data.profileImage || '';
    this.satScore = data.satScore || null;
    this.gpa = data.gpa || null;
    this.scholarshipAmount = data.scholarshipAmount || null;
    this.status = data.status || 'active'; // active, graduated, inactive
    this.mentorId = data.mentorId || null;
    this.createdAt = data.createdAt || new Date().toISOString();
    this.updatedAt = data.updatedAt || new Date().toISOString();
    this.socialMedia = data.socialMedia || {
      linkedin: '',
      twitter: '',
      instagram: ''
    };
  }

  static validate(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
      errors.push('Scholar name must be at least 2 characters long');
    }
    
    if (!data.university || data.university.trim().length < 2) {
      errors.push('University name must be at least 2 characters long');
    }
    
    if (data.satScore && (isNaN(data.satScore) || data.satScore < 400 || data.satScore > 1600)) {
      errors.push('SAT score must be between 400 and 1600');
    }
    
    if (data.gpa && (isNaN(data.gpa) || data.gpa < 0 || data.gpa > 4.0)) {
      errors.push('GPA must be between 0 and 4.0');
    }
    
    return errors;
  }
}

/**
 * Gallery Item Model
 */
class GalleryItem {
  constructor(data) {
    this.id = data.id || Date.now();
    this.title = data.title;
    this.description = data.description || '';
    this.imageUrl = data.imageUrl;
    this.thumbnailUrl = data.thumbnailUrl || data.imageUrl;
    this.category = data.category || 'general'; // events, scholars, achievements, general
    this.tags = Array.isArray(data.tags) ? data.tags : [];
    this.uploadedBy = data.uploadedBy || 'admin';
    this.uploadDate = data.uploadDate || new Date().toISOString();
    this.isPublic = data.isPublic !== undefined ? data.isPublic : true;
    this.sortOrder = data.sortOrder || 0;
    this.metadata = data.metadata || {
      fileSize: null,
      dimensions: null,
      format: null
    };
  }

  static validate(data) {
    const errors = [];
    
    if (!data.title || data.title.trim().length < 3) {
      errors.push('Gallery item title must be at least 3 characters long');
    }
    
    if (!data.imageUrl) {
      errors.push('Image URL is required');
    }
    
    const validCategories = ['events', 'scholars', 'achievements', 'general'];
    if (data.category && !validCategories.includes(data.category)) {
      errors.push(`Category must be one of: ${validCategories.join(', ')}`);
    }
    
    return errors;
  }
}

/**
 * Achievement Statistics Model
 */
class Achievements {
  constructor(data = {}) {
    this.scholarsSupported = data.scholarsSupported || 0;
    this.averageSatScore = data.averageSatScore || 0;
    this.scholarshipFunding = data.scholarshipFunding || 0;
    this.topTierPlacements = data.topTierPlacements || '0%';
    this.graduationRate = data.graduationRate || '0%';
    this.collegeAcceptanceRate = data.collegeAcceptanceRate || '0%';
    this.lastUpdated = data.lastUpdated || new Date().toISOString();
    this.additionalStats = data.additionalStats || {};
  }

  static calculateFromData(scholars, donations) {
    const totalScholars = scholars.length;
    const totalFunding = donations
      .filter(d => d.status === 'completed')
      .reduce((sum, d) => sum + d.amount, 0);
    
    const satScores = scholars
      .filter(s => s.satScore)
      .map(s => s.satScore);
    const averageSat = satScores.length > 0 
      ? Math.round(satScores.reduce((sum, score) => sum + score, 0) / satScores.length)
      : 0;

    const graduatedScholars = scholars.filter(s => s.status === 'graduated').length;
    const graduationRate = totalScholars > 0 
      ? `${Math.round((graduatedScholars / totalScholars) * 100)}%`
      : '0%';

    return new Achievements({
      scholarsSupported: totalScholars,
      averageSatScore: averageSat,
      scholarshipFunding: totalFunding,
      topTierPlacements: '95%', // This would be calculated based on university rankings
      graduationRate: graduationRate,
      collegeAcceptanceRate: '100%' // This would be calculated based on application data
    });
  }
}

// Export all models
module.exports = {
  Contact,
  NewsletterSubscriber,
  Donation,
  Scholar,
  GalleryItem,
  Achievements
};
