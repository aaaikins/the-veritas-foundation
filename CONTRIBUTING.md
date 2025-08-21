# Contributing to The Veritas Foundation

Thank you for your interest in contributing to The Veritas Foundation project! We welcome contributions from the community and are grateful for your support.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm
- Git

### Fork and Clone
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/the-veritas-foundation.git
   cd the-veritas-foundation
   ```
3. Add the original repository as upstream:
   ```bash
   git remote add upstream https://github.com/aaaikins/the-veritas-foundation.git
   ```

### Development Setup
1. Install frontend dependencies:
   ```bash
   npm install
   ```
2. Install backend dependencies:
   ```bash
   cd backend && npm install
   ```
3. Copy environment files:
   ```bash
   cp .env.example .env.local
   cp backend/.env.example backend/.env
   ```
4. Start development servers:
   ```bash
   # Terminal 1 - Frontend
   npm run dev
   
   # Terminal 2 - Backend
   cd backend && npm run dev
   ```

## How to Contribute

### Types of Contributions
- 🐛 **Bug Fixes** - Fix issues or incorrect behavior
- ✨ **New Features** - Add new functionality
- 📚 **Documentation** - Improve README, comments, or guides
- 🎨 **UI/UX Improvements** - Enhance design and user experience
- ⚡ **Performance** - Optimize code for better performance
- 🔧 **Maintenance** - Update dependencies, cleanup code

### Before You Start
1. Check existing issues and pull requests
2. Create an issue to discuss major changes
3. Make sure your idea aligns with project goals

### Development Workflow

#### 1. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

#### 2. Make Your Changes
- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes thoroughly
- Update documentation if needed

#### 3. Test Your Changes
- **Frontend Testing:**
  ```bash
  npm run build  # Ensure it builds successfully
  npm run lint   # Check for linting issues (if configured)
  ```
  
- **Backend Testing:**
  ```bash
  cd backend
  npm start  # Test production build
  # Visit http://localhost:5000/test.html for API testing
  ```

#### 4. Commit Your Changes
```bash
git add .
git commit -m "feat: add new scholar management feature"
```

**Commit Message Format:**
- `feat: add new feature`
- `fix: resolve bug with contact form`
- `docs: update README with new instructions`
- `style: improve button styling`
- `refactor: reorganize component structure`
- `test: add unit tests for donations`
- `chore: update dependencies`

#### 5. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```
Then create a pull request on GitHub.

## Code Style Guidelines

### Frontend (React/TypeScript)
- Use TypeScript for type safety
- Follow React hooks patterns
- Use Tailwind CSS for styling
- Components should be functional components
- Use meaningful component and variable names

### Backend (Node.js/Express)
- Use ES6+ features
- Follow RESTful API conventions
- Validate all inputs
- Handle errors gracefully
- Add JSDoc comments for complex functions

### General Guidelines
- Keep functions small and focused
- Use descriptive variable names
- Comment complex logic
- Remove unused imports and variables
- Follow existing file structure

## Pull Request Guidelines

### PR Requirements
- [ ] Clear description of changes
- [ ] Link to related issue (if applicable)
- [ ] Tests pass (manual testing if no automated tests)
- [ ] Documentation updated (if needed)
- [ ] No breaking changes (or clearly documented)

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Other (please describe)

## Testing
Describe how you tested your changes

## Screenshots
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## Project Structure

### Frontend Structure
```
/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utility functions
├── hooks/           # React hooks
├── styles/          # Global styles
└── public/          # Static assets
```

### Backend Structure
```
backend/
├── server.js        # Main server file
├── routes.js        # API routes
├── models.js        # Data models
├── middleware.js    # Custom middleware
└── public/          # Static files
```

## API Development Guidelines

### Adding New Endpoints
1. Add route to `routes.js`
2. Create model in `models.js` (if needed)
3. Add validation middleware
4. Update API documentation
5. Test with the test console

### Error Handling
- Always use try-catch blocks
- Return consistent error formats
- Log errors appropriately
- Provide meaningful error messages

## Database Integration (Future)

When adding database support:
- Use environment variables for configuration
- Implement proper migrations
- Add connection pooling
- Handle connection errors gracefully

## Deployment Guidelines

### Frontend (Vercel)
- Ensure build succeeds: `npm run build`
- Check for TypeScript errors
- Verify environment variables

### Backend Deployment
- Test with `NODE_ENV=production`
- Ensure all dependencies are in `package.json`
- Configure environment variables properly

## Getting Help

### Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)

### Support Channels
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/aaaikins/the-veritas-foundation/issues)
- 💡 **Feature Requests:** [GitHub Discussions](https://github.com/aaaikins/the-veritas-foundation/discussions)
- 📧 **Direct Contact:** support@veritasfoundation.org

## Code of Conduct

### Our Standards
- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards others

### Enforcement
Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the project maintainers. All complaints will be reviewed and investigated promptly and fairly.

## Recognition

Contributors will be recognized in:
- GitHub contributor list
- Project README acknowledgments
- Release notes (for significant contributions)

## Questions?

Feel free to reach out if you have any questions about contributing. We're here to help and appreciate your interest in making The Veritas Foundation better!

---

Thank you for contributing to The Veritas Foundation! 🌟
