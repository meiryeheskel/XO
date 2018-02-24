

class mainDiagonal extends XO {  // class line 0 coordinates: (0,0) , (1,1) , (2,2)

    update(row: number, bool: boolean) {
        this.counter[Number(bool)]++;
        this.position[row] = bool;
    }

}