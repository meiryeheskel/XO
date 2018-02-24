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
var Col1 = /** @class */ (function (_super) {
    __extends(Col1, _super);
    function Col1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Col1.prototype.update = function (row, bool) {
        this.counter[Number(bool)]++;
        this.position[row] = bool;
    };
    return Col1;
}(XO));
//# sourceMappingURL=Col1.js.map