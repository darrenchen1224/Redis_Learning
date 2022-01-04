<template>
  <div>
    <input type="text" v-model="driverId" placeholder="輸入司機ID" />
    <input type="text" v-model="drivercontent" placeholder="輸入自我介紹" />
    <button v-on:click="postDrivercontent()">確認</button>
    <br />
    <br />
    <button v-on:click="getDrivercontent()">點擊匯出所有司機自我介紹</button>
    <div v-if="content != null">
      <h5><br />自我介紹 :</h5>
      <h5 v-for="item in content" :key="item">{{ item }}</h5>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Drivercontent',
  data() {
    return {
      driverId: null,
      drivercontent: null,
      content: null,
    };
  },

  methods: {
    postDrivercontent() {
      axios
        .post('http://localhost:3000/api/postdrivercontent', {
          driverId: this.driverId,
          drivercontent: this.drivercontent,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.driverId = null;
      this.drivercontent = null;
    },

    getDrivercontent() {
      axios
        .get(`http://localhost:3000/api/getdrivercontent/`)
        .then((res) => {
          this.content = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
