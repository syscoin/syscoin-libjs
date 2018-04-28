import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';

import { AliasesService } from './api/aliases.service';
import { AssetService } from './api/asset.service';
import { BlockmarketService } from './api/blockmarket.service';
import { CertificatesService } from './api/certificates.service';
import { EscrowService } from './api/escrow.service';
import { GeneralService } from './api/general.service';
import { MasternodesService } from './api/masternodes.service';
import { OffersService } from './api/offers.service';

@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [],
  exports:      [],
  providers: [
    AliasesService,
    AssetService,
    BlockmarketService,
    CertificatesService,
    EscrowService,
    GeneralService,
    MasternodesService,
    OffersService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
