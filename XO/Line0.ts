
class Line0 extends XO {  // class Line0 coordinates: (0,0) , (0,1) , (0,2)

    
    update(col: number, bool: boolean) {
        this.counter[Number(bool)]++;   // counter[0] counts O's , counter[1] counts X's [Number(false) is 0 , Number(true) is 1]
        this.position[col] = bool;
        
    }
   
}