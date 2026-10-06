type Item = {
    name: string
    description: string
    score: number
    image: string
}

export const items: Item[] = [
    {
        name: "Minecraft",
        description: "自由に世界を作って遊べるゲーム",
        score: 5,
        image: "https://store-jp.nintendo.com/on/demandware.static/-/Sites-all-master-catalog/ja_JP/dw83b582a9/products/D70010000000965/heroBanner/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a.jpg",
    },
    {
        name: "Tetris",
        description: "シンプルだけど奥が深いパズルゲーム",
        score: 4,
        image: "./images/tetris.jpg",
    },
    {
        name: "Mario",
        description: "誰でも楽しめるアクションゲーム",
        score: 5,
        image: "https://www.nintendo.com/jp/character/mario/top/img/top/img-mario-01_02.png",
    },
]
