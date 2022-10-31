const { addDoc, collection } = require('firebase/firestore')
const { getFirestore } = require('firebase/firestore')
const { initializeApp } = require('firebase/app')

const firebaseConfig = {
    apiKey: "AIzaSyAZU_hWFOTbNUsmPKogScZZgCs3QHZW_Tw",
    authDomain: "maximus-projeto.firebaseapp.com",
    projectId: "maximus-projeto",
    storageBucket: "maximus-projeto.appspot.com",
    messagingSenderId: "7447715006",
    appId: "1:7447715006:web:430f690c8e0fea5bf752ef"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const Categories = [
    {
        id: '6228fc5cb7e6cb904bbe014b',
        name: 'Rosh',
        displayName: 'Rosh',
        imageUrl:
            'https://imagensemoldes.com.br/wp-content/uploads/2020/11/Desenho-Narguile-PNG.png',
        products: [
            {
                id: '6228fc8bb7e6cb904bbe014e',
                name: 'Strong',
                price: 15,
                imageUrl:
                    'https://images.tcdn.com.br/img/img_prod/640437/zomo_strong_mint_50g_266_1_20201213212429.jpg'
            }
        ]
    }
]
const main = async () => {
    await Promise.all(
        Categories.map(async (category) => {
            await addDoc(collection(db, 'Categories'), category)
        })
    )
}

main().then(() => process.exit())