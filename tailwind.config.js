/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          lg: '10px'
        }
      },
      boxShadow: {
        "normal": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)"
      },
      fontFamily: {
        "PoppinsRegular": "Poppins Regular",
        "PoppinsMedium": "Poppins Medium",
        "PoppinsSemiBold": "Poppins SemiBold",
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}