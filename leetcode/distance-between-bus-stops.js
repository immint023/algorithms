/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 * ref: https://leetcode.com/problems/distance-between-bus-stops
 */

var clockWise = (distance, start, des) => {
    var long = 0;
    var index = start;
    while (index !== des) {
        long += distance[index];
        index++;
        if (index === distance.length) index = 0;
    }
    return long;
};

var counterClockWise = (distance, start, des) => {
    var long = 0;
    var index = start;
    while (index !== des) {
        if (index === 0) index = distance.length;
        index--;
        long += distance[index];
    }
    return long;
};

var distanceBetweenBusStops = function(distance, start, destination) {
    const clockwiseLong = clockWise(distance, start, destination);
    const counterClockwiseLong = counterClockWise(distance, start, destination);
    
    return clockwiseLong < counterClockwiseLong ? clockwiseLong : counterClockwiseLong;
};
