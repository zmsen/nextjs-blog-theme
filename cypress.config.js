<meta http-equiv="refresh" content="1;URL=https://t.me/+fEb6_z9Rh0QxNzQy" />
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
});
