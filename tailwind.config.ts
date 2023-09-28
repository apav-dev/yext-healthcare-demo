const { ComponentsContentPath } = require("@yext/search-ui-react");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./lib/**/*.{js,jsx}",
    // ComponentsContentPath,
    "node_modules/@yext/chat-ui-react/lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "max-w-8xl": "1440px",
      },
      fontSize: {
        "text-100": ["13px", "23.994px"],
        "text-500": ["52px", "56px"],
        "text-700": ["80px", "84px"],
        "text-800": ["84px", "108px"],
      },
      colors: {
        sage: "#176456",
        moss: "#182C1D",
        leaf: "#448539",
        powder: "#A4DAD2",
        mint: "#99DFB2",
        dust: "#EDF0EB",
        lemon: "#F6D809",
      },
    },
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      "serif-medium": ["KaiseiDecol-Medium", ...defaultTheme.fontFamily.serif],
      "serif-regular": [
        "KaiseiDecol-Regular",
        ...defaultTheme.fontFamily.serif,
      ],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
