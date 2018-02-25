
class Line1 extends XO {  // class Line1 coordinates: (1,0) , (1,1) , (1,2)

    update(col: number, bool: boolean) {
        this.counter[Number(bool)]++;
        this.position[col] = bool;
    }

}