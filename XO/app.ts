
/*
    Project #2: X-O
    by Meir Yeheskel
    course 91448/4      


    We will create an array of 8 objects out of the abstract class 'XO'.
    Each object represents a possible winning streak - either 3 X's or 3 O's or a combination
    Each object represents a different winning option:
    Line0 - first line
    Line1 - second line
    line2 - third line
    Col0  - first column
    Col1  - second column
    Col2  - third column
    mainDiagonal - the main diagonal that goes from left to right
    secondDiagonal - the second diagonal that goes from right to left

    Each object has a boolean array of size 3 which represents the X's and the O's: 'True' represents 'X' , 'False' represents 'O', 'undefined' represents an empty cell.
         for example: [T,F,undefined] represents: 'X' in the first place, 'O' in the second place and an empty cell in the third place.
    Each object has a Number array of size 2 which represents - how many X's and O's are in the object. 
        for example: array[0]==2 means there are 2 O's in the object, array[1]==3 means there are 3 X's in the object.
    Each time an object is invoked (with the 'update' function, it updates the boolean array with true/false and the counter array with the number of X's/O's)
*/

let arr: XO[] = new Array<XO>(new Line0, new Line1, new Line2, new Col0, new Col1, new Col2, new mainDiagonal, new secondDiagonal); // class XO explained in XO.ts
let matrixDimension = 3;                                                 // matrix dimension is 3
let mat: string[][] = new Array<Array<string>>(matrixDimension);         // create a matrix 3X3 of type string
let i: number, j: number, num: number, index: number, turns: number = 1; // 'i' and 'j' are global variables which represent the row(i) and column(j)
                                                                         // 'num' is a global variable representing the number the player entered
                                                                         // 'index' is a global variable representing the index in the 'XO' array
                                                                         // turns is a global variable representing the number of turns in the game


function initMat(): void {
    for (let i: number = 0; i < mat.length; i++) {      // fill the matrix with numbers 1-9
        mat[i] = new Array(matrixDimension);
        for (let j: number = 0; j < mat[i].length; j++)
            mat[i][j] = `${i * matrixDimension + j + 1}`;
    }

    Print(mat);
}


function nextTurn() {
    do {
        num = Number(prompt("Enter your move")) - 1;    // num will be in the range 0-8
        if (isNaN(num)) alert("Only numbers please");
        else
            if (num < 0 || num > 8) alert("The number must be between 1-9");
            else {
                if (isAvailable(num)) break;
                else alert("This cell is aready taken!")

            }

    } while (true);


    mat[i][j] = "X";
    for (let i: number = 0; i < Math.pow(9, 4); i++)    // wait while displaying the matrix (visual effect only)
        Print(mat);   
    updateObjects(true);     // update the relevant objects with "True" - representing player X's
    for (index = 0; index < arr.length; index++)     // check whether the player won
        if (arr[index].counter[1] == 3)
        {     
        alert("Player wins!\n\nClick 'OK' to see the winning streak");
        let element = document.getElementsByTagName("button");  
        element[0].setAttribute("disabled", "disabled");    // disable the 'Play' button
        break;
        } 
    if (index == arr.length) { // if no winning streak detected (for loop exits with index==arr.length) continue playing with the computer (unless it's a draw)
        if (turns++ > 4) {          // if it's the 5th turn then it must be a draw
            alert("It's a draw!\n\nClick 'OK' to see the draw");
            let element = document.getElementsByTagName("button");
            element[0].setAttribute("disabled", "disabled");    // disable the 'Play' button
        } else playXO();  

    }
   
}

function isAvailable(num:number) : boolean { // the function checks the availability of 'num' , if the space is taken it returns 'False' otherwise it returns 'True'
    i = Math.floor(num / matrixDimension);   // and updates the global variables i (row) and j (column) with the appropriate coordinates
    j = num % matrixDimension;
    if (Number(mat[i][j]) != num + 1) return false;
    return true;
}

function updateObjects(bool:boolean): void {
    arr[i].update(j, bool);                     // update position(column j) on selected line(i)  with false/true
    arr[j + matrixDimension].update(i, bool);   // update position (row i) on selected column (j) with false/true

    if (i == j) arr[matrixDimension * 2].update(i,bool);    // if selection is on main diagonal - update position(i)
    if (i + j == matrixDimension - 1) arr[matrixDimension * 2 + 1].update(i, bool);  // if selection is on secondary diagonal - update position(i)
}

function playXO(): void {
    let flag: boolean = false;  // flag turns 'true' when either the computer wins or the computer blocks the user, so that a random number will be selected 
    for (index = 0; index < arr.length && !flag; index++) 
        if (arr[index].counter[0] == 2 && arr[index].counter[1] == 0) // computer found 2 O's and no X's , so we have an empty cell for a winning 3 O's
        {
            for (let pos: number = 0; pos < matrixDimension; pos++)  // search the for empty cell to win the game
                if (arr[index].position[pos] == undefined) {
                    findEmptyCell(index, pos);  // the function will update the global variables - i and j of the empty cell
                    mat[i][j] = "O"; //  computer wins
                    arr[index].position[pos] = false;
                    flag = true;
                }
        }

        for (let index: number = 0; index < arr.length && !flag; index++)
            if (arr[index].counter[1] == 2 && arr[index].counter[0] == 0)  // computer found 2 X's and no O's , so it will block the player 
            {
                for (let pos: number = 0; pos < matrixDimension; pos++) // search for the empty cell to block the user
                    if (arr[index].position[pos] == undefined) {
                        findEmptyCell(index, pos);
                        mat[i][j] = "O";
                        arr[index].position[pos] = false;
                        flag = true;
                    }

            }

        if (!flag) {    // if computer hasn't won and hasn't blocked the player - draw a random number for a cell that's not taken already
            do {
                num = Math.round(Math.random() * 8); // computer selects a random number between 0-8 thats not already taken
            } while (!isAvailable(num));
            mat[i][j] = "O";
        }
        updateObjects(false); // update the relevant objects with "False" - representing computer O's
        for (let i: number = 0; i < Math.pow(9, 4); i++)    // wait while displaying the matrix (visual effect only)
            Print(mat); 

        if (arr[index-1].counter[0] == 3) {  // check whether the computer won, we already know that 'flag' threw us with 3 O's so 'index-1' is the index of the object of the winning streak
            alert("Computer wins!\n\nClick 'OK' to see the winning streak");
            let element = document.getElementsByTagName("button");
            element[0].setAttribute("disabled", "disabled");    // disable the 'Play' button
        }

}

function findEmptyCell(index: number,pos:number): void {    // assign to the global variables i and j the correct coordinates of the empty cell
    switch (index) {
        case 0:
        case 1:
        case 2: i = index; j = pos; break;
        case 3:
        case 4:
        case 5: i = pos; j = index % 3; break;
        case 6: i = pos; j = pos; break;
        case 7: i = pos; j = 2 - pos;

    }
}


function Print(mat: Array<Array<string>>) {
    let tempstr: string = "";
    for (let i: number = 0; i < mat.length; i++) {
        tempstr += "-------------<br/>";
        for (let j: number = 0; j < mat[i].length; j++) {
            tempstr += `${j ? " " : "| "} ${mat[i][j]} |`; 
        }
        tempstr += "<br/>";
    }
    tempstr += "-------------<br/><br/>";
    tempstr += `<button onclick="nextTurn()">play</button><br/>`;
    let element = document.getElementById("XO");
    element.innerHTML = tempstr;
}