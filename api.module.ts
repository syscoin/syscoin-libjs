import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';

import { AliasesService } from './api/aliases.service';
import { BlockmarketService } from './api/blockmarket.service';
import { CertificatesService } from './api/certificates.service';
import { EscrowService } from './api/escrow.service';
import { GeneralService } from './api/general.service';
import { MessagingService } from './api/messaging.service';
import { OffersService } from './api/offers.service';

@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [],
  exports:      [],
  providers:    [ AliasesService, BlockmarketService, CertificatesService, EscrowService, GeneralService, MessagingService, OffersService ]
})
export class ApiModule {
    public static forConfig(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ {provide: Configuration, useFactory: configurationFactory}]
        }
    }
}
