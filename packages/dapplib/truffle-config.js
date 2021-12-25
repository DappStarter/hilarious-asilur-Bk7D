require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile promote inflict enter bubble topic'; 
let testAccounts = [
"0x153d26d648f0cffb9d03ab16dcb5423d0aa0fa1d09267abef75e8503dbbb7221",
"0x7393f8ecb28f8b73703939bf87265427b8ca596bf9a110537e223e66ffc037fc",
"0x669606d560517aac5b418e043712d69efe944b68bf1597492bc5a5896d1269ad",
"0x1b00be13c0703b1fece8a1f049b3c5adc1af9aaf094585be4e50ceffbe2ebd7a",
"0xba14758b93f60f68a4e5d3c9205214425221c3a9b2414717df1052d3b6fa81cb",
"0xff96a5e47d7cc12583a0b4243083650c0203ff6b1ba5844f5f5d5eba8af3914a",
"0x4ae87709dab45d94ce41774f3f3ba962bd42d3973579118b2c8e067e2f585c34",
"0x3740ad2dc9317aafed3602e43d236010c553e0f4a3a0d14b6dd165ef7e65bf11",
"0x3f6e839aa521d570e81a159654d0a245c5256987be55026a101f0bf282df7f64",
"0xa0f70b9827483263a2e6129add8e6e4360fc8a43f0b089c630172df4b551b26c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

