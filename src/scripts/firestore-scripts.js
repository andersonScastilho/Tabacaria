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
            name: "Strong",
            price: 15,
            imageUrl:
              "https://images.tcdn.com.br/img/img_prod/640437/zomo_strong_mint_50g_266_1_20201213212429.jpg",
          },
          {
            id: "6228fc8bb7e6cb904bbe01dfd",
            name: "Abacaloco",
            price: 15,
            imageUrl:
              "https://cdn.zomoofficial.com/wp-content/uploads/2020/09/ABACALOCO_50G.jpg",
          },
        ],
      },
      {
        id: "6265fdf55548df4h812j54d",
        name: "Ziggi",
        products: [
          {
            id: "6228fc8bb7e6cb904bbe01d5",
            name: "7 belo",
            price: 15,
            imageUrl:
              "https://www.tabacariadamata.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/8/689463565_essencia-ziggy-happy-berry.jpg.jpg",
          },
          {
            id: "6228fc8bb7e6cb904bbe01hj",
            name: "Banana",
            price: 15,
            imageUrl:
              "http://d2r9epyceweg5n.cloudfront.net/stores/002/105/028/products/banana-tropical1-0d21b8b5bb4e28ff4916516223357864-640-0.jpg",
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
            name: "Caipirinha",
            price: 13,
            imageUrl:
              "https://img.estadao.com.br/fotos/crop/1200x1200/resources/jpg/9/3/1532640931039.jpg",
          },
          {
            id: "6228fc8bb7e6cb904bbe01d5",
            name: "Caipirosca",
            price: 12,
            imageUrl:
              "https://i.pinimg.com/600x315/73/b3/47/73b347fe680c4e6e0ee360f93d9e17e8.jpg",
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
            price: 7,
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQX7BwQT7Msg0i9gG0o3EVEjVnzHxVsQXGrYVRAbtckNoEbNtSqDajkxRZNrTbkKkA4UbRrOrxCjCcmFEomi4n_GlZwnYz5Way33hEZO8aiWMD16SNigyB_WQ&usqp=CAE",
          },
          {
            id: "d5dsaf4ddd8f5sd4f85dsfd5",
            name: "Heineken",
            price: 7,
            imageUrl:
              "https://www.heineken.com/media-la/01pfxdqq/heineken-original-bottle.png?quality=85",
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
