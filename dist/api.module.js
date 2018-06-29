"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var configuration_1 = require("./configuration");
var aliases_service_1 = require("./api/aliases.service");
var asset_service_1 = require("./api/asset.service");
var blockmarket_service_1 = require("./api/blockmarket.service");
var certificates_service_1 = require("./api/certificates.service");
var escrow_service_1 = require("./api/escrow.service");
var general_service_1 = require("./api/general.service");
var masternodes_service_1 = require("./api/masternodes.service");
var offers_service_1 = require("./api/offers.service");
var ApiModule = /** @class */ (function () {
    function ApiModule(parentModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: configuration_1.Configuration, useFactory: configurationFactory }]
        };
    };
    var ApiModule_1;
    ApiModule = ApiModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, http_1.HttpModule],
            declarations: [],
            exports: [],
            providers: [
                aliases_service_1.AliasesService,
                asset_service_1.AssetService,
                blockmarket_service_1.BlockmarketService,
                certificates_service_1.CertificatesService,
                escrow_service_1.EscrowService,
                general_service_1.GeneralService,
                masternodes_service_1.MasternodesService,
                offers_service_1.OffersService
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [ApiModule])
    ], ApiModule);
    return ApiModule;
}());
exports.ApiModule = ApiModule;
//# sourceMappingURL=api.module.js.map