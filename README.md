# Christa Cooke's Dev Site

Welcome to the **Christa Cooke Dev Site**! This project is built using **Next.js** and served from a custom **Node.js** backend. The site incorporates modern tools and technologies for full-stack web development and testing.

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/christacooke.git
   cd christacooke
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` to view the site.

## Tech Stack

### Core Technologies
- **Next.js** - React framework for web applications
- **TypeScript** - Static typing and enhanced code quality
- **Node.js** - Custom backend server
- **Postgres** - Robust relational database

### Frontend
- **Tailwind CSS** - Utility-first CSS framework
- **Storybook UI** - Component development and testing
- **NextAuth.js** - Authentication system

### Backend & Database
- **Prisma** - Next-generation ORM
- **GraphQL** - API query language
- **Swagger** - API documentation

### Testing & Quality
- **Jest** - Unit and integration testing
- **Cypress** - End-to-end testing
- **ESLint** - Code pattern linting
- **Prettier** - Code formatting

## Custom Node.js Server

The project uses a custom Node.js server defined in `server.js` to handle both API routes and Next.js pages.

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm run start
```

## Development Tools

### Code Quality
- **ESLint & Prettier**
  ```bash
  # Run linting
  npm run lint
  ```

### Component Development
- **Storybook**
  ```bash
  npm run storybook
  ```

### Testing
- **Jest**
  ```bash
  npm run test
  ```
- **Cypress**
  ```bash
  npm run cypress:open
  ```

### API Documentation
Access Swagger docs at: `http://localhost:3000/api/swagger/api-docs`

## Authentication

NextAuth.js handles authentication. Configure providers in `app/api/auth/[...nextauth]/route.ts`.

## Database Setup

### Prisma Configuration
1. Update database URL in `.env`
2. Run migrations:
   ```bash
   npx prisma migrate dev
   ```

## Deployment

### Option 1: Vercel (Recommended)
Deploy directly to Vercel for native Next.js support.

### Option 2: Custom Server
1. Build the app:
   ```bash
   npm run build
   ```
2. Start production server:
   ```bash
   npm run start
   ```

## Contributing

Feel free to:
- Open issues
- Submit pull requests
- Ask questions
- Suggest improvements

## Author

Christa Cooke

---

**Note:** Replace the repository link (`https://github.com/your-username/christacooke.git`) with your actual repository URL and adjust environment variables as needed.