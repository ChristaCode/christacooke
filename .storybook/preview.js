// .storybook/preview.js
import '../styles/globals.css'; // Adjust this if you're using Tailwind or global styles

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
};
