var jName = {
    ISL: {name: 'アイスランド', region: 'NorthEurope'},
    IRL: {name: 'アイルランド', region: 'WestEurope'},
    AZE: {name: 'アゼルバイジャン', region: 'EastEurope'},
    AFG: {name: 'アフガニスタン', region: 'MiddleEast'},
    USA: {name: 'アメリカ合衆国', region: 'NorthAmerica'},
    ARE: {name: 'アラブ首長国連邦', region: 'MiddleEast'},
    DZA: {name: 'アルジェリア', region: 'NorthAfrica'},
    ARG: {name: 'アルゼンチン', region: 'SouthAmerica'},
    ALB: {name: 'アルバニア', region: 'EastEurope'},
    ARM: {name: 'アルメニア', region: 'EastEurope'},
    AGO: {name: 'アンゴラ', region: 'SouthAfrica'},
    ATG: {name: 'アンティグア・バーブーダ', region: 'CentralAmerica'},
    AND: {name: 'アンドラ', region: 'WestEurope'},
    YEM: {name: 'イエメン', region: 'MiddleEast'},
    GBR: {name: 'イギリス', region: 'WestEurope'},
    ISR: {name: 'イスラエル', region: 'MiddleEast'},
    ITA: {name: 'イタリア', region: 'WestEurope'},
    IRQ: {name: 'イラク', region: 'MiddleEast'},
    IRN: {name: 'イラン', region: 'MiddleEast'},
    IND: {name: 'インド', region: 'SouthAsia'},
    IDN: {name: 'インドネシア', region: 'SoutheastAsia'},
    UGA: {name: 'ウガンダ', region: 'CentralAfrica'},
    UKR: {name: 'ウクライナ', region: 'EastEurope'},
    UZB: {name: 'ウズベキスタン', region: 'CentralAsia'},
    URY: {name: 'ウルグアイ', region: 'SouthAmerica'},
    ECU: {name: 'エクアドル', region: 'SouthAmerica'},
    EGY: {name: 'エジプト', region: 'NorthAfrica'},
    EST: {name: 'エストニア', region: 'EastEurope'},
    ETH: {name: 'エチオピア', region: 'EastAfrica'},
    ERI: {name: 'エリトリア', region: 'EastAfrica'},
    SLV: {name: 'エルサルバドル', region: 'CentralAmerica'},
    AUS: {name: 'オーストラリア', region: 'Oceania'},
    AUT: {name: 'オーストリア', region: 'EastEurope'},
    OMN: {name: 'オマーン', region: 'MiddleEast'},
    NLD: {name: 'オランダ', region: 'WestEurope'},
    ANT: {name: 'オランダ領アンティル', region: 'CentralAmerica'},
    GHA: {name: 'ガーナ', region: 'WestAfrica'},
    CPV: {name: 'カーボベルデ', region: 'WestAfrica'},
    GUY: {name: 'ガイアナ', region: 'SouthAmerica'},
    KAZ: {name: 'カザフスタン', region: 'CentralAsia'},
    QAT: {name: 'カタール', region: 'MiddleEast'},
    CAN: {name: 'カナダ', region: 'NorthAmerica'},
    GAB: {name: 'ガボン', region: 'CentralAfrica'},
    CMR: {name: 'カメルーン', region: 'CentralAfrica'},
    GMB: {name: 'ガンビア', region: 'WestAfrica'},
    KHM: {name: 'カンボジア', region: 'SoutheastAsia'},
    GIN: {name: 'ギニア', region: 'WestAfrica'},
    GNB: {name: 'ギニアビサウ', region: 'WestAfrica'},
    CYP: {name: 'キプロス', region: 'Mediterranean'},
    CUB: {name: 'キューバ', region: 'CentralAmerica'},
    GRC: {name: 'ギリシャ', region: 'WestEurope'},
    KIR: {name: 'キリバス', region: 'Oceania'},
    KGZ: {name: 'キルギス', region: 'CentralAsia'},
    GTM: {name: 'グアテマラ', region: 'CentralAmerica'},
    KWT: {name: 'クウェート', region: 'MiddleEast'},
    GRL: {name: 'グリーンランド', region: 'NorthEurope'},
    GEO: {name: 'グルジア', region: 'EastEurope'},
    GRD: {name: 'グレナダ', region: 'CentralAmerica'},
    HRV: {name: 'クロアチア', region: 'EastEurope'},
    KEN: {name: 'ケニア', region: 'EastAfrica'},
    CIV: {name: 'コートジボワール', region: 'WestAfrica'},
    CRI: {name: 'コスタリカ', region: 'CentralAmerica'},
    COM: {name: 'コモロ', region: 'IndianOcean'},
    COL: {name: 'コロンビア', region: 'SouthAmerica'},
    COG: {name: 'コンゴ共和国', region: 'CentralAfrica'},
    SAU: {name: 'サウジアラビア', region: 'MiddleEast'},
    WSM: {name: 'サモア', region: 'Oceania'},
    STP: {name: 'サントメ・プリンシペ', region: 'CentralAfrica'},
    ZMB: {name: 'ザンビア', region: 'SouthAfrica'},
    SMR: {name: 'サンマリノ', region: 'WestEurope'},
    SLE: {name: 'シエラレオネ', region: 'WestAfrica'},
    DJI: {name: 'ジブチ', region: 'EastAfrica'},
    JAM: {name: 'ジャマイカ', region: 'CentralAmerica'},
    SYR: {name: 'シリア', region: 'MiddleEast'},
    SGP: {name: 'シンガポール', region: 'SoutheastAsia'},
    ZWE: {name: 'ジンバブエ', region: 'SouthAfrica'},
    CHE: {name: 'スイス', region: 'WestEurope'},
    SWE: {name: 'スウェーデン', region: 'NorthEurope'},
    SDN: {name: 'スーダン', region: 'EastAfrica'},
    ESP: {name: 'スペイン', region: 'WestEurope'},
    SUR: {name: 'スリナム', region: 'SouthAmerica'},
    LKA: {name: 'スリランカ', region: 'SouthAsia'},
    SVK: {name: 'スロバキア', region: 'EastEurope'},
    SVN: {name: 'スロベニア', region: 'EastEurope'},
    SWZ: {name: 'スワジランド', region: 'SouthAfrica'},
    SYC: {name: 'セーシェル', region: 'IndianOcean'},
    GNQ: {name: '赤道ギニア', region: 'CentralAfrica'},
    SEN: {name: 'セネガル', region: 'WestAfrica'},
    KNA: {name: 'セントクリストファー・ネイビス', region: 'CentralAmerica'},
    VCT: {name: 'セントビンセントおよびグレナディーン諸島', region: 'CentralAmerica'},
    LCA: {name: 'セントルシア', region: 'CentralAmerica'},
    SOM: {name: 'ソマリア', region: 'EastAfrica'},
    SLB: {name: 'ソロモン諸島', region: 'Oceania'},
    THA: {name: 'タイ', region: 'SoutheastAsia'},
    KOR: {name: '大韓民国', region: 'EastAsia'},
    TJK: {name: 'タジキスタン', region: 'CentralAsia'},
    TZA: {name: 'タンザニア', region: 'EastAfrica'},
    CZE: {name: 'チェコ', region: 'EastEurope'},
    TCD: {name: 'チャド', region: 'CentralAfrica'},
    CAF: {name: '中央アフリカ', region: 'CentralAfrica'},
    CHN: {name: '中華人民共和国', region: 'EastAsia'},
    TUN: {name: 'チュニジア', region: 'NorthAfrica'},
    PRK: {name: '朝鮮民主主義人民共和国', region: 'EastAsia'},
    CHL: {name: 'チリ', region: 'SouthAmerica'},
    TUV: {name: 'ツバル', region: 'Oceania'},
    DNK: {name: 'デンマーク', region: 'NorthEurope'},
    DEU: {name: 'ドイツ', region: 'WestEurope'},
    TGO: {name: 'トーゴ', region: 'WestAfrica'},
    DOM: {name: 'ドミニカ共和国', region: 'CentralAmerica'},
    DMA: {name: 'ドミニカ国', region: 'CentralAmerica'},
    TTO: {name: 'トリニダード・トバゴ', region: 'CentralAmerica'},
    TKM: {name: 'トルクメニスタン', region: 'CentralAsia'},
    TUR: {name: 'トルコ', region: 'MiddleEast'},
    TON: {name: 'トンガ', region: 'Oceania'},
    NGA: {name: 'ナイジェリア', region: 'CentralAfrica'},
    NRU: {name: 'ナウル', region: 'Oceania'},
    NAM: {name: 'ナミビア', region: 'SouthAfrica'},
    NIC: {name: 'ニカラグア', region: 'CentralAmerica'},
    NER: {name: 'ニジェール', region: 'CentralAfrica'},
    JPN: {name: '日本', region: 'EastAsia'},
    NZL: {name: 'ニュージーランド', region: 'Oceania'},
    NPL: {name: 'ネパール', region: 'SouthAsia'},
    NOR: {name: 'ノルウェー', region: 'NorthEurope'},
    BHR: {name: 'バーレーン', region: 'MiddleEast'},
    HTI: {name: 'ハイチ', region: 'CentralAmerica'},
    PAK: {name: 'パキスタン', region: 'SouthAsia'},
    VAT: {name: 'バチカン市国', region: 'WestEurope'},
    PAN: {name: 'パナマ', region: 'CentralAmerica'},
    VUT: {name: 'バヌアツ', region: 'Oceania'},
    BHS: {name: 'バハマ', region: 'CentralAmerica'},
    PNG: {name: 'パプアニューギニア', region: 'Oceania'},
    PLW: {name: 'パラオ', region: 'Oceania'},
    PRY: {name: 'パラグアイ', region: 'SouthAmerica'},
    BRB: {name: 'バルバドス', region: 'CentralAmerica'},
    HUN: {name: 'ハンガリー', region: 'EastEurope'},
    BGD: {name: 'バングラデシュ', region: 'SouthAsia'},
    FJI: {name: 'フィジー', region: 'Oceania'},
    PHL: {name: 'フィリピン', region: 'SoutheastAsia'},
    FIN: {name: 'フィンランド', region: 'NorthEurope'},
    BTN: {name: 'ブータン', region: 'SouthAsia'},
    BRA: {name: 'ブラジル', region: 'SouthAmerica'},
    FRA: {name: 'フランス', region: 'WestEurope'},
    BGR: {name: 'ブルガリア', region: 'EastEurope'},
    BFA: {name: 'ブルキナファソ', region: 'WestAfrica'},
    BRN: {name: 'ブルネイ', region: 'SoutheastAsia'},
    BDI: {name: 'ブルンジ', region: 'CentralAfrica'},
    VNM: {name: 'ベトナム', region: 'SoutheastAsia'},
    BEN: {name: 'ベナン', region: 'WestAfrica'},
    VEN: {name: 'ベネズエラ', region: 'SouthAmerica'},
    BLR: {name: 'ベラルーシ', region: 'EastEurope'},
    BLZ: {name: 'ベリーズ', region: 'CentralAmerica'},
    PER: {name: 'ペルー', region: 'SouthAmerica'},
    BEL: {name: 'ベルギー', region: 'WestEurope'},
    POL: {name: 'ポーランド', region: 'EastEurope'},
    BIH: {name: 'ボスニア・ヘルツェゴビナ', region: 'EastEurope'},
    BWA: {name: 'ボツワナ', region: 'SouthAfrica'},
    BOL: {name: 'ボリビア', region: 'SouthAmerica'},
    PRT: {name: 'ポルトガル', region: 'WestEurope'},
    HND: {name: 'ホンジュラス', region: 'CentralAmerica'},
    MHL: {name: 'マーシャル諸島', region: 'Oceania'},
    MKD: {name: 'マケドニア', region: 'EastEurope'},
    MDG: {name: 'マダガスカル', region: 'IndianOcean'},
    MWI: {name: 'マラウイ', region: 'SouthAfrica'},
    MLI: {name: 'マリ', region: 'WestAfrica'},
    MLT: {name: 'マルタ', region: 'Mediterranean'},
    MYS: {name: 'マレーシア', region: 'SoutheastAsia'},
    FSM: {name: 'ミクロネシア連邦', region: 'Oceania'},
    ZAF: {name: '南アフリカ', region: 'SouthAfrica'},
    MMR: {name: 'ミャンマー', region: 'SoutheastAsia'},
    MEX: {name: 'メキシコ', region: 'CentralAmerica'},
    MUS: {name: 'モーリシャス', region: 'SouthAfrica'},
    MRT: {name: 'モーリタニア', region: 'WestAfrica'},
    MOZ: {name: 'モザンビーク', region: 'SouthAfrica'},
    MCO: {name: 'モナコ', region: 'WestEurope'},
    MDV: {name: 'モルディブ', region: 'IndianOcean'},
    MDA: {name: 'モルドバ', region: 'EastEurope'},
    MAR: {name: 'モロッコ', region: 'NorthAfrica'},
    MNG: {name: 'モンゴル', region: 'EastAsia'},
    JOR: {name: 'ヨルダン', region: 'MiddleEast'},
    LAO: {name: 'ラオス', region: 'SoutheastAsia'},
    LVA: {name: 'ラトビア', region: 'EastEurope'},
    LTU: {name: 'リトアニア', region: 'EastEurope'},
    LBY: {name: 'リビア', region: 'NorthAfrica'},
    LIE: {name: 'リヒテンシュタイン', region: 'WestEurope'},
    LBR: {name: 'リベリア', region: 'WestAfrica'},
    ROU: {name: 'ルーマニア', region: 'EastEurope'},
    LUX: {name: 'ルクセンブルク', region: 'WestEurope'},
    RWA: {name: 'ルワンダ', region: 'CentralAfrica'},
    LSO: {name: 'レソト', region: 'SouthAfrica'},
    LBN: {name: 'レバノン', region: 'MiddleEast'},
    RUS: {name: 'ロシア', region: 'Russia'},
    ATA: {name: '南極', region: 'land'},
    ATF: {name: '南方・南極地域', region: 'land'},
    COD: {name: 'コンゴ民主共和國', region: 'CentralAfrica'},
    FLK: {name: 'フォークランド諸島', region: 'SouthAmerica'},
    GUF: {name: 'フランス領ギアナ', region: 'SouthAmerica'},
    MNE: {name: 'モンテネグロ', region: 'EastEurope'},
    PSE: {name: 'ヨルダン川西岸地区', region: 'MiddleEast'},
    TWN: {name: '台湾', region: 'EastAsia'},
    TLS: {name: '東ティモール', region: 'SoutheastAsia'},
    SRB: {name: 'セルビア', region: 'EastEurope'},
    SSD: {name: '南スーダン', region: 'SouthAfrica'},
    ESH: {name: '西サハラ', region: 'NorthAfrica'},
    PRI: {name: 'プエルトリコ', region: 'SouthAmerica'},
    NCL: {name: 'ニューカレドニア', region: 'Oceania'},
    MNE: {name: 'モンテネグロ', region: 'EastEurope'},
    '-99': {name: 'unkown', region: 'unkown'}
};
