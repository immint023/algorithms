/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 * ref: https://leetcode.com/problems/maximum-units-on-a-truck
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => -a[1] + b[1]);

    const boxTypesLength = boxTypes.length;
    let max = 0;
    let boxesCount = 0;
    
    for (let i = 0; i < boxTypesLength; ++i) {
        const boxType = boxTypes[i];
        const possibleBoxCount = boxesCount + boxType[0] <= truckSize ? boxType[0] : truckSize - boxesCount;
        
        boxesCount += possibleBoxCount;
        max += possibleBoxCount * boxType[1];
        if (boxesCount === truckSize) break;
    }
    
    return max;
};
