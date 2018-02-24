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
var Line1 = /** @class */ (function (_super) {
    __extends(Line1, _super);
    function Line1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line1.prototype.update = function (col, bool) {
        this.counter[Number(bool)]++;
        this.position[col] = bool;
    };
    return Line1;
}(XO));
//# sourceMappingURL=Line1.js.map