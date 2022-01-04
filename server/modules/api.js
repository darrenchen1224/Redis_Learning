const res = require('express/lib/response');
const cache = require('./cache');
const rediskey = require('./rediskey');

module.exports = {
  async postdriverinfo(req, res) {
    const driverId = req.body.driverId;
    const busroute = req.body.busroute;
    const driverName = req.body.drivername;
    const key = rediskey.Driver_info(driverId);
    await cache.HSET(key, 'driverName', driverName);
    await cache.HSET(key, 'busroute', busroute);
  },

  async getdriverinfo(req, res) {
    const driverId = req.params.id;
    const key = rediskey.Driver_info(driverId);
    const driverinfo = await cache.HMGET(key, ['busroute', 'driverName']);
    res.send(driverinfo);
  },

  async postdrivercontent(req, res) {
    const driverId = req.body.driverId;
    const drivercontent = req.body.drivercontent;
    console.log(driverId, drivercontent);
    const key = rediskey.Driver_content(driverId);
    await cache.SET(key, drivercontent);
  },

  async getdrivercontent(req, res) {
    // const driverId = req.params.id;
    const key = rediskey.Driver_content('*');
    const drivercontent = await cache.keys(key);
    res.send(drivercontent);
  },
};
