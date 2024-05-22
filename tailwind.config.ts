import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
          bounceUpIn: {
            '0%': {
              opacity: '0',
              transform: 'translateY(50%)',
            },
            '60%': {
              opacity: '1',
              transform: 'translateY(-10%)',
            },
            '80%': {
              transform: 'translateY(5%)',
            },
            '100%': {
              transform: 'translateY(0)',
            },
          },
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // slide: {
        //   '0%, 20%': { transform: 'translateX(0)' },         // Image 1 stays for 20% of the time
        //   '25%, 45%': { transform: 'translateX(-100%)' },    // Image 2 stays for 20% of the time
        //   '50%, 70%': { transform: 'translateX(-200%)' },    // Image 3 stays for 20% of the time
        //   '75%, 100%': { transform: 'translateX(-300%)' },   // Wrap around
        // },
        slide: {
          '0%, 25%': { transform: 'translateX(0)' },         // Image 1 stays for 10 seconds
          '33.33%, 58.33%': { transform: 'translateX(-100%)' }, // Image 2 stays for 10 seconds
          '66.66%, 91.66%': { transform: 'translateX(-200%)' }, // Image 3 stays for 10 seconds
          '100%': { transform: 'translateX(-300%)' },         // Loop back to the first image
        },
      },
      animation: {
        scroll: 'scroll 50s linear infinite',
        slide: 'slide 30s linear infinite', // 30s for 3 images (10s each)
        bounceUpIn: 'bounceUpIn 1s ease-out forwards',


      },
    },
  },
  plugins: [],
};
export default config;
