
class secondDiagonal extends XO {  // class secondDiagonal coordinates: (0,2) , (1,1) , (2,0)

    update(row: number, bool: boolean) {
        this.counter[Number(bool)]++;
        this.position[row] = bool;
    }

}