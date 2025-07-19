# DROPGRAM

**Dropgram** is a modern React Native app built with Clerk authentication and Google OAuth integration. Designed for seamless sharing and secure access, it features file-based routing with Expo Router and a clean TypeScript codebase.

## 🚀 Get started

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the app
   ```bash
   npx expo start
   ```

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

