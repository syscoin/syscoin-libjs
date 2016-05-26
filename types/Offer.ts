/// <reference path="../typings/index.d.ts" />
import {IOffer, IOfferAccept} from './Interfaces';

export class Offer implements IOffer {
  constructor(
    public offer: string,
    public cert: string,
    public txid: string,
    public expires_in: number,
    public expired_block: number,
    public expired: boolean,
    public height: number,
    public address: string,
    public category: string,
    public title: string,
    public quantity: number,
    public currency: string,
    public sysprice: number,
    public price: string,
    public ismine: boolean,
    public comission: number,
    public offerlink: boolean,
    public offerlink_guid: string,
    public exclusive_resell: string,
    public is_private: string,
    public btconly: string,
    public alias_peg: string,
    public description: string,
    public alias: string,
    public accepts: Array<IOfferAccept>
  ) {

  }
}