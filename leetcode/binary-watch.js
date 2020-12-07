/**
 * @param {number} num
 * @return {string[]}
 * ref: https://leetcode.com/problems/binary-watch
 */

var readBinaryWatch = function(num) {
    var arr = [];
    var results = [];
    var hours = 0;
    var minutes = 0;

    var isValidTime = (hours, minutes) => {
      return hours >= 0 && hours <= 11 && minutes >= 0 && minutes <= 59;
    }
    
    var pushToResults = () => {
        if (num == 0 && isValidTime(hours, minutes)) {
            results.push(`${hours}:${minutes > 9 ? minutes : `0${minutes}`}`);
        }
    }

    var createRandomPosition = (length = 10, index = 0) => {
        for (let i = 0; i <= 1; ++i) {
            if (arr.length === length) {
                return pushToResults();
            }

            if (i === 1 && num > 0) {
                if (index <= 3) {
                   hours += Math.pow(2, index);
                } else {
                    minutes += Math.pow(2, index - 4);
                }
                arr.push(1);
                num--;
            } else if (num > 0) {
                arr.push(0);
           } else {
                return pushToResults();
            }

            createRandomPosition(length, index + 1);
            if (arr.pop() === 1) {
                if (index <= 3) {
                   hours -= Math.pow(2, index);
                } else {
                    minutes -= Math.pow(2, index - 4);
                }
                num++;
            }
        }
    }
    
    createRandomPosition();
    return results;
}; 
