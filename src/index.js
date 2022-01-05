
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let output = [];
    if (matrix && matrix.length > 0) {
        matrix.forEach((element, index) => {
            if (index !== 0 && (index + 1) % 2 === 0) {
                let i = element.length;
                while (i > 0) {
                    output.push(element[i - 1])
                    i--;
                }
            } else {
                let i = 0;
                while (i < element.length) {
                    output.push(element[i])
                    i++;
                }
            }
        });
    }
    return output
}
