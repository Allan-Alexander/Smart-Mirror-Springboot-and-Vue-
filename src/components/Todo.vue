<template>
   <div>
    <div class="pb-2">
      <h4>  
      <span class="font-weight-light grey--text">Todo </span>
      <span>List</span>
      </h4>
    </div>

    <v-dialog v-if="allTodo.length == 0" v-model="dialog" persistent max-width="600px">
         <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
                <v-icon class="mr-1 blue--text">
                mdi-plus-circle
              </v-icon>
              <span class="subheading mr-2 blue--text">Add</span>
            </v-btn>
         </template>
        <v-card>
        <v-card-title>
          <span class="headline">New Todo</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid">
            <v-row>
              <v-col cols="12">
                <v-text-field label="Heading" required v-model="myTodo.heading" 
                :rules="headingRules"
                :counter="25"/>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Content" required v-model="myTodo.content"
                :rules="contentRules"
                :counter="50"/>
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
            @click="createTodoApi"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> 





    <!-- Card -->
    <v-card class="mx-auto mb-2" color="#212121" dark width="600" v-for="item in allTodo" :key="item.id">
    <v-card-title>
      <v-icon  left>
        mdi-twitter
      </v-icon>
      <span class="title font-weight-bold">{{ item.heading }}</span>
    </v-card-title>

    <v-card-text style="font-size: 20px">
      {{ item.content }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-btn class="mr-2" @click="deleteTodoApi(item.id)">
          <v-icon class="mr-1 red--text">
            mdi-delete
          </v-icon>
          <span class="subheading mr-2 red--text">Delete</span>
        </v-btn>



        <v-dialog v-model="dialog" persistent max-width="600px">
         <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
                <v-icon class="mr-1 blue--text">
                mdi-plus-circle
              </v-icon>
              <span class="subheading mr-2 blue--text">Add</span>
            </v-btn>
         </template>
        <v-card>
        <v-card-title>
          <span class="headline">New Todo</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form v-model="valid">
            <v-row>
              <v-col cols="12">
                <v-text-field label="Heading" required v-model="myTodo.heading" 
                :rules="headingRules"
                :counter="25"/>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Content" required v-model="myTodo.content"
                :rules="contentRules"
                :counter="50"/>
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
            @click="createTodoApi"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>   

      </v-list-item>
    </v-card-actions>
  </v-card>

 </div>  
</template>

<script>
import {db} from '../firebase'; 
// import api from '../axios';
// import axios from 'axios';
export default {
  data(){
    return{
      dialog: false,
      valid: false,
      allTodo: [],
      myTodo: {
          heading: '',
          content: ''
        },
        headingRules: [
        v => !!v || 'Heading is required',
        v => v.length <= 25 || 'Heading must be less than 25 characters',
      ],
        contentRules: [
        v => !!v || 'Content is required',
        v => v.length <= 100 || 'Content must be less than 100 characters',
      ],
    }
  },
  methods:{
     async callTodoApi(){
     // api.getAllTodo().then(response =>{
     //              this.allTodo = response.data
     //              console.log(response.data)
     //          })
     //          .catch(error => {
     //              console.log(error)
     //          })
    const citiesRef = db.collection('allTodo');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
    this.allTodo.push({id: doc.id, heading: doc.data().heading, content: doc.data().content})  
    console.log(this.allTodo);
     });
    },

    async deleteTodoApi(id){
      // api.deleteTodo(id).then(response => console.log(response))
      //   this.$router.go() 
      console.log(id);
      await db.collection("allTodo").doc(id).delete();
      this.$router.go()
    },
    
    async createTodoApi(){
      if(this.myTodo.heading.length > 25 || this.myTodo.content.length > 100 || this.myTodo.heading.length == 0 || this.myTodo.content.length == 0){
        alert("input beyond limit or empty");
      }else{
      //axios.post('http://localhost:9000/api/todo/create',this.myTodo
      //       ).catch(e => {
      //       console.log(e)
      //       })
      //       this.$router.go()
      await db.collection("allTodo").add(this.myTodo);
      this.$router.go() 
     }
    }
  },
  beforeMount(){
      this.callTodoApi();
    }

    
}
</script>