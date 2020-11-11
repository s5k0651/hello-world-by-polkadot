
const { ApiPromise, WsProvider } = require('@polkadot/api');
const wsProvider = new WsProvider('wss://rpc.polkadot.io');

async function main() {
    console.log("Fetching latest block info from the polkadot network...");
    const api = await ApiPromise.create({ provider: wsProvider });
    const block = await api.rpc.chain.getBlock()
    console.log("-------------------------------------------------------------------------");
    console.log(block.toJSON())
    console.log("-------------------------------------------------------------------------");
}

main().finally(() => process.exit());
