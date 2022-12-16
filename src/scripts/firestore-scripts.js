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
    subCategories: [
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
            imageUrl:
              "https://lh3.googleusercontent.com/KnpmCKut6FCiopvcBxsCykQIoGdsgu0IQ6Z5H8QTbwCdA--SGELlk9CXSURd1U1P18uLrbbv_cjD8kRlzVoT7vhxX8htE10mW_LT3NFiQO_4B1Z0qbxZb8uAflpM1BmuH3CkP1piVHz8vd7w-a43HgCPO69NwQMQ5iuTyyZlM7n7CmOFDnIw9Uge09tKAhQtVvA6AgoGbUPIfb0pe2HUHUbUtiLYQrF4wkt25iI71EPTsARxAM1NJfpf46DPDPRJ4KI4v6CZZjUdklXEjvu7JkC4Ku4vp4PjAICg9WgpVvN6Vk8ALNYwLchRxFVkciJ2t53-f5VpyujyMLv86Ini3tFcoOTuwTRPW9VX1xZoQbM8UUcY8KPsj-MJOg2Z_S3YqSuHOvDpvCJRfP_OXNN3VKEy3g800mExVO9c7VR_T_f_aMwx81uswgppX-XPhRPNZQrkKqqU2W5lS2a6fzzBAlJVgOkiOmSIAWaSArwtr9-A1C0l0U7mJ-YqXSNavcLsEtUBK6bgndmzgS-tnSoea4gtolVp4THEnjuZ9XjTbF1tVnngmpT7DVy20WZZj65-i52dhRJ7jOhCdloJEzWw33xs_A_OoG-dCOST-KwYX1Xvq7_9zwvIzBUGYx7aUfHJWvJv1cGSKuWh4AoE84YoLQBpJQqOrJUmYe9n_7zXJeut3LcvpLMXoiG6osR2lW6iswbv3FngO4GI1xhvH6XtoAjVsSyk7eXiTtXKefI70U31Dd9p8AJXj4Q3xqp1fbtczAqWx_R1Dgunm6jM-Rs3JAzi8xEMetYCEi8WI8qO1QslLTn1BOEykL4sVoXpQAjtjlzxG6iVEks4Lh9xBsGXMbXNQjX8V0EpMUg9efYs-I3xuoHG9XxmlMwnrlFDi_GXcOattSszzAEiLopaRsSWgw4SFnZHd4ejwt4KTRjai8YGXcc=s500-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6cb904bbe01adf",
            mark: "Zomo",
            name: "Swiss Alps",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/3IujGCDpUOvu5L4OCXQQpnjhu_PUVPxzXGWTZlj7lU89o2yld4qpBos2EdLtS089zPdcraOpjd4hkeD-ovs4EMsW3w9unIujSgVNtQqzz1Y4Wf6EO6J05ia3cBFH5vCiawL5iMhXeajC9tXZDSys_P-J2G4fDDN2zwQL6i1VETCJavwIXVJNfEHZf81kOKDYWoMy89gCiGhZMCP-b7bIO_qNI3lmYI7tw7l51Ur6d-ukMi-hXMaWe1PqiPfc7YoFDOX9M7esuZJo6nwLlzH6ryZ9V4-U604gIRpVRQOe_G8oOrBBWi6lqkuQHnqlDVYwekbnSwOulYkXRG8ETVrfju2Y86Jy4Hie_U1jG2mnK0jd3vYFoCDBsT4eTkyOAkFwEP28cwPWPCAQIqmGuPYnzWOG5ydm8dK3f7iZBE69NEWodGiu4vRbN5YdZ5SKWm1zFl4rHauy6_BOeeei58TD99zEbci-SfE7JBCY1TPLtaN7jSRBosRZtlK9WiFQsgcOCoVvZxSj22f5-C1t2T2pmDuppAK1Nct818omoxVC8SKNGo1ORIiPw6rYpaDoPv3x9V3eWNGZsUvQdlZWg6OC6lOr2hvkC9VDVgFW9pwBByKHRPu6IZbwjkCixJggaYlKEua2apa9vCkzFakbG_pcbE5v71pW5PPi96G9kPdqPF2ZfNtrfs-HbRVxnmaCPTCT1pg2cTSH0MMJqB3AMdD6tZ5mLw3gJCtir1Ycmcxb0u5UDe0jqJLvSpvsI5ndcwAM3Y3lYzi6RMy6zE8mNLm9x668kQCTBOAmg-Quudy3v8qRsnQPccY5Z_iLJ752AsBcuemuMX5e0IamcNx-DoYPktPFIg-O2gF8E-pJDRo5p0aqFswM6yxuk0trtBwOMiG6x2ozsrsd6enNSumfe2sKmaMvqlJd-O1wnaUM82vazJPqYSo=s220-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6cb904bbe011d5",
            mark: "Zomo",
            name: "Splash Lemon",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/PEGUArIr-ZP5-OWP1nShEN3WWcXv_8BK6KLOBMZfkT2efWJTN8sWizhFENKNKBXky83lj_aMdcVTq3xKhpcp0DEP_K6SYstZqdrex6WWKSJjrr2oPKCfdFWZECtNKu_ugDOOPQqkWLA3-7_1-j95z0Huwv0iIb-ZzOWxbwb4tFmFZDWTeuza6eNOot6xCudG3Vk7KaPMKAd_CyD2lJHARNUtTKPb4e25DQZu_V7ZfPYwjjL9v29eREb56ItCulkHnYsDEWXUTjgw6mrTvX2AdBOdoAy1Rb4BgPkh5anAQcuUQ3mHz7Q2OV_JrW8gO_OuFeK5yrvEk7rYGGW-dUesEEYZIjLrXurbSzuo5fXa2t-vW8XUjP8OcF3t6tQfOTpfdyb95sxCp1A8pKt7Of67iiaJjM48HtlljH0BwPQOEY8u2qVEFCZkocbQovXejfhCmCMrylK-l_vkglDg-lIRgvktJZflqQZFzeharkYxY6LbxBu7i40WOkA_LfdKD6cSFuRl-TXgGrWS-rW1oJdLfz2N-tgcDcKjt8raiJnizRblaVT0h5oIGY4FkNJG4xsagmZCrutqxVv2egkn_QAkdMyy5LmU62CURrIaa6n5oAl5P2BXvbsopheP0jCpuaGHYNIiKQGJelHGYsYouBr_zeA8LC6RIuBYo5ctR0wp_oZyQQz4nhrlY0AseWUmJBX1jszqMzY54wwpC-owoTzXAjJD4VB-vckzvQyO36xV5GvgAF3u0c-Mv5KZUnmMDwCdosd8DbBO9hYAxTmmrxESX3KSATRAlOllMcqA0UA5DIU0d7RiBlSKJUiok1vgzKhnS1xksdSY-tU0ire0rMuUj1m23PN479ZncaC-d8O9QjnstdH5cMY2fqYbpskiHnIIcmbzqUttTgeX1w969PsbIzVNkxUNQFy2EMR7w8qB8V7m-JQ=s225-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6cb904bbe013d1",
            mark: "Zomo",
            name: "Black Cola",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/zLHVSyVxxkE2SCkaSNrYl0-qCNmLQqB34W1hmjY4qIYMcaWyOXdIlccAsAfYBdPjCnmysMFwjgXSwEz02t3o0e9x0fh9e9Xc9fOgLAFyfYtcKpiFOoo4jMeH_GBCPAiIydGFXnzZ9sEQp8DNc2BC9krhhRlnY1ODI-C_LMz1wcuzoPZ-x3f3IivZETl7OLMDdqVtJrbkaafLcct9KOEhzWtFD_rRm_rfzKh0Hl7z5TYV2OJ0NUqrmbBR9JLYj7kcNH1d-YZp3r3rgKLadLwXSHJZVnnJfRkvtMTZEviUniaZQ2UqcTYeKzNJ-y58W-lb8h0ER31Ax2-hN4udO8ujPhGb3i_XInNK0VJMD5HOTIJuTOX9phOEFkMvSsP1kZXi5DkSRLGrt8tWKRLnPhWjlxCUEXRzgY2_sp8AkOxMXaWKJt99f7NeHwYdISCRDpRv_cs3Hcr5hxJukol0lAO5f7AEG7mPWuOebWDr0FXGsZ2YtKO78dAlxTznmwqAchYM4DTYsywSZ29eAB08mevArRsNS1MuUu-oqf-w6ZwPqrOQEzNsUdVSx4sXy--s4WMntrjmS7x0Df5oiuI840kNYAdqzBQoed8A9hhmhvDKf49UEv382DuBhgKDv8Ur02_NJvc1QdjfqWQPFlS1JnWnO0vLcBxaBIzeGRTFLXUELsmJH1gP8ljI_xFiziHqOtv5e5qHPqh3IK_W_88ud-_auX7S3Y4KCil-zlSKOGySkn5oTfg21CTYd4TGFWNXiCyHt2brtU1xMTdYkJJ5ImwA2_lwJhTZb5lrnRyzbRET5u9j4TVne0uTfHUva7oFMSnB0HXg78NUBAe9n9z3Jf3VFG_PC9wLhW9Uw9BgMNCMYvzkHI6JSpINZt3Mp-iSPfekZgzICeFlJhTfoBSFIrc90RYJ-eV-_TRyqXZKYer_-1npYGQ=s500-no?authuser=0",
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
            imageUrl:
              "https://lh3.googleusercontent.com/PpgMOv3dFG5FFM3ChPNO7LEzXN7zW206LK-4vBallUX9h9JQNcAmwVNJPgmVqcCPHJHEteEQL-3q2dOML6HFQ2PuNYqJkv8vTv0bhjrKzc9hrxDplWEyCl9xQT_gTQ8hnkD7sEyfJVKeVI9ffYJKi6H7hHaQJzbCT5bYGhHNluzN8gAiO5BWymIbm9F4_xlP21HBJiFEz-zp3xJvB00mQlQe5vtqdCRXrr5HPxE7Wdhpa9foYxxdQF9r_Oypa_hsJBS8g_XvGIgB1ddEdGo7xP7RKUYopRIxIbo9C4cdYUeAc96PLIvlUKEXCAi66I8RELZXvpJasATc0jjypO-FovyucGBAnH7FRQ-JaT_5B8rJzI_WaHamyYtxA1-tuSZoIQzZiOlcItTtV4Vih53zp-II5yZEKwCCb7AxKjgP7UG-RnYOk3yg2A4hr_TBfoBiVLeMZKOZ7sktGLf-BhtHSJTa_wIE7DA2m0Gb6M-Y4SJgs9V9lza-cV7ode01jQA5jrR7cLhqrN5Elp818BTSejkpH7E7gsXvRzYMWZLx-qJyqfoA0FIHF18kOpXHud34vtlp9wQ0OKtFXRRp1aC4XdFa4tqUPhMQZVYswI_o6XYBPJwexfagsfZw2K3PuCX102-7OwntW9MgPZJ9m75CN8P4-Go-YGmrypI4Em0iXDNGLRS2v0XTiUhcbps4cPAJ4RRaxDXB3yJLzq9mcGFFbYNnVbK4yS2MoeQ2CiZlXd7GFBTAyInl-bYfWxa3-3tGaZzg9YtKObfqzAhvBjlJZo6JcfEWxXuQ0OTwDG_2R3hMXkrynu7CxC2ng8aCniknbCLHz0MMczGSKjVkCn2B_mqZMqwzjg_4DEjpJNaz6DYh8V6uMbg2jYAFjp6QDJxLUJlNNqKXMZ3BP3JKE0HaBo74QBvZNpICwhQk-PFTelDfGu0=s605-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6cb904bbeerfe",
            mark: "Ziggi",
            name: "Coco Tropica ",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/lXozdZRwmdVYTRbAz8ua54ZagsH7nepWidMI8-a4tb7Pkpzo14WY0UiWT2cXS06mgBAp5cFhZ74LeT7N94PKUyEzKEhupk1C2s59E5UjQ7bEtqgQ5xDz1IRHDkhBc84lybQ9XCgOaqNfNlIa3b5qgcQjSovMGbS40pD8N1FkNxACH2mNySRiwuTaEwn7cXT_e5N5tVJWaefwldO0Du1ROZNI-0AYrIPCdl4qEpRtPbnafgdmEfrzFP5Ok341rTXPVCsXbvMom6rEdICs7JwnZ7gpZzIfUNL2vYlGxQ1Y1BDt3Iw6is_e7zK5vAnpieWLye1SsimbY7Z2Bh_GpGpPH-Kw7UZMhJOEuYhY1wquEyIarwJhju4pohVCNhVJODHX_7vQGqSPn2v7Y_NAfujjJN0gDHv2lFHnq2NDdmf6Xwe7uW0k9fwATCxqidUpQdaDJd2lsuBE9h9d3vlp09JRKEbmpLiCSdKfYUhIUIkJJk2F_0ghm3_W0mRW7JWXfrpXOfaHdZYaet53RH3EI2AZ6cW_g4qXZ6apcmJRZQG0XmLc9C-alQr-kK7Aw9JZ5aTfiPqNm8kqr3YlSFcgtQgn9L6x0WVYEYOUpFW_AMn3d-tD8jwrZObU7JqlmtWNLQ-eCfdJU70ugmB3opyNA5iltPVYw2i7LcTl_13FgDYH2CkLgJM33E_OPoD6gcLIeJfliW-_9vRQe2e1Bw98OY320maP1M-JjXOE0I2n8ln751wiS8gGHV5u8C5Ljvp51d4ZULxbfmC-GYzgSHduqTlJzo0rOaIE80lrKj6iKeMf9eZI6qsbgPnMmCp74zqGUxPNa06PUrPZvhwIBzBQuCW97dX6cYH4tTTynqmzhJPTmsip8bfaITovR6YSObwEk9v99YGYth9h_Hzb8if0iLTkJJopkOODaYTtEhT6r7S9GoPvUY0=s435-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6cb9d8dbe0dde",
            mark: "Ziggi",
            name: "Yourgut ",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/kfa-9BGe5B6pYUSaAsT2mubsyoT_TGd-g_oSOt04sHRt33_oGBg2Lnd1rV-XA4FIN01D1pEkSmC1768w2opyhhx3sIS3fntqe_F7UB4-XS3xMaq4SDa1VMkGiT2VsN_Qfu60pyN1nHID6xmjeXebMzPHepIc_AiDOQsmMLVapu16iTel04_IEe4AJFA9WVAbVe_sAacYb9w-IlHDuYXkIat0Lh0ODkyFqmcPZQHSguQ5XP9uFoBxbJSvA64xEWs8KZEh_sgGk07PXtAM2bpVcakoVT_AXZsNrRSAuHnINlMJ1KihhITAUEjOrN4q6QRLzhWkJDIB8N9F7UmL98PoZEV9BkHmlDed7kya0WZ8mstxhjhL1PxIfyt_NEuD-pVQ0CZYoFtTsalM7hAkoD-KQ0lAVH7XoSypt-cTBJu270j0qn7emX5zqXt7CPXF5FQ_B43xVVmPkyYPOtiLlyCKTUuYN-vy86acplp5gMi62BXssjSXbBpBYkThhB7fG_y28YowJlBHuDmr9DSay62sTGDMejjP-nwW6ac-KtlihZim_AFZGk9awa33u0Cti-BEAySdEj0-VSAEANVL1PsMhW66_rog-3skPNg3wOKeVxITpBOMJA1fmIx712tBXk89k5axgFgsvXdSsId5KuE7lom0xHL4sgGyZrPjE8IiuC8UcClLq5oUoD_kh0aqmVNbyh2mDI6vtnaKwpk8v-lMEduAURimpq-JB4-drLhpYEuuJH1uAITyth6R1gMUV5L-DVNqrZBelc0GBfcKMdRDvTwyeIWJbD0GR4mjoDcheumrmd57V8fSHBbIXAu-uNnVlPY6Y2HXLq2ofs2yKx-5aeOM7dXdY5ddFPZFP31emsBqLsPwLTUIzViPyWa8-Pqy9GMgDdDNS2I32uYN7TpDk81Xxsq4fcVSPDNtfe3A0xv4YW8=s657-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6cb9d8dbe0cas",
            mark: "Ziggi",
            name: "Tropical",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/LWznvCzsv0JcjFy7iYnZSxQ5MXPCbepHmhsJpuF0nVrMclIv8IkGy4g0zPAO0NJVGQFMD-cbW8vT71Ike9YfJ_rg-wDkpmPCSS8013yWNGsR9QgzP_qfkaTuf85318H5cCerjeL8MmyPkB8uIe_rvJtEOwg-b2a7P7wbyNuHSLAQYWnrviwJm-vGXzt6Zi-7-EjZRAzn3tMSA2cBWu11IqDG8pYufCOkjNvA_eozXNyIk_JDwUF8UAIOLY9vkNUJ11nZMgjDw7iy6tyRRCxYCQFfjbCwrVGs8Ie_xyCbV0YJQUtfhZxSjg6HCGNC-ecQp7oZFpvbUK8co1sx_fjdT8K7RT78bmvGUuDUbIrbgzAdELteUqwEj2QneCBzvKZomFeebz5rHD3pVSFjOSN84NZRhvq3uC1LrwjZPN8QUdXfw0D0Ck6VckpSdi0wZu-KjuZ_qT4dDum-TAwP6mxMueJml33GCP5KsHc-gmJsEyHl8omcdPJdm0_HDh2RoFrpA_r6nycprgnM0zVr19G0F3g1BdXRkvUgR-FgLzur_K6wfEP1J2pnluo5sgHKAthlPMn-6XhEuq00ZZ2GT0AIPk0HcDXaV3F2D-kN3pZ3kcoTkpMc5XoDaAU0LU_XyVgpB9cVbjqEXZWI5Kk0vjpRKtXo0RFeYghQsz9hGDsy9o7Yn_D3WlhFMZhlU8TF5mhKMqlIgbBUVUKt6qQVrseyJ1ikkZAdrtWZrQcSEQdevqpQeT_MYGMXP-flpPtrHUbLqs_7kQi-3sJXWcveNlIQkLeq6R22Zck1d3jlj4BPjiFDV0hYI-Lz0JHmkq4GFA4p61p9YFAtSUz8BaLzNrHYz5SrWPCEBBg0x3EIqH5W2VWu_RuixfDdl5BJT6qFWxxndc-pWOG6jcqnRH998bRD2rh2bpAYND5TXKc5lRZzqmKt_i0=s435-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6cb9d8dbeddv1",
            mark: "Ziggi",
            name: "Maracuja",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/KdhC3UngQTBjP25VXGIo4OhSttkNRMkdLDC5oYHEbOMmLhoHLkBbm9sbyk5shjHLMMdwg9mhPpPBljIgwjXHe0-CpUkHc-7ZqSukLKzDRK1Q-3WJn1oAGwryTsQV2JnVFh6DKJ_5UA9i-qGP2T0mtn9iuIRX75WgaZyHzI-JVJ3LWm_CUrjQhikPnjRWiJIOySnJTdzrqkjyLy4s4M1e4b9fGmHDkZDjcdjhuqdPnXYTd0iSVP7Xe_ltxEvL3-OVY0UKCcmleNgmLziW1-8BYnwD91VKeJkICzaZ_UndiXHzjmKg4RWvfW3fMMobK2pYTYl_OI1SQzcPOlusyo6lMaCn7aI9RI1NVc3tciW2qPqsVcxMmekhT8N7gzaANUMigu8o25cOtw4I5GrNMigb-xFz9jr5Xn_kdKxLPhbpVlE57w0bYu30EEsurD2YyEg6ABjvZvBzBTI6GrDA2OY8E_0mKHjJRLYGIvEN7Gf7mCl-GQJQBjwUuXosQfF1NeM9z8eD6r3ZhH9OQMXHvwki_zY25rOKYaS1xr9RD1l7IFMKu-36ol-0rLhPzdk60_vOUudO1p5x5BeKXRTc1LokWuy6OsJa2lvFZkWOoZkhd3LqWw2CbULUjMJiZI3UwGXbllhQxnQ0vUEZWCAebPMdoVwnRSNn-XTskmYhBHNW-oYJW3OGlVKlfX84KBRMtQtzQ73FFrLP8bPFAjYMGpR7ff5BjosqW8HohdTkDN5zTEyNh-vHtyGfD-u-6fDOxkQZAWhURJvZ7F3-F7xvjSoTJd_iFumokwAIE1yfYvUhPZlXZ6zf4XLxRVJ9xeb6xrs08G--eeg3K-yZ_hwnmZCYEiRA-9ZyTzeeW0s-0yq28dXYYW3F1wFL33LLX96ePijJnGQrYCzUgtstiXpLrmRL7hM7oCncP1_BJPxjAiG00cR-5hY=s605-no?authuser=0",
          },
          {
            id: "62dfec8bb7e6cb9d8dbdse5bg",
            mark: "Ziggi",
            name: "Abacaxi",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/wCPb9ZzWG37F-7xaRC7SMk3916X3YGGNFBbGqyo5LwPsutDnogEHNhMB4BEOEX1WrZHtwGU-b_eHD-_lP2Oxfv-t5SiQrLxkjPe68U89VlvXpgjikPQgwCqojlRYHxRgxuMwG-bJAx3yIGmccAeNrN--j7_K1Z-_jhcjKbhvV0WQW3QHdpYTh-raAkHNVVXS5-JtYwRGgNkziisRZ8FtM14deM-sPTSaYqXpyUdxHY10QYDozylVi2DQB0-Bk86FLqVsXPFPxZRWOoEjEE6v0IY8oqD_c0hTwY38uQH1V4boRaANB-BBiDFidvMciMrSs3nznWDhRJ-Uv0o2445rGirHQkuvAEQcMUylBjnK8W1b2w5JXPs1yFQ6I_IK_1677XkNXw4WwStu2LrhKFxIQ-TVZa4sJYI2xyFF8NdtloBvmAZLtXLY_kBmc2waL3qvO9HNQY4_Gymcwtt0gZ6DuOUomReRKp3gCHIk8iAUmuVMB7YB06m4d8Oc2patPH8d_83Fax-tuiqZrCV--0tDkaN9jUqChbm_K9RJXy8nlO5EcwYKHBZnscm0RIopoY1su69xLdCfea78gE70-E8lz0kp1f64_9nf3gvFEg9Qjlm9oxNDwtMpZqf3uvgZXCfrsfT_N1DU9BWtBZKGugkgveDMSzKSuXvMmUrBFmgVsXSa-Yz-OHjP92NGCM4KJXZd7p3TtO4LbuGoI-OzaGU4-S122b_utVsBNu3x2gqj0erU1QGyFqInDH24wkxCfWn1NvGw8SXKHHtGd4EaLPsfPm3rlZrnr6J-k24fIRK12jikwNIKXeQYH2XP2LFt3-e6wNwK-Cewzp3hYrcRAtR9DZv9xsG1pIz2ChqyAt5ty-X9iHZfuypBEK842r644yrNXk24sPrvI779fK8ENwtdNy09Ko7Reby3zqPtZxtE8EHq5hQ=s605-no?authuser=0",
          },
          {
            id: "62dfec8bb7e6cb9d8dbds4dfe",
            mark: "Ziggi",
            name: "Limão",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/AFVDtO9YfucNJESWGzQsHrJ5G3P33BKYbpmG68np-P1srz_OagiW3-L3SLAkVenXhyqCBJhBSXDJ-3FnAonRVlz4SRFhrc8Qa_SQRGLZ2OcBm_6TEG0VM08j1SAtYMalebXDtIBi0rmGhePohkkDYs3OnYXnCn__mBjln5M6ibQpVL5cOnGT4ol9XesTj6i4LNJle8NvqbkiimYXplF0Qy9YLRlntkVB829vzRBbHR6mKp9YOuX1_hbiwiTojeLPL14gQ3YfckeAr4is0cwjIh-5eCz4eYjIm_1466z1jKCphdM0GqiHOqEoFFMFZmHceA0tX3dEX0tUYI9icNjhWAk8dE5nRm8ijM06_jOuXBLPLyeqd5baXGd8O9GwmlfCwbBXEildbxVvQbzBw0Hk_bMc-SPoGukGwHdinN-WOuCq51x9B0atBk3RArXMnOhtx93JU-y85OnuwBxk_mfSM5lYCTpjZE1HQreGhR2nGMBIGr86s94FcpRDC8GT-O3RZ6mboGmlSDpJDQNiI8nc1kSkiICz8DjE09v5pmg1CxZ5TUGOx6Z29CL7h09CRFTHUaU3gc4jIz8Ic6S5W7q2WuK0KsP4CjheN2bbGz8Jjdz86UIj8xRes9O0yEktt92PqgGyAGxO5P8S18EaMrquJy0mBD9GDWeCRDFoGgWC1Ej7r023elIIsHTE_jXO6NAC5ZEXWur5BROWWidyDMhqugN62KrP98kA7HuQJcDVUoEPTPT_5j_IFKKaj5HDlrUFg8tm607yfi-_kljeoJeKkFcFoNyiwmmN92ul4m2R2ylKDCQhAyUsr9D3fuRToSW--tZQzm1PaPwtMlx2RK0aCLbqecpriAS_r3LBq5_83gNfvaz4IEYa6e3aSXGzA7ZMkU6eyartpYuvJoV8bMNx9J-CCZJkGpqS_B6TVKp1vPl5KwY=s605-no?authuser=0",
          },
          {
            id: "62dfec8bb7e6d48vldbds4dgd",
            mark: "Ziggi",
            name: "Menta",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/bf1hMkE9x_1fcCVRO59e3bFMQlRnKWT6a1gkTPUVci99AEGuC1b8yO1vEmtYe9NiXlzecxiPOtWCoqplCPvbqI4RTvbWT7vBJm3dyupOh4t1p2rMf00Xri_taKnw5h4s5bYS1mQpc25GA4ThnLGin2iNha9oxGr121-w7KhYLFFE_cehSEuUJBdipU0IaUEqgatwsRrqlRxlAqdr6zohdYaYf6AzmMmJ836qFGIDgxa0vo_NcMRcy2jV4c272RfeXqr5QkqDKf6F85B8ZyO7VCOfyrHC0goVE_H7khbjmxlJIX5djWtAQ7-dk3ixCIY_Hf9fkL-6iJFF03UrV8eVj8W6F6EicGwz-2QUWH6gDIzsy2JrxPk0bO_OGqnYY9G0FLl3DD7JWhnVyC1iI49d7sCf-3wMU0dmfAxijSUfqtn_-qOGmnCO6lTrmXkLreMhHtTev-zbls9DfXtcc--xTOFs4Ii0ZN0o3--1u1jVuMeFfbRYZppkVPx_soOsKH_9R-bVH3ssLPPnwGfi53rrhCTC16siTcT72lbjN9fw5bHwZ2dDZEn4CDa0nJhDoL9yOrdo3h88MRjXq0dNelbNxUEki3Lhjg9E9MBn8iffiCubIZKeNWQ_y8bdyntailbEKBodj3SnBqAKoXiIn03PrCJq9qf3STHJ7ecFoHvWR2-xcag9vBFZn7H0SWH3e3IVmeQKBTL18TrSvyeDv5I8ENK9_oW690WLADEYuV3nMnuxG1_RdGgJnPCThrCsoE8_eYGhbVsFglImAkBv1i9f_0nXPcmYEC1_2qRYvsyt7HTcFjHIF_bLhMmozmSRYStgqR61ydlLO-3eJUwGLEwH4lamNajtvxgJwlUG2tQXHIeBEKwNExnm06ULOr02nAAH1Zh_ZI8SogWg19tO0K7XmHYPXM0_5di0vQYBQSWG9-D40lE=s605-no?authuser=0",
          },
          {
            id: "62dfec8bb7e6d48vldbds4df5",
            mark: "Ziggi",
            name: "Melancia",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/qixtqI44pAP2C7eT3V_xXQb0N91xiVMpHKTw436NsauNbxg3r3mEidXMRJPHdmoA404ivswys5UYNx_66MbVwvUhKvYZ7ZPZtnAjvFMyPps9mCc6FDRom9IHIWPNfmCNUfVdZTC_qkvRedROrLmV12ON8RUDzDrbuCTPvw8hUARolICdp3DUytUEneQbH9bc0ml6ffDp0Smee4h6k-8I18k3FFt3xYZ_rii8on21PDaLDaVcKL1ddh47IXK2wS9yu-_PNF7kl9NhePKSUUHEIne-KFBcmcpWWHeTtN6lf-ss2dIzSE4xQtmgGPK4hBsjy5dkUf4NEtXt5qbOjBWBv-baVliqgBVeKtIfaRqW-AN7DFDVV1oBpGWVOe8SOhy2Q8_ZeYpe2djGyk15ju4YgUOaafll62JXy1uKjEB61Qo4Tp-5-IRx6_UtL9y9pWHc2XOyk5i-uBJQr4PUzatLGAbVDkbcWxgzxeIYRBEsCJvxE-txbgpX9MRJ2rDw8YLzyl3odtohuRyB2IN2eFekUf9cJWfEjn_Oh2iBAxn2wKEZWAgpMxLKWj-CK7aSQe8rp_Y70r6bN97bpfdS8PrxHjpCCw-Ew_8IdawIOZ8DVgBm0wp2lU1hfsAvljzh246WguY8nqdO9zdB_NPGjQ_BCnLK2wgySQ0Lo_a2EnrCGAX_tH4kGiTsrbjvE1eXHCh1VcC10w4QELXNqXB3t0BvIayrur0N0DQAx74FWjJ2Td5iT5_6viWLqtZaf668_KWJAklCS9TRFU_g-VB8v1NTKDZDmYhLtCG0azulekLN1XZghshhUdaTTat7Ket3mwwxprcPYdd5My3TOXn2y2WPWwZFHea-FoQhDNlMXeJtcjOY0v52NQMdLDMmzG4mj6YTtx1LpE-DUpzLKUBAPYMK1DcP1UJYoRrshT9s3A01JJCsD3M=s605-no?authuser=0",
          },
          {
            id: "62dfec8bb7e6d48vldbadedfh",
            mark: "Ziggi",
            name: "Acai + Catuaba",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/-FcfoIvQ87oDxkbGhMZ8c6NoLZQJtm6KQhWQ8sZn3DWNlsfNcqbo3wvHdown8rE_w6n4WugZf8fE9IkV-n96oNlT_i-eiQnedjO0KVuwkokCEefA5q6YKxUMdx5gusmP5q_1gk7KOFnF6u4DOCF0wl1EJsN5XGklVvjtXu9WFnMCUxd9gctGZEdh0EGNH5dctXYkIuyTiA2aoeEq0n7mIvIb1408Zv_BKiGmQTsoV-DX-Dfjxim92JIaQcEHjDxlJMUoqJowMFNBQrKWHEgculR002NdkdcnWjbBiHASIr5EVTelTl34_0LLOIPNXMXJDNux1cLCzrqs6R74ZsgpjccmfQe9WKmYxcy4K9IrTNzjDeJESRD9a0tFf3M3kOieIGiQG04QVMxYC9ppva5uJqR3h6vshtaYlVpM9UMcqGLNOQb35llYm3TcI4MnWOFp76ovf4ATGuiOAjw6nt5iEYjQSVgHj_OBUbWQlLCMIC-dkxB3s7w1-aAF_UAiUuK1V6NGQGcTYKLJMTpKXbgrIiSSihraUAzMSM5kjQ8pUxpwR08gAK3v0A_xwaKu_vz88DYzYA2remDChJciI4dQfoDyCa66nbqd9GV3CSORP1nKyK7-MvFnhmu7zzbOUJpHxa59gKk5c-G5Q8KUPwmgOM9OrCfZO7KVjb9Ht9E9Ysq5pivAtoJ8kJLmTJ1nc5dsba2SyUNEaDmEV_yg0iR6YEpwywhiGvn6PB22CbgrIL5hD3guv7XBWNEDkuMcdwW7KkToH7r1GZwNtq0m6j1EXZTY85JYRkFqEB6Th0V_kQYH1y6V9WYuccfvAz2VT_Cxs-7SsiYZy8Y9gpP3kJZ3WCNU6Bp7bCqAit6FZoU43Qi1K1N_SI1aUu661lbGf1TtJX3WzWtYjk86Tw4h1A6lsuB1UGousNFKilM6w6qabBj98ok=w438-h657-no?authuser=0",
          },
          {
            id: "62dfec8bb7e6d48vldbdse5dh",
            mark: "Ziggi",
            name: "Morango e Laranja",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/5Th43S91GH7SGPivMsjKUTmZB0eAXvdYsC-7I0A_Wa_G1lUXXejTUDACK6ME3icw6W-EQYV2B7L6F9DoNG9uzulp23VGhRjwj8FebAeF6OxjvcV48VGkeen0Q6G4xXSxWyiiEWszOW7Obki4-Gvh9tp4sYZaCXIBLipHFI8R1VbWQyNvlhU3G2Y8SwS4Up7MSlo_6g5MWaOMoJcpDPeKXcDn56wF4G1iL_JJfJ-LER8POGRLTMBrHgt82B4p66OOciD67Z9fExJMxCQvRGYTMcTbgIIgxjzRskOZdZv9YqhiP62Uw1MbsXsNgI6XKKnCJxLM_8rW3cxV2YstrP_Ogvpx6SkNsVXKMiLDbxeIJTuDaND_tEQcxs-f-WijvcmH9RnMikrjNytZMP6EG1t_a8Y9xWdV2iKHKT0f-WOJ1-fvyi79Bv4pV54nDQvpyEhWlMbFi8KZL_IBeTEeyDQpzmp2fSpZQekVfGucfRa0ivkKNVloOPP6h1AKnuj1PzHtEqAKCBzA_F7mr0MhA2IOR-zCSl5Tk3_M2ygA7Z8Jd-07MKEJ-JHJwcZyVFB41MOGbp9VkHWp4vglvWCVNnDZskm4UJlbV2lPZcb3jgxoyrIT83udE7hrrW7FtHbSAFLW4cvg4zCOkGwQnfv03aqoIDs6aTxYYYFaq9KVoqlG8hu5rqbQnOvq1U9uj3QVf122nZjPuBDRc4rXNL_6ja8zGo85USqBybikfewSvXv7vuXE43FVeD7sYmNycWIVyL5KuTdP9jj5hqAE5XfUEBpLeHTOX1J19RzcrWCT84BsO1cH5FZk-OnalYuKbJtdDEYG_Bs_zxYGNauzvtdppqiHdzEwyPg9Dgs-rJG3duNXqIMVVd4bcygoB1GISjnvVxGVEwkUTQrpwWEgHno9RTlg-AqwI-jDVjFDf7lwB4-AjyzP45M=s435-no?authuser=0",
          },
          {
            id: "62dfec8bb7e6d48v3as21efxd",
            mark: "Ziggi",
            name: "Uva",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/Pz90AwZcecGTDbdJjTLGyYGridG7-Br7yiUo4ZReWpH1kaUv6RLverRTzTZa5vyNoJznz_PoFaHjApUJUa-ozBVO7SGYSLpOdTsubHHZOlDt_AnJp0vDjYLnmCOsvg4IPe7_FsYZCClfDGk-cbtoAn19czm2T1iUVbdE839y1qtizsYIpAsOmjdvCoNOofmOybDnt6R69ePB7VUDOBjYv8a5JrBV-Uv0apJ2iAN8Gh9z0DQSxyPqB1D-QRcYKAB7CAJzJYMpYuJ8KlW10QMUINGULMAXRBveAJzlyD98anZhZxcCSPMIzToIZmryWWqIWhl2SQxHs8kqFTasS_2XllkLf9vCLE6c8pU-vBYIfNdLlR_db_k0mMzO6_mFylcnWUvgEDxzn9Wi1H0291L51bUDrcxt4cRu9fOwoPJnNBLMlNGCIzhFxeSstdRZzI4yY0vxsEnSCLwJq371Phr9jj7P97cWdpeBowtE2viUE461ckVVuOoJE6LazgrVgZhOdNwB9B735AubsHHMDjc-gXXPiQYff66EZcQE4ImyvZx2kBxlsbiAqQ7BARpcnxOY-3D9iHenb-25jy7NqayN_WbN3e9a015rlCZch46UUgN94GPYl493RxsShdLjyMGwDivE-DpCSFUEX6oMxAA_v472Kd5-2aGkXNeRaJ7g6pEFMckRBa1aYRt4luu5AtpDXtox33OaE4w5pfeJqv79F7J-IUorSvR8C_bAby86PdWvtEnwoYO4oCzdM28-z16ET48FTaUKmCAbz-xc4cCCuKlYSecJvLI9B6L1q9XcsACGmCvwB5B0DG8xJ5EcxZTU5453oyz7oDYYnejpRrFLZ2l9HxsdcfZI-oGbuWsv1iyDuzXedLc-J-akZ0fSX1IFkhfbISXbMZm_NLymMaKdPreqlYlNqgkGVhCiUVwnsc1PKro=s605-no?authuser=0",
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
            imageUrl:
              "https://lh3.googleusercontent.com/53wdWYIMQs34qLhq_lLStFTI12PlZpn-tBaWG3DLDOwsVMt9lBGBeN9kI6OgGchm4WYpYRgQjPDqGjA060NuyiAh4prxNq6a5O18tMX47NGhEHHlFk9x0cbT5u0hfZIDkH-RJ1kVUWOmvuk1UgwFJkr_8ylb0315wBg85UlwprZhgRwfQFV6zbaAmBxWEj2C0nji7Rv5kigeFMNhyyDSvuLCmR5DxgMfruYXZ7L5QzlUTYLm93tIjEol1oMCp4aCxh9no02mykG-HzQc8xLpJVVYTEX7XxgXb1sqbgiG5TlAW7LYqGczM3q0-akqALsPoQ1V7dbNzPFx1tF-u01hmyyFuavcLa2ITT4bMOHEbN9BTzijJGk8a6vQqfz23ducGbytJOoyAC5tPrSwtqg9u5ttZRt4cPXnCScc1LzIAgljKItTtxHNpGW6kwQSK9PIMyRFcgQ7askrQNqf7vmeZijaPdPWLVwvF_4VWvnvk9FDvBKBFTr7FSqqiEbJZJNGMQ4jS027WQvSXAQK2LlPk1ValI_YksqkNYMfJxZ7R7h8hRQ0R9Dro6dJxuVIk535BfQ_4op1uZoegEzTCS8x9AYFKIomAqfemyvE9-O399FoQmKftDRDxt8owu1UyptUl6N310Ve0kH-5pkGRB72HR2EEhODHB8bGWMcmNNqek2w4JAbH1YCN7jPR2kS4PwxK_eiDV1xmW2XMp2vBnVS5YFd51GIvv1W_pqd7VpWUas0bOjojrw9C_xGJOejTJA7iLrdBRqGfNaaaUebPfb658ZTLGvWafwp3zvbQJo8sbgFf7uFWm6YnlXX2rudS8jn1tva2Gt08M1Kif5ckV0l2BZulJN5KWV44W0cWklNZNZrxGkzKqQ9Yj7k2KXOV_QBwWEhKBmaxSZ7K-yZJNIh0r0jYSl_NJ5CJixGzuFuKfByygo=s225-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6cb904bbfsafçl",
            mark: "Pimp",
            name: "Maça Verde",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/uKGGPAkN7J922ytAea6FFPi6MHTHXLOwsX6tIFp8sAcRbd-ZtX108aqLulcJZqqHQMm95ZMQFelhWAMPb_TGY-f1e5tO6-u1oG1W2zuGeIYt9oxGR4FgaAJibIJih4shNX6znfeLJ2WO0vqssyTrVoykLnXqrfv4F_feaGvPovur8Bu8beCAPJp3-auQdCuuA3wl1TP7zHzLDT-vPPqDpSEX4SVIpz83xUNC7rHVJfhqEtPkwjFV-jnksWmxWxKYXOGWQ5XUKnp_bC0KUF6LIFltFvyml_1Wqpnikw_QNX7gSMv2Zl6Bgq-YGfwNpCPkpGGulfaDGWdpWUFLDPXQGfz4RfPiqW1YYliCYs6ESXrJdfvJfY7bNvg0A1AcKvI3hQIu7GwYUXqhMJVP-b91DlCEDdeVZHPwB-rrX7iquF_L5gVQyLM1S08ifD1mBNDsbbqBqefitLLRHcIOret2Pp_V_ibf8Itb79OGLC1L_ETjMiZK584DE0TGFEIgzj0ruduMWQtgvbTXpIhNKuoS_xfatZMpqNZhDksjJy5P7t-TiSMRop-ZOSoxtXaXjpCXbb9HbL3taO2lYfFfzJKeKHdoV8Cy5ASdKd3NK3Vtz2HSqCxQvAISSMJ7_btM6WJHYObQF8767u7cUWJbnN9NsKLmq8drGc3k2TlpseIpQ350mlFp9_PfEjwEH5LCXDtws7JT3tEw283Y9fWkUTsEtTWQe5TKy-D1Vo8TOj6F7Y2VGMgNnHPeSy_ik3JAdtqs_kxQ11z5atp7A88PMywMHjKtV5NSo2slXFXHK50-NpOybwaGX3FNfkA1goabzufImO0zOpnCDZSIRm-qQktzpQq7a4Jbq4vA8pAYLIWsJB73vxbniLgD5oJNHIsx9IHaJR3vDj9ED76W0enZnjofwj8VXw0N5eMXHSoUeFm5m8rMejg=s435-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6adh84bbe01adf",
            mark: "Pimp",
            name: "Intesity Mint",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/J5eSGXuBClJVyalTpUtZGoUrlKck_qQys_ZdoPkE2yha-4cHr1swv4UyDmj-svsd57Z1Tp82EFtPYFTqHkO9rD0KsZbuMmsD0WuT1-xylm6NmDkeLCxURgbhzecfwn6Aj-zcPUj5ORx8FGDMcrZU7jRMyNgS_eP6yBy0PS9AAX6ob-It3vzNvpzVbGyyFkyB5I15EJUfEpadOLcjPg7Jxx9Db8IIvG01tEGrY7WdYP7olPjxXOGIuY9jcutkWXTlIW4oceK4ICIVkDEdMnYnb5paZfBwF4aYceZwmOYkf8uk_t_SaDHSCzugExp9Ve2atb5cmXVe-2ZpP9sLFyVHhBH7TzUt-m9dSAIe6R13KbN1bNkeHjlje3c_yTuWHcBnrea5lQV7cVve2CxmwNePF1toyBJXM7-uluxeYg1-0iqIBSWT96pHyIhgDvm8OgsSgG57pa3KM0fpSRKV7rN3amPdpNWHVmasoh5J2RQSNSu1lEDRD01QifyyCuLEqLLrLAmO-GZXBri1VgQH7KA15H-UIlgwS8YTEXCqJMPs-E0BhCZcJhrPeiYWLDtjTFTwGo0EtJm43x3R6H3VbcKOiM0POvIgeumQ7I04QNSwYxkjDa6Q7FSq9UruyMxz7cEIrSOJM-lqgUE3tYF-2M1jUCNYXNgL1q64IMaGTeRXYL3LZPusa6D5dtc00PReyO0qGEqaNkHirGsA4i4XDFXLgu_fbg4kpbjngnLAueyJ3KO1k1BCh_3IYoQtarbspn1Xy0UqNesnHih_ohqhMt7tHBf_RftYdSTap7DQZy9UttviTq7xXkgkwrlL-P6PtiyXZEA_8L1--6-sYpY2oog-PlOONifHQTg6To4XNI6fsBltVhqRi8NItXO2R9a6CkSnBIbfKqPifMOdNuxPxbL3_4K5VSmoX5fH7qQVNNVQN7crxJA=s657-no?authuser=0",
          },
          {
            id: "6228fc8bb7o4s3gu4bbe011d5",
            mark: "Pimp",
            name: "Crazy Sweet",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/5N-RGhFuACxAmOaUBDybD57r4FkD5y3A_7S0_HLaw0C34q8amqMk78AD05MXMhtKKjsGwrlrufCbqbq9iXkmoq9f5mh2FxFZbSIAyk-LIJfvToImZK_V9Iut8EE3ch6pEWwj5fkibS5hw4UTALY06pPx4vmFO924GIYjWI29yKK0TjH04BIgWCmSFE1y302Wd8uslcXQMmvrRoRBbKbz4hnYTqpUheY5HZa-81GUQyYiN1njIXMlD8DUgN7SqTk9EbjnS5njO6tNwGpOmYqImwP2odSTnSSakVdSO2tkmWnQR4M0BHp2rli_F7AYfD8Xc2WFnXg1lzteZ2D-h_EkWPMigBRcU3T_enJ8jdyfO5xExtzdx_V2s3BkgvGMi0BkSnmcp98XyP-4OGhXVM90VtaY4ehrqfYWcB8ydaTDWOA4fWQoDakvhd44aPdnRxxhK7D5DuxplmQ1Ri60FI_NLmMAdREjfB-EqwaFaG9IqWZkPoStSVmFcDIu_SWNHuwylo_cBczB1iMXQdpHyqyAc3R5Dk-fVX-AN6QlaSzL2LtnJtVkEG_jMocSnkYz3ny1aKQMxR5xgrG30jkJN264HhS3HEW8DAMJT0SzSaP0fgXj9y9DNb1Bbns6buIHiqDSGlssmXz0v0zDFxZPTbX2xjCSwZGy7BrpDj3WL_rc1OMf1uLTLppi2i-5-6I64m9nl21FnAUCRp0NK9eCmkR4w8ZfV-hlTyOzAvVWX_g8P35K6-JvvFMPzNRzXqn-SG0_ggGelgzAFEpFn1fpcA6KtQmXk3BVsALKbjvMC1rxEp6bRNNS62yeo2D41lZMABqHwGA_YasBIKIC4Jrmri5p89MzdMyKpnkWn2FvRYHZl-36cU5d4AY8wH1ZUm8gMLlQ7omuSsJWnc3U_4LFFPWoUlekvO-IDPAUt2NqR3FcnhcNqk4=w577-h433-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6cb9048depc4b1",
            mark: "Pimp",
            name: "Canela",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/RJDvtdZJi-649yTvGMXkFN6-D1ADevKc1KSar_atMRl7OBvy60CCGUviuQY9X5f9qhxumWoa95DdKLTSjMnSOLzKwZvKkMeZK6SOt4TLY7_Zy8fKr8dMBXWWCHWqwLvPrz29tMzzC6brO4lpXWTKTnWI5F0OdyKTJdYkBwoiAlsj7VMpaQqzoOnp5QPVUHKQyl7Yl7zwgM7BRBAwxouFNsRzMaXivesRKL_3BMlMu9R6g33eCjUNCpsr5YGuwonEqK8PAivfF29r3Xe7malmqPh_T3YTDJVd0anRN2ygwEnMugU1KlABocuR4h22r3dCSIB485_5kbp5DEK-mfOm-7UxAWPFOON9l8r7D0xiN2gx12kvAgFWqXwKa36P0AEutq94FOq5oBs6ElzVUuko6i2SpqgWL2WDNwQer7Ly4W77O_xGeoYxUFVILDIMYXPe63bG6RHIq2yig6weTmO2kDxzN5PsogJ8pJ-5bciw3N90kdq1KS8ptACOSjHxa0zrjSQXhD-FjpaSseTmpMIi4lNflrkujDIBKESjfhr3nBPWCrW-XBlA2bFBaN4zDrkTrl858NjUwubuVkyQG70O3LBHfc9pfc_p0OK_Y2BcO2xhSfCcXIx4wU7AqA9pS4JsCb7vLigjLWVRJJAWYzQObRqTv9_gTMr-QzUwe4fw9PHLH-vz_HXas5uVEPSAznWMiAuvLCpF64VjazzMk7fFrcUCXv17J5aLttBFcN_fwjfjR1OAl3v0zTtbbmndgaNBKsHFHtKRJgM__jp7MXku357BNQ8XpO22s2hg22oYAQ3VsSys_3wgRiJTrYjQHVQ80PkpvVP3cKXfUEWHGdeMruHBoWFS_EUCyBVayrNE1NMSWDgXltm8hynK49D30ufnQuqAq4L6AfJC0qeaOjN6wH4IXr2HHaL25dDIn8WRoI-704E=s240-no?authuser=0",
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
            imageUrl:
              "https://lh3.googleusercontent.com/mfCfaoqA_Y5dakUIVxkw4Sh5BSSr2byeyShZV8TI6A7uQWWIfwgv9Tz_DkcmvtDd1F55N1VPcvb_o_9oIH8JXKuPLT4YFFuQX5joR4H_mYeP1jB-0KFgf9KBKJ5fnBVINJMrke_WCACGBuXSv93x0Bpogfuu8plam8xhV1QT1jWpt2c8weVmFCpDRLaSClWNGBUTrvvYT7d29xvbXghxy_UMBZJNy9xpMRp_XV2iIPKAVbDn16yNxWdRAiLMGq8IPiIH0oAy1frTipRhaLn0K6irwoHenjXHiYQGEbHT-23F6m9UCy6MvugNW0JpVlr9DnO4MwX5v-sHCj66GoEqhRx4E5iY3wgAPQkBGnc3gEu0D_YLSX8gJj3mPcRPBYzZIP8b5tJL4cqrVGaki6LyxwVHItL86F973gTnAuAJaHbSy4u03diQsiuKKsUXkQX30venn0KkWPrKrbIiBzzWBYc5fnGZNOMpj9O-bgx7yFWIF_IdyhgBM3WIbXM69WZ0LxsStXsqd2XxzZnb_v7rJeAtDJ2aIyaN7RtncCKhGYxJaRPBM5qCSarS7HJuf7iolUA9_oh_4xR0vTRYHBiorN518JPhZ5DRK95vsajXNG9dXkuesdJxZWtZmQZCWDT3COu1ZscrbRswQGyNv8ULiOLifpGAcqGcnwUiFA_ePOJK1CPA_9Sp40IXoqZSjiHhBvbPistP1QpjP9-ETnu2tog1ECp-2vhqs_GTu-RxQ3AW6jc-Vw9zRUwS2VCNpoDosdV3RfbBKPDvuyrewSYwiNHpOTsAKFkBKYcUa0LOQVgsXNAiBLMr2GxZ-1XOkOjv2FaJOGUJdempIaY27tUOyWucnjORptG448YC3vT4m4Tvz3K-dGKwtoPufLTU2ZXE_M4t2R1WOUAlq8nzG1XKWOVxpNasWwnus_0E4qAZZsb6oZc=s249-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6adh84dv4b1adf",
            mark: "Nay",
            name: "Maracuja",
            price: 25,
            imageUrl:
              "https://lh3.googleusercontent.com/bXWyQOJvgYdJBH3UsmOnDEHYdNDtx2Wb2qLmUYdNz788e1XPz7EHyXXJMZ6mZm7X7iH23sIJRxB-myvCY0LtOON1VPg_TqUHfIlsRIeysEVCLDr2Tozaq1ls_UugB7T2Hxx0pNnddOXJifnQiBiQBEG5k3qkRsZ3WosvSzh70RAT_zd8Ytp0ymr0pUSUPkydn0L--Wco2j9YYA_rK08dAsTtjyXJ8de7RBhhyGJU1v6VLgK0-gXM-zENlT7Zc0CZAt6YQ5Lhdwr83q6rwEnlkT_QqyOV4J72SGVNcmId4dtpcwu0j-XPKoZr_EX5NWQ2pty-gqt_ryUoEPiA0NOe685EpOA1U03GWoQZYLzrzcvTV-zLY_hBV66HdTdGBmwM1OuxtsUlFy_ktwiLs-piH9VCZLvZmd2_EJuXobTYZ9ATSDiyn6c87I635lvHP_N5vIK5IugKOG9DkpYlQoAtW22aDd1YWxFVcnUQeEr57o5g2fH9WyAueVhf1-KbYqhxSBdA_L3sgsh-1h6OEaIX_XCTQ3PUzNLinwMnAyhRyYJaz5Y2TO3XaXWirMEChtNitHnn6hHK681IkEJ8uyAWB21cAYqF9uPCx7CHNjJveTL_hH3xF4fWSYiKBxJ-sO5wWx1WlPiGMBdCZTgyIhEEQ9MsZZmt3YD38gLVFcJStztCJw0zKLDZE844J-E6u5eEGl05PVM9bR8uxBwG7OQKxMb3FIwDD-496gZVfqtAVfYrG-098c8XCDo_zz6oOYTaHEKmb-HUIkZImqLLctCkIYEOoaNhrITrnHr_NA9G6aMnt4W4-WPT-yWkK-cIz4ZAYA8xXHm07EchLOMvJp_ywD_s7K-kLLznP7D8swWByu0g7Wg3YA_teTVXerJ141bJSGsDFczOfK8650mM1tXtVhMjPqcVpcbBObix2cRcKjyR7xk=s657-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6adi0e0bd5bdsf",
            mark: "Nay",
            name: "Blue Blend",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/y6N4DaAtN2GjGTiT-DMc5c7eyw_KFCA0Z7YT04pUONK-cJlEPhhbOaO9zgs0-IVYdTeAPBKLfrUztLh6oFpUhMZLhwsdmutofxfX9ehU-mD40c1CCkUm2zyFzpSIfOyy0q7zLtI-5R2QQWdYFQYsDvYia2ifr0lqpz8CEYw2286_95nz6SSHrffRwTUxI3sygrAbF-G1G0kcwSARONEJaoeme3T2IueQW1JbZTP2yAMkHsfbmAOGX9k75sKtm-8Jzzq5bZ7IhggLFVCupVU0j40ECOX9EUPJMtfeQBcLNKcCxeCzCOBptnOu1imfeg7Ia1v-ZbzfdkpP9AJgCIb1FlF07MBvlNy9WUQPyOwUWf7qHZyif6xth6xnJ-aLtSAxEHO9lrADyAX6P_zpP98iN6omadrzL-4fGbsdlA5D7kVmK36IQWTQoeKf3HAc3_5VP2xMcGvqCiCvPNl99S9WDqylQP2k7-QVoMzihpL-BfFAahZ4-lyHXbCVprWl1tnhVK0LqtDJv8p8809GhXJqpS7EO181YHheXKX1Ta6kQliWtlMoEQ9_5cwq4tWp8BuuDZZ7ASgjG07MrtYvmrsApk679EKpr1dGsaZMI_ypESXjaulnez4eRFDQIuirWe7O8-F8BFTmjslGLaZ5Dg6D24HkLogxXljcvSqpAy5MzheUDs7dv1ZE6Gt-dYlXwySN-U3p9tZ-lB15GIsXMh3FMhNzJP3e07l7-z-s65TQMIwRIK0V47Bh_pVPbEFk0h1sGGnMjiA0qPmn-nYC4jThRJy4fzY-EKhacBdG9SRbLhvolhyZLawGE-L8t8qdbom5thQYEnTI2N5gd2SZMiTymyBQ4RDHo2bXYEFxM-vP2TRYzZbBfjF62R5kl6DRTyike9Iis1gmy-qRsWJlUFFLwEUsF37QBdpnhrDsxkshVs1LEjc=s222-no?authuser=0",
          },
          {
            id: "6228fc8bb7o4s3gu4bbe011dd",
            mark: "Nay",
            name: "Moon",
            price: 25,
            imageUrl:
              "https://lh3.googleusercontent.com/y_rZsM3an6313qxQbGuzLgqLQmOZenzM87ABExWAofGMGy3yBzv-fcX6YReJSP9eR2sYpoCirXeIuWkT71KPldvDn0Miax-P3cLFQ9LNSaEIvwVp_CgO4BnJ4_vE8gK96wamBTDIj55ZYzoM0uAJgYhTuNKek7tbKxMGPUCmt76CjM6zC_Y7HrdXvtAA8Q9H0s4E80qJJnPGd5ZqVM-zVzv-x5cD3NPOeR0HeHJDhPY85WnqE8Wj2jlQ-MGckzU-Esm7BzDDMTiqla0_ptrevV0yzniB3F0UwoDTlZW0Ne2IegWPWmLIHNobkmhcSz0HaOwt0xHDWCINxbhRBcbDyN9SKPEZsFnkS7qwDygtQjbBrxYiUMWpDLdMFiL4ADNcoBi9n2s1jJhcQEasv53Sl-FkJxRAU_qfPur4g_ziQ7M63ziVX00Y-8UXSSBiF88az64xn4npVCHfXfBy3FTlSXH06xfhsGbIziUxBrgarcVfKSwxImcKR_ydeN_hxt1y4SvJGTwWMI2XAhBQx3toMz2_fGxsrel5nk2iP-uCt2m-UT_JeAsXRtG9GEiDfjKtXB0zzX2qWkwRMZCIDuSoSPuaEM4NGEQqrlrrnRdW8JCLh4Q_BuxJ3vXiPIvlARaBRgss79yq-pqBZp35jJhXurjyTE8Aj1WiafBJ5FH1OmjS8dp9qGVvG5f1AqZuZDxaAn3QDGZMy9PPvXIyGR1LZqVfmHvQH-8ebKE8hw8qh3ic-RNPWQvkOBNRLf88WaybPY-l842z4TvPIII512YlKcdkuAvVItReMQHuNPPewoM-PbU9K4vM_b_Ji-093kMjYpQXGo9DCSIu2na4a33navmhcR8SoWiMyNN-RnyAW8dW6D-Nt5XZ1HKDVWpXupinh_Sb5DD3AtQYimbmjUTwhH5MhOw7iSh3dgZiv8s0xJfCfLc=s225-no?authuser=0",
          },
          {
            id: "6228fc8bad7e3b9048depc4gh",
            mark: "Nay",
            name: "Bubbaloo de Uva",
            price: 25,
            imageUrl:
              "https://lh3.googleusercontent.com/I1lkTyeTOY0i1evXv7h-XHSXws-M5taftTWBWeoeU5bKIE9c9U6F0Ue9eJzUzaSDWucOXStiDp7SMIGClabWal4WVY9Scnmit6dms_qKosmP0IXxA2S9fbpz_8kSirbsvWe3OGFuykX_OOpABjZF9rR8gGB8wlpvxZ_ofYOF_Av3BmtGxoHs_rNQqYjVbFb9mhjtQVH7z-uF6VRpe2EiWOfNaRjCcHEsaMiAE0d-Cyaj0FWxBVPwkMSSV-pezumvKRHKZzn8vTnyJ6xRxJEorS8fTavVZDbwu6dEaGZcDcUNYqNnhNh5BdOrCLnDtvRQGial-LkT2-bIdL8x_S8nKEaXRwV9KKR3Fuk-CJp3BlXRSrylXqSiptU6dTKjkfbntFOABCyFpQWPckSPRkqUd5zFCcZjGi2ED145nz2re5GssGsmK6LV2U4YLz7kf7txWU_j2MvqXwq2rEbbiApfm1_G3A8hlzmoAOd3Wg4zZ99F3-QXNAAYbTDck8Bj83R3LGkzTXQUaiQFD0nObudlT0akuwbtwWBBX6EUd6SUBMEeLJtsEsn2_gB0wnkIonscO6a1wIDUnVpoQjs7MZctK4fqjGIQMLUnbf7Okpvfg-G9qlCXFBLjj6ZXDgtJmpmX7Y9NQ-4Zn52WrGJua3S_rwfGfmuJGkw65qml2pyF9zMgNZtupuS2xCpptmPEHq8T1Vo6CaeQcXXZCc6TmFs8E7znqLLPUEtxM7hkfvP7_PhS7kaRovnNzbZIpohkcmb4TMmBPNVrqd4LBJvif-HU78smRKlKxu8Yh3gT3psCYwEIPrhkzU9J3NQEfArjYj_9UPAZzGcdmBjPvR1liT9JWosI5xFQ9eukyry-piw2x-3wcnKNySjKpAuNmHyp69CKC4CUxgpG9Gd8dZ2CVY3qskrTleqSFPlZAprYSMXMpyKxk4Y=s225-no?authuser=0",
          },
          {
            id: "6228fc8bad7e3b9048de5dvp4",
            mark: "Nay",
            name: "Bubbaloo de Tutti",
            price: 25,
            imageUrl:
              "https://lh3.googleusercontent.com/DjL8b3rS4flxiOPI6DPtUqNnzXz8q5cVDDnfSwquQYEG8M9ZZZf-89lGZ9owj2fRA-jIKGa4upe6vWWGoUJL2BGAEbT0EoWcZhcRq-pVNpvCm8VRSFYC9r7j6MhtFb69e0WAuGSfmQm7SNsOY5Tinvn9G28aZWXYU3NiUhFzrLUB1oNowEp7Y-DcxlZZcygXW3YwI4lU4qNuyn0KhUAoi8oLWtmZCRQAmwSB9sbawTh1ErbWcT98mj3vtfO41rYZVxiyeiucsXqw57GSNEivNhKuFl6Nlqnwj5yKLSJ4bdme8856JzyfR-Uf_HSZBMlVQz5V77I3O15HgnXUmrVvrMU9VQ4y2k6MR7R70T149fesjtTFfhXC62bsvDd8T0VSlFIyBDdxmfu-4c79WBXE9IQYmn8GsFE60DkU-6fyu9HMfQCNtS83V9FGk2OxtqkRdELtDeg537jWaFDsP4VjTlBPfkO3xrSKKGM2PbO3J4Gxcz_3yFk8311Ky8Jrdij63S4uaeDqU1FsD_QnCSavxZUfqtvJfZTW1qAxy_3RdY2siRPQzkwryev2sl2DFli6t5Pva_CZcnq_apn8ueDSwf_jlOddRvP-bkLSCRaIB7WKsyOcidzMJzKMf5Iix7KU9k3XpmjqydVxG9hw9vB4BJ1KvfG-a-Y3-ScKl4ESKRuxHFpdqDZF0IRYemuf7IdbdVkDDoBJKK3v59L3qUzG1c0uicYA-dCY1Ljiq1HeOb30Dj5h2PlZ_UEA0I1GmUz0R1mY8OJG4SXAZcLiojd6WDjfv9ArJ_ZJLESSWt9ZMUJ4E9YcKUd6mDgkJ8jjZFjk7UOdlKuuinFrxQFPUd9iJGXHOT8IbeR9FlbhoVjbkNVDED1hFGyLgMwOGTqt30bPwTOG7sWSa_MgDXkvnKAuLZixm30dLL52ycUjIbMZIZu8qnk=s657-no?authuser=0",
          },
          {
            id: "6228fc8bcjde3b9048de5d4de",
            mark: "Nay",
            name: "Off Mint",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/Qdt-utZJCUgiNUm99SLEhs1tgyf6MN_FsyELR02FiOkckxUpgm5dkfOCeWl12F1nNdUZaeqmYN_-8Eqpff-4O54NnD1Jxb-LTSfpjTAPTtpZ47pzyjaL_FPiKQ5zvutKH-LDWdayDLIuk16Ud7J_CDyOAQq7_bp1xmZOwvoWLdbhLcsioZjUgUU0pVFPKWg4gX-owk75nVFvtcwLm1yyhgMAXLY9jrOcdyK0EjKBvl_GWtlt-ViI3SzPNCGKcWGDSUN1wgpkI0nXbQJiNiCjNXiW8kQUENhyqK6MG--nJ5dHgiyYDz1EcBF9x9dG9oBpl_YVAkcnMqtncuKf3sV1dZK6tPZfa7Ycgu2TJdcxNFcU7tp-I39nwN3cF4YZB2jzrDMv_bmF8E_ssqJcbJpvzi5V4AVvaaWk3eqvn-z07w5zYH-8cIVImse6ItikL_euvHGn-n5g1YUA-zkM3ObJ2q7-rOI0SO0pPq14kJ05F32GMEc4X1RrkowE0cmVNyVXF1t_6DMfpA1MmI97XtiFYxegKT5IGH5R7gg2m8YG_Zk8JDdKkF5ah3urFwPw_BtwwwBD-EJnzdQqHw6-VWOce1htvo_NGOtf43-BSSyAv37z0YsppPjmG-XMdqX1lxAAq4APbqtNnVn6U0QBtNMh-qB7mVOSp0eUA88sHt_IvM5R2OsmaLIUExhLWSOWReTw4zTteFpSlKOrJHn4X6Uk8Qw2R1xJNlUbnhGYX_N9Mdqb8184FsgWyGX5uIfdIOIohD3UfmhRN25YTRI-FYLtQWURaQPx1z_8tNeVeFAUaG8I2_Gl32G-_6zj6kox4rn0yUAz645tEmL9gHUskVGAlJFoEHy1RyUdlCODoaXsHYSiuUNTaFJXTwsd5DJ6cGYhqAVa1dKgcRDnbZqktWFBt06uL_5a2OqoKPgqGr93im0JGT8=s448-no?authuser=0",
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
            imageUrl:
              "https://lh3.googleusercontent.com/QhBMUaLSJ07HLPs6qgGQR40IuxNs3_KUWNp0h49F_fyXRGCvCa1cKtLjfnz8uv8eGjWA6AMJn5viYwxR25Chk4tSrnf_MMGhZuds3fA4k7rb8XNH91X8DxMP5PkUJ_paM2f-TDV2hWB3iIUvSusRE2-36XMPHwNugnGggYv9o--W5Fvb4LocMBPJijrqECnYjmASArWybNVX5RkYTvnJcHvQ1dE1E060lG4SY_qfAriQxM937FTApBlYxNW2Zvbu-N6brCjbF8mg4W4ABLISaIxbgIkP7CBsOfDppqvezgLu78-3GgEUa1PPM_aY7TxiFZskAjHuh4p762a8mTdF9rmbO-TpL2SylfBS4H1xBNDCnOGSzU0Al7mXpuXjpi9ov0FG0gwPbHF6vnbVVDkZha9uSZbtzbxXZFO10vwWbJmRYDWR7KdFG9_fIMSktBqiU3S_m24zJ1vdSr6pXqHy6Q87YTE0UwELepO6XHM01vEuNOCiwtL4JS3E0QkM-ingUdt5mjQZIw6JHY4570XIE2y8yDMYOAQMA-NbcS6qpRi9zDZqZcIKkdoJEvGmPudVBgEAqY4mUsn7c-sesaZRYNLbV_eqzYLHnnRzYypMCZsWxC4dte0bXf9GeBYq17Xmx6_ockw490haYisj9KWMqJiBYZan77cEdYfHPa5kpjT-NkEh9SW6mnpxSyWjDmsM_9m5UrnlZTF2JJGFT95Nupy81Yv9dLaEa7kUIttTK2RyfPxjhVE1Qpc58zG35TtJxI-_1dOkO44WCd3-YRcf2NCuEomWjHkjajEHKakkxtLe4eb219mNsd3zhFQ35U7VfT78I_wdDItkJgmg3x_EnNFgNSWyux7TkzNY1FTR_qpOj3xqz5PNQ-o6kjk8PJtLEhoOcD0T_gXR7E1sb6djTEyz5rNP2-d9f469ESCAFhgXQwI=s435-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6cb904bbfsacd4",
            mark: "Onix",
            name: "Mint",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/VM94EaUrqJ6U-VzZdsGnkJ4irHXaoj276a8Ozz1EtnLnIe52TgD8VExJ3_C1YQtzKVG7bq65chrulKSBzVD2VReNrtOZc39DxecLQ5sktqS8S6_T_tbe9FHIA0WHjEVm9v4gKJ-XHWlxnAmtwjZ1eS6ghHPI2JGOmz_48uUneuStGTucN4yBYFvP9uGjoHo3Rf1R5vMNUiHNZpBRQy0sY4D8ZVNTCiGSBjvSXlVGbGmMcQYITjpe_fvb8RI0Zh5h2bpNB0dLVyDgerqcrgRxnnNW9tDNBPiM8qxlziBtt7x3Ia5YRmMgs4MSsmPwip3XtRE5-4bvac1fAODlBqI2scZweIQVBlU7vDuz-ghV9s_K4gnk7IfjLRAhKnD06PAZgTejj0CYQ3InX-uftPT-QqvhovyNiv6gBuh1WQfkjgqVHtFthm-iF31DKda2LsOtRCVDiF-poswdmRjfIiHx0SKrBmFrx7Abdf-QVEi7QINlr9khaEBWp1UiHi-6Uav4y4bdqDxaVefcPApD3ovHt2qzTviWSoTPQxyqsjd1Hd7dKz3fSt8shR-FR3e_nYRgSSKYDEth548kVR_4lHpjaUd32PGhqX5z3d-4cJFqV5qLi-ejU0U9qVXmUMcE0wT3_NkA2wpeUBu6hC_FQ_do1c3N_q9J_diYiDvIHYdRUrzYrFbmJhbmjq05PvetURhu0IUIOHoRJ6b4WYtFHMgJJsh13PiBQSLTTiyBNq-Sd6ZZTiU_Sj0Ps-575qPt4dvaS_I30YcsGVgEWuzaTPr3-KrJZbUtYj2BqojITLLJn5zVmVKjiwT4W0FMZ7MQTjOELzDoxXf2VrBN_UXdERU6hnLkXAuxI9UArSnVkbFrgXa4nWFF6FQVDS2YD850gCziZYWgsOYTz6ZmXIy4HpHJ2vYaL73nwEpY_k1LEcQbr79czy0=s435-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6adh84bbe4vie3",
            mark: "Onix",
            name: "Danone",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/K6p2qlJOEDlfth83XhE4XSlUNfgWStMlOgOGU6LmmvOuZvRPpgKu2MRi689HGftGESd0Ej-uau7bHcPRggQggnoTsq6ZTQ5efA3kRsbor0DnkS2nAo2krqstA4myKJxE9PySyF3T1vDBT-T2-8dtI8OieB6KOQGQ1BX7V_umpsQ2z3k10HWV3LC463LA4abm27m3DOGeBqavZlyId4dCwWvh_R9sjqwDzyPsYutslFd5tgX56Ii2_VxPjDVesuq9TMGvWDMq2F5moCWYoLxPwcH6ASuDgofC7Vos-mhK6XUoAAXhq7jes2VqnsYD467UBpvS3wQHKBnnVZP_N6MJeqKj_FRlK6zxj7SfUGcIMpo_BgK_XMGSYcaqlmsMiP0bkcGJIw7wcfbtQRLwn_yKYL68zpnOoCtqeg4isJgH749e_5e7gbRbsXhsVs8JfkAXxXFLnS8MK9RXcGSkdqpK2svWTmTx_H3rv8An5Qzh_gp7AUapezdj4ZzNwgzkzjIjf-OZG_a0QGTRbADB_xQakPtpiVVcnzb7nFvnAKX4sMcu6PCkfsfc6IMqMi4FbDw4AOye-2c7XeveUra0V75niVilN1Kvu6N4VjfpGn88HyqH2QpueyU0wRz35BAZexdbNA3QLqSTmEzg1_H5kSL_iz6k3AZOzMoNR-TrpoLRS-vJjOcPoRHKozcnDEzc2_1zcwDthWgx0nRNMlDOAhWjhKbZl3vD8QqA_iq11KSK6PmfC8dxvCjB-CIhJQI-lROVmpSq8hWENl3phOiAjCbVMps9qkCnsYsbi-FtMv7fv9Oty7PqEDGNA_kfI4No0gLa8yfPYIW3uvn6rG80xqReL-FODifkFoh7-EVpWrnRfzLbQRi2RyOuUD9ANJRvxYHQYrvRqBEOAj-nnWxcaERG0YMIkYOa9EsVzEMGOFKo0bWUyp4=s225-no?authuser=0",
          },
          {
            id: "6228fc8bb7o4s3gu4bbe087bk",
            mark: "Onix",
            name: "Pera",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/hyZnq_1T1OW07F8hPutqfZ_y3KOu7DeDLIuWssraE87m54cQYx68NdGghJpYPCuJizaFUcBulRiPAdM4gL3dDxWiuetOEDlv80ct-L42ENKgzd54lg7fY5pKG5wrnCdQqja2VPBHbWQqAscgXiTHmhKaEP6ZfXTNcqNetTkFGbE70BNG37ZD47mVwSgXMIGuWj_A4Btv8CsP6B5Kxg3ls0VLBxee2uLtJ7hseZ_UEJsq0IxeuCx9wmgK3myAciaUlT9wuTYunOyP8z5ViObJwvnq7VCNccnTNDAHi9IJR3LCVgn42wIIJPW6E17VeBqnHh7wFK_z8DaQf7_471TAvVxcGMgh5RvaEvsfHQWWS0G88CC4lPl6Hbycs7ywaFqNCsBQMfJG8wEAEoKEdE4SPbWlmdka0jEdXzLDdeqXpHzMeldU-lGhX-riOm3M99G0SRv9lDB85MCdadrfS5d-7kD1pl7R1gIXjKEQL_79C-2apjqYdfPEdp_JroZtVWLIgnptG6jxrSHqGaTN5kaT29UH2r1MegUT_8mDREFJDn8XbeUj4H2IC31Vxgm-sRDX-P71r3Ql7Ed6DV6A5wdfViFJYOgw6FWgydqk4Ke03z-IHE6aBdb15Sm8KKsM6_ltxTARGDmONk0OtcEcUYbClf9l2IdUso7ZqWFuGLw4Whc9OdjMMvBh1GzIHizD391fKPDfTlTL9BJrDlgiZhRhRHiWzHZeKYX5mN-wrSxe9NcF2KlqzQwAIwbxTXgRaXSYK-0YE52NlB8sGdWk8xo8CeiU8i7Okud4iQSA3mm2e-29YP8T4k-YhF8w6dlV1O2aGvrmtWL6X5TsHvEU-5nX3xYPyc2tH2OTA4vC2BKxD4PeVW3Eg_ZJoSEtyGwfBrLQiLw1aVyupiu6IuFCzNbYeL1q7H8cXInS_eblddkRPsf_3kU=s640-no?authuser=0",
          },
          {
            id: "6228fc8bb7e6cb9048dasd5bi",
            mark: "Onix",
            name: "Drops",
            price: 20,
            imageUrl:
              "https://lh3.googleusercontent.com/P2Ej7Hy4xTogFPPMUPkDFTqQpFplkriTKDzi9s1jJqulH8kFzVaNzAs0CziJGDqgqTjEI2Vo0HY8iSf6SFLR7pLGkJylmo07eftuQSe6Ma9bZ0jLD8rjMvp4Xoe3p30v6WyVKBi42KvBXCxsDrd8lVMspw1dz1WVFiRr8rb-6wRLwTonCHTrdbZRjkJTWCUxv2akFzKjsDoB5xRp6AORWOY1lDT7OhgHc5NkTSFyHo20YddzZElyZV0V8Wyb1g2yy3Bl_9s84vPe6Z3uTPEGbz-lV1egyRaxL_OZLOHkn4Ko5J7K1UMK2S65JL3LzvWIw_sCd-TPoBiNS6_8RXjTSlKGDgZIyoBnmfBy2nAtpy63xjcLRIPYebMqvOihJ_76yRIp3jlv5Ns1X_7K59r8-FYaBgXZxDneJj77vRQ-iuVXgS55W8HGgY68EuR4BFcv8NOO-Du41NGg3rJDY5fszccJoUYF_2uu6ohxoUuFdtbNT9XkY58PwJsZFkQfLf5yE1Xg1QODLKYjpFYD3VWisst8IiA2__sYJrs_G9nd5WwqIZ2pavOVhjo7ojoPqFAPZe6lZSOVUFGsD8jnOS5Y4BcTz6yLLkh6tc516KGoF73hOyxk31t7YlwltX2xZBBKU451_XVuI8bagL3nVkyjGY_UiV_z3ypsiJ4oZXLVNR-kVwqB2_oOJZPwlYXPpCo2xK2lNasutm6WgJzMLjw8lch0A-cKBMLDXhrsk6JkO-_nbF93TToo8n84s-oczIkbqvETq28HrgPdS-D9l_91mMl4vGDrF_sv1KwWmxYRnjNtPAdLSbLt-SseU_H4PRZrW9ODOA8UU-6eUlmmLYLE4trdDxOrYPJatLZ0hiH4rL141qsvdClvHL90zv6D1DDi3sV9rgqfRzGm-OoM65YkcuxZ8DBY3M6_HeQXFgnuHmCJfI4=s435-no?authuser=0",
          },
        ],
      },
      {
        id: "6265fdf558ev054h8dy8der",
        name: "Maximu's",
        imageUrl:
          "https://lh3.googleusercontent.com/_Ab-PsOIFqW6akBoDHN9PXH-NFPqptIp2S25VFr-o6FWev-o2kRAtC4cf8Pc60K-mUi5krTN6S77qpesLXYI71G-_uk2h1a6h30yeDHi2GYSsziTvG74dCHC0nywUBVkRIXKjJari4sRCo88_qWNU9v4PQznShYW_Lz3CH2KMH1SJxDySLq3m15TR7bpa3kMEXJLK_Di3D6d5brpM5uqUlOPTKYkQVOHjRpfFf1tcApiO9LPtRRJrQ2hN3pOM9-CPgpbEXFQYvuhKnff4zUVqtGu0Ypq3FdSs7knVkUEe1wO_mh9HM-k10RVpp1SOb5oIeJPpmrPLker6Ccn_Y8MGbmrPbdBi4KL5DIuy45qz80mIOTF557oaYwJlvUBtIp5UoQ-ZIESFoEqVKuR9RJHPy_Cg-BWH7NzyLF3tiUbXDB63oe5Z0w8d9Smk6DhgrZfK6j4l_Hx4ydpR3PYX5xKMKPbKDTc8w4H69kfBIX8E_RRJiCH8ERwVCHzpun-bMGmt7G4J9SGKOxsR8Ltp97lQddlUXrNdZb1smffxd6Yl9-kVIXhCUK5aA908pow1Z9BtdChQEidxuV2L_4HaiowsLXifuT7Jrwpl8_UoEz9PXJSRh9W4zR9uE_gCIocZOJGsg_AyScVgcyxRfatBBDMrkBdaYELzbGyaFSvc-wx9ec9h6NzF7rpGxHBjRW-SuTuKWxiDvt1KQa5-3VAkFeKMcE6BnhwWM2pueFi0ECKK0xu5RuqMPs25jcvrQHtROT1OtucF8LjkpCYk5dqiaW_g5bkLsW9iv22zujYvhBwnue117S8j6MEjt5YkJOYQgRzLVaOAuS_Ui_oethvqdG53BKE4ist6PktQxkZA4shWHQH4wy8XZW_RQR9u8qpMCFlqXgWbfAPTD7_R3hU6-MrzIWz9nsjNHQVGu20AHdhSc6DzBU=w219-h220-no?authuser=0",
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
    subCategories: [
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
          "https://lh3.googleusercontent.com/47KBLghmIB_ylcikn8j2QwdB_wgteILu2ktOydI9ebFojW5Wgx2c3k5FPgBS1Mj7DOoy6L8XS0-FZiZSDmP51q7QQHLqyd4YVwAJoySgbtovBOWFBBPim1KppqvLBpUymamVoPcdp7hpu8bjyYoPKg12V4OHOgqXhJVdX81X-jWLs_CyGAevC3OK-Q4Bvt7A3CGcuKfpc0W6nuuh18k6WEU-R4sw9fF4I1xlZyKxHkjlyNdFIpYJ2VEJbWT-nGztZqxcsD9ElKi5F7GPPlFs18opFlZ8iEIpo_j7UWwDPkX0YXRYa_YkVMrmL9_WDGfyl7aoV7PwCQIR8vogku39SE46f5oV8_XUAMilfNwxiWX95Wa4ZUFlyfPan0ZumswdqZXMdpd7DJk6Tcy5g05Mr1fq9Oy9SmNPwj_yE5SWW9syprlS5JVrV-XgZ1ayl6Ko0K6hV0mQD53chAsCw-Ii3eQNhZUGX7DamDWZzymVAd5a0UbJw_kUroXi_BaXfYDAoskJ6PKXcsQLxltsXyRJi-0wrnlFsLjy1KBSwo2dW5U0Cu8pqb8erk0ER_cbdCk46Jbioax7zxJ74lru3CF7xTvetjnh7Yz3Ek77N5eDAKRlR3hHWfEADnNCsC_ZLztjYrFD6Ljpd9CAJWosqi1aYNOnL7g2Z1rgo7jFuKnQwAZYg6f_OjId4gxgRBV0zujBm_Nlcyn8g-nU0mlsSE6LCCKPPdpSenaMxp78f5ARHC_OVU_ridsRroDYe4GgPLr1BXHJFlOzoZ_QnMRC8_fzrrVCZptCnlPeJXh-eASwmfFNm3vqNYMz79iiY69P41S9j4b4XedEq8yhjnTpvE0j5n9vgKMrHo3Ee9e3BQDaLKrL4DlfrWA_Zql8FQxLekgr3vsmeKnvpo4WDNapeirz6hmjpPhCi4CpDLWDfYvJz964fsM=w960-h600-no?authuser=0",
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
        name: "Whisky",
        imageUrl:
          "https://lh3.googleusercontent.com/aF7KWhFfHlJmG-JL4kvbqxxsS7gv4mdozkl2CNIz0XUAvYiSZtoxB2A26ljywLfmlN5U9valxz7vHHQ8wNADZag7eUFJlWabp9xvVOWicrl21mRaKN-1U8f9AYJ6EtfucPhiCtkJoNAtk7ONgkRQqu_ZgYc0qc6sjnY6CNt-seFSKA8RpbHclZq73lwR9vE-BOcmT8dq2M-BWGM-1_DxoAX3hIQCYuAbOkyCnjg-GoCztdNtED9LNhTg2BTaG3ZjxbjkjL5pogIx0g1Qadwxp-_u78TiXW7evDuoiVOKabSYpF6gMceWTAsPewAMqa-TSeEM8Km76RfE2OfggUzLBbhAAQ0QizjIhkVo_EiOmFDpNZGtfO2vrGj1crezLnQuuDFFexJZwCP87ScA21yHniyuJVaIQ61PsWc6LvOf_54oYMM6Wbzi7cZ6_4MXBj6MUnyoNXbbzbxhIyHu5psokmIQm7TQrok8QNmzfoOHoKrUqrwXH1iJl1ovd3mqPlPFleCz0bFUNJA_8bBRhEPo_hhMm3gv86zEAiWM2bZVpknYtM7rj-VTuXA15vfQ_jBOOqMC7X0dyNifCdT6owx6JmKFqEYpA6o3VSSqbVYeAEJJAA50nQAQWn_z1HF3g2IcvdjYOE168wJVLJ2843h3o_mB1E9-aMhuTmQHKBt9yqyiVCEGiMqVYPC-YG95OjpWAgDDNJ7GTr7yL6sw0iQlGUUcLhjEDF1VCAMgfXDWbZmob5UztQ9iNzfgLlx3W0PtHLtNTxuATNvQt6Va-mui8j2Fb3jYJHv-FPGF0uFS9HzC_NqtrFhWliLgY-KvjOr7K4fd11MUCTXueO8qAzGSe9StmLK0UySDTyCS1UkmBBWhtGkS5hBDLuxQbbuOaTjnogXpYTzxmGhzAIL29kjbC5a1_gdbMVwuAtYpXZWLzLJD4ew=s227-no?authuser=0",
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
          "https://lh3.googleusercontent.com/9RvCP5haBxIwkFEyEhWy9FGL_qfHiaz3R_5TowQ2_uSlohqB3RHISNoP-ThtGXj1pv_Ds4VWgqHbjxISB9WI4hdkTPqhlZtf95xWSdSFAnUTIIlBkU9nCskJO48efjYXkSuacBk96g82HvPC3TIGeA8Ryu7Po4W-2fLyPqaY68V0enhRVXyXAuTA3GfDP5Ac5MZadgCg_lwlO1mFgc_REoQnF3TCf5suSecJoJvpcXQcuo5l_NxpOBe2s9YiLQK_FZ-phGRertloEpqzviTr4Xeti99kPcTqH8xSLZY9pOxE-7HhPuCrEOgobyQV8yQlUY34QcmVSsED-uqWFLaTTCnwoYwli9bgHGy9TAt11Y-IRddxBUYT4QpRWOxkrKGl86BB4ZkxhyBZNxBYNd2gnUxyRMDwCZxcFRuLCuhEsiuRpT9Xw5iGdznElHkLmXjSYjsp3UVifV4pJix8mq34NHR5-hUQzuCsD9cXzj-kWcW45FeMZru95M-NADPcZEpl8ItDAl8K6_l_wT5ovU78VBfQPeLJKE6PaWoinO1uUP7K0nX6ATlnbLMx02D05xDBgigRnnLqre6-dzg3vUD1J4GQh-Rxc_YWc0fOLJkBNAuLy7BVcaMsFFc4s7PINu9pjH1SyDkUME6GmlKanZnCyAjisuhl8_DQoh5hoSGFtcjvKjfAJP5Gi2ARfsjpJjiDXx5uEW2_DzB9Uqi_rtcecDN_lfq-CdJ4lorjGdY6rzVlmx_4A90hJB-RZd2AZDcEs4ctc-BJk4vr6PkwNc-4au_L-4AzD6hPqNT57nV8yTD-YWDTHfR81KNOAgbrdCKkvu5xgPg0QBIpaL3eBEfFA0qki_Q24972P1CapGnMKUavFUMh-e51YlcwXq_0JV9xQd6PbeFmIxm6VGs14rhaCHv8VGCU20AebW53MLILUrqKB60=w550-h308-no?authuser=0",
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
          "https://lh3.googleusercontent.com/2mTe3WkzALP2tV1FVsHLjyjTFvUrYnP_Xed_6vcAyZp03Nn81ZfW9LwiLC3P76nD_GrRcQBX5v22-Z7aXkfGs2Q3gi2_WpYiczCjGkNutm5K2STmdJAdKBqb86RN45FBQb6e2DfCblukZ8f9M85nzn1pPtougYdZSFhsBgXjeS_tJTb3HDRqskFScTltl-eRN4fmSwoboDZSKXsrwgwjoRBTH_Z9VRjM3YkuEGlYvnJ0nWRjAB8IeY99ZT5c2xAlucoLRzYt5R5JcXfV0LjJzFdmcHqiCIN2JpNQIECrZife6XKKix2z3RX_cuanR1UsDmG_dGqU5Nww_4Eo1AV00k2Ek24ARA50tq4ZA66r46VMF3aOIixjNyzJAXIvK1-U_XXPXqVvcj-SoT0Fbwh5Mp4RUxnJnrn7yTST-g9E09q7Jz0gb4EkPnC_8YenkuGWa-wEpbOf8bqNluOrO96G3mjErZ6bPKNFuPnYeCPfsifPSBVh-P4iuXFvNK4muiS1lrHCg7BiT5CHWyS-k3qPbPS9k90ZOQUI_oCwcZrKuR4L3bdYuXmTMo4iq1fqTXDfJR9Nf3Y-xl5RBX_5VW7R92DfIfucb7u9AbnOUKugC3VzAmGCQGir28fd6Tglp7e29ZRgyn_KKRAaZhgZVRUtOuxJ0668cPH0GyHLIcS38BQj4ejJL9ov_qZuoS589YhNoZxrxqqO3EG5OO-50Nod7-xsHAR8QrdWELR2fpYbeP_gDl3Rklml2wOf5PwkM5isdCiGoUmovacoX_8yGkoquCg3wkCo_vF1N2wN7r7nQhckFrxSVv28BELXa6VRRa56wZNwuN-j0OT4rjsIGkKfDxouyByCTTY8zyQpy6vf-fONay_sSOpafH3bOTL7fAaBvXg-QRXE_5PdGIm3AJmQ5QViN0Nb6k6JVqT1mgHKDyRV0oI=w1006-h503-no?authuser=0",
        products: [
          {
            id: "d5dsaf4ddd88dvd4f85dsfa0",
            name: "Coca Cola 350ml",
            price: 5,
            imageUrl:
              "https://lh3.googleusercontent.com/Ykc4xnU09Fui0jJ439vhOsDM66WRi3FXmgP5ifkv9Q_P8f20gtwxKA_Wm0RECQeROgLH1LR3JMZu0NLDlgba89_jliRNP_lelh2oyNvlo91AFuYn3k2wI0vyqhzcBIv_7oRklHFhGm1QDpZjyomqa3Q7s4FyyN6_QcQqxRly8ChOF9u0Cs_Ge8f_pIYFDN4o92j29f38yyGuFSuM375MBZTVxYLdx_f3H-LfMkbxHLg25F29KYgvwrb7w80sbDjnoMQcKpVAxROyaz5ZSJIIdE9aY1CSdKUtS5hJwxXaagNUuH5gMd4q7o6RSbI9hwiGxWZsnfUJi7Q9HkFCq5vYquaQc-lrcWTL34X86iohIfaddOxsCYdRPe9Mp5lVbIsQqUCjdjJl0DfxkfTMHmBZMEhwxvwopqPWY8X46POPNJUH2vKsYIGufR05iq3G2w6G_2WfuKk7zZpCGB6bAD2ZNuaDyB15PukjRcw4WyV9E_tteK0UnGT9I-8SB7Ru9dKGSV3M1JTftSKanyt47xvDuhm6wS7zyBnFmDHH7d5jtbvod25obmENUb43j-2D0PFTE9vpnGfb7KR56Lk6Dpf1h3MyBMrs-UH_WnimDeAoj97Pqegmp6usecQBJ08OYWEUq2s_FqRpb_0jK3Bsgg74bjDWiQ5iQ_HvnpeKKROdAobMfhDMcjppNj2DAdjrWjnt-nNEG2khd24PfOxnsA78b-qYq97LSIISG6gakQnL09sEv1d6LjhsiA0dcf7um-bdxkF-OjCGyueC21X51gTpS3rqGphmgY_wD6wAWkQdir-9r7Tw5YxgOy2_bIJnW3Cl5b3iVcROVdngdkgLxg98E4XkrOgX-l_NbZd6Ajc61c5Gvm-9sR3u3_ZOa-jfNIkDI9XpIjTTan7375Qe1Ub8kxd4ZJHW2U8UqioM9Xmw-BU23wM=s225-no?authuser=0",
          },
          {
            id: "d5dsaf4dd8dpbd4f85ds1fds",
            name: "Red Bull 250ml",
            price: 10,
            imageUrl:
              "https://lh3.googleusercontent.com/ZQQS4pUiossjZ_Vt6E4ljRWRGDSOkYi_yp_QD39kGqKAslIXhUOGJpjpOZkL9_oHTOivCtXszMx70Ex0f9p-XVk7XKNgJb-LPPen71QwdxHabT-lNhchx5hUaGJH786Xze94zyWu5q6rTA2j8DF7dqFhQNanCbp7ZSMTvl2YYIBvceoNT42NVqdmKfuSjg-8T5VBARilCLFccBy4fKVyKWrFYFF8_aTFSfu1CaAFwC-fsdjWkbHyI7ayVsMHjsYbbRj0vUrZX4kxNiHjWA25Le83SzwEtxCLimQRnayrpjIaQj8LxHaQ4NI9UCNp1i75RiLSpXQRKs5oU9GJAYtSToRNCTAg7E6acjzfxTKZKwqRZV0MVPdcpuxBZpr3pZok_VAZT_vHm_fIfmKASUz5ZhVZEZI_Sf3YwNM1F3x-0Tpd7at0RMa6a9NDvK87iJwAwAv1CRCEpZ-1LGrZfzVKgdLfPfmbbxaMsedU92ASbSlzAhnEhPIVs6A3AojFZbXfY9_pJ814_M1ndjBDUmaHkPW_q954EoFrCVFm4QNP4Gzux3OfsUEpH3o0aU75bYm5FFUjZTmnHavb8NHMx3LjKOPKKie_THqhiEvEOk34D6T6RaySqIPnAtC1niRpaFC-lBWzweZL6lMtc2mHxqDnlubaadRVeXnVsjuYPVipOtjJBU2BeIgEyuvL8jBPtPLwjmXLEJSSp3WrhwVY7nRnuOR7TxoM4OJ7Wjb9cRhCOKt2u7G94P7tXCAUq-x0DTGmIiysVoExhFPfUBF5uRnRpHPM2_bhvo7bvI_okB6-hOd-4V15aI4UMlqvxTCvdU4xexT1mH72kiCQKg8q7yZeeBcPgDwEFwahxRW5V9F-Za3ivBifrJo3CjXQhNZnHccH4rlfRGgJbYqthfDCFNhYVqM3HWZzZmKfPFLAfdx1v-5oBU4=s600-no?authuser=0",
          },
          {
            id: "d5dsaf4ddd8dgbf4f855dvh8",
            name: "Agua Mineral 300ml",
            price: 3,
            imageUrl:
              "https://lh3.googleusercontent.com/8PgMx2X-Qw5bLgoMR-WAP3U74OFcVqXhiA08jbebdAom8QXGOEPr6cEQRoOkt3UOCsyihpSfOUYNvTz3xeYVqNmDmc95tsmhhpfOoxj6wuVJAwChh7VCmfzOsdfMxN3o0DN2evSJJU0b0p0a-eUyLCQBu4zILMfJL4uPOY-4a5-pokkKe_5Bu8fdxZsjVpkaJYQ54-bRU9ChKMaOWuQCbSJZVYrf_jqf71UiiSmE1SOWq5ewZL6CMifLAcmxklZ0veCQSgWZjYJRh_8iBbuoLymHVRkp_cvTTovQaZjStCXUSDqYUMxQPXHep5eY8hQ_lytxW_8SGk7_BhbTR8swtDzT52kpk3-43mUuumzcQvUz1p8cXe2bguibq7HrV87E0MYFfUKXAjNkuv8dmDgHdtcmaGaaO6jdplX9v2tEgXyq5twATKB-SQ5V72qoMGWCOAlnMT4wcJfANqB9OzPLYuuka1-EzvKDNhfbU4jTsgBohoV4vUmpwOvuL3lNYHzz8IOkTkZT2CYU1DtoiFAv-geHnja_3nTYs4787T4L6pql0xJUR55Lb6KY_DT9LcwqZ4-4dRA-VF5F6dMmDDENTtPiAO0FcutUE50VYEKSgc8twiBZE7Dv6V-dtgE-XdBCGwKre8ouA0G2YvI3eTF_x2xi7mtIgP3FH0-itnafMo4wXb70UzV_wXi832tG1J4_5NV4VBrLFt8n_KV28hrdmSmyhvT_iQ1F0BeoAgOBZ15OBg9qqnIAm1cORhN8BffRAhnYa7OAa5cd2AAuegXU864MV5sNqRyAWwPbU6sEOMMnlpqRCsUwsILHqvvmJ2eWR2B52Nqml0L1sgrISkirEqKTAbbw8aYXNnobDzYRr2ngjoyWEnipDqxRw7itR36tVCijEB_tnPiZdBqu8YGYg3nh4RUFycRkiGjfHPBQoSJxqx8=w358-h657-no?authuser=0",
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
