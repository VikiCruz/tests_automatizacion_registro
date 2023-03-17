const { defineConfig } = require("cypress");
const faker = require("faker");
import { faker } from '@faker-js/faker';
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
  "chromeWebSecurity": false,
  "env" :
  {
      "landing_base_url" :  "https://inlazetest.com/",
      "register_url" : "https://partner.inlazetest.com/en/",
      "login_url" :    "https://partner.inlazetest.com/en/login",
      
      "fullname" : "QA Inlaze",
      "email" : "v.cruz@inlaze.com",
      "searchSelect" : "57",
      "phone" : "3134517372",
      "password" : "Test@12345"    
    },
});

