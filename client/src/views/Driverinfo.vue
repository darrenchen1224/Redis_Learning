<template>
  <div>
    <input type="text" v-model="driverId" placeholder="輸入司機ID" />
    <input type="text" v-model="drivername" placeholder="輸入司機名稱" />
    <input type="text" v-model="busroute" placeholder="輸入路線名稱" />
    <button v-on:click="postDriverinfo()">確認</button>
    <br />
    <br />
    <input type="text" v-model="busNob" placeholder="輸入欲搜尋的司機ID" />
    <button v-on:click="getDriverinfo(busNob)">點擊匯出指定司機資訊</button>
    <h5 class="black" v-if="businfo.name != null">
      <br />
      司機名稱 : {{ businfo.name }} <br />
      路線 : {{ businfo.route }}
    </h5>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Driverinfo',
  data() {
    return {
      driverId: null,
      drivername: null,
      busroute: null,
      busNob: null,
      businfo: {
        name: null,
        route: null,
      },
    };
  },

  methods: {
    postDriverinfo() {
      axios
        .post('http://localhost:3000/api/postdriverinfo', {
          driverId: this.driverId,
          drivername: this.drivername,
          busroute: this.busroute,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.driverId = null;
      this.drivername = null;
      this.busroute = null;
    },

    getDriverinfo(busNob) {
      axios
        .get(`http://localhost:3000/api/getdriverinfo/${busNob}`)
        .then((res) => {
          this.businfo.name = res.data[1];
          this, (this.businfo.route = res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
