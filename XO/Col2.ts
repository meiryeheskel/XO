
class Col2 extends XO {  // class Col2 coordinates: (0,2) , (1,2) , (2,2)

    update(row: number, bool: boolean) {
        this.counter[Number(bool)]++;
        this.position[row] = bool;
    }

}