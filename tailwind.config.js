/** @type {import('tailwindcss').Config} */
export default {
  content: [   
    "./src/**/*.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Montserrat'],
      'title':['Marcellus'],
      'pricipal':['Quattrocento'],
      'logo': ['Lobster']
    }
  },
  plugins: [],
}

