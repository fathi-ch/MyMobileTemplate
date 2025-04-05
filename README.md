# MyMobileTemplate

📱 React Native + Expo + TypeScript template  
For local-first Android mobile apps with clean structure & env config

---

## ▶️ Getting Started

```bash
git clone https://github.com/fathi-ch/MyMobileTemplate.git
cd MyMobileTemplate
npm install
npx expo start
```

Use:

- `a` → run on Android  
- `w` → open in browser (requires web deps)  
- Scan QR in Expo Go app (Android/iOS)

---

## ⚙️ Env Setup

Create a `.env` file:

```env
EXPO_PUBLIC_ENV=dev
```

Environment selection is handled in:

```ts
// src/config/env.ts
```

---

## 🗂️ Project Structure

```txt
MyMobileTemplate/
├── src/
│   ├── components/    # UI components
│   ├── screens/       # App screens
│   ├── services/      # Logic (e.g. data sources)
│   ├── config/        # Global config (env.ts)
│   ├── models/        # Type definitions
│   ├── utils/         # Helpers
│   └── App.tsx        # Entry point
├── test/              # Unit tests
├── scripts/           # Automation scripts
├── deploy/            # CI/CD, release scripts
├── .env               # Environment vars
├── .gitignore
├── app.json
├── package.json
└── tsconfig.json
```


## Install EAS CLI
npm install -g eas-cli

## Login to Expo
eas login  #Use the same account as your Expo Go app.

##  Configure EAS for Android
eas build:configure

## Build the APK (for local install/testing)
eas build -p android --profile preview

## Rename the new project
sed -i 's/MyMobileTemplate/{NewProject}/g' app.json README.md

---

## 🛠️ Stack

- Expo
- React Native
- TypeScript
- Metro Bundler

---

## 📄 License

MIT © fathi-ch