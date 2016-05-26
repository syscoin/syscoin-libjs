/// <reference path="../typings/index.d.ts" />
import {IAlias} from './Interfaces';

export class Alias implements IAlias {
  constructor(
    public name: string,
    public value: string,
    public privatevalue: string,
    public txid: string,
    public address: string,
    public ismine: boolean,
    public lastupdate_height: number,
    public expires_in: number,
    public expires_on: number,
    public expired: boolean
  ) {
  }
}
