<template>
  <div id="calcule">
  <v-app id="inspire">
    <v-app-bar app clipped-left dense light>
      <v-toolbar-title>
        Ecole
      </v-toolbar-title>
      <v-spacer></v-spacer>

        <v-btn icon to="/login">
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      dark
      expand-on-hover
      app
      clipped
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    >
      <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/30.jpg"></v-img>
        </v-list-item-avatar>

      </v-list-item>
      <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Yeo Yartchima
              </v-list-item-title>
              <v-list-item-subtitle>Administrateur</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.url">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
          <router-view/>
      </v-container>
    </v-main>
  </v-app>
</div>
</template>
<script>
export default {
  data(){
    return{
      drawer: true,
      items: [
        //Menus module calcule moyen
          { title: 'Acceuil', icon: 'mdi-home',url: '/' },
          { title: 'Exam list', icon: 'mdi-finance',url: '/exam' },
        ],
      mini: true, 
    }
  }
}
</script>