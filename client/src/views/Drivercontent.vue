<template>
  <div>
    <input type="text" v-model="driverId" placeholder="輸入司機ID" />
    <input type="text" v-model="drivercontent" placeholder="輸入自我介紹" />
    <button v-on:click="postDrivercontent()">確認</button>
    <br />
    <br />
    <input type="text" v-model="busNob" placeholder="輸入欲搜尋的司機ID" />
    <button v-on:click="getDrivercontent(busNob)">點擊匯入司機自我介紹</button>
    <h5 class="black" v-if="content != null">
      <br />
      自我介紹 : {{ content }} <br />
    </h5>
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

    getDrivercontent(busNob) {
      axios
        .get(`http://localhost:3000/api/getdrivercontent/${busNob}`)
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
