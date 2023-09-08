module.exports = {
  chainID: 'axelar-dojo-1',
  lcd: 'https://lcd-axelar.imperator.co',
  gasAdjustment: 1.75,
  gasPrices: { uaxl: 0.007 },
  prefix: 'axelar',
  coinType: '118',
  baseAsset: 'uaxl',
  name: 'Axelar',
  icon: process.env.CF_PAGES_URL + '/img/chains/Axelar.svg',
  channels: {
    'phoenix-1': 'channel-11',
    'kaiyo-1': 'channel-14',
    'crescent-1': 'channel-7',
    'juno-1': 'channel-4',
    'osmosis-1': 'channel-3',
    'cosmoshub-4': 'channel-2',
    'carbon-1': 'channel-37',
    'comdex-1': 'channel-31',
    'stride-1': 'channel-64',
    'pacific-1': 'channel-103',
    'archway-1': 'channel-111',
    'neutron-1': 'channel-78',
    'injective-1': 'channel-10',
  },
  explorer: {
    address: 'https://www.mintscan.io/axelar/account/{}',
    tx: 'https://www.mintscan.io/axelar/txs/{}',
    validator: 'https://www.mintscan.io/axelar/validators/{}',
    block: 'https://www.mintscan.io/axelar/blocks/id/{}',
  },
  tokens: [
    {
      token: 'uaxl',
      symbol: 'AXL',
      name: 'Axelar',
      icon: process.env.CF_PAGES_URL + '/img/coins/Axelar.svg',
      decimals: 6,
    },
    {
      token: 'aave-wei',
      symbol: 'axlAAVE',
      name: 'Axelar AAVE',
      icon: process.env.CF_PAGES_URL + '/img/coins/axlAAVE.svg',
      decimals: 18,
      isAxelar: true,
    },
    {
      token: 'link-wei',
      symbol: 'axlLINK',
      name: 'Axelar ChainLink',
      icon: process.env.CF_PAGES_URL + '/img/coins/axlLINK.svg',
      decimals: 18,
      isAxelar: true,
    },
    {
      token: 'dai-wei',
      symbol: 'axlDAI',
      name: 'Axelar DAI',
      icon: process.env.CF_PAGES_URL + '/img/coins/axlDAI.svg',
      decimals: 18,
      isAxelar: true,
    },
    {
      token: 'frax-wei',
      symbol: 'axlFRAX',
      name: 'Axelar Frax',
      icon: process.env.CF_PAGES_URL + '/img/coins/axlFRAX.svg',
      decimals: 18,
      isAxelar: true,
    },
    {
      token: 'wmatic-wei',
      symbol: 'axlMATIC',
      name: 'Axelar Matic',
      icon: process.env.CF_PAGES_URL + '/img/coins/axlMATIC.svg',
      decimals: 18,
      isAxelar: true,
    },
    {
      token: 'uni-wei',
      symbol: 'axlUNI',
      name: 'Axelar Uniswap',
      icon: process.env.CF_PAGES_URL + '/img/coins/axlUNI.svg',
      decimals: 18,
      isAxelar: true,
    },
    {
      token: 'uusdc',
      symbol: 'axlUSDC',
      name: 'Axelar USD Coin',
      icon: process.env.CF_PAGES_URL + '/img/coins/axlUSDC.svg',
      decimals: 6,
      isAxelar: true,
    },
    {
      token: 'uusdt',
      symbol: 'axlUSDT',
      name: 'Axelar USD Tether',
      icon: process.env.CF_PAGES_URL + '/img/coins/axlUSDT.svg',
      decimals: 6,
      isAxelar: true,
    },
    {
      token: 'wbtc-satoshi',
      symbol: 'axlWBTC',
      name: 'Axelar Wrapped Bitcoin',
      icon: process.env.CF_PAGES_URL + '/img/coins/axlWBTC.svg',
      decimals: 8,
      isAxelar: true,
    },
    {
      token: 'weth-wei',
      symbol: 'axlWETH',
      name: 'Axelar Wrapped Ethereum',
      icon: process.env.CF_PAGES_URL + '/img/coins/axlETH.svg',
      decimals: 18,
      isAxelar: true,
    },
    {
      token: 'busd-wei',
      symbol: 'BUSD',
      name: 'Binance USD',
      icon: process.env.CF_PAGES_URL + '/img/coins/Busd.svg',
      decimals: 18,
    },
    {
      token: 'wbnb-wei',
      symbol: 'BNB',
      name: 'Wrapped BNB',
      icon: process.env.CF_PAGES_URL + '/img/coins/Bnb.svg',
      decimals: 18,
    },
    {
      token: 'wavax-wei',
      symbol: 'AVAX',
      name: 'Wrapped AVAX',
      icon: process.env.CF_PAGES_URL + '/img/coins/Avax.svg',
      decimals: 18,
    },
    {
      token: 'dot-planck',
      symbol: 'DOT',
      name: 'Wrapped Polkadot',
      icon: process.env.CF_PAGES_URL + '/img/coins/Dot.svg',
      decimals: 10,
    },
    {
      token: 'frax-wei',
      symbol: 'FRAX',
      name: 'Frax',
      icon: process.env.CF_PAGES_URL + '/img/coins/Frax.svg',
      decimals: 18,
    },
    {
      token: 'ape-wei',
      symbol: 'APE',
      name: 'ApeCoin',
      icon: process.env.CF_PAGES_URL + '/img/coins/Ape.svg',
      decimals: 18,
    },
    {
      token: 'axs-wei',
      symbol: 'AXS',
      name: 'Axie Infinity Shard',
      icon: process.env.CF_PAGES_URL + '/img/coins/Axie.svg',
      decimals: 18,
    },
    {
      token: 'mkr-wei',
      symbol: 'MKR',
      name: 'Maker',
      icon: process.env.CF_PAGES_URL + '/img/coins/Maker.svg',
      decimals: 18,
    },
    {
      token: 'rai-wei',
      symbol: 'RAI',
      name: 'Rai Reflex Index',
      icon: process.env.CF_PAGES_URL + '/img/coins/Rai.png',
      decimals: 18,
    },
    {
      token: 'shib-wei',
      symbol: 'SHIB',
      name: 'Shiba Inu',
      icon: process.env.CF_PAGES_URL + '/img/coins/Shib.svg',
      decimals: 18,
    },
    {
      token: 'wglmr-wei',
      symbol: 'GLMR',
      name: 'Wrapped Moonbeam',
      icon: process.env.CF_PAGES_URL + '/img/coins/Moonbeam.svg',
      decimals: 18,
    },
    {
      token: 'wftm-wei',
      symbol: 'FTM',
      name: 'Wrapped Fantom',
      icon: process.env.CF_PAGES_URL + '/img/coins/Fantom.svg',
      decimals: 18,
    },
    {
      token: 'polygon-uusdc',
      symbol: 'polygon.USDC',
      name: 'USD Coin from Polygon',
      icon: process.env.CF_PAGES_URL + '/img/coins/PolygonUSDC.svg',
      decimals: 6,
    },
    {
      token: 'avalanche-uusdc',
      symbol: 'avalanche.USDC',
      name: 'USD Coin from Avalanche',
      icon: process.env.CF_PAGES_URL + '/img/coins/AvalancheUSDC.svg',
      decimals: 6,
    },
    {
      token: 'wfil-wei',
      symbol: 'axlFIL',
      name: 'Wrapped FIL from Filecoin',
      icon: process.env.CF_PAGES_URL + '/img/coins/Fil.svg',
      decimals: 18,
    },
    {
      token: 'arb-wei',
      symbol: 'ARB',
      name: 'Arbitrum',
      icon: process.env.CF_PAGES_URL + '/img/coins/Arbitrum.svg',
      decimals: 18,
    },
    {
      token: 'pepe-wei',
      symbol: 'PEPE',
      name: 'Pepe',
      icon: process.env.CF_PAGES_URL + '/img/coins/Pepe.svg',
      decimals: 18,
    },
    {
      token: 'cbeth-wei',
      symbol: 'cbETH',
      name: 'Coinbase Wrapped Staked ETH',
      icon: process.env.CF_PAGES_URL + '/img/coins/Cbeth.png',
      decimals: 18,
    },
    {
      token: 'reth-wei',
      symbol: 'rETH',
      name: 'Rocket Pool Ether',
      icon: process.env.CF_PAGES_URL + '/img/coins/Reth.png',
      decimals: 18,
    },
    {
      token: 'sfrxeth-wei',
      symbol: 'sfrxETH',
      name: 'Staked Frax Ether',
      icon: process.env.CF_PAGES_URL + '/img/coins/SfrxETH.svg',
      decimals: 18,
    },
    {
      token: 'wsteth-wei',
      symbol: 'wstETH',
      name: 'Wrapped Lido Staked Ether',
      icon: process.env.CF_PAGES_URL + '/img/coins/WstETH.svg',
      decimals: 18,
    },
  ],
}
