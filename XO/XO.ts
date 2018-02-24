
abstract class XO {
    position: boolean[];   // define a boolean array so that 'True' represents 'X' , 'False' represents 'O' and Empty cell represents 'undefined'
    counter: number[];     // define an array counter which will count the number of X's and the number of O's on each inherited class

    constructor() {
        this.position = new Array(3); // create a boolean array of size 3 
        this.counter = [0, 0];    // initialize the counters and count the number of O's in counter[0] and the number of X's in counter[1]   
        
    }
      // 'update' abstract function makes sure that each inherited class will implement this function so that 'num' updates the position of the selection 
      // in each class (either 0 , 1 or 2) and the selected object - 'True' for 'X' and 'False' for 'O'
    abstract update(num:number, bool:boolean);   
        
}

