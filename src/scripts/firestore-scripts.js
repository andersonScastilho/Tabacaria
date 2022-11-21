const { addDoc, collection } = require("firebase/firestore");
const { getFirestore } = require("firebase/firestore");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyBwixB4NgQvnWc3HuqkX8-Q-ntquxq3Y4w",
  authDomain: "maximus-a1103.firebaseapp.com",
  projectId: "maximus-a1103",
  storageBucket: "maximus-a1103.appspot.com",
  messagingSenderId: "1032599396180",
  appId: "1:1032599396180:web:1b2ae760db97bd1bf532c1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Categories = [
  {
    id: "6228fc5cb7e6cb904bbe014r",
    name: "Rosh",
    displayName: "Rosh",
    imageUrl:
      "https://imagensemoldes.com.br/wp-content/uploads/2020/11/Desenho-Narguile-PNG.png",
    marks: [
      {
        id: "6265fdf55548df4h812j54j",
        name: "Zomo",
        products: [
          {
            id: "6228fc8bb7e6cb904bbe014s",
            name: "Strong Mint",
            price: 20,
            imageUrl:
              "https://images.tcdn.com.br/img/img_prod/640437/zomo_strong_mint_50g_266_1_20201213212429.jpg",
          },
          {
            id: "6228fc8bb7e6cb904bbe01dfd",
            name: "Torta de Limão",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe01adf",
            name: "Swiss Alps",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe011d5",
            name: "Splash Lemon",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe013d1",
            name: "Black Cola",
            price: 20,
            imageUrl: "",
          },
        ],
      },
      {
        id: "6265fdf55548df4h812j54d",
        name: "Ziggi",
        products: [
          {
            id: "6228fc8bb7e6cb904bbe01d5",
            name: "7belo",
            price: 20,
            imageUrl:
              "https://www.tabacariadamata.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/8/689463565_essencia-ziggy-happy-berry.jpg.jpg",
          },
          {
            id: "6228fc8bb7e6cb904bbe01hj",
            name: "Banana",
            price: 20,
            imageUrl:
              "http://d2r9epyceweg5n.cloudfront.net/stores/002/105/028/products/banana-tropical1-0d21b8b5bb4e28ff4916516223357864-640-0.jpg",
          },
          {
            id: "6228fc8bb7e6cb904bbe0dfe",
            name: "Tutti Frutti ",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe0dfe",
            name: "Coco Tropica ",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb9d8dbe0dde",
            name: "Yourgut ",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb9d8dbe0cas",
            name: "Tropical",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb9d8dbeddv1",
            name: "Maracuja",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6cb9d8dbds4dfe",
            name: "Abacaxi",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6cb9d8dbds4dfe",
            name: "Limão",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6d48vldbds4dgd",
            name: "Menta",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6d48vldbds4df5",
            name: "Melancia",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6d48vldbadedfh",
            name: "Acai + Catuaba",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6d48vldbdse5dh",
            name: "Morango e Laranja",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6d48v3as21efxd",
            name: "Uva",
            price: 20,
            imageUrl: "",
          },
        ],
      },
    ],
  },
  {
    id: "6228fc5cb7e6cb904bbe014b",
    name: "Bebidas",
    displayName: "Bebidas",
    imageUrl:
      "https://static1.minhavida.com.br/articles/fb/8e/3b/b2/bebidas-destiladas-e-fermentadas-orig-1.jpg",
    tipes: [
      {
        id: "21dfas1f515fdsf58mnjd",
        name: "Drinks",
        products: [
          {
            id: "6228fc8bb7e6cb904bbe014c",
            name: "Caipirinha de vinho",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe01d5",
            name: "Caipirinha de vodka",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe0asf",
            name: "Caipirinha de pinga",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe0adf",
            name: "Caipirinha de vinho c/yakult",
            price: 25,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe0gds",
            name: "Caipirinha de vodka c/yakult",
            price: 25,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe0w1d",
            name: "Caipirinha de cerveja",
            price: 35,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe03ed",
            name: "Gin Tropical",
            price: 25,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe058d",
            name: "Gin Melancia",
            price: 25,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe03s5",
            name: "Gin Verão Maximu's",
            price: 25,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe03da",
            name: "Tequila Jose Cuervo",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbes5ev",
            name: "La Fuego",
            price: 10,
            imageUrl: "",
          },
        ],
      },
      {
        id: "6dfsf1d5fs5f15dsf15f5s15f1",
        name: "Cervejas",
        products: [
          {
            id: "d5dsaf4ddd8f5sd4f85dsfa0",
            name: "Budwiser",
            price: 10,
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQX7BwQT7Msg0i9gG0o3EVEjVnzHxVsQXGrYVRAbtckNoEbNtSqDajkxRZNrTbkKkA4UbRrOrxCjCcmFEomi4n_GlZwnYz5Way33hEZO8aiWMD16SNigyB_WQ&usqp=CAE",
          },
          {
            id: "d5dsaf4ddd8f5sd4f85ds12d",
            name: "Heineken",
            price: 10,
            imageUrl:
              "https://www.heineken.com/media-la/01pfxdqq/heineken-original-bottle.png?quality=85",
          },
          {
            id: "d5dsaf4ddd8f5sd4f855dvh8",
            name: "Corona",
            price: 11,
            imageUrl: "",
          },
          {
            id: "d5dsaf4ddd8f5sd4f855ifvd",
            name: "Eisenbahn",
            price: 9,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe0jym",
            name: "51 Ice",
            price: 10,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe0pik",
            name: "Skol Beats",
            price: 10,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbeab2d",
            name: "Skol Beats GT",
            price: 10,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbedafe",
            name: "Balde Heineken",
            price: 58,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904aetgvks",
            name: "Balde Budwiser",
            price: 50,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb5d8ev5ge8v",
            name: "Balde Corona",
            price: 60,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb5d8ev5d4eb",
            name: "Balde Eisenbahn",
            price: 45,
            imageUrl: "",
          },
        ],
      },
    ],
  },
];
const main = async () => {
  await Promise.all(
    Categories.map(async (category) => {
      await addDoc(collection(db, "Categories"), category);
    })
  );
};

main().then(() => process.exit());
