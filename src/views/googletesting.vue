<template>
<v-container fluid>

    <v-row align="center">
      <v-col class="d-flex" cols="1">
        <v-select
            v-model = Startchoice
          :items="hours"
          label="Standard"
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="1">
        <v-select
            v-model = APM1choice
          :items="items"
          label="Standard"
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="1">
        <v-select
            v-model = Endchoice
          :items="hours"
          label="Standard"
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="1">
        <v-select
            v-model = APM2choice
          :items="items"
          label="Standard"
        ></v-select>
      </v-col>
    </v-row>

    <v-btn @click="muMethod">Button</v-btn>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=cTY2Y3J1M25xZmR2MWRzYWRwdjBia2xiMDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F09300&amp;title=Tutoring%20Availibilities" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
</v-container>
</template>

<script>
/* eslint-disable */
export default {
  name: "googletesting",
  data: () => ({
        items: ['AM','PM'],
        hours: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        APM1choice : '',
        APM2choice : '',
        Startchoice : '',
        Endchoice : ''
    }),
  methods : {
      muMethod() {
            var start = parseInt(this.Startchoice);
            var end = parseInt(this.Endchoice);
            var startapm = this.APM1choice + "";
            var endapm = this.APM2choice + "";
            if(startapm.localeCompare("PM")==0) 
            {
                start += 12;
            }
            if(endapm == "PM") 
            {
                end += 12; 
            }
            if(end >24  || start > end)
            {
                console.log("THIS TIME DOES NOT WORK!");
            }

            for(var i = start; i<end;i++)
            {
                //google api request code 
                console.log(i);
            }
        }
    }

}
</script>

<style>

</style>