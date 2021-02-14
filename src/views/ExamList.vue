<template>
  <v-data-table
    :headers="headers"
    :items="exams"
    :search="search"
    class="elevation-1">

    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Examens</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
       <v-spacer></v-spacer>
       <v-btn
          class="ma-2"
          outlined
          color="indigo"
          to="/exam/ajout" >
          Créer
        </v-btn>  
        
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Êtes-vous sûr de bien vouloir supprimer cet élément?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Annuler</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Confirmer</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    data(){
    return{
      search: '',
      dialog: false,
      dialogDelete: false,
      fournload:false,
      headers: [
        {text: 'No Exam', value: 'noexam'},
        { text: 'Matier', value: 'matier'},
        { text: 'Classe', value: 'classe'},
        { text: 'Date d\'exam', value: 'dateex'},
        { text: 'Action', value: 'action'}
      ],
      exams: [],
      editedIndex: -1,
      editedItem: {
        idexam: null,
        matiere: null,
        dateexam: '',
        heuredebut: '',
        heureFin: '',
        etat:''
      },
      defaultItem: {
        idexam: null,
        matiere: null,
        dateexam: '',
        heuredebut: '',
        heureFin: '',
        etat:''
      },
    }},

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nouveau Exam' : 'Modifier Exam'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.exams = []
      },

      editItem (item) {
        this.editedIndex = this.exams.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.exams.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.exams.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.exams[this.editedIndex], this.editedItem)
        } else {
          this.exams.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>