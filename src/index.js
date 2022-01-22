
// You should implement your task here.
//my solution: we take each element of matrix and if the element order in matrix is even iterate from the end to the beginning and push each element to the output. Otherwise iterate from the start and push each element to the output.
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
