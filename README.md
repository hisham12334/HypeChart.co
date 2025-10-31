# HypeChart.co

> **Sell out. Don't burn out.**

HypeChart is the back-office solution for Instagram brands. This repository contains the complete landing page and waitlist management system for HypeChart.co.

## 🎯 About

HypeChart helps Instagram creators and brands manage their business operations efficiently, allowing them to focus on selling rather than managing administrative tasks. The platform provides tools and automation to streamline the back-office operations of social media businesses.

## ✨ Features

- **Modern Landing Page**: Built with React 19 and TypeScript
- **Animated UI**: Smooth animations powered by Framer Motion
- **Waitlist Management**: Backend API for collecting early access signups
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **Development Ready**: Hot reload and modern build tools

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Animation library
- **Recharts** - Chart components (for future features)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **JSON File Storage** - Simple data persistence

### Development Tools
- **Vite** - Build tool and dev server
- **TypeScript Compiler** - Type checking
- **ESM Modules** - Modern JavaScript modules

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd HypeChart.co
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY="your_gemini_api_key_here"
   ```
   *Note: Currently used for future AI features*

4. **Start the development servers**
   
   **Frontend (Port 3000):**
   ```bash
   npm run dev
   ```
   
   **Backend (Port 3001):**
   ```bash
   node server.mjs
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

```
HypeChart.co/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── HeroSection.tsx  # Main hero section
│   ├── PainSection.tsx  # Problem identification
│   ├── SolutionSection.tsx # Solution presentation
│   ├── FulfillmentSection.tsx # Value proposition
│   ├── GrowthSection.tsx # Growth metrics
│   ├── CtaSection.tsx   # Call-to-action & waitlist
│   └── Icons.tsx        # Icon components
├── hooks/               # Custom React hooks
├── server.mjs          # Express backend server
├── waitlist.json       # Waitlist data storage
├── App.tsx             # Main app component
├── index.tsx           # React entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server (frontend)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `node server.mjs` - Start backend server

## 🌐 API Endpoints

### Waitlist API

**POST** `/api/waitlist`

Add a user to the waitlist.

**Request Body:**
```json
{
  "email": "user@example.com",
  "whatsapp": "+1234567890"
}
```

**Response:**
```json
{
  "message": "Successfully added to waitlist!"
}
```

*Note: Either email or WhatsApp number is required.*

## 🎨 Design System

The application uses a custom design system with:

- **Brand Colors**: Custom brand palette defined in CSS
- **Typography**: Modern font stack with responsive sizing
- **Animations**: Smooth transitions and micro-interactions
- **Layout**: Mobile-first responsive design

## 🔮 Future Features

- AI-powered content suggestions (Gemini API integration)
- Advanced analytics dashboard
- User authentication system
- Payment processing integration
- Advanced waitlist management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

For questions or support, please contact the development team.

---

**Built with ❤️ for Instagram creators and brands**
