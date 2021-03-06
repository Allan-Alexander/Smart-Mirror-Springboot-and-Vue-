<template>
    <div>
     <h2 class="pl-15">Monitor</h2>
        <v-card class="ml-10 mt-3" width="500" dark>
        <v-sheet class="v-sheet--offset mx-auto"
            color="cyan"
            elevation="12"
            max-width="calc(100% - 32px)"
        >
            <v-sparkline
            :labels="labels"
            :value="value"
            color="white" line-width="2"  padding="16">
            </v-sparkline>
        </v-sheet>

        <v-card-text class="pt-0">
            <div class="title font-weight-light mb-2">
            Temperature Monitor
            </div>
            <div class="subheading font-weight-light grey--text">
            Evelta SHT20 I2C
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon class="mr-2 pink--text" small>
            mdi-clock
            </v-icon>
            <span class="caption grey--text font-weight-light">last registration an hour ago</span>
        </v-card-text>
        </v-card> 
 </div>
</template>
<script>
export default {
    data(){
           return {
               labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],
      }
    }
}
</script>