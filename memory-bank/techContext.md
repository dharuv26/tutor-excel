# Tech Context

- **Build Tool:** Vite
- **Core Library:** React
- **Styling Framework:** `react-bootstrap` and `bootstrap`
- **Custom Styling:** Global CSS variables and helper classes in `src/index.css`, with component-specific styles in `src/components/ui/ui.css`.
- **Routing:** `react-router-dom` for all page navigation.
- **Icons:** A mix of `react-icons` and static PNG assets from `src/assets/icons/`.
- **Project Structure:**
    - `/src/screens`: Contains page-level components.
    - `/src/components/ui`: Contains small, reusable UI components.
    - `/src/components/layout`: Contains `Header` and `Footer`.
    - `/src/assets/images`: Contains large photos and backgrounds.
    - `/src/assets/icons`: Contains small UI icons.
    - `App.jsx`: Handles routing.
    - `HomePage.jsx`: Composes the homepage from UI components.
- **Testing:**
    - The current testing strategy is manual **Local Testing** by developers and **User Acceptance Testing (UAT)**.
    - No automated testing frameworks are required at this stage.

## Running Locally
- **Command:** `npm run dev`
- **Description:** Run this command from the project's root directory to start the Vite development server. It typically launches on `http://localhost:5173` and provides Hot Module Replacement (HMR) for a fast development experience.