/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral Colors
        neutral: {
          black: '#263238',     //[cite: 4]
          d_grey: '#4D4D4D',    //[cite: 4]
          grey: '#717171',      //[cite: 4]
          l_grey: '#89939E',    //[cite: 4]
          grey_blue: '#ABBED1', //[cite: 4]
          silver: '#F5F7FA',    //[cite: 4]
          white: '#FFFFFF',     //[cite: 4]
        },
        // Brand Colors
        primary: '#4CAF4F',     //[cite: 4]
        secondary: '#263238',   //[cite: 4]
        info: '#2194F3',        //[cite: 4]
        
        // Color Shades
        shade: {
          1: '#43A046',         //[cite: 4]
          2: '#388E3B',         //[cite: 4]
          3: '#237D31',         //[cite: 4]
          4: '#1B5E1F',         //[cite: 4]
          5: '#103E13',         //[cite: 4]
        },
        
        // Color Tints
        tint: {
          1: '#66BB69',         //[cite: 4]
          2: '#81C784',         //[cite: 4]
          3: '#A5D6A7',         //[cite: 4]
          4: '#C8E6C9',         //[cite: 4]
          5: '#E8F5E9',         //[cite: 4]
        },
        
        // Action Colors
        action: {
          warning: '#FBC02D',   //[cite: 4]
          error: '#E53835',     //[cite: 4]
          success: '#2E7D31',   //[cite: 4]
        }
      },
    },
  },
  plugins: [],
}