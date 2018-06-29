"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
/**
* CustomQueryEncoderHelper
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
var CustomQueryEncoderHelper = /** @class */ (function (_super) {
    __extends(CustomQueryEncoderHelper, _super);
    function CustomQueryEncoderHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomQueryEncoderHelper.prototype.encodeKey = function (k) {
        k = _super.prototype.encodeKey.call(this, k);
        return k.replace(/\+/gi, '%2B');
    };
    CustomQueryEncoderHelper.prototype.encodeValue = function (v) {
        v = _super.prototype.encodeValue.call(this, v);
        return v.replace(/\+/gi, '%2B');
    };
    return CustomQueryEncoderHelper;
}(http_1.QueryEncoder));
exports.CustomQueryEncoderHelper = CustomQueryEncoderHelper;
//# sourceMappingURL=encoder.js.map