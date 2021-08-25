require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture help future spot toy note truth pulse hunt casino slot gift'; 
let testAccounts = [
"0x8aa081f363e4aa6f4aa7d460e1d45ec0b06e9e68d84e84943f183e6c99f4eac2",
"0x65d5cb641e167e5eb73708f3085c812699b9ccab62879893e2603bb8e5cca2f9",
"0xf10121c54cb5c8e0c610012da0c46196ef5e868f017e3fe6eb5d5e5e88d9751d",
"0x55c4f75de05af36fb84ecdc07c17743148c8b2192b301dd365333a83e0a5e6d7",
"0x738b23fe3beec21a004d96e6f151469680b937e05dfb3397ab6d962f64079bef",
"0xd35df58d4f718544758eed897920cccde0a0dc35591a6a004a7fec3c52725d70",
"0x1ed1175204c460307be94d0e23f5e9d46c291ec00d646560966ca22fffaaf7e8",
"0x24caf3352efe8ca113961ebd37c1f53ee86a8167713bd8d7eca458c730dc8f75",
"0x2abee3c88780c3a399699003c17bfbe35dae512e0c3bc2e55f5a09a54e10dfea",
"0x2b4217152afa12c743c4975a259c9b1b071e00209579a8ef6729e2cd343245ec"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


