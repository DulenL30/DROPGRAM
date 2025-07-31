# DROPGRAM

**Dropgram** is a modern React Native app built with Clerk authentication and Google OAuth integration. Designed for seamless sharing and secure access, it features file-based routing with Expo Router and a clean TypeScript codebase.

<img width="1024" height="712" alt="Screenshot 2025-07-31 at 13 48 15" src="https://github.com/user-attachments/assets/de8df046-8a7a-4916-852e-92b9ecee3416" />

## ✨ Features

-  **Secure Authentication** - Powered by Clerk with Google OAuth
-  **Cross-Platform** - Built with React Native and Expo
-  **Type-Safe** - Full TypeScript support
-  **File-Based Routing** - Clean navigation with Expo Router
-  **Modern UI** - Responsive design with custom theming
-  **Performance Optimized** - Fast loading and smooth interactions


## 🚀 Get started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the app**
   ```bash
   npx expo start
   ```

3.**Run on your preferred platform**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your device

## 🛠️ Tech Stack

- **Frontend**: React Native, Expo
- **Language**: TypeScript
- **Authentication**: Clerk, Google OAuth
- **Navigation**: Expo Router
- **Styling**: Custom theme system
- **Development**: VS Code with configured extensions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (for testing)

  
## 🔧 Project Structure

```
Dropgram/
├── .expo/              # Expo development files
├── types/              # TypeScript type definitions
├── .vscode/            # VS Code settings and extensions
├── app/                # Expo Router app directory
│   ├── (auth)/         # Authentication screens group
│   ├── (tabs)/         # Tab-based navigation screens
│   ├── _layout.tsx     # Root layout component
│   └── index.tsx       # Home/landing screen
├── assets/             # Static assets
│   └── fonts/          # Custom fonts
├── components/         # Reusable UI components
│   └── initialLayout.tsx
├── constants/          # App constants and configuration
│   └── theme.ts        # Theme and styling constants
├── styles/             # Global styles
│   └── auth.styles.ts  # Authentication-specific styles
├── app.json           # Expo app configuration
├── tsconfig.json      # TypeScript configuration
├── expo-env.d.ts      # Expo TypeScript environment
├── package.json       # Dependencies and scripts
├── .env               # Environment variables (not in git)
├── .gitignore         # Git ignore rules
└── README.md          # Project documentation
```


## 🚨 Troubleshooting

### Common Issues

**"Clerk not initialized" Error**
- Ensure `.env` contains `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY`
- Restart the development server after adding environment variables
- Check that your Clerk key is valid and active

**Expo Development Issues**
```bash
# Clear Expo cache
npm start -- --clear

# Reset Metro bundler cache
npx expo start --clear
```

**Authentication Problems**
- Verify Google OAuth is enabled in Clerk Dashboard
- Check redirect URLs match your development/production domains
- Ensure your app is using the correct Clerk environment (development vs production)

**Clean and reinstall dependencies**
```bash
# Clean and reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Clear Expo cache
expo doctor
```

## 🔒 Security

- Never commit `.env` or any files containing sensitive keys
- Use Clerk's test keys for development
- Regularly update dependencies to patch security vulnerabilities
- Report security issues privately via email

