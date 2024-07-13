/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        '#D3D3D5':'#D3D3D5',
        '#686869':'#686869',
        'border-color-0066CC':'#0066CC',
        'red':'#FF0000',
        'appleBackgroundGray':'#FAFAFA',
        'btnColor': "#0071E3",
        'borderGray':"#CECECF",
        'textGray': "#F5F5F7",
      },
      fontSize: {
        '10': '10px',
      },
      maxWidth: {
        'maxW': '980px',
      }
    },
    
  },
  plugins: [],
}

