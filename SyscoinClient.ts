/// <reference path="typings/index.d.ts" />
import {Promise} from 'es6-promise';

import {IAlias, IOffer} from './types/Interfaces';
import {Alias} from './types/Alias';
import {Offer} from './types/Offer';

export class SyscoinClient {
  constructor() {

  }

  aliasList() {
    let p: Promise< Array<string> > = new Promise (
      (resolve: (str: Array<string>)=>void, reject: (str: Array<string>)=>void) => {
        let a: Array<string> = ["hello from Promise"];
        resolve(a);
      }
    );

    return p;
  }


}