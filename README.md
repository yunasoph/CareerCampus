# CareerCampus

A gamified webapp for CSE students to pick a career path and get a structured roadmap with progress tracking, XP, and achievements.

## Features

- **🎯 Multiple Career Paths**: Choose from Web Development, Data Science, AI/ML, Cybersecurity, Mobile Development, or Cloud & DevOps
- **📋 Structured Roadmaps**: Each path has milestones with clear learning steps
- **⚡ Gamified Progress**: Earn XP for completing steps and level up
- **🏆 Achievements**: Unlock badges as you complete milestones and reach goals
- **📚 Curated Resources**: Access tutorials, courses, and documentation for each step
- **💾 Persistent Progress**: Your progress is saved locally in the browser

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React Context API with localStorage persistence

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── career/[id]/       # Career path detail page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── AchievementsPanel.tsx
│   ├── CareerCard.tsx
│   ├── Header.tsx
│   ├── MilestoneCard.tsx
│   ├── StatsPanel.tsx
│   └── StepCard.tsx
├── context/               # React Context
│   └── ProgressContext.tsx
├── data/                  # Career paths data
│   └── careerPaths.ts
└── types/                 # TypeScript types
    └── index.ts
```

## License

MIT
