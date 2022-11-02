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
    products: [
      {
        id: "6228fc8bb7e6cb904bbe014s",
        name: "Strong",
        price: 15,
        imageUrl:
          "https://images.tcdn.com.br/img/img_prod/640437/zomo_strong_mint_50g_266_1_20201213212429.jpg",
      },
      {
        id: "6228fc8bb7e6cb904bbe014s",
        name: "Setebelo",
        price: 18,
        imageUrl:
          "https://images.tcdn.com.br/img/img_prod/640437/zomo_strong_mint_50g_266_1_20201213212429.jpg",
      },
    ],
  },
  {
    id: "6228fc5cb7e6cb904bbe014b",
    name: "Bebidas",
    displayName: "Bebidas",
    imageUrl:
      "https://static1.minhavida.com.br/articles/fb/8e/3b/b2/bebidas-destiladas-e-fermentadas-orig-1.jpg",
    products: [
      {
        id: "6228fc8bb7e6cb904bbe014c",
        name: "Caipirinha",
        price: 13,
        imageUrl:
          "https://img.estadao.com.br/fotos/crop/1200x1200/resources/jpg/9/3/1532640931039.jpg",
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
