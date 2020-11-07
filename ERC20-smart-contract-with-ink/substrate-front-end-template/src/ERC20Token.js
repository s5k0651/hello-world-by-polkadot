import { Abi, ContractPromise } from '@polkadot/api-contract';
import contractMetadata from './metadata.json';

const abi = new Abi(contractMetadata);
const addr = '5EFxjy3t5y7abkVVFqW4SP2CT8aoCxmPtZ866hVrcEUBvt5B';

export default function ERC20Token (api) {
  return new ContractPromise(api, abi, addr);
}
