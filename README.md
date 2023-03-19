
![Logo](https://betanyeli-images.s3.amazonaws.com/simpli-note+icon.png)


# Simpli Note

As "simpli" as its name. Use 💫Simpli-note💫  to quickly create your notes...📒


## 📸 Screenshots 📸

![Android](https://user-images.githubusercontent.com/48498105/226208448-bcbf9572-8e34-48d0-9536-5663ca9bde02.gif)

![iOS](https://user-images.githubusercontent.com/48498105/226208455-6d98df8c-3621-4d33-8522-912cdb58fc1b.gif)

## ✨ Features ✨

- Notes viewer
- Add note fancy textbox
- Detail notes
- Clear notes
- Back button save support V1
- Tags (View only)
- Custom components
  - Modal
  - Tags
  - Snackbar
- Unit test (Snapshots) V1


##  🔜 Roadmap

- Back button save support V2
- Pull to refresh
- Skeleton or loaders
- Android icons support.

## 🛠 Tech Stack 🛠
- React Native v0.71.4
- Async Storage v1.17.11
- React navigation v6
- TypeScript v4.8.4
- Jest
- React native testing library

## 🖌 UI Inspiration
- Logo: Inspired in *Mainteny* 🇩🇪 assets and builded in Figma.
- SplashScreen: Inspired in *Mainteny* 🇩🇪 assets and builded in Figma.
- Color palette: *Mainteny* 🇩🇪 UI Colors.
- UI [Notes Mobile App](https://dribbble.com/shots/20654814-Notes-Mobile-IOS-App)



## 🚀 Run Locally

Clone the project

```bash
  git clone https://github.com/betanyeli/simpli-note.git
```

Go to the project directory

```bash
  cd simpli-note
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

Run Android simulator

```bash
  yarn run android
```

Run iOS simulator

```bash
  yarn run ios
```
## Running Tests

To run tests, run the following command

```bash
  yarn test
```

Or run linter

```bash
  yarn lint
```


## 🚀 Deployment 🚀

To generate APK of this project run

```bash
  npx react-native bundle --platform android --dev false \
  --entry-file index.js \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res/
```
and then

```bash
  cd android && ./gradlew assembleRelease
```


## 👩🏻‍💻 Author 👩🏻‍💻

Develop with love by 💕[@Beta](https://www.github.com/betanyeli)💕


## Feedback

🙉*Your feedback is my salary*🙉, just kidding! . If you have any comments, suggestions, let me know 🪐
