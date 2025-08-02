# Apocalypse World MC Utility

A React + TypeScript utility app to assist Apocalypse World (and other games Powered by the Apocalypse) Master of Ceremonies (MCs).

## TL;DR for the Master of Ceremonies

1. **Open the link**: [Link](https://jauntyjocularjay.github.io/Apocalypse-World-MC-Utility/)
1. **Navigate**: Click icons in the top bar to toggle different tools on/off. The dice roller open by default.
1. **Roll Dice**: Click any modifier button (-3 to +4) to roll 2d6 with that modifier
1. **Calculate Harm**: Use the dropdowns to select damage and resistance values

## Features

### 🧭 Navigation System
- **Fixed top navigation bar** with icon-based controls
- **Toggle components** on/off independently
- **Clean, accessible interface** with hover effects
- **Responsive design** that scales with content

### 🎲 Dice Roller
- **Interactive modifier buttons** (-3 to +4) for stat rolls
- **Automatic 2d6 rolling** with modifier calculation
- **Real-time results display** in a clean table format
- **Toggle visibility** via navigation icon

### ⚔️ Harm Calculator  
- **Damage calculation** with resistance/armor values
- **Dynamic dropdowns** for harm (0-10) and resistance (0-10) selection
- **Net harm display** automatically calculates final damage
- **Integrated into main navigation**

## Technical Architecture

### React Patterns Used
- **Component composition** with reusable UI elements
- **State lifting** to parent components for shared data
- **Unidirectional data flow** (props down, events up)
- **Custom hooks** and event handling patterns

### TypeScript Integration
- **Strict typing** for all component props and state
- **Type-safe event handlers** and callback functions
- **Interface definitions** for clean component contracts

### Styling Approach
- **CSS flexbox** layouts for responsive design
- **Component-scoped** styling with semantic class names
- **Fixed positioning** for persistent navigation
- **Modern UI** with shadows, borders, and hover states

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/jauntyjocularjay/Apocalypse-World-MC-Utility.git

# Navigate to project directory
cd Apocalypse-World-MC-Utility

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── Components/
│   ├── DiceRoller/           # Dice rolling functionality
│   │   ├── index.tsx         # Main dice roller component
│   │   ├── ButtonModifier.tsx # Individual modifier buttons
│   │   └── ReferenceTable.tsx # Results display table
│   ├── NetHarm/              # Damage calculation
│   │   ├── index.tsx         # Main harm calculator
│   │   ├── SelectHarmValue.tsx
│   │   └── SelectResistanceValue.tsx
│   ├── Navigation/           # Top navigation bar
│   │   └── index.tsx         # Icon bar component
│   └── Icons/                # Reusable icon components
├── Assets/                   # SVG icons and images
└── App.tsx                   # Main application component
```

## Future Features

- **Moves Reference**: Quick lookup for Apocalypse World moves and their mechanics
- **Probability Display**: Show success/failure chances for different modifiers

## Development Notes

This project demonstrates modern React patterns including:
- Functional components
- TypeScript for type safety
- Component composition and reusability
- Clean separation of concerns
- Responsive CSS design

Built with **Vite** for fast development and **TypeScript** for robust code quality.


# Credits

Written by @jauntyjocularjay with the help of Chewie, his AI Copilot. 

`README.md` written by Chewie and edited by @jauntyjocularjay
