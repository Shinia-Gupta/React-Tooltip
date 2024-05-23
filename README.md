# React Tooltip

This project demonstrates the use of tooltips in a React application using two different tooltip libraries: `@tippyjs/react` and a custom `Tooltip` component.
Go live on [React Tooltip](https://master--reacttoolip.netlify.app/)

## Features

- Tooltips displayed at various positions using a custom `Tooltip` component.
- Tooltips with advanced features such as themes, animations, and visibility control using `@tippyjs/react`.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/react-tooltip-project.git
   cd react-tooltip-project
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

## Usage

To start the development server:

```sh
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

- **`src/App.js`**: The main component that renders various tooltip examples.
- **`src/tooltip/TippyTooltip.js`**: Component that uses `@tippyjs/react` for advanced tooltip features.
- **`src/tooltip/Tooltip.js`**: Custom tooltip component with basic functionality.
- **`src/App.css`**: Styling for the application.

## Components

### `TippyTooltip`

A button wrapped with a Tippy tooltip, offering customizable properties such as content, placement, delay, animation, and theme.

**Props**:
- `content`: The content of the tooltip.
- `placement`: The position of the tooltip (e.g., `top`, `bottom`, `right`, `left`).
- `delay`: Delay in milliseconds before showing/hiding the tooltip.
- `title`: Text displayed on the button.
- `toggleTippy`: Function to toggle the visibility of the tooltip.
- `visible`: Boolean to control tooltip visibility.
- `tippyCalled`: Boolean to decide whether to call `toggleTippy` on button click.
- `animation`: Animation effect for the tooltip.
- `theme`: Theme of the tooltip.

### `Tooltip`

A custom tooltip component to display tooltips at various positions.

**Props**:
- `position`: The position of the tooltip (e.g., `top`, `bottom`, `right`, `left`).

## Styling

Ensure you have the required styles for `@tippyjs/react` included in your project. These are typically imported in your component or main CSS file:

```css
@import "tippy.js/dist/tippy.css";
@import "tippy.js/animations/perspective.css";
@import "tippy.js/themes/light.css";
@import "tippy.js/themes/translucent.css";
@import "tippy.js/themes/material.css";
```
