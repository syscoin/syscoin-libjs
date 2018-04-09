export * from './aliases.service';
import {AliasesService} from './aliases.service';
import {AssetService} from './asset.service';
import {BlockmarketService} from './blockmarket.service';
import {CertificatesService} from './certificates.service';
import {EscrowService} from './escrow.service';
import {GeneralService} from './general.service';
import {MasternodesService} from './masternodes.service';
import {OffersService} from './offers.service';

export * from './asset.service';
export * from './blockmarket.service';
export * from './certificates.service';
export * from './escrow.service';
export * from './general.service';
export * from './masternodes.service';
export * from './offers.service';
export const APIS = [AliasesService, AssetService, BlockmarketService, CertificatesService, EscrowService, GeneralService, MasternodesService, OffersService];
