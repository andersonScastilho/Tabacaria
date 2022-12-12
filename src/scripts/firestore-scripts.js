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
    tipeOrMark: [
      {
        id: "6265fdf55548df4h812j54j",
        name: "Zomo",
        imageUrl:
          "https://lh3.googleusercontent.com/1WA0SjRdTS_9XlW1Pqfb3lIComG1liElEBN31Ar8o4GFHfGm24qtx06aeHwPJTvepYRfhASp0RzREHzo0u6RqbtyFV4pPtJR0ASzHRvR82ZSAu660ABqgDMYDJlvXeOFGkvvku64WYxJu2YP8BFj1bvEEwHsl10pyZfBVuZOHEd220qD50_lS60vGoss9JILLUsU33SZu6jxvjhH1FwxZSW8wTWUk1Wkd4X1P8nZMW94avqFTH1VMj9EhTSEQCpKLCNzVHgodiIgfWzmV1sKQQcmM6prRVLdtOKcaB1mCCgN-GCWbtFJTLdyaiU8ShLjCWg1YHAdNvFIDVHoP1PP684CSgfz2L0PuxQ5x_VhxV9xkbXEGHbRYwf8TDWR_QPou3wKRlZUVPxeEnPJ__AVqHBGudhYiui1lS6F0RGJXosJg74vtBw_mGRGgD-imZCDi3QIe7sCOfkWadoxy4ZEsTNGPn-vHXZPwzlYxar0-nkokZ279NEq11PYayQUWuBNCIFqV09YF5Nh9pOITbR2q4V6qveK0J3XWpvYJRoU9FXMe48_QisXXhSuQKpE6OQlh8Hr7RBBL4OKgVhpIMEvaRO-TXyQGKJ1f472_GnC4GJHgqL12TjZ3FfkQwoqa6T146IoE-LxBt02XVp6F8cmTJKm0Z6IgMmaBQC71sDxVy9pnK8iiFVQgGB-HGnpsATx6coerWEaalyAqNwl2TfTj-vTBf02vhpYNEh6Gh7WAXS-Lr0GWTeP8utJ5nU_tlpyYM77Kuu2Gur-BuCQP6cWDJOp24P-n4NtyS66GFzGs_HFNf8LMuS-YLQzujBtD2o9XaS4faZoACdZXtLFNrQ_uaFWMj1OzerNW_lBiXYMJTk0urADYA7TtrTf3AYy2LyFiQ5PYWlMmfVOz91fr2Y0RvBLleXUKhosITBeZEQ-DwWLXZ4=w800-h391-no?authuser=0",
        products: [
          {
            id: "6228fc8bb7e6cb904bbe014s",
            mark: "Zomo",
            name: "Strong Mint",
            price: 20,
            imageUrl:
              "https://images.tcdn.com.br/img/img_prod/640437/zomo_strong_mint_50g_266_1_20201213212429.jpg",
          },
          {
            id: "6228fc8bb7e6cb904bbe01dfd",
            mark: "Zomo",
            name: "Torta de Limão",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe01adf",
            mark: "Zomo",
            name: "Swiss Alps",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe011d5",
            mark: "Zomo",
            name: "Splash Lemon",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbe013d1",
            mark: "Zomo",
            name: "Black Cola",
            price: 20,
            imageUrl: "",
          },
        ],
      },
      {
        id: "6265fdf55548df4h812j54d",
        name: "Ziggi",
        imageUrl:
          "https://lh3.googleusercontent.com/pONxv1u3McpBzXNufB-TFzPBS0ONNXg5uMrE113DinvL32N2nFo05-p517fNR6aHw0ZQhpnZVfow90TFdgyIcBuyzwCO0qXITxlY13wsn3KcGo-dtb0ejupN5AWuChc_WPOX643J5-tQDsic54jEPSTjeX5JixwHQFs3scT5kzwHJZEmOg7lY5-ahq6fYYuTjEJM05BPTdBHhvu59r1iVIaAaUrEFv1k2cqqvWdxre3Ip1y30cn8pEcCTfdr2l0O4TyFwqLIN-Of_jtETWkntkIfVf14zLGN8vY_8EKkMrnaiPfUf39OsWQZccln8WS0rqoqnXUOgStw_2yGLD2rsSkQgtuNE1ii07PIvvqjZ7C0ub42HUF_PsyFyKoagrwhUD1C4dSzRJBPQu5ijc4p5QLmIvzS2-qqWsNOd475UwHiraD213xxINfo-l6kJXCOsi9OAuVvQowEOxgXGSJgvCRdlyYBeuD7Okar-mdm7MmHZgIF87Rd292WLb9tD4adArlM38kdBLFSqic9dtkp1ioYFjkE-68s8vYs93IrjsW8FgSwl2xOqZ9gEwhBejLsGDVF2iCdvDxQ3l7vxe0wPKiTbv85KXD1RCxAvtmS7qwDNA_zxZxD9GrgaHKlOrPXOgneOejseSG4itTgRTUPGRwaLoNn8lp93vrawPdJbqNfKEnzMHAmGe4DOgM5_sqP-Rk1jY5tVCwC5NlC7H7bQ1RWk0v0iVSBIPwFMecCn4xU8kiBaH07XNNFafIH2ll2JLvFvB_MYHEj6BHY_ZN9B7hmEjRk3ddXtlF3-1zLzv8cRalI8Me8ZjYhUuy9J23LC7NW-hnaBPWLucPHyz1-x9faPbd5c4pQrLbzFlS0_Ysisudb8D5OErq0ojipCk7ggJ84_g5a7u96hg4pg75HUwCO8DW-p2ky8YgrvX4BcBw45ts=w1196-h380-no?authuser=0",
        products: [
          {
            id: "6228fc8bb7e6cb904bbe01d5",
            mark: "Ziggi",
            name: "7belo",
            price: 20,
            imageUrl:
              "https://www.tabacariadamata.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/8/689463565_essencia-ziggy-happy-berry.jpg.jpg",
          },
          {
            id: "6228fc8bb7e6cb904bbe01hj",
            mark: "Ziggi",
            name: "Banana",
            price: 20,
            imageUrl:
              "http://d2r9epyceweg5n.cloudfront.net/stores/002/105/028/products/banana-tropical1-0d21b8b5bb4e28ff4916516223357864-640-0.jpg",
          },
          {
            id: "6228fc8bb7e6cb904bbe0dfe",
            mark: "Ziggi",
            name: "Tutti Frutti ",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbeerfe",
            mark: "Ziggi",
            name: "Coco Tropica ",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb9d8dbe0dde",
            mark: "Ziggi",
            name: "Yourgut ",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb9d8dbe0cas",
            mark: "Ziggi",
            name: "Tropical",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb9d8dbeddv1",
            mark: "Ziggi",
            name: "Maracuja",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6cb9d8dbdse5bg",
            mark: "Ziggi",
            name: "Abacaxi",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6cb9d8dbds4dfe",
            mark: "Ziggi",
            name: "Limão",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6d48vldbds4dgd",
            mark: "Ziggi",
            name: "Menta",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6d48vldbds4df5",
            mark: "Ziggi",
            name: "Melancia",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6d48vldbadedfh",
            mark: "Ziggi",
            name: "Acai + Catuaba",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6d48vldbdse5dh",
            mark: "Ziggi",
            name: "Morango e Laranja",
            price: 20,
            imageUrl: "",
          },
          {
            id: "62dfec8bb7e6d48v3as21efxd",
            mark: "Ziggi",
            name: "Uva",
            price: 20,
            imageUrl: "",
          },
        ],
      },
      {
        id: "6265fdf55548df4h8dyige5",
        name: "Pimp",
        imageUrl:
          "https://lh3.googleusercontent.com/yvNUFunsZSdW4eX65SolkqjhHWMUixT3TykExkBabJFwefhBysuNt1Aj8a-54_L2PZ5t_nqyYx6A1im3lCLJf7EHtG9_mU3DbkeoT1l-t2mLqm0O9SU-uBCW2Y1L_w322M4VhuXear2zZrLlCIXkhW-dYoRaDIcZTw0Ak4h0q20pObJHwOmrwmrcpNOf9wMF5PJ0JUhrvNrlIcVaz2MiTmPOGAsdCubarLYVdhBN-byXfejccspW7ODaVkOCglkE6AOtb94UXRi1vo2ILZ2TqpxKuNXBLkAFoQ7x42_bg-XReFJcmiJjjNAYbyR0WpRgSIoXOyPajx9t9EfbZG0GffhgA31OOm-ATBw4yxnq0ZZcLvgB8M_Ez6OMsT6NAaYE83xIxVeFoVN7lRR4CMjfifzAlw6YHRrQ993SJRSq7J7NqGLqgK7ZM-I45C94dZoCi4gzwocRkPnjZSUwCwJZ1af8bhAJxdOQqlH-E2mB-QMSQfhl3ak436P4BnR-dIC3mWwg7eXpG4rmYXaJX69EG54a5Cs9rlZq4Pbmsei4lHaxcqwN08QYjW9lCKXd3cfolU_oKBrg1WSAszBflO4FV4jtSOGvmfM9zfp6B0Pu2YyJepd0cMXU-pDTt1Km6Xr5CWvO1usNVZ0rtR7wBcjWUy2sD-1k99FbqDktc2Tf6-ZaB6__amHWVd-Nb3vJtqF5zV9oxAeH7Px5uorKBoHKPYJovOLVlYOzVBebZovTjbL5GaZYYJpKkh1epTtxojasYd6PmwSKqMtV5cIGM2YtGW4Tuc7Urw5aa7G2Fo0LWFDNF0hDJEGKzEXfSEEq0L28KwPN1iOWC6HdcmoygJ9GgVr-NQOFRYqqtgXAn45nNeiJF3wejZGV3j8vcwCvvXVq9zMVz4Po8V8RtkIzggd3Xxzhizc8mOC1N8D-8cL8D8xAYqc=w640-h324-no?authuser=0",
        products: [
          {
            id: "6228fc8bb7e6cb904bad5e4f5",
            mark: "Pimp",
            name: "Uva",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbfsafçl",
            mark: "Pimp",
            name: "Maça Verde",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6adh84bbe01adf",
            mark: "Pimp",
            name: "Intesity Mint",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7o4s3gu4bbe011d5",
            mark: "Pimp",
            name: "Crazy Sweet",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb9048depc4b1",
            mark: "Pimp",
            name: "Canela",
            price: 20,
            imageUrl: "",
          },
        ],
      },
      {
        id: "6265fdf558ev054h8dyi5ez",
        name: "Nay",
        imageUrl:
          "https://lh3.googleusercontent.com/e5UDM93eedYJH4DsYf14iPua9bXw0RIY_mFKwtsPlnIcY9W4zoQHGE4nl3Gmol1xArx3Jv-ATR9kLH1cBmdjGC-RNbBqARGVRkPOVf4e4gz8gHFaAMHixTDirwWNJNR3_HJYkYp1PZQWpQv9cZ5Byp8ETAlh-flyCjYFEUJqMmwH4vALck8rqmMsSVrC3pGXKEJBu9SlNZEqMgCWMIoRvFj0Kj78S9ycaddl7dgTtFuS8uNuWNycG3V2a6-FS0n60dUCQJ9WY5Dirx1qaglFtHfLh03K4BzMKkwfDKqY8ITlssHrqyDA4Ndfw1FkVVJiegLYZ49uzvkptuwV-efDAzXfkxM2CfynmHuME7WNNBaZghRaazdzVzrmuyJzkw0UhR7LRhZM_QLvBKXkiTxUBoVTXP-7RhtLQSgJLGMMJv0z7-fbelt80d_HLQhkBpB1uO1fGvffkwHkeSoiE_FHmYY0RftRlMqbYQckw2_dYmTDT6i_es2cn9r3NJ9dwxaboLy9K9LVw7O3-Ej_DDANTwNdXbjQXmK9hiPTa7zNYidSrLrH9oiyLfv3A-U99dAyW5R5l6_xsL8dOaz7fnFtyxMFj-NsK462gc0tTLge-gdbt-4SfjXtJuqCiVGYpoKxx35UnWDxtA1lHo0sQG7v5ZVCv1Tw1r1VQJaGBwQKjKbTf2E649DwlFosOkGD-x-VZpq3Oj5EJAY4UxXfMmkt-1sNNnnG6Gf1BhZ1xfMvEOZwAU49vqCPomLuOm5GrWlp4od55HFXrTgv7M2mAgKqGzL5j_xicemVHxv1FrLU3joBgnF0JF-OW3n7K1zIUHzkQKTxCwkGd7hLvZ7VTgFYAWRJW88_PO69Hu6HkK4jlgqT-9jlGxnFY38m0SjTihZwWj3q4YVTL3XP0thxaN30o_zxc7z-vvTL6lP2N3vk0O5Qmz0=s657-no?authuser=0",
        products: [
          {
            id: "6228fc8bb7e6cb9041dsee4f5",
            mark: "Nay",
            name: "Prime Mint",
            price: 25,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6adh84dv4b1adf",
            mark: "Nay",
            name: "Maracuja",
            price: 25,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6adi0e0bd5bdsf",
            mark: "Nay",
            name: "Blue Blend",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7o4s3gu4bbe011dd",
            mark: "Nay",
            name: "Moon",
            price: 25,
            imageUrl: "",
          },
          {
            id: "6228fc8bad7e3b9048depc4gh",
            mark: "Nay",
            name: "Bubbaloo de Uva",
            price: 25,
            imageUrl: "",
          },
          {
            id: "6228fc8bad7e3b9048de5dvp4",
            mark: "Nay",
            name: "Bubbaloo de Tutti",
            price: 25,
            imageUrl: "",
          },
          {
            id: "6228fc8bcjde3b9048de5d4de",
            mark: "Nay",
            name: "Off Mint",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bcsvy3b9048de5d4de",
            mark: "Nay",
            name: "Off Mint",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bcsfdsb9048de5dvds",
            mark: "Nay",
            name: "Lichia",
            price: 20,
            imageUrl: "",
          },
        ],
      },
      {
        id: "6265fdf55548df4h8dyi5ef",
        name: "Onix",
        imageUrl:
          "https://lh3.googleusercontent.com/Y92uUaS_ItsA7FNl2GGFuWX8iaVGKfeEB_G5bULjcVhZYVZOhZ-PciC1nwBao36Ad8bHf1TOIxqX4nBTVga7G7C1TAdkxk90hrqiwfd-o21fnFB9lUl9Pl4z0D6iYSVmaoZeDIT4QOFyErGaETPplgYIcyj22Qt7USkV32OSW-NB5xqZLEkK2pFPfVxp1nGpz0BShVglpX-4cVb26jPLJYL-JSYfYHt69DV_e26gBT2Rb3A4ZiNuS3Xm4ApNNZRjU-YDtEpDiDAATOYMKe5DIO6731JAlYwjfjmuu6xa7P3lyk5kQGoCWgQx-v-vPg-EoxzdA-oNTAPNo-KcVu2Hzco9NENgxQ96nVuZDAn11e5ojqicaZO2Ut9ErQwe68OYTdmpn5eU3U1o257LYnfl80DUDt6y5HTaf4zhCshili24XPKIhJvZs4ILfwPL10a9UYD1d3R0tt-dvVu89hsOwiaNzZWXlB1pDhQYAaWlY3zTrklCvsVALd41ZA4hH7cAPzZHrWmRtZSksCjyyY0OHDAeRb4496h3rDeU3W-q0fPsgNH3bxMcNiYprp1fr8-WS6BL1m0VxQFVRdCLT1F-ctD-KcyV5MbJR_tyARmj4UzSVTwVnfc-asT16cyLoMN6OEyk8iiwAana4PSwga2UeAK-pnoqn0WLucuJiZZAq6TlS3PYDqZ9j5q-udrh622STkr4Px-5NGEQD6TJ59dFww2WcT-nl_LnuhwpNPg-vHL9MU4ArCVVu1LgKIvxEHRUnoCMoxDXp4x47TpVXwn2eo7wPICXVJGcl2OLTWr4kYgmysQDEPD52JrI5vRNrj5UvpvpWXCZuosTxM432wuA0sqYVNekh71jkxoSaeVu97U2FqyS2yLyJw5qMvMxd7oXIphur3t4nlwNlreoy_4g4xMVBCzhHySj_RkerHtwONuRKYQ=s450-no?authuser=0",
        products: [
          {
            id: "6228fc8fvdfdsb9048de54dev",
            mark: "Onix",
            name: "Bananae e açai",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bbfsacd4",
            mark: "Onix",
            name: "Mint",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6adh84bbe4vie3",
            mark: "Onix",
            name: "Danone",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7o4s3gu4bbe087bk",
            mark: "Onix",
            name: "Pera",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb9048dasd5bi",
            mark: "Onix",
            name: "Drops",
            price: 20,
            imageUrl: "",
          },
        ],
      },
      {
        id: "6265fdf558ev054h8dy8der",
        name: "Maximu's",
        imageUrl:
          "https://img.freepik.com/free-photo/selection-various-cocktails-table_140725-2909.jpg?w=2000",
        products: [
          {
            id: "6228fc8bb7e6cb9akd5e4vnb4",
            mark: "Maximu's",
            name: "Prime Mint",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6adh845dpvf1nth",
            mark: "Maximu's",
            name: "Menta Azul",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6adi0e0bd5bdsfg",
            mark: "Maximu's",
            name: "cereja",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7o4s3gu4bbe0de3f4",
            mark: "Maximu's",
            name: "Manga verde",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bad7e3b9048depvoo34",
            mark: "Maximu's",
            name: "Menta",
            price: 15,
            imageUrl: "",
          },
          {
            id: "6228fc8bad7e3b9048d5dpv54",
            mark: "Maximu's",
            name: "Love 66",
            price: 25,
            imageUrl: "",
          },
          {
            id: "6228fc8bcjde3b98dode5d4g4",
            mark: "Maximu's",
            name: "Melancia",
            price: 20,
            imageUrl: "",
          },
          {
            id: "6228fc8bcsvy3b9048de434gb",
            mark: "Maximu's",
            name: "Maracuja",
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
    tipeOrMark: [
      {
        id: "21dfas1f515fdsf58mnjd",
        name: "Drinks",
        imageUrl:
          "https://lh3.googleusercontent.com/K8YdX774hSknS2THbilvVNWIfaGzYlNVhTDrz5PpJBTS99aRYhX44krCDKlks8FZHYEXXZfeKcIc8ge-zdF1Wv5ye_nNn8BqNJSaq0CbFVV_TghPIsDay0QwIdVaXtVDHKdQDaX96CSjdIwusAA6RDSnPBTQKPce9zXNrNKKobNq8DpYYAoAuOIFcgEVF2ESpA2VpvjRygATfMxzU4iJgXf9Xq9EYlaIZbemh6akn-5sNORR15XdYcx8GrFyUzW4ecrxUzoxLFe1GjKf5k5QoT99_oZfsuswevE19ADxYHhZYD5I8VDb51tGB5TRrPtkDTpf05ZOAPYR3gj9Tm59AKdEMvA__QyQrl0Va59vgVZHxmXd0y7WBhm_AjpdWT4_8rBR5VksbjEghBUP-c4eOcJrRgvBo9Nb-QL4HHzo2FGIKm5CJNVHYZ2pMUij7-ukXUsVNVijGNjReOCwqRHiq2fBnaWpvL1O3WxP-dmUvTHpm_R6uaMiV2llP46AQ4s4SoDToTWngm5aM3VUxR-LrAdZm9Wb6VPhjpjJvOKqp0PMZuRQWAD1_YquwTMMn_INFcenexjqJ70kaS__7CKL8ZcBrO6_z8oNqh1C07WI8m1S-yW0oyWCvtbXKu8F2pe_v5idrkVeAX6bMO2tYoncm_Vt73e9m4G8dZ8uzgj_85qCnZcnetT6nV6LDMwjDNKfLtWr3e5D1gM3ngFJMZIZ4hr3KWKd5fuUDw_70zHSXiUElywaMY33D3A3mu6zieig9fBhbWdr0VrKdGyVm9Gi-B6eptTId29jNuPgUezflPD2_UO2PHNBEbC3dyhexK1yeuJeBNoZnZcQv5-iv3SX9Zpw0BiD5W6akt5vUl__TnsHmMa5mh7_wWkVGAK0KNPQjvq3nMjBqZGqiCDvytpOOZvRoAsSbGhm3sx232IoglwqNJE=w237-h189-no?authuser=0",
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
        imageUrl:
          "https://lh3.googleusercontent.com/NHfVzjhWQdWJzbteqEQ7qFVS-oRar4pkztWmh8ejOnHPlO4xaySSuPoZ7N2mznUlrhETPXvFJM9QGTzSllNblsmkIoRMUUozYM5jidpf-t_2fOsyx5B3PfwjaF7e8InagnX_xy8NsGL2DZsk4bFr0ZFYre19v482DH6rojYrGX1sBDQMxrBRIrlUT06YFX5r8g9ONO9XY-GKUOPg7Wjg0qXz6oA9EHhVTfnHBEDQTMs8_soXMtJxQQHTuzYOfMmWZYnrkA_y93HCLPNqgK2omas9CaQy0LKihX0K3ajyd3orU7DIr-TP6IHQZHYKfqI-eIimxmKjib4H1UjXSrferO8V0gl-7-Khuf6xhfBfTx6NpqW-bKe0nx2cJr8meKW6stZAjdkBY-0azcAxFb_gwmR0fB9jCRUBbEEGcnkxLqWrKgpAvwOYxg4KaUxOgaLAEo2UpVqQjQriLUj83YQ6Tmc0CF9WGQY6BipAC227nIKxr_NaRJZSH5TiBrN1Ve7j9_2mGQvpUzVyiRxHaTue6m0tbJakxaoISsBH5k6iXbMz9QyDi1HZ4Nis463PDXhmZ0vrTiPKrwGf8bl-0nWFKOynWY4XPvt6r24xtg72roHdrKT_7mhZSzWiSmomla_hFY2mkX4eYy2-sl_qavdx_AwKwWh-liWmk5PnzH1OkI-M8Kax7ZvtPccAWghzuauUDGMbShuDyXkSkhrIXtlovDkyNSNSMeoW3mJk-uUmHYRxLgoFV7POcRVEbjVBVNNs-tvvXWXj6EDSDoFLqaA1fdonmcsyMUUQ-ufbSQjLfYKt_4HDavi0HodufZhQjxG9y3c4XsUkr5xw88bV2XgF__uJFfJbfO7J3DWz2uqgWxQAuxBlswhPru1RQZOeWda28C4jBtIYqhbE71kcxoLB9F3D321FXi8FD-NSGlbUbL7YCDE=s443-no?authuser=0",
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
      {
        id: "6dfsf1d5fs5f15dsf15eif834b",
        name: "Whisk",
        imageUrl: "",
        products: [
          {
            id: "d5dsaf4ddd8f5sd4f88e3fdf",
            name: "Copo Cavalo Branco",
            price: 25,
            imageUrl: "",
          },
          {
            id: "d5dsaf4ddd8f5sd4f88elvsd",
            name: "Copo Red Label",
            price: 30,
            imageUrl: "",
          },
          {
            id: "d5dsaf4ddd8f5sd4f88dpcvb",
            name: "Copo Jack Daniel's",
            price: 35,
            imageUrl: "",
          },
          {
            id: "d5dsaf4ddd8f5sd4f855sdvi",
            name: "Copo Black Label",
            price: 40,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb904bb8dube",
            name: "Copo Double Black",
            price: 50,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e6cb9048dçvirc",
            name: "Copo Gold Label",
            price: 50,
            imageUrl: "",
          },
          {
            id: "fds55s4456sfsdfee4ef4f5e",
            name: "Combo Cavalo Branco",
            price: 160,
            imageUrl: "",
          },
          {
            id: "6o5evh8bb7e6cb904bbedafe",
            name: "Combo Red Label",
            price: 200,
            imageUrl: "",
          },
          {
            id: "d5e1g4ntjut2j44jtkuj56yt",
            name: "Combo Jack Daniel's",
            price: 280,
            imageUrl: "",
          },
          {
            id: "6dpe538bb7e6cb5d8ev5ge8v",
            name: "Combo Black Label",
            price: 320,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e78dfdasfd4ere2",
            name: "Combo Double Black",
            price: 420,
            imageUrl: "",
          },
          {
            id: "6228fc8bb7e78dfdasfepv4er",
            name: "Combo Gold Label",
            price: 520,
            imageUrl: "",
          },
        ],
      },
      {
        id: "6dfsf1d5fs5f15dsfs5f1",
        name: "Chop Germania Pilsen",
        imageUrl:
          "https://lh3.googleusercontent.com/INEvh0iUKGl4hdKzuEJH2IHAfSWd_JDEzCd09VCyUpKnY1tLZ4m28R8B5NlRvXWi-iesJFWuymyIuNREe4cinqocw8U6WRPLMR0NJa8u-3Efoy27qw4iDLs9zfYk_o4ZNs1153bCfh2R0v59bpKoqXVbuZrmAE4ToR4uW_gH0wvx5RL6yARJnIK6jGzShf1l56fizMbQlm8EejyO3szDoYgO8wWo3Sb79XeXi6i7h8NCtRiVWmYOC0uPs65t7nQIlidbEtKqIoVCcRL4OmVzA_-nw2jEdjCg1Kq9t_AJ9gWH3ir8R878lUfWt4-iWxrbMyERGgiqXGR64w7l8qAdYLZ6JkY9oWwpU4yQYTHTFIsfERDvLrgzok7OsrYp4mwlBOi2RbqSdpt3dWlk7nDNoj0QAxUroJHDdnabs70Kv9RBsV8w0R2ByzSiE8DR0Wq48XkS32R0r3y2SgOU6eMZScIvcRGT-Lqpi7Y4VcVGwAG4Ck13HPtMW5z5VPPnGUhG5LCASvKx_ApQ-w5mxYz18G-wc5E2sdUQShiFIRmA8uJfVd9x9DpyLALFfaRlfWhd1eLxncCv1EqGTVEjXaF-f5N0pZH9q9SyDDL9a4CiLknM89P0bLCJYoNNvwwZjedNS-vYpIRRdDMXohM0lZDz4gpYs2cJc7Dv7aP1fYKT3AZJwjpobX_7fs6EGgqm4DgxkTDde9tOkLru7nt9j_mHQALV0jiDk8q24g_vEABCZi6pgJNbt2XmgfHFO04lPYpe2JCJV68jwHTM04ExdqkRs6Gg8cT-wE0RHkK5nl9UMbd9Lo1M2XinExN66Q-MxcRlLmSEicSSDjoGzm967Wk8uFf-W_z23cXVmLTBK3tsp2tpAPwoBnwEq7TJbO1wItpGrBQna8yGLbSmFyIJmq_ThgiZxDJLmu0Xufzvc_gWCBUDA2M=w1366-h611-no?authuser=0",
        products: [
          {
            id: "d5dsaf4ddd8f5sd4f88evpss",
            name: "Copo Germania Pilsen",
            price: 15,
            imageUrl: "",
          },
          {
            id: "d5dsaf4ddd8f5sd4f85de9bd",
            name: "Torre 2,5L Germania Pilsen",
            price: 60,
            imageUrl: "",
          },
          {
            id: "d5dsaf4ddd8f5sd4f8558dpv",
            name: "Torre 3,5L Germania Pilsen",
            price: 80,
            imageUrl: "",
          },
        ],
      },
      {
        id: "6dfsf1d5fs5f158evf5s15f1",
        name: "Torre de Caipirinha",
        imageUrl:
          "https://lh3.googleusercontent.com/i4dWcMJOw4sptLjKhgo0ZTkadOtSWquEjGceR7iGE8mSWHZ_HlyLGpQZ2TnAbvnFNht4HSmjVIPbAnM-LqzNnRtlsHm5iuayUQk2ZIALkL1n2NSAzFveOEFLaBTsvwMjoY873FmAYacE_jUQzHqPI3gt0eaLSSv5X1jW-92mCmQNP1h42vUjs-HJ9Ul6VcnK5UtWQqaIt6-973vqtCyik7_KunzGGo3LWfzy0SzTrjnlfPiugXcwBoc1h2BTXANmeOgesJJBAzwBdxKAWU5qSEDBTYbAfKsqSVXt-1VeJCBEWBPHa9CRK5gFnNInGaYYHOgG0l4frQX8xzr3sw8GaibOPUgPgx7Zurt0RbZ5Ev1RbKguu1fQ9sgYBp1lUbClivB4PKm63yE-aZGcAQ53IgcKMy9fp7Q8qaeVRw_vyY2aU5Gcgca99vsaryfYrD-MVJffTl3Vr9uGyVddkUmv1K2_Qd2e6_39b9ybntnXCPYpduZTWg0b4zl5e5PqdSDDmuLrtun0cGZWQTyxP88gLHcf7G8DdbYlz6QAxrMKV7Oc7xlhRgRPkuMrndNIrOmoI_Yp1sN-0YRW9OcJWGsKpcFD57l2ClX4rbDd1krbaDsedMlj5xwgEpIoCqqtZlXWu7C5FewBbp8OM9pkAVe26rGFnq-Ts63nSXHrAuG46RDwtszFVuLL5etLQIUpSZEaQb5OIcA7DQKybe6FMHc1y9sJULtb8eFb4BJh_HqaHeVxBgm55hzM2cJW9kTZEjosii1kyv_w3e3tQlbwFQhEQerE1V_GvRCX7d0o6hQOVcb37ncG2d-dd_RmCT_DznaqObC7FGX_gY9Tz5KZLo0B0plcg2x73HB77Esgi6Jps9gz_MiaD7tfWQgQASETGlMWIbatFkz5X51Hy07LjIdUCuHeNNfmUD76o5sCx0kFgu21VFE=w550-h308-no?authuser=0",
        products: [
          {
            id: "d5dsaf4ddd8f8dpvf85ds12d",
            name: "Torre de Caipirinha de vinho c/ yakult",
            price: 100,
            imageUrl: "",
          },
          {
            id: "d5dsaf4ddd8f5sd8dpv5dvh8",
            name: "Torre de Caipirinha de Vodka 3,5L",
            price: 80,
            imageUrl: "",
          },
          {
            id: "d5ds8dpvdd8f5sd8dpv5dxf8",
            name: "Torre de Caipirinha de Vodka c/ yakult 3,5L",
            price: 100,
            imageUrl: "",
          },
        ],
      },
      {
        id: "6dfsf1d5fs5f15dsfidpvs15f1",
        name: "Outros",
        imageUrl:
          "https://lh3.googleusercontent.com/6Gvf_JbQHPPDq2Hggx-CN0o89WnR0ZRlAhIzkDB54I7vScPfoZzbWhZ91-dZxtW898nmXzLul4awCZaFOzIKxh6iWCCFqCQ_7svweI1lF4rW-fYlGoKFzZdxAqSL5KF2udYY1RiT1Auzp8VbTbEq1T2gCSaongjD54n-WODWhmLZymdz0G8l5fm1EthEbj-TyOXkHj_VYd3WNabFoEJO8CWiT-A-RtehrTUPXKHcAAkFmvSE4a54TPEJ1DGguvwy731194tWGJ_BM2ECk5k-zZMJfgB4k4GMYHYRTrllA7LjuGc8uO1mSNKK4J3pwGaLvbaTxoVuZ_ccan7AoqDNnu59TISTN3QTBpnouj1R63Vd7LNfbkQ7Nm8BSY3MAVaIZSBXa6zi_11sg8Fwz5o2vp2bPjYHvPJ_oRikIdhsZK7yUfGdv2K5MayNNTGtMKITJd5iDd0OA2YDjgAVQM_HBd3EI9LCVdKtFx0u8dzRctznUwTLTfTDD5wi1osircJxlTsuqrQldMQfbbi8zaEpqVjUPYKNqy1BUmX-LkX-yrnUIUMtO9zPt-wKKNfQs8712wC-e1w9g6eMu7EFAW3IPHWLatZwOmnZy6jEnreuGNuOVnL-MJ8C6JWYAbM3jX3KQ7bunsld64ovL1yhNK5Wo2LauCZBqx93_BnQvXLTToOLiD33ZBMc-PA1WXUhUFZpZWYNrJIdLb3HP_6WTuMhkXtlT3HJBA9Acp7iNwdkK6KJoUdvkOEydLFTY636wEePZy8QC35gWfGgZlKPYBD3PqSA3a93msr46HJNOUDQ09bGiyuW2ZNGBrC7D-9NFHgfXNSs5qUcNsa1jSbAciX1Q8XpqzLhvKs3enH2aQt1o7WHHRYenNH8R464xSBs_rwXzeR3dreZeDPMV-ZDD5AQr5kJsq8mn1W1r3jFBKqpA5fQE9I=w602-h276-no?authuser=0",
        products: [
          {
            id: "d5dsaf4ddd88dvd4f85dsfa0",
            name: "Coca Cola 350ml",
            price: 5,
            imageUrl: "",
          },
          {
            id: "d5dsaf4dd8dpbd4f85ds1fds",
            name: "Red Bull 250ml",
            price: 10,
            imageUrl:
              "https://www.heineken.com/media-la/01pfxdqq/heineken-original-bottle.png?quality=85",
          },
          {
            id: "d5dsaf4ddd8dgbf4f855dvh8",
            name: "Agua Mineral 300ml",
            price: 3,
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
