
class Line2 extends XO {  // class Line2 coordinates: (2,0) , (2,1) , (2,2)

    update(col: number, bool: boolean) {
        this.counter[Number(bool)]++;
        this.position[col] = bool;
    }

}