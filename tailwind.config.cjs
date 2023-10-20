const { ComponentsContentPath } = require("@yext/search-ui-react");

module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./lib/**/*.{js,jsx}",
    ComponentsContentPath,
    "node_modules/@yext/chat-ui-react/lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cta-green": "#176456",
        "primary-green": "#448539",
        "light-green": "#EDF0EB",
        "prefooter-green": "#A4DAD2",
        "footer-dark-green": "#182C1D"
      },
      fontSize: {
        "text-100": ["13px", "23.994px"],
        "text-500": ["52px", "56px"],
        "text-700": ["80px", "84px"],
        "text-800": ["84px", "108px"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
