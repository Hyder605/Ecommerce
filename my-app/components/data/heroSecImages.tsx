import ShoeHero from '../../components/assets/shoe_hero.png'
import ShoeHero2 from "../assets/shoe_hero2.png"
import ShoeHero3 from "../assets/shoe_hero3.png"




export const HeroSecImageList  = [
  {
    id:1,
    slug:"front",
    url: ShoeHero,
    shoeName: "Trainer Shoe",
    Price:250,
    Catergory:"Training",
    variationsImage:[
      {
      name:"front",
      imageurl:ShoeHero3
    },
      {
        name:"back",
        imageurl:ShoeHero
      },
      {
        name:"side",
        imageurl:ShoeHero3
      },
    ]
  },

  {
    id:2,
    slug:"back",
    url: ShoeHero2,
    shoeName: "Sports Shoe",
    Price:350,
    Catergory:"Casual",
    variationsImage:[
      {
        name:"front",
      imageurl:ShoeHero2
    },
      {
        name:"back",
        imageurl:ShoeHero
      },
      {
        name:"side",
        imageurl:ShoeHero3
      },
    ]
  },

  {
    id:3,
    slug:"side",
    url: ShoeHero3,
    shoeName: "Running Shoe",
    Price:200,
    Catergory:"Training",
    variationsImage:[
      {
        name:"front",
      imageurl:ShoeHero2
    },
      {
        name:"back",
        imageurl:ShoeHero
      },
      {
        name:"side",
        imageurl:ShoeHero3
      },
    ]

  },
  {
    id:4,
    slug:"side2",
    url: ShoeHero3,
    shoeName: "Mountaineers Shoe",
    Price:450,
    Catergory:"Sports",
    variationsImage:[
      {
        name:"front",
      imageurl:ShoeHero
    },
      {
        name:"back",
        imageurl:ShoeHero2
      },
      {
        name:"side",
        imageurl:ShoeHero3
      },
    ]

  }
];
  