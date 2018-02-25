

class mainDiagonal extends XO {  // class mainDiagonal coordinates: (0,0) , (1,1) , (2,2)

    update(row: number, bool: boolean) {
        this.counter[Number(bool)]++;
        this.position[row] = bool;
    }

}