/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {
      colors: {
        header: "#1e375a",
        primary: "#3E4958",
        button: "#00ABE4",
        background: "#E9F1FA",
      },
    },
  },
  plugins: [],
};
