/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const directions = ['right', 'down', 'left', 'up'];
    const spiral = [];
    
    let x = 0, y = 0;
    let n = 0;
    
    function getDirection(n) {
        return directions[n % directions.length];
    }
    
    const moveStrategy = {
        right: () => {
            return [y, x + 1];
        },
        down: () => {
            return [y + 1, x];
        },
        left: () => {
            return [y, x - 1];
        },
        up: () => {
            return [y - 1, x];
        }
    }
    
    function move() {
        const [_y, _x] = moveStrategy[getDirection(n)]();
        if (matrix[_y] && matrix[_y][_x] !== undefined) {
            y = _y;
            x = _x;
        } else {
            [y, x] = moveStrategy[getDirection(++n)]()
        }
    } 
    
    
    for (let i = 0, length = matrix.length * matrix[0].length; i < length; ++i) {
        spiral.push(matrix[y][x]);
        matrix[y][x] = undefined;
        move();
    }
    
    return spiral;
};
