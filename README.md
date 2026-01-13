# Python Learning App for iPhone

A comprehensive mobile app for learning Python and practicing code right on your iPhone! Built with React Native and Expo, this app features interactive lessons, a code playground, practice exercises, and progress tracking.

## Features

### 1. Learn Section
- 10 comprehensive Python lessons from beginner to intermediate
- Topics include: Variables, Strings, Lists, Conditionals, Loops, Functions, Dictionaries, and more
- Each lesson includes detailed explanations and code examples
- Easy-to-read format optimized for mobile

### 2. Code Playground
- Full-featured Python code editor on your phone
- Run Python code directly in the app using Skulpt.js interpreter
- Quick example snippets to get started
- Real-time output display
- Support for Python 3 syntax

### 3. Practice Exercises
- 15 hands-on coding exercises
- Progressive difficulty from beginner to intermediate
- Automatic test validation
- Hints available for each exercise
- Track completed exercises

### 4. Progress Tracking
- Monitor your learning progress
- Track completed lessons and exercises
- Achievement badges
- Learning tips and motivation

## Screenshots

The app features:
- Clean, modern UI optimized for iPhone
- Syntax-highlighted code editor
- Dark theme output console
- Intuitive navigation with tab bar

## Installation

### Prerequisites

1. **Node.js**: Download and install from [nodejs.org](https://nodejs.org/)
2. **Expo Go App**: Install on your iPhone from the App Store

### Setup Steps

1. **Clone or download this repository**

2. **Install dependencies**:
   ```bash
   cd python-learning-app
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Run on your iPhone**:
   - Open the Expo Go app on your iPhone
   - Scan the QR code shown in the terminal or browser
   - The app will load on your phone

## Running the App

### Development Mode
```bash
npm start
```
This opens the Expo developer tools where you can:
- Scan QR code with Expo Go app
- Run on iOS simulator (requires Xcode on Mac)
- Run on Android emulator

### Specific Platform
```bash
npm run ios      # iOS simulator (Mac only)
npm run android  # Android emulator
npm run web      # Web browser
```

## How to Use

### Learning Python
1. Open the **Learn** tab
2. Browse through 10 comprehensive lessons
3. Tap any lesson to read detailed content
4. Study the code examples provided
5. Practice what you learned in the Playground

### Code Playground
1. Open the **Playground** tab
2. Write or modify Python code in the editor
3. Tap "Run Code" to execute
4. View output in the console below
5. Use example buttons for quick code snippets

### Practice Exercises
1. Open the **Exercises** tab
2. Choose an exercise to solve
3. Read the problem description
4. Write your solution in the code editor
5. Tap "Check Solution" to run tests
6. Completed exercises are marked with a checkmark

### Track Progress
1. Open the **Progress** tab
2. View your completion statistics
3. Check earned achievements
4. See learning tips
5. Reset progress if you want to start over

## Technologies Used

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform for React Native
- **React Navigation**: Navigation between screens
- **Skulpt.js**: Python interpreter in JavaScript (runs Python in the browser)
- **AsyncStorage**: Local data persistence
- **WebView**: Embed Python interpreter

## App Structure

```
python-learning-app/
├── App.js                 # Main app entry point
├── screens/              # All screen components
│   ├── LearnScreen.js
│   ├── CodePlaygroundScreen.js
│   ├── ExercisesScreen.js
│   └── ProgressScreen.js
├── data/                 # Content data
│   ├── lessons.js
│   └── exercises.js
├── package.json          # Dependencies
└── app.json             # Expo configuration
```

## Learning Path

### Beginners
1. Start with Lesson 1: Introduction to Python
2. Work through lessons 2-6 (basics)
3. Complete beginner exercises 1-8
4. Practice in the Playground

### Intermediate
1. Continue with lessons 7-10
2. Complete intermediate exercises 9-15
3. Experiment with combining concepts
4. Create your own projects in Playground

## Tips for Success

- **Practice Daily**: Even 15 minutes a day helps
- **Type Code**: Don't just read - write code in the Playground
- **Experiment**: Modify examples to see what happens
- **Solve Exercises**: Hands-on practice is crucial
- **Review**: Go back to earlier lessons if needed
- **Be Patient**: Programming takes time to learn

## Troubleshooting

### App Won't Load
- Make sure you're on the same WiFi network as your computer
- Check that the Expo server is running (`npm start`)
- Try restarting the Expo Go app

### Code Won't Run
- Check for syntax errors (Python is case-sensitive!)
- Make sure you're using Python 3 syntax
- Some advanced Python libraries may not work (Skulpt.js limitation)

### Slow Performance
- Close other apps on your phone
- Restart the Expo Go app
- Simplify complex code

## Limitations

Due to running Python in a JavaScript interpreter (Skulpt.js):
- Some advanced Python libraries are not available
- File I/O operations are limited
- Performance may be slower than native Python
- Some Python 3 features might not be fully supported

However, the app is perfect for:
- Learning Python basics
- Understanding core concepts
- Practicing syntax
- Solving algorithmic problems

## Future Enhancements

Potential features to add:
- More advanced lessons (OOP, file handling, etc.)
- Quiz mode
- Code challenges with leaderboard
- Share code snippets
- Dark mode
- Offline support
- Code syntax highlighting in editor

## Contributing

Feel free to:
- Add more lessons
- Create new exercises
- Improve UI/UX
- Fix bugs
- Suggest features

## Support

If you encounter issues:
1. Check the Troubleshooting section
2. Review Expo documentation
3. Check React Native documentation
4. Search for similar issues online

## License

This project is open source and available for educational purposes.

## About

Created as a comprehensive Python learning tool for mobile devices. Perfect for:
- Students learning Python
- Developers wanting to practice on the go
- Anyone interested in programming
- Quick reference and practice

## Getting Started Checklist

- [ ] Install Node.js
- [ ] Download Expo Go on iPhone
- [ ] Clone/download this repository
- [ ] Run `npm install`
- [ ] Run `npm start`
- [ ] Scan QR code with Expo Go
- [ ] Start learning Python!

Happy coding! Enjoy learning Python on your iPhone!
