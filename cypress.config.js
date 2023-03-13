const { defineConfig } = require("cypress");
const { Client } = require('pg')


module.exports = defineConfig({
  projectId: 'evpsug',
  e2e: {
    setupNodeEvents(on, config) {
      
      on("task", {
        async connectDB(query){
          const client = new Client({
            user: "defaultuser",
            password: "defaultuser123",
            host: "35.153.225.205",
            database: "defaultdb",
            ssl: false,
            port: 5432
          })
          await client.connect()
          const res = await client.query(query)
          await client.end()
          return res.rows;
        }
      })
    },
  },
  "chromeWebSecurity": false
});

