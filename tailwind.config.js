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
    extend: {
      screens: {
        'tablet': {'max':'843px'},
      }
    },
    fontFamily: {
      'body': ['Montserrat'],
      'title':['Marcellus'],
      'pricipal':['Quattrocento'],
      'logo': ['Lobster']
    },
   
  },
  plugins: [],
}

