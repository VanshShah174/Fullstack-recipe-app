# 🍳 RecipeRally

A modern, full-stack recipe discovery application that helps you find, save, and explore delicious recipes from around the world. Built with React Native (Expo) for seamless mobile experience and Node.js/Express for robust backend services.

## ✨ Features

### 📱 Mobile App (React Native + Expo)
- **🍽️ Recipe Discovery**: Browse featured recipes and get inspired with random meal suggestions
- **🔍 Smart Search**: Search recipes by name or ingredients with intelligent debounced search
- **🏷️ Category Filtering**: Filter recipes by different meal categories (Breakfast, Lunch, Dinner, etc.)
- **📖 Detailed Recipe Views**: Comprehensive recipe information including:
  - 📝 Complete ingredients list with precise measurements
  - 👨‍🍳 Step-by-step cooking instructions
  - ⏱️ Cooking time and serving size
  - 🌍 Recipe origin and cuisine type
  - 📺 YouTube video tutorials (when available)
- **❤️ Favorites System**: Save and manage your favorite recipes with persistent storage
- **🔐 Secure Authentication**: User registration and login powered by Clerk
- **🎨 Modern UI/UX**: Beautiful, responsive design with smooth animations and intuitive navigation

### 🖥️ Backend API (Node.js + Express)
- **💾 Favorites Management**: Complete CRUD operations for user favorites
- **👤 User-Specific Data**: Personalized favorites for each authenticated user
- **🗄️ Database Integration**: PostgreSQL with Drizzle ORM for efficient data management
- **⏰ Automated Tasks**: Cron jobs for background processing
- **🌐 RESTful API**: Clean, well-structured endpoints with proper error handling

## 🛠️ Tech Stack

### Frontend
- **React Native** with Expo SDK 53
- **Expo Router** for file-based navigation
- **Clerk** for authentication and user management
- **TheMealDB API** for comprehensive recipe data
- **Expo Vector Icons** for beautiful UI icons
- **React Native Reanimated** for smooth animations
- **Expo Image** for optimized image loading
- **React Native Gesture Handler** for touch interactions

### Backend
- **Node.js** with Express.js
- **PostgreSQL** database with Neon serverless
- **Drizzle ORM** for type-safe database operations
- **CORS** for secure cross-origin requests
- **Cron** for scheduled background tasks
- **Dotenv** for environment configuration

## 📱 App Screenshots

The app features a modern, intuitive interface with:
- **Home Screen**: Featured recipes and category browsing
- **Search Screen**: Intelligent recipe search with real-time results
- **Recipe Details**: Comprehensive recipe information with save functionality
- **Favorites**: Personal collection of saved recipes
- **Authentication**: Secure login and registration flow

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Expo CLI (`npm install -g @expo/cli`)
- PostgreSQL database (or Neon serverless account)
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fullstack_recipe_app
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Mobile App Setup**
   ```bash
   cd mobile
   npm install
   ```

### Environment Configuration

#### Backend (.env)
```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=development
PORT=5001
```

#### Mobile App (.env)
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
EXPO_PUBLIC_API_URL=your_backend_api_url
```

### Running the Application

#### Start Backend Server
```bash
cd backend
npm run dev
```
Server will start on `http://localhost:5001`

#### Start Mobile App
```bash
cd mobile
npx expo start
```
- Press `a` for Android emulator
- Press `i` for iOS simulator
- Scan QR code with Expo Go app on your phone

## 📁 Project Structure

```
fullstack_recipe_app/
├── 📱 mobile/                    # React Native Expo app
│   ├── app/                     # Expo Router screens
│   │   ├── (auth)/             # Authentication screens
│   │   ├── (tabs)/             # Main app tabs
│   │   └── recipe/             # Recipe detail screens
│   ├── components/             # Reusable UI components
│   │   ├── RecipeCard.jsx      # Recipe display component
│   │   ├── CategoryFilter.jsx  # Category selection
│   │   ├── FavoriteButton.jsx  # Save recipe button
│   │   └── ...                 # Other components
│   ├── services/               # API services
│   │   └── mealAPI.js          # TheMealDB integration
│   ├── constants/              # App constants
│   │   ├── api.js             # API endpoints
│   │   └── colors.js          # Color scheme
│   ├── hooks/                  # Custom React hooks
│   │   └── useDebounce.js     # Search debouncing
│   └── assets/                # Images and styles
│       ├── images/            # App images and icons
│       └── styles/            # Component stylesheets
└── 🖥️ backend/                 # Node.js Express server
    ├── src/
    │   ├── config/            # Configuration files
    │   │   ├── db.js          # Database connection
    │   │   ├── env.js         # Environment variables
    │   │   └── cron.js        # Scheduled tasks
    │   ├── db/               # Database management
    │   │   ├── schema.js     # Database schema
    │   │   └── migrations/   # Database migrations
    │   └── server.js         # Main server file
    ├── drizzle.config.js     # Drizzle ORM configuration
    └── package.json          # Backend dependencies
```

## 🔌 API Endpoints

### Favorites Management
- `POST /api/favorites` - Add recipe to user's favorites
- `GET /api/favorites/:userId` - Retrieve user's favorite recipes
- `DELETE /api/favorites/:userId/:recipeId` - Remove recipe from favorites

### Health Check
- `GET /api/health` - Server health status

## 🎯 Key Features Explained

### Recipe Discovery
- **Featured Recipes**: Curated selection of recipes on the home screen
- **Random Suggestions**: Discover new recipes with random meal generation
- **Category Browsing**: Explore recipes by meal type and cuisine

### Smart Search
- **Debounced Search**: Optimized search with 300ms delay to reduce API calls
- **Multi-Method Search**: Search by recipe name or ingredients
- **Real-time Results**: Instant search results with loading states

### Favorites System
- **Persistent Storage**: Favorites saved to PostgreSQL database
- **User-Specific**: Each user has their own favorites collection
- **Quick Access**: Easy management of saved recipes

### Authentication
- **Clerk Integration**: Secure user authentication and management
- **Protected Routes**: User-specific data protection
- **Session Management**: Automatic session handling

## 🚀 Deployment

### Backend Deployment
The backend is deployed on Render.com with:
- Automatic deployments from Git
- PostgreSQL database integration
- Environment variable management
- Health check monitoring

### Mobile App Deployment
- **Expo EAS Build**: For app store builds
- **Expo Updates**: For over-the-air updates
- **App Store**: iOS and Android distribution

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 🐛 Known Issues & Limitations

- TheMealDB API has rate limits for free tier
- Some recipes may not have YouTube videos
- Image loading depends on external API availability

## 🔮 Future Enhancements

- [ ] Recipe sharing between users
- [ ] Meal planning and calendar integration
- [ ] Nutritional information display
- [ ] Recipe rating and reviews
- [ ] Offline recipe storage
- [ ] Recipe scaling (adjust servings)
- [ ] Shopping list generation
- [ ] Social features and recipe communities

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TheMealDB** for providing the comprehensive recipe API
- **Expo** for the excellent React Native development platform
- **Clerk** for secure authentication services
- **Drizzle** for the modern database ORM
- **Neon** for serverless PostgreSQL hosting

## 📞 Support

If you encounter any issues or have questions:
- Create an issue in the GitHub repository
- Check the documentation for common solutions
- Review the troubleshooting guide

---

Built with ❤️ using modern web technologies for the ultimate recipe discovery experience!

**RecipeRally** - Where every meal becomes an adventure! 🍽️✨
