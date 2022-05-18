import { HDNode, address } from 'thor-devkit'

const word = 'denial kitchen pet squirrel other broom bar gas better priority spoil cross'
const hdNode = HDNode.fromMnemonic(word.split(' '))

let privKeys: string[] = []
let accounts: string[] = []
for (let i = 0; i < 10; i++) {
	const priv = hdNode.derive(i).privateKey
	privKeys.push('0x' + priv?.toString('hex'))
	accounts.push(address.fromPublicKey(<Buffer>priv))
}

const SoloDefault = {
	mnemonic: word,
	privKeys: privKeys,
	accounts: accounts
}

const HDWalletDerivationPath =  `m/44'/818'/0'/0`

export { SoloDefault, HDWalletDerivationPath }