module.exports = {
  chainID: 'cosmoshub-4',
  lcd: 'https://cosmoshub-4.terra.dev',
  gasAdjustment: 1.75,
  gasPrices: { uatom: 0.025 },
  prefix: 'cosmos',
  coinType: '118',
  baseAsset: 'uatom',
  name: 'Cosmos',
  icon: process.env.CF_PAGES_URL + '/img/chains/Cosmos.svg',
  channels: {
    'phoenix-1': 'channel-339',
    'axelar-dojo-1': 'channel-293',
    'carbon-1': 'channel-342',
    'akashnet-2': 'channel-184',
    'crescent-1': 'channel-326',
    'juno-1': 'channel-207',
    'kaiyo-1': 'channel-343',
    'osmosis-1': 'channel-141',
    'stride-1': 'channel-391',
    'pacific-1': 'channel-584',
    'archway-1': 'channel-623',
    'noble-1': 'channel-536',
    'stafihub-1': 'channel-369',
    'neutron-1': 'channel-569',
    'injective-1': 'channel-220',
    'kava_2222-10': 'channel-277',
  },
  explorer: {
    address: 'https://www.mintscan.io/cosmos/account/{}',
    tx: 'https://www.mintscan.io/cosmos/txs/{}',
    validator: 'https://www.mintscan.io/cosmos/validators/{}',
    block: 'https://www.mintscan.io/cosmos/blocks/id/{}',
  },
  tokens: [
    {
      token: 'uatom',
      symbol: 'ATOM',
      name: 'Cosmos',
      icon: process.env.CF_PAGES_URL + '/img/coins/Cosmos.svg',
      decimals: 6,
    },
  ],
}
