<template>
    <div class="images__card" v-for="image in images" :key="image.id">
      <div class="card__body">
        <img
          :src="image.urls.regular" 
          :alt="image.description"
        />
      </div>
      <div class="card__footer">
        <p>
          <a :href="image.user.links.html" target="_blank">{{image.user.name}}</a>
        </p>
        <span>
          <i class="fa fa-heart"></i>
            {{image.user.total_likes}}
        </span>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    images: Array
  },
  created() {
    console.log(this.images)
  }
}
</script>

<style scoped>
  img{
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .images__card {
    background: #fff;
    margin: 40px 20px 20px;
    transition: box-shadow .3s;
    flex: 1 1 500px;
    align-self: flex-start;
  }

  .images__card:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, .7);
  }

  .images__card .card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
  }

  .images__card .card__footer a {
    text-decoration: none;
    color: #2c3e50;
  }

  .images__card .card__footer span {
    color: #197BBD;
    
  }
</style>