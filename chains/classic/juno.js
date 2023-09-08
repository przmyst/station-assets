module.exports = {
  chainID: 'juno-1',
  lcd: 'https://lcd-juno.mib.tech',
  gasAdjustment: 1.75,
  gasPrices: { ujuno: 0.0025 },
  prefix: 'juno',
  coinType: '118',
  baseAsset: 'ujuno',
  name: 'Juno',
  icon: process.env.CF_PAGES_URL + '/img/chains/Juno.svg',
  channels: {
    'columbus-5': 'channel-27',
  },
  explorer: {
    address: 'https://www.mintscan.io/juno/account/{}',
    tx: 'https://www.mintscan.io/juno/txs/{}',
    validator: 'https://www.mintscan.io/juno/validators/{}',
    block: 'https://www.mintscan.io/juno/blocks/id/{}',
  },
  tokens: [
    {
      token: 'ujuno',
      symbol: 'JUNO',
      name: 'Juno',
      icon: process.env.CF_PAGES_URL + '/img/coins/Juno.svg',
      decimals: 6,
    },
    {
      token: 'juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
      symbol: 'ampJUNO',
      name: 'ERIS Amplified JUNO',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampJuno.svg',
      decimals: 6,
    },
    {
      token: 'juno173c59crjqeec28cpzs7n0y7hm4cd308zda8z6j4cnl6pct3stenseg2dxp',
      symbol: 'STEAK',
      name: 'Steak Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/SteakToken.png',
      decimals: 6,
    },
    {
      token: 'juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt',
      symbol: 'AQUA',
      name: 'Aqua',
      icon: process.env.CF_PAGES_URL + '/img/coins/Aqua.png',
      decimals: 6,
    },
    {
      token: 'juno1w7kspnu3j4hmzvsltsk00xujfa84sf502vs2zjcawl03vgn7vj3sww9mh7',
      symbol: 'AQUA',
      name: 'Aqua',
      icon: process.env.CF_PAGES_URL + '/img/coins/Aqua.png',
      decimals: 6,
    },
    {
      token: 'juno1hy0ky3pe742phd4w55tdfej0ez55h4jx4g06rp4wsa0mne9wzudqy4hum2',
      symbol: 'ARTO',
      name: 'Arto DAO',
      icon: process.env.CF_PAGES_URL + '/img/coins/ArtoDAO.png',
      decimals: 6,
    },
    {
      token: 'juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
      symbol: 'bJuno',
      name: 'bJuno',
      icon: process.env.CF_PAGES_URL + '/img/coins/bJuno.png',
      decimals: 6,
    },
    {
      token: 'juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      symbol: 'BLOCK',
      name: 'Block',
      icon: process.env.CF_PAGES_URL + '/img/coins/Block.png',
      decimals: 6,
    },
    {
      token: 'juno17r2vpc5enkyfe2xle9sedxdq3msfpacwcfp9rnr6jc3e7v6av0jqmfyfzp',
      symbol: 'BOOB',
      name: 'BOOBA',
      icon: '',
      decimals: 6,
    },
    {
      token: 'juno1vaeuky9hqacenay9nmuualugvv54tdhyt2wsvhnjasx9s946hhmqaq3kh7',
      symbol: 'BFOT',
      name: 'Burned Fortis Oeconomia Token',
      icon:
        process.env.CF_PAGES_URL +
        '/img/coins/BurnedFortis Oeconomia Token.png',
      decimals: 10,
    },
    {
      token: 'juno1vn38rzq0wc7zczp4dhy0h5y5kxh2jjzeahwe30c9cc6dw3lkyk5qn5rmfa',
      symbol: 'CANLAB',
      name: 'CANLAB',
      icon: process.env.CF_PAGES_URL + '/img/coins/CANLAB.png',
      decimals: 3,
    },
    {
      token: 'juno1t8dnpktypue65q0hjz7tr3cvqypgj5vkxhd2twvng4a2ywa3j25spjuk6z',
      symbol: 'PRIMO',
      name: 'Cardinal Finance ',
      icon: process.env.CF_PAGES_URL + '/img/coins/CardinalFinance .png',
      decimals: 6,
    },
    {
      token: 'juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
      symbol: 'CASA',
      name: 'CASA',
      icon: process.env.CF_PAGES_URL + '/img/coins/CASA.png',
      decimals: 6,
    },
    {
      token: 'juno1cl2ewl842wcnagz5psd68z4dpp4gfxrrm9atm807uvyyg235h85stg7awy',
      symbol: 'COIN',
      name: 'CoinDex',
      icon: process.env.CF_PAGES_URL + '/img/coins/CoinDex.png',
      decimals: 6,
    },
    {
      token: 'juno1x02k67asfmjawgc96dj8nxq6se3fmx36gedgs5hvkjegdhfy97rs3jgj2h',
      symbol: 'CZAR',
      name: 'CZAR',
      icon: process.env.CF_PAGES_URL + '/img/coins/CZAR.png',
      decimals: 6,
    },
    {
      token: 'juno1p32te9zfhd99ehpxfd06hka6hc9p7tv5kyl5909mzedg5klze09qrg08ry',
      symbol: 'DAISY',
      name: 'Daisy Finance ',
      icon: process.env.CF_PAGES_URL + '/img/coins/DaisyFinance .png',
      decimals: 6,
    },
    {
      token: 'juno1gzys54drag6753qq75mkt3yhjwyv4rp698kfvesh0wcy5737z4tsn0chtm',
      symbol: 'FUTURE',
      name: 'FUTURE OF',
      icon: process.env.CF_PAGES_URL + '/img/coins/FUTUREOF.png',
      decimals: 6,
    },
    {
      token: 'juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      symbol: 'GLTO',
      name: 'Gelotto',
      icon: process.env.CF_PAGES_URL + '/img/coins/Gelotto.png',
      decimals: 6,
    },
    {
      token: 'juno10ynpq4wchr4ruu6mhrfh29495ep4cja5vjnkhz3j5lrgcsap9vtssyeekl',
      symbol: 'gFOT',
      name: 'Grand Fortis Oeconomia Token',
      icon: '',
      decimals: 10,
    },
    {
      token: 'juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      symbol: 'HOPE',
      name: 'HOPE Galaxy',
      icon: process.env.CF_PAGES_URL + '/img/coins/HOPEGalaxy.png',
      decimals: 6,
    },
    {
      token: 'juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
      symbol: 'HOWL',
      name: 'HOWL',
      icon: process.env.CF_PAGES_URL + '/img/coins/HOWL.png',
      decimals: 6,
    },
    {
      token: 'juno1pshrvuw5ng2q4nwcsuceypjkp48d95gmcgjdxlus2ytm4k5kvz2s7t9ldx',
      symbol: 'HULC',
      name: 'Hulcat',
      icon: process.env.CF_PAGES_URL + '/img/coins/Hulcat.png',
      decimals: 6,
    },
    {
      token: 'juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      symbol: 'JOE',
      name: 'JoeDAO',
      icon: process.env.CF_PAGES_URL + '/img/coins/JoeDAO.png',
      decimals: 6,
    },
    {
      token: 'juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
      symbol: 'KLEO',
      name: 'Kleomedes',
      icon: process.env.CF_PAGES_URL + '/img/coins/Kleomedes.png',
      decimals: 6,
    },
    {
      token: 'juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      symbol: 'Loop',
      name: 'Loop',
      icon: process.env.CF_PAGES_URL + '/img/coins/Loop.png',
      decimals: 6,
    },
    {
      token: 'juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      symbol: 'MARBLE',
      name: 'MARBLE',
      icon: process.env.CF_PAGES_URL + '/img/coins/MARBLE.png',
      decimals: 3,
    },
    {
      token: 'juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      symbol: 'MUSE',
      name: 'MUSE',
      icon: process.env.CF_PAGES_URL + '/img/coins/MUSE.png',
      decimals: 6,
    },
    {
      token: 'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      symbol: 'NETA',
      name: 'NETA',
      icon: process.env.CF_PAGES_URL + '/img/coins/NETA.png',
      decimals: 6,
    },
    {
      token: 'juno17r8dyxuj25muaudhgqgx4xrg6gzr6tvzem6gwtpprnfld58yggcqjhhkjy',
      symbol: 'NMN',
      name: 'OpenNMN',
      icon: process.env.CF_PAGES_URL + '/img/coins/OpenNMN.png',
      decimals: 6,
    },
    {
      token: 'juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
      symbol: 'PHMN',
      name: 'POSTHUMAN',
      icon: process.env.CF_PAGES_URL + '/img/coins/POSTHUMAN.png',
      decimals: 6,
    },
    {
      token: 'juno13926947pmrjly5p9hf5juey65c6rget0gqrnx3us3r6pvnpf4hwqm8mchy',
      symbol: 'PUNK',
      name: 'PUNK',
      icon: process.env.CF_PAGES_URL + '/img/coins/PUNK.png',
      decimals: 6,
    },
    {
      token: 'juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      symbol: 'RAC',
      name: 'RAC',
      icon: process.env.CF_PAGES_URL + '/img/coins/RAC.png',
      decimals: 6,
    },
    {
      token: 'juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      symbol: 'RAW',
      name: 'Raw',
      icon: process.env.CF_PAGES_URL + '/img/coins/Raw.png',
      decimals: 6,
    },
    {
      token: 'juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
      symbol: 'SGNL',
      name: 'Signal',
      icon: process.env.CF_PAGES_URL + '/img/coins/Signal.png',
      decimals: 6,
    },
    {
      token: 'juno17c7zyezg3m8p2tf9hqgue9jhahvle70d59e8j9nmrvhw9anrpk8qxlrghx',
      symbol: 'sFOT',
      name: 'Stable Fortis Oeconomia Token',
      icon: '',
      decimals: 10,
    },
    {
      token: 'juno147t4fd3tny6hws6rha9xs5gah9qa6g7hrjv9tuvv6ce6m25sy39sq6yv52',
      symbol: 'DRGN',
      name: 'Stake Dragons',
      icon: process.env.CF_PAGES_URL + '/img/coins/StakeDragons.png',
      decimals: 6,
    },
    {
      token: 'juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      symbol: 'bJUNO',
      name: 'StakeEasy bJUNO',
      icon: process.env.CF_PAGES_URL + '/img/coins/StakeEasybJUNO.png',
      decimals: 6,
    },
    {
      token: 'juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      symbol: 'SEASY',
      name: 'StakeEasy governance token',
      icon:
        process.env.CF_PAGES_URL + '/img/coins/StakeEasygovernance token.png',
      decimals: 6,
    },
    {
      token: 'juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      symbol: 'seJUNO',
      name: 'StakeEasy seJUNO',
      icon: process.env.CF_PAGES_URL + '/img/coins/StakeEasyseJUNO.png',
      decimals: 6,
    },
    {
      token: 'juno1wurfx334prlceydmda3aecldn2xh4axhqtly05n8gptgl69ee7msrewg6y',
      symbol: 'TUCK',
      name: 'Tuckermint',
      icon: process.env.CF_PAGES_URL + '/img/coins/Tuckermint.png',
      decimals: 3,
    },
    {
      token: 'juno1kqx9rhc8ksx52tukdx797k4rjrhkgfh4gljs04ql97hmnnkgyvxs5cqt7d',
      symbol: 'VERSE',
      name: 'UniverseDAO',
      icon: process.env.CF_PAGES_URL + '/img/coins/UniverseDAO.png',
      decimals: 6,
    },
    {
      token: 'juno1naunqzk6jseqeqhq43nm6kdneraws2rkmteprjzppw6j9xcrurxqx0ld9e',
      symbol: 'wyJUNO',
      name: 'wyJUNO',
      icon: process.env.CF_PAGES_URL + '/img/coins/wyJUNO.png',
      decimals: 6,
    },
    {
      token: 'juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
      symbol: 'WYND',
      name: 'WYND',
      icon: process.env.CF_PAGES_URL + '/img/coins/WYND.svg',
      decimals: 6,
    },
    {
      token: 'juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
      symbol: 'bJUNO',
      name: 'boneJUNO',
      icon: '',
      decimals: 6,
    },
    {
      token: 'juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
      symbol: 'DHK',
      name: 'DHK',
      icon: process.env.CF_PAGES_URL + '/img/coins/DHK.svg',
      decimals: 0,
    },
    {
      token: 'juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
      symbol: 'ASVT',
      name: 'Another.Software Validator Token',
      icon:
        process.env.CF_PAGES_URL +
        '/img/coins/Another.SoftwareValidator Token.png',
      decimals: 6,
    },
    {
      token: 'juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
      symbol: 'GKEY',
      name: 'GKey',
      icon: process.env.CF_PAGES_URL + '/img/coins/GKey.svg',
      decimals: 6,
    },
    {
      token: 'juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      symbol: 'BJUNO',
      name: 'StakeEasy bJUNO',
      icon: process.env.CF_PAGES_URL + '/img/coins/StakeEasybJUNO.svg',
      decimals: 6,
    },
    {
      token: 'juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
      symbol: 'SOLAR',
      name: 'Solarbank DAO',
      icon: process.env.CF_PAGES_URL + '/img/coins/SolarbankDAO.svg',
      decimals: 6,
    },
    {
      token: 'juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
      symbol: 'FURY',
      name: 'Fanfury',
      icon: process.env.CF_PAGES_URL + '/img/coins/Fanfury.png',
      decimals: 6,
    },
    {
      token: 'juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
      symbol: 'HOPERS',
      name: 'Hopers',
      icon: process.env.CF_PAGES_URL + '/img/coins/Hopers.svg',
      decimals: 6,
    },
    {
      token: 'juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
      symbol: 'NRIDE',
      name: 'nRide Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/nRideToken.svg',
      decimals: 6,
    },
    {
      token: 'juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
      symbol: 'FOX',
      name: 'Juno Fox',
      icon: process.env.CF_PAGES_URL + '/img/coins/JunoFox.png',
      decimals: 6,
    },
    {
      token: 'juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
      symbol: 'GRDN',
      name: 'Guardian',
      icon: process.env.CF_PAGES_URL + '/img/coins/Guardian.png',
      decimals: 6,
    },
    {
      token: 'juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
      symbol: 'MNPU',
      name: 'Mini Punks',
      icon: process.env.CF_PAGES_URL + '/img/coins/MiniPunks.svg',
      decimals: 6,
    },
    {
      token: 'juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
      symbol: 'SHIBAC',
      name: 'ShibaCosmos',
      icon: process.env.CF_PAGES_URL + '/img/coins/ShibaCosmos.png',
      decimals: 6,
    },
    {
      token: 'juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
      symbol: 'SKOJ',
      name: 'Sikoba Token',
      icon: process.env.CF_PAGES_URL + '/img/coins/SikobaToken.svg',
      decimals: 6,
    },
    {
      token: 'juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
      symbol: 'CLST',
      name: 'Celestims',
      icon: process.env.CF_PAGES_URL + '/img/coins/Celestims.png',
      decimals: 6,
    },
    {
      token: 'juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
      symbol: 'OSDOGE',
      name: 'Osmosis Doge',
      icon: process.env.CF_PAGES_URL + '/img/coins/OsmosisDoge.png',
      decimals: 6,
    },
    {
      token: 'juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
      symbol: 'APEMOS',
      name: 'Apemos',
      icon: process.env.CF_PAGES_URL + '/img/coins/Apemos.png',
      decimals: 6,
    },
    {
      token: 'juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
      symbol: 'INVDRS',
      name: 'Invaders',
      icon: process.env.CF_PAGES_URL + '/img/coins/Invaders.png',
      decimals: 6,
    },
    {
      token: 'juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
      symbol: 'DOGA',
      name: 'Doge Apr',
      icon: process.env.CF_PAGES_URL + '/img/coins/DogeApr.png',
      decimals: 6,
    },
    {
      token: 'juno1zqrj3ta4u7ylv0wqzd8t8q3jrr9rdmn43zuzp9zemeunecnhy8fss778g7',
      symbol: 'PEPE',
      name: 'Osmo Pepe',
      icon: process.env.CF_PAGES_URL + '/img/coins/OsmoPepe.png',
      decimals: 6,
    },
    {
      token: 'juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
      symbol: 'CATMOS',
      name: 'Catmos',
      icon: process.env.CF_PAGES_URL + '/img/coins/Catmos.png',
      decimals: 6,
    },
    {
      token: 'juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
      symbol: 'SUMMIT',
      name: 'Summit',
      icon: process.env.CF_PAGES_URL + '/img/coins/Summit.png',
      decimals: 6,
    },
    {
      token: 'juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
      symbol: 'SPACER',
      name: 'Spacer',
      icon: process.env.CF_PAGES_URL + '/img/coins/Spacer.png',
      decimals: 6,
    },
    {
      token: 'juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
      symbol: 'LIGHT',
      name: 'LIGHT',
      icon: process.env.CF_PAGES_URL + '/img/coins/LIGHT.png',
      decimals: 9,
    },
    {
      token: 'juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
      symbol: 'MILE',
      name: 'Mille',
      icon: process.env.CF_PAGES_URL + '/img/coins/Mille.png',
      decimals: 6,
    },
    {
      token: 'juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
      symbol: 'MANNA',
      name: 'Manna',
      icon: process.env.CF_PAGES_URL + '/img/coins/Manna.png',
      decimals: 6,
    },
    {
      token: 'juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
      symbol: 'VOID',
      name: 'Void',
      icon: process.env.CF_PAGES_URL + '/img/coins/Void.png',
      decimals: 6,
    },
    {
      token: 'juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
      symbol: 'SLCA',
      name: 'Silica',
      icon: process.env.CF_PAGES_URL + '/img/coins/Silica.png',
      decimals: 6,
    },
    {
      token: 'juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
      symbol: 'PEPEC',
      name: 'Pepec',
      icon: process.env.CF_PAGES_URL + '/img/coins/Pepec.png',
      decimals: 6,
    },
  ],
}
