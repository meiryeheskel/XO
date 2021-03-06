/*
    Project #2: X-O
    by Meir Yeheskel
    course 91448/4


    We will create an array of 8 objects out of the abstract class 'XO'.
    Each object represents a possible winning streak - either 3 X's or 3 O's or a combination
    Each object represents a different winning option:
    Line0 - first line      (index in array -> 0)
    Line1 - second line     (index in array -> 1)
    line2 - third line      (index in array -> 2)
    Col0  - first column    (index in array -> matrix dimension + 0)
    Col1  - second column   (index in array -> matrix dimension + 1)
    Col2  - third column    (index in array -> matrix dimension + 2)
    mainDiagonal - the main diagonal that goes from left to right       (index in array -> matrix dimension + matrix dimension)
    secondDiagonal - the second diagonal that goes from right to left   (index in array -> matrix dimension + matrix dimension + 1)

    Each object has a boolean array of size 3 which represents the X's and the O's: 'True' represents 'X' , 'False' represents 'O', 'undefined' represents an empty cell.
         for example: [T,F,undefined] represents: 'X' in the first place, 'O' in the second place and an empty cell in the third place.
    Each object has a Number array of size 2 which represents - how many X's and O's are in the object.
        for example: array[0]==2 means there are 2 O's in the object, array[1]==3 means there are 3 X's in the object.
    Each time an object is invoked (with the 'update' function, it updates the boolean array with true/false and the counter array with the number of X's/O's)
    
*/
var arr = new Array(new Line0, new Line1, new Line2, new Col0, new Col1, new Col2, new mainDiagonal, new secondDiagonal); // class XO explained in XO.ts
var matrixDimension = 3; // matrix dimension is 3
var mat = new Array(matrixDimension); // create a matrix 3X3 of type string
var i, j, num, index, turns = 1; // 'i' and 'j' are global variables which represent the row(i) and column(j)
// 'num' is a global variable representing the number the player entered
// 'index' is a global variable representing the index in the 'XO' array
// turns is a global variable representing the number of turns in the game
function initMat() {
    for (var i_1 = 0; i_1 < mat.length; i_1++) {
        mat[i_1] = new Array(matrixDimension);
        for (var j_1 = 0; j_1 < mat[i_1].length; j_1++)
            mat[i_1][j_1] = "" + (i_1 * matrixDimension + j_1 + 1);
    }
    Print(mat);
}
function nextTurn() {
    do {
        num = Number(prompt("Enter your move")) - 1; // num will be in the range 0-8
        if (isNaN(num))
            alert("Only numbers please");
        else if (num < 0 || num > 8)
            alert("The number must be between 1-9");
        else {
            if (isAvailable(num))
                break;
            else
                alert("This cell is aready taken!");
        }
    } while (true);
    mat[i][j] = "X";
    for (var i_2 = 0; i_2 < Math.pow(9, 4); i_2++)
        Print(mat);
    updateObjects(true); // update the relevant objects with "True" - representing player X's
    for (index = 0; index < arr.length; index++)
        if (arr[index].counter[1] == 3) {
            alert("Player wins!\n\nClick 'OK' to see the winning streak");
            disablePlayButton();
            break;
        }
    if (index == arr.length) {
        if (turns++ > 4) {
            alert("It's a draw!\n\nClick 'OK' to see the draw");
            disablePlayButton();
        }
        else
            playXO();
    }
}
function isAvailable(num) {
    i = Math.floor(num / matrixDimension); // and updates the global variables i (row) and j (column) with the appropriate coordinates
    j = num % matrixDimension;
    if (Number(mat[i][j]) != num + 1)
        return false;
    return true;
}
function updateObjects(bool) {
    arr[i].update(j, bool); // update position(column j) on selected line(i)  with false/true
    arr[j + matrixDimension].update(i, bool); // update position (row i) on selected column (j) with false/true
    if (i == j)
        arr[matrixDimension * 2].update(i, bool); // if selection is on main diagonal - update position(i)
    if (i + j == matrixDimension - 1)
        arr[matrixDimension * 2 + 1].update(i, bool); // if selection is on secondary diagonal - update position(i)
}
function playXO() {
    var flag = false; // flag turns 'true' when either the computer wins or the computer blocks the user, otherwise a random number will be selected 
    for (index = 0; index < arr.length && !flag; index++)
        if (arr[index].counter[0] == 2 && arr[index].counter[1] == 0) {
            for (var pos = 0; pos < matrixDimension; pos++)
                if (arr[index].position[pos] == undefined) {
                    findEmptyCell(index, pos); // the function will update the global variables - i and j of the empty cell
                    mat[i][j] = "O"; //  computer wins
                    arr[index].position[pos] = false;
                    flag = true;
                    break;
                }
        }
    for (var index_1 = 0; index_1 < arr.length && !flag; index_1++)
        if (arr[index_1].counter[1] == 2 && arr[index_1].counter[0] == 0) {
            for (var pos = 0; pos < matrixDimension; pos++)
                if (arr[index_1].position[pos] == undefined) {
                    findEmptyCell(index_1, pos);
                    mat[i][j] = "O";
                    arr[index_1].position[pos] = false;
                    flag = true;
                    break;
                }
        }
    if (!flag) {
        do {
            num = Math.round(Math.random() * 8); // computer selects a random number between 0-8 thats not already taken
        } while (!isAvailable(num));
        mat[i][j] = "O";
    }
    updateObjects(false); // update the relevant objects with "False" - representing computer O's
    Print(mat);
    if (arr[index - 1].counter[0] == 3) {
        alert("Computer wins!\n\nClick 'OK' to see the winning streak");
        disablePlayButton();
    }
}
function disablePlayButton() {
    var element = document.getElementsByTagName("button");
    element[0].setAttribute("disabled", "disabled");
}
function findEmptyCell(index, pos) {
    switch (index) {
        case 0:
        case 1:
        case 2:
            i = index;
            j = pos;
            break;
        case 3:
        case 4:
        case 5:
            i = pos;
            j = index % 3;
            break;
        case 6:
            i = pos;
            j = pos;
            break;
        case 7:
            i = pos;
            j = 2 - pos;
    }
}
function Print(mat) {
    var tempstr = "";
    for (var i_3 = 0; i_3 < mat.length; i_3++) {
        tempstr += "-------------<br/>";
        for (var j_2 = 0; j_2 < mat[i_3].length; j_2++) {
            tempstr += (j_2 ? " " : "| ") + " " + mat[i_3][j_2] + " |";
        }
        tempstr += "<br/>";
    }
    tempstr += "-------------<br/><br/>";
    tempstr += "<button onclick=\"nextTurn()\">play</button><br/>";
    var element = document.getElementById("XO");
    element.innerHTML = tempstr;
}
//# sourceMappingURL=app.js.map