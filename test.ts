import {SyscoinClient} from './SyscoinClient';

var client:SyscoinClient = new SyscoinClient();

client.aliasList().then((st) => {
  console.log(st[0]);
});