<template>
    <v-card>
    <v-toolbar dark dense class="text-uppercase">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon right class="pr-1">mdi-leaf</v-icon>
      <span class="font-weight-light grey--text">Smart</span>
      <span>Mirror</span>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Navbar -->
    <v-navigation-drawer app v-model="drawer" absolute bottom temporary 
     src="background2.jpg"
     width="15%"
    >
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-white--text text--accent-4">
          
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-icon right class="white--text pr-5">{{ link.icon }}</v-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    </v-card>
</template>

<script>
export default {
    name:'Navbar',
    data: () => ({
      drawer: false,
      group: null,
      links:[
               { icon: 'mdi-view-dashboard',text:'Dashboard',route:'/' },
               { icon: 'mdi-toggle-switch',text:'Control System',route:'/control' },
               { icon: 'mdi-chart-histogram',text:'Analytics',route:'/monitor' },
      ]
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>