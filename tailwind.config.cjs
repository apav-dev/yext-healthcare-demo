module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#EDF0EB",
        green: "#4F6A4E",
        "dark-green": "#2F412F",
        yellow: "#F0BB32",
        blue: "#2C99D6",
        "dark-gray": "#333333",
        "light-gray": "#9E9E9E",
        "disabled-gray": "#C4CBD0",
      },
      fontFamily: {
        "serif-bold": ["PTSerif-Bold"],
        "serif-regular": ["PTSans-Regular"],
        "sans-bold": ["PTSans-Bold"],
        "sans-regular": ["PTSans-Regular"],
      },
      fontSize: {
        "text-100": ["13px", "23.994px"],
        "text-500": ["52px", "56px"],
        "text-700": ["80px", "84px"],
        "text-800": ["84px", "108px"],
      },
    },
  },
  plugins: [],
};
