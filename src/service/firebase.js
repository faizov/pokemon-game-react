import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB5S3vUzfmtxmPb9M2z6G_jCIoqL6nz6EY",
    authDomain: "pokemon-game-e2e13.firebaseapp.com",
    databaseURL: "https://pokemon-game-e2e13-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-e2e13",
    storageBucket: "pokemon-game-e2e13.appspot.com",
    messagingSenderId: "317467854916",
    appId: "1:317467854916:web:e6d50fabc2778c450d9411"
  };
  
  firebase.initializeApp(firebaseConfig);


  class Firebase {
    constructor() {
      this.fire = firebase;
      this.database = this.fire.database();
    }

    getPokemonSoket = (cb) => {
      this.database.ref('pokemons').on('value', (snapshot) => {
        cb(snapshot.val());
      })
    }

    getPokemonsOnce = async () => {
      return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }

    postPokemon = (key, pokemon) => {
      this.database.ref(`pokemons/${key}`).set(pokemon);
    }

    addPokemon = (data, cb) => {
      const newKey = this.database.ref().child('pokemons').push().key;
      this.database.ref('pokemons/' + newKey).set(data);
    }
  }
  
  export default Firebase;