<template>
  <div class="pl-15">
      <h2>Control</h2>
      
      <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add Switch
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Switch</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid">
            <v-row>
              <v-col cols="12">
                <v-text-field label="Switch Name" required v-model="mySwitch.light" 
                :rules="nameRules"
                :counter="10"/>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Room Name" required v-model="mySwitch.room"
                :rules="roomRules"
                :counter="15"/>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Publisher Topic"
                  required
                  v-model="mySwitch.publisher"
                  :rules="publisherRules"
                  :counter="5"/>
                
              </v-col>
              
            </v-row>
            </v-form>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="createNewSwitch"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>



      <v-container>
      <v-flex xs12 md12>
        <v-row>
          <v-col v-for="item in allControls" :key="item.id">
        <v-card class="mx-auto" width="200">
          <v-card-text>
            <div>
              {{ item.light }}
              <v-btn icon color="pink" @click="deleteSwitch(item.id)">
                 <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
              <p class="display-1 text--primary">
                {{ item.publisher }}
              </p>
              <p>{{ item.room }}</p>
          </v-card-text>
          <v-card-actions>
          
            <v-btn elevation="2" raised class="success"
              @click="create(item.publisher)" :key="item.publisher">Connect</v-btn>

            <v-btn class="error" @click="destroy(item.publisher)">Destroy</v-btn>  
          </v-card-actions>
        </v-card>
          </v-col>
        </v-row>
      </v-flex>
      </v-container>

  </div>    
</template>


<script>
import api from '../axios';
import axios from 'axios';
export default {
   data () {
      return {
        dialog: false,
        allControls:[],
        valid: false,
        mySwitch: {
          light: '',
          room: '',
          publisher: ''
        },
        nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
        roomRules: [
        v => !!v || 'Name is required',
        v => v.length <= 15 || 'Name must be less than 15 characters',
      ],
        publisherRules: [
        v => !!v || 'Publisher is required',
        v => v.length <= 5 || 'Name must be less than 5 characters',
      ],
      }
    },
    methods:{
     create(topic){
            this.$mqtt.publish(topic,"ON")
      },
     destroy(topic){
            this.$mqtt.publish(topic,"OFF")
      },
      createNewSwitch () {
             this.dialog = false
             axios.post('http://localhost:9000/api/switch/create',this.mySwitch
             ).catch(e => {
             console.log(e)
             })
             this.$router.go()
      },
      callApi(){
               api.getAllSwitch().then(response =>{
                   this.allControls = response.data
                   console.log(response.data)
               })
               .catch(error => {
                   console.log(error)
               })
           },
      deleteSwitch(id){
          api.deleteSwitch(id)
          .then(response => console.log(response))
          this.$router.go() 
      },            
    },
    beforeMount(){
      this.callApi()
    }
}
</script>