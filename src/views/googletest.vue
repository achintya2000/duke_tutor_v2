<template>
    <v-container>
        <v-btn @click="load()">load</v-btn>
        <v-btn @click="execute()">button</v-btn>
        <v-btn @click="authenticate().then(loadClient())">auth</v-btn>
        <h1>Hello</h1>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=cGZrdWtvNDlrdHBxNXRhb2U2Ymk1cHM1c2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000&amp;title" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </v-container>
</template>

 
 
<script>
/* eslint-disable */
const code = null;
const {google} = require('googleapis');
const calendar = google.calendar({
    version: 'v3',
    auth: 'AIzaSyCh1ipGakQ4sPSXTIKclLkK43GFQx8I7Wk'
});

const oauth2Client = new google.auth.OAuth2(
  '326080150411-5sh84qhpcairlch13lmkcl9hh26pi6et.apps.googleusercontent.com',
  '3qYRBuKw1UlMHae-wXfo3iuz',
  'localhost:8080'
);


const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: 'https://www.googleapis.com/auth/calendar'
});

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/oauthcallback?code={authorizationCode}')
  .then(function (response) {
    // handle success
    console.log(response);
    code = response;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// This will provide an object with the access_token and refresh_token.
// Save these somewhere safe so they can be used at a later time.
const {tokens} = oauth2Client.getToken(code)
oauth2Client.setCredentials(tokens);


/* eslint-disable */
export default {
name: "home",
methods : {
load(){
    gapi.load('auth2', initSigninV2);
},
initSigninV2() {
    gapi.auth2.init({
        client_id: '326080150411-796e7uq27rfu2j37sack0peecn74rush.apps.googleusercontent.com'
    }).then(function (authInstance) {
        // now auth2 is fully initialized
    });
},
authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events"})
        .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); });
},
loadClient() {
    gapi.client.setApiKey("AIzaSyAJbLQYAXHzyjQSXmlac7Il1gQ6fr3Nayo");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
},
execute() {
    return gapi.client.calendar.events.insert({
    "calendarId": "pfkuko49ktpq5taoe6bi5ps5sc@group.calendar.google.com",
    "resource": {
        "end": {
            "dateTime":"2019-11-03T14:00:00-04:00"
        },
        "start": {
            "dateTime":"2019-11-03T16:00:00-04:00"
        },
        "summary": "testing js"
    }
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
            },
            function(err) { console.error("Execute error", err); });
}
}
};
</script>
