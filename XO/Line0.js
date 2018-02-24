var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Line0 = /** @class */ (function (_super) {
    __extends(Line0, _super);
    function Line0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line0.prototype.update = function (col, bool) {
        this.counter[Number(bool)]++; // counter[0] counts O's , counter[1] counts X's [Number(false) is 0 , Number(true) is 1]
        this.position[col] = bool;
    };
    return Line0;
}(XO));
//# sourceMappingURL=Line0.js.map