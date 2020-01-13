require("dotenv").config();

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  env: {
    API_URL: process.env.API_URL
  }
}