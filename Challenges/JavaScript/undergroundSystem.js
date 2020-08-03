class UndergroundSystem {
	constructor() {
		this.checkedIn = {};
		this.times = {};
	}
	checkIn(id, stationName, t) {
		this.checkedIn[id] = [stationName, t];
	}
	checkOut(id, stationName, t) {
		let start = this.checkedIn[id];

		if (!this.times[`${start[0]}${stationName}`]) {
			this.times[`${start[0]}${stationName}`] = [t - start[1], 1];
		} else {
			let lastTime = this.times[`${start[0]}${stationName}`][0];
			let lastLen = this.times[`${start[0]}${stationName}`][1];
			let newTime = lastTime + (t - start[1]);
			this.times[`${start[0]}${stationName}`] = [newTime, lastLen + 1];
		}
	}
	getAverageTime(startStation, endStation) {
		return (
			this.times[`${startStation}${endStation}`][0] /
			this.times[`${startStation}${endStation}`][1]
		);
	}
}
