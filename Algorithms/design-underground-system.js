var UndergroundSystem = function () {
  this.customerMap = {};
  this.timeMap = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.customerMap[id] = {
    s: stationName,
    t,
  };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const { s: startStation, t: startTime } = this.customerMap[id];
  if (!this.timeMap[startStation]) {
    this.timeMap[startStation] = {};
  }
  if (!this.timeMap[startStation][stationName]) {
    this.timeMap[startStation][stationName] = {
      sum: t - startTime,
      len: 1,
    };
  } else {
    this.timeMap[startStation][stationName].sum += t - startTime;
    this.timeMap[startStation][stationName].len++;
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  const { sum, len } = this.timeMap[startStation][endStation];
  return +(sum / len).toFixed(5);
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
