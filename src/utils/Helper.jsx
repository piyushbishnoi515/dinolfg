import plan from '../assets/image/webp/plane.png'
import roadmapTree from '../assets/image/webp/roadtree.png'
import roadmapCartoon from '../assets/image/webp/roaddog.png'
import greenGrass from '../assets/image/webp/roadlastimg.png'


export const ROADMAP_DATA = [
    {
        number: "01", img: plan, items: [
            { heading: "Launch $DINO & Website & Social Media." },
            { heading: "Building the community." },
            { heading: "Marketing Phase 1." },
        ],
    },
    {
        number: "02", img: roadmapTree, items: [
            { heading: "CoinGecko & Coinmarketcap listing." },
            { heading: "Introduction to Buyback & Burning mechanism" },
            { heading: "Marketing Phase 2." },
        ],
    },
    {
        number: "03", img: roadmapCartoon, items: [
            { heading: "Utility and Usecase Introduction." },
            { heading: "CEX Listings" },
            { heading: "Marketing Phase 3." },
        ],
    },
    {
        number: "04", img: greenGrass, items: [
            { heading: "Marketing Phase 4" },
            { heading: "DINO NFT Collection." },
            { heading: "Launch $DINO & Website & Social Media." },
        ],
    }
]
