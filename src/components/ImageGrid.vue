<template>
  <div class="image-grid">
    <h1>Image Grid</h1>

    <router-link to="/configure" class="image-grid__configure">
      Configure params <span><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>
    </router-link> <br />

    <input type="text" placeholder="search image" v-model="query">
    <button class="image-grid__button" @click="searchImages">Search</button>

    <div class="grid">
      <Image
        v-if="randomPhotos.length > 0" 
        :images="randomPhotos"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import Image from './Image.vue'

export default {
  data(){
    return {
      query: ''
    }
  },
  computed: {
    ...mapState({
      randomPhotos: state => state.randomPhotos
    })
  },
  methods: {
    ...mapActions(['apiGetRandomPhotos']),
    async searchImages(){
      await this.apiGetRandomPhotos(this.query)
    }
  },
  components: { Image },
}
</script>

<style scoped>
.image-grid{
  font-family: 'Chivo', sans-serif;
}

h1 {
  font-size: 64px;
  letter-spacing: 1px;
}

.image-grid__configure {
  color: #2c3e50;
  display: inline-block;
  font-family: 'Chivo', sans-serif;
  margin-bottom: 42px;
}

input {
  outline: none;
  border: 2px solid #877666;
  border-right: none;
  border-radius: 5px 0 0 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, .8);
  font-family: 'Chivo';
  font-size: 16px;
  padding: 20px 20px;
  width: 400px;
  text-align: center;
}

input::placeholder {
  text-transform: uppercase; 
}

.image-grid__button {
  background-color: #877666;
  border: 2px solid #877666;
  border-radius: 0 5px 5px 0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .8);
  color: white;
  cursor: pointer;
  font-family: 'Chivo';
  font-size: 16px;
  text-transform: uppercase;
  padding: 20px 20px;
  outline: none;
}

.grid {
  display: flex;
  flex-wrap: wrap;
}
</style>