## Challenge description
Plasm Network supports both WASM and Solidity smart contracts. If you have already deployed your solidity smart contracts, you can also deploy the same contracts on Plasm Network. In this challenge, you will make a Solidity smart contract and deploy the contract on Plasm Network testnet (Dusty Network) by using Solang.

## Deploying Solidity Contract On Plasm Network V1

 ### How to compile using solang:
 ```
 $ solang flipper.sol full_example.sol
 ```
 Alternatively if you want to use the solang docker image, run:
```
$ docker run --rm -it -v $(pwd):/sources hyperledgerlabs/solang:v0.1.3 -v -o /sources /sources/flipper.sol /sources/full_example.sol
```
 ### Submission requirements:

- flipper.wasm (0x18d86db0846c2f0a53bd3858e4db2ea6ea9332551feabd14e03765687f542370)
- **Flipper Contract Instance**: bhtcRSHfmCfmDepUE5d7oHfZ1B6ksKsA3UM1Y3oewXVTUrU

- full_example.wasm (0x5931a92b0d51437308c396037d0ab401434c24ab3df094fa1cb4cbba0b1a87e6)
- **Full_example Contract Instance**: YSvd2BQWSeCJhyfxnNyLQkB5gyn1NFfEtz5S2HvR4948f7j

- **Dusty Account Address**: WMo8rDuzoEDJDRMjnhjdrFC81uRogXQ55z6YRZpJdG8azff
- **Polkadot Account Address**: 1RVqtWu5LraWvQ3D8JckLv4tbBxXmNo8PDSU1MJzMHhB9Vs 

