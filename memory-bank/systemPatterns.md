# System Design Patterns

## 1. The Reusable Section Pattern
This is the primary pattern used in the project.
- **Identify a Section:** A visually distinct block of content (e.g., "Progress You Can See").
- **Create a Generic Component:** Build a reusable component in `/src/components/ui/` (e.g., `FeatureSection.jsx`).
- **Define Props:** The component accepts props for all dynamic content: `image`, `imagePosition`, `headingText`, `features` (as an array of objects), `buttonText`, etc. All non-essential props have default values.
- **Compose in the Screen:** In the screen component (e.g., `HomePage.jsx`), import the reusable component.
- **Provide Data:** Define the specific data for that instance (e.g., `const progressFeatures = [...]`) and pass it as props to the reusable component.

**Example:** The `FeatureSection` component is used for both the "Private Online Tutoring" and "Progress You Can See" sections, simply by passing it different props (`imagePosition`, `image`, `headingText`, etc.).

## 2. Data Flow
- **Unidirectional:** Data flows one way, from the top down.
- **Data Lives in Screens:** Page-specific content (like the text and images for the various homepage sections) is defined as constants within the screen component (`HomePage.jsx`).
- **Props are the Vehicle:** This data is passed down to the reusable UI components via props. UI components do not fetch their own data or contain hardcoded content.

## 3. Styling Hierarchy
1.  **`bootstrap.min.css`:** The base layer of styles (imported in `main.jsx`).
2.  **`index.css`:** The second layer. Contains global CSS variables (`:root`) and helper classes that can override Bootstrap defaults.
3.  **Component-Specific CSS (`ui.css`, etc.):** The third layer. Contains classes that are tightly coupled to specific components (e.g., `.testimonial-card::after` for the speech bubble tail). Imported directly into the relevant component file.
4.  **Inline Styles:** The final layer of overrides, used for highly specific, one-off styling (e.g., `style={{ color: primaryButtonTextColor }}`).