# Personal Pokedex App

## Project Overview

Personal Pokedex is a React Native mobile application built with Expo that allows users to browse, search, and favorite Pokemon. The app features responsive design with light/dark theme support, infinite scroll pagination, and persistent favorites storage. Users can view detailed information about each Pokemon including their stats, abilities, types, and official descriptions.

## API Used

**PokeAPI** - The RESTful Pokemon API
- Website: [https://pokeapi.co/](https://pokeapi.co/)
- Documentation: [https://pokeapi.co/docs/v2](https://pokeapi.co/docs/v2)
- Endpoints used:
  - `/pokemon` - Fetch list of Pokemon with pagination
  - `/pokemon/{id}` - Get individual Pokemon details
  - `/pokemon-species/{id}` - Get Pokemon descriptions and flavor text
  - `/type/{type}` - Search Pokemon by type

## Installation Instructions

### Prerequisites

- **Node.js**: Version 16 or higher
- **pnpm**: Package manager (or npm/yarn)
- **Expo Go App**: 
  - iOS: Download from [App Store](https://apps.apple.com/app/expo-go/id982107779)
  - Android: Download from [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **Mobile Device**: iOS 13+ or Android 5.0+
- **Web Browser**: Chrome, Firefox, Safari, or Edge (for web testing)

### Steps to Install and Run

1. **Clone the repository** (if applicable):
   ```bash
   cd pokemon-app
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the Expo development server**:
   ```bash
   pnpm expo start
   ```

4. **Run on your device**:
   - **Mobile**: Scan the QR code with:
     - iOS: Camera app
     - Android: Expo Go app
   - **Web**: Press `w` in the terminal to open in browser
   - **Android Emulator**: Press `a` in the terminal
   - **iOS Simulator**: Press `i` in the terminal (macOS only)

### Troubleshooting Tips

**Issue: "Network request failed" or Pokemon not loading**
- Solution: Ensure you have a stable internet connection. PokeAPI requires active internet access.

**Issue: App crashes on startup**
- Solution: Clear Expo cache with `pnpm expo start -c` or `npx expo start --clear`

**Issue: Favorites not persisting**
- Solution: Check that AsyncStorage is properly installed. Run `pnpm install @react-native-async-storage/async-storage`

**Issue: Images not displaying**
- Solution: The official Pokemon artwork requires internet access. Check your connection and firewall settings.

**Issue: Search not working**
- Solution: Wait 500ms after typing (debounce delay). Try exact Pokemon names like "pikachu" or types like "fire", "water"

**Issue: Theme toggle not working**
- Solution: Clear app data/cache in Expo Go or restart the development server

**Issue: App not displaying on web**
- Solution: Ensure port 8081 is not blocked. Try `pnpm expo start --web` directly

## Feature Summary

### Core Features

#### 1. **Pokemon List with Infinite Scroll**
- Browse Pokemon with automatic pagination
- Loads 20 Pokemon at a time
- "Loading more..." indicator at bottom
- "You've reached the end!" message when all Pokemon loaded

#### 2. **Search Functionality**
- Real-time search with 500ms debounce
- Search by Pokemon name (e.g., "charizard", "pikachu")
- Search by type (e.g., "fire", "water", "psychic")
- Searches both loaded and unloaded Pokemon via API
- "Searching..." loading indicator
- "No Pokemon found" message for empty results

#### 3. **Modal/Dialog Usage**
- **Pokemon Details Modal**: Displays when tapping on any Pokemon card
  - Official artwork image
  - Pokemon description (flavor text from Pokemon species API)
  - Types with visual badges
  - Abilities list
  - Height and weight stats
  - Close button to dismiss
- **Responsive modal**: Scrollable content for longer descriptions
- **Theme-aware styling**: Modal adapts to light/dark theme

#### 4. **Favorites System with AsyncStorage**
- **Star Icon**: Toggle favorites on each Pokemon card
  - ★ (filled star) = favorited
  - ☆ (empty star) = not favorited
- **Persistent Storage**: Favorites saved using AsyncStorage
  - Survives app restarts
  - Stored as JSON array of Pokemon IDs
- **Dedicated Favorites Screen**: 
  - View all favorited Pokemon
  - Automatically refreshes when navigating to screen
  - Fetches full Pokemon data by IDs
  - Shows "No favorites yet" if empty

#### 5. **Light/Dark Theme Toggle**
- **Theme Toggle Button**: Sun/moon icon in header (home screen only)
- **Full App Coverage**: Theme affects all screens (Home, Favorites, Modal)
- **Persistent Theme**: Saves preference using AsyncStorage
- **Theme Colors**:
  - Light mode: White backgrounds, dark text
  - Dark mode: Dark backgrounds, light text
- **Dynamic Elements**: Cards, text, buttons, and modal all adapt to theme

#### 6. **Error Handling and Loading States**
- **Initial Loading**: Full-screen spinner with "Loading Pokemon..." text
- **Pagination Loading**: Bottom indicator with "Loading more Pokemon..."
- **Search Loading**: "Searching..." indicator during API queries
- **Error Display**: Red error text with error message
- **Network Error Handling**: Graceful fallback for failed API requests
- **Empty States**: 
  - "No Pokemon found" for search results
  - "No favorites yet" on Favorites screen
  - "You've reached the end!" for pagination

### Bonus UX Features

#### 1. **Responsive Design**
- **Mobile (< 768px)**: Full-width cards, left-aligned
- **Tablet/Desktop (≥ 768px)**: Centered cards with max-width 800px
- **Window Dimension Detection**: Automatically adjusts layout based on screen size
- **Flexible Components**: All UI elements scale appropriately

#### 2. **Enhanced Card Design**
- **Vertical Centering**: Image, text, and star icon aligned properly
- **Type Display**: Shows all Pokemon types in comma-separated format
- **Capitalized Names**: Pokemon names displayed with proper capitalization
- **Touch Feedback**: Cards and buttons respond to touch with visual feedback
- **Padding & Spacing**: Generous padding on interactive elements (12px on star and theme toggle)

#### 3. **Navigation**
- **React Navigation**: Native stack navigator for smooth transitions
- **Tab-style Headers**: Easy switching between Home and Favorites
- **Theme Integration**: Navigation headers match app theme
- **Header Customization**: Custom title and theme toggle positioning

#### 4. **Performance Optimizations**
- **Debounced Search**: 500ms delay prevents excessive API calls
- **FlatList Optimization**: Only renders visible items
- **Efficient Re-renders**: useEffect dependencies properly managed
- **AsyncStorage Batching**: Saves favorites only when changed

#### 5. **User Feedback**
- **Loading Indicators**: Clear visual feedback during data fetching
- **Search Status**: Shows "Searching..." during API queries
- **Empty States**: Helpful messages for empty results
- **End of List**: Clear indication when all Pokemon loaded

## Known Issues or Limitations

### Current Limitations

1. **Search Limitation**: Type search returns maximum of 20 Pokemon per type (API limitation workaround)

2. **No Offline Mode**: App requires active internet connection to:
   - Load Pokemon data
   - Display Pokemon images
   - Fetch descriptions and details

3. **Favorites Storage**: Favorites are stored locally on device only
   - Not synced across devices
   - Clearing app data will delete favorites

4. **Pokemon Count**: App loads first ~1000 Pokemon from PokeAPI
   - Subsequent generations may not be included depending on API pagination

5. **Image Loading**: Pokemon images are loaded from external CDN
   - May be slow on poor connections
   - No image caching implemented

6. **Search Case Sensitivity**: Search requires lowercase input for exact matches
   - Searching "Pikachu" won't work, must use "pikachu"

7. **Type Search**: Limited to official Pokemon types
   - Won't suggest available types
   - Invalid types show "No Pokemon found"

### Future Improvements

- Add image caching for faster load times
- Implement offline mode with local database
- Add type suggestions/autocomplete in search
- Include Pokemon stats visualization (graphs/charts)
- Add sorting options (by name, ID, type, stats)
- Implement team builder feature
- Add Pokemon comparison feature
- Include evolution chain display
- Add move list and details
- Implement user accounts with cloud sync for favorites

## Project Structure

```
pokemon-app/
├── api/
│   └── pokemonApi.js          # API calls to PokeAPI
├── assets/                     # Images and assets
├── components/
│   ├── PokemonCard.jsx        # Individual Pokemon card component
│   ├── SearchBar.jsx          # Search input component
│   └── ThemeToggle.jsx        # Theme toggle button
├── hooks/
│   └── useTheme.js            # Theme context and provider
├── navigation/
│   └── MainStackNavigator.jsx # Navigation setup
├── screens/
│   ├── DetailsModal.jsx       # Pokemon details modal
│   ├── FavoritesScreen.jsx    # Favorites list screen
│   └── HomeScreen.jsx         # Main Pokemon list screen
├── storage/                    # AsyncStorage utilities (if needed)
├── App.js                      # Root component
├── app.json                    # Expo configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## Technologies Used

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform and tooling
- **React Navigation**: Navigation library
- **AsyncStorage**: Local data persistence
- **PokeAPI**: Pokemon data source
- **Material Icons**: Icon library (@expo/vector-icons)

## License

This project is for educational purposes.

## Credits

- Pokemon data provided by [PokeAPI](https://pokeapi.co/)
- Pokemon images from official artwork
- Built with React Native and Expo
