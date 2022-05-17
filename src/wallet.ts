import { HDNode } from 'thor-devkit'

const word = 'denial kitchen pet squirrel other broom bar gas better priority spoil cross'
const hdNode = HDNode.fromMnemonic(word.split(' '))

let defaultAccounts: string[] = []
for (let i = 0; i < 10; i++) {
	const priv = hdNode.derive(i).privateKey
	defaultAccounts.push('0x' + priv?.toString('hex'))
}

const SoloDefault = {
	mnemonic: word,
	accounts: defaultAccounts
}

const HDWalletDerivationPath =  `m/44'/818'/0'/0`

export { SoloDefault, HDWalletDerivationPath }