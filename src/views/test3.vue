<template>
    <v-container>
        
        <h1>Hello</h1>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=cGZrdWtvNDlrdHBxNXRhb2U2Ymk1cHM1c2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000&amp;title" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </v-container>
</template>


<script>
/* eslint-disable */
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');
const opn = require('open');
const destroyer = require('server-destroy');

const {google} = require('googleapis');
const calendar = google.calendar({
    version: 'v3',
    auth: 'AIzaSyCh1ipGakQ4sPSXTIKclLkK43GFQx8I7Wk'
})

/**
 * Create a new OAuth2 client with the configured keys.
 */
const oauth2Client = new google.auth.OAuth2(
  '326080150411-5sh84qhpcairlch13lmkcl9hh26pi6et.apps.googleusercontent.com',
  '3qYRBuKw1UlMHae-wXfo3iuz',
  'localhost:8080'
);

/**
 * This is one of the many ways you can configure googleapis to use authentication credentials.  In this method, we're setting a global reference for all APIs.  Any other API you use here, like google.drive('v3'), will now use this auth client. You can also override the auth client at the service and method call levels.
 */
google.options({auth: oauth2Client});


export default {
name: "home",
data() {
    return {
      
    };
  },
methods : {
    async runSample() {
  // retrieve user profile
  const res = await plus.people.get({userId: 'me'});
  console.log(res.data);
},
/**
 * Open an http server to accept the oauth callback. In this simple example, the only request to our webserver is to /callback?code=<code>
 */
async authenticate(scopes) {
  return new Promise((resolve, reject) => {
    // grab the url that will be used for authorization
    const authorizeUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes.join(' '),
      
    });
    const server = http
      .createServer(async (req, res) => {
        try {
          if (req.url.indexOf('/oauth2callback') > -1) {
            const qs = new url.URL(req.url, 'http://localhost:3000')
              .searchParams;
            res.end('Authentication successful! Please return to the console.');
            server.destroy();
            const {tokens} = await oauth2Client.getToken(qs.get('code'));
            oauth2Client.credentials = tokens; // eslint-disable-line require-atomic-updates
            resolve(oauth2Client);
          }
        } catch (e) {
          reject(e);
        }
      })
      .listen(3000, () => {
        // open the browser to the authorize url to start the workflow
        opn(authorizeUrl, {wait: false}).then(cp => cp.unref());
      });
    destroyer(server);
  });
}
}
};


const scopes = ['https://www.googleapis.com/auth/calendar'];
</script>
