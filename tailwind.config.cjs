module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "serif-bold": ["PTSerif-Bold"],
        "serif-regular": ["PTSans-Regular"],
        "sans-bold": ["PTSans-Bold"],
        "sans-regular": ["PTSans-Regular"],
      },
      fontSize: {
        sm: ["16px", "21.2px"],
        base: ["18px", "24px"],
        lg: ["20px", "30px"],
        xl: ["28px", "30px"],
        "2xl": ["32px", "40px"],
        "3xl": ["80px", "84px"],
      },
    },
  },
  plugins: [],
};
