<template>
  <form @submit.prevent="onSubmit">
    <div class="configure-form__input">
      <label for="count">Quantidade de imagens</label>
      <input type="number" id="count" v-model="count">
    </div>

    <div class="configure-form__input">
      <label for="count">Orientação</label>
      <select name="" id="" v-model="orientation">
        <option value="landscape">Paisagem</option>
        <option value="portrait">Retrato</option>
        <option value="squarish">Quadrada</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return {
      count: '',
      orientation: '',
      query: {}
    }
  },

}
</script>

<style scoped>

  .configure-form__input:first-child{
    margin-bottom: 20px;
  } 

  label {
    display: block;
  }
  
  input, select {
    outline: none;
    border: 2px solid #877666;
    border-radius: 5px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, .8);
    font-family: 'Chivo';
    font-size: 16px;
    padding: 10px 10px;
    text-align: center;
  }

</style>