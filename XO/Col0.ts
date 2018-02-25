
class Col0 extends XO {  // class Col0 coordinates: (0,0) , (1,0) , (2,0)

    update(row: number, bool: boolean) {
        this.counter[Number(bool)]++;
        this.position[row] = bool;
    }

}