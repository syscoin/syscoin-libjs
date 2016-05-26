/// <reference path="../typings/index.d.ts" />

export interface IAlias {
  name: string;
  value: string;
  privatevalue: string;
  txid: string;
  address: string;
  ismine: boolean;
  lastupdate_height: number;
  expires_in: number;
  expires_on: number;
  expired: boolean;
}

export interface IOffer {
  offer: string;
  cert: string;
  txid: string;
  expires_in: number;
  expired_block: number;
  expired: boolean;
  height: number;
  address: string;
  category: string;
  title: string;
  quantity: number;
  currency: string;
  sysprice: number;
  price: string;
  ismine: boolean;
  comission: number;
  offerlink: boolean;
  offerlink_guid: string;
  exclusive_resell: string; //should be bool
  is_private: string;  //should be bool
  btconly: string;  //should be bool
  alias_peg: string;
  description: string;
  alias: string;
  accepts: Array<IOfferAccept>;
}

export interface IOfferAccept {
  id: string;
  txid: string;
  btctxid: string;
  height: number;
  time: number;
  quantity: number;
  currency: string;
  linkofferaccept: string; // should be bool?
  offer_discount_percentage: string; //should be number!
  escrowlink: string; //should be bool?
  systotal: number;
  sysprice: number;
  price: number;
  total: number;
  ismine: boolean;
  paid: boolean;
  pay_message: string;
}

interface IMessage {
  GUID: string;
  time: number;
  from: string;
  to: string;
  subject: string;
  message: string;
}

interface ICertificate {
  cert: string;
  height: number;
  title: string;
  data: string;
  private: string; //should be bool!
  ismine: boolean;
  address: string;
  alias: string;
  expires_in: number;
  expires_on: number;
  expired: boolean;
}

interface IEscrow {
  escrow: string;
  time: number;
  seller: string;
  arbiter: string;
  buyer: string;
  offer: string;
  offertitle: string;
  offeracceptlink: string;
  systotal: number;
  sysfee: number;
  total: string //should be number
  txid: string;
  height: number;
  pay_message: string;
}

interface ITransaction {
  account: string;
  category: string;
  amount: number;
  vout: number;
  fee: number;
  confirmations: number;
  blockhash: string;
  blockindex: number;
  blocktime: number;
  txid: string;
  walletconflictes: Array<any>;
  time: number;
  timerecieved: number;
}

interface ITransactionDetails {
  amount: number;
  fee: number;
  confirmations: number;
  blockhash: string;
  blockindex: number;
  blocktime: number;
  txid: string;
  walletconflicts: Array<any>;
  time: number;
  timerecieved: number;
  details: Array<ITransactionInput>;
  hex:string;
}

interface ITransactionInput {
  account: string;
  address?: string;
  v2address?: string;
  category: string;
  amount: number;
  vout: number;
  fee: number;
}