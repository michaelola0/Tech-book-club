/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {

    screens: {
      'tablet': { 'max': '1024px' },
      'mobile': { 'max': '430px' },
    },

    extend: {

      blur: {
          '100px': '100px',
      },

      colors: {
        'neutral900': '#062630',
        'neutral700': '#385159',
        'neutral50': '#FAF5F3',
        'neutral0': '#FFFFFF',
        'light-salmon':'#FEA36F',
        'salmon50':'#FFF5EF',
      },

      backgroundImage: {
        'h1-gradient': 'linear-gradient(107.24deg, #FEA36F -11.37%, #062630 61.84%)',
        'neutral50': '#FAF5F3',
        'glow-bg': '#9CC9DA',
        'btn1Hover': 'linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)',
        'btn2Hover': 'linear-gradient(90deg, #385159 0%, #062630 100%)',
        
      },

      fontFamily: {
        martianMono: "'Martian Mono', serif",
        Inter: "'Inter', serif",
      },

      fontSize: {
        textPreset1: ['62px', {lineHeight:'120%', letterSpacing:'-2px', fontWeight:'700'}],
        textPreset1Mobile: ['38px', {lineHeight:'120%', letterSpacing:'-2px', fontWeight:'700'}],
        textPreset2: ['50px', {lineHeight:'130%', letterSpacing:'-2px', fontWeight:'600'}],
        textPreset2Mobile: ['34px', {lineHeight:'130%', letterSpacing:'-2px', fontWeight:'600'}],
        textPreset3: ['34px', {lineHeight:'130%', letterSpacing:'-2px', fontWeight:'600'}],
        textPreset3Mobile: ['24px', {lineHeight:'110%', letterSpacing:'-1px', fontWeight:'600'}],
        textPreset4: ['24px', {lineHeight:'110%', letterSpacing:'-1px', fontWeight:'600'}],
        textPreset4Regular: ['24px', {lineHeight:'120%', letterSpacing:'-1px', fontWeight:'400'}],
        textPreset5: ['20px', {lineHeight:'140%', letterSpacing:'-0.5px', fontWeight:'400'}],
        textPreset5Semibold: ['20px', {lineHeight:'140%', letterSpacing:'-0.5px', fontWeight:'600'}],
        textPreset6: ['18px', {lineHeight:'130%', letterSpacing:'-1px', fontWeight:'600'}],
        textPreset6Mobile: ['16px', {lineHeight:'130%', letterSpacing:'-1px', fontWeight:'600'}],
        textPreset7: ['14px', {lineHeight:'120%', letterSpacing:'-1px', fontWeight:'400'}],
      },

      borderColor: {
        'neutral900': '#062630',
        'neutral200':'#E6E1DF',
      },
    },
  },
  plugins: [],
}

