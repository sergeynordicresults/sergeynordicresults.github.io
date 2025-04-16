const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./**/*.{js,ts,jsx,tsx,html,mdx,css}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-mypixel': 'inset 0 0 0 1px',
      },
    },
  },
};
