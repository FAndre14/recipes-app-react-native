export const categories = [
  {
    id: 0,
    name: 'Pizza',
    photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
  },
  {
    id: 1,
    name: 'Mâncare Mexicană',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Mâncare Italiană',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Fursecuri',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 4,
    name: 'Smoothies',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 5,
    name: 'Prăjitură',
    photo_url: 'https://bucate-aromate.ro/wp-content/uploads/2023/07/Reteta-prajitura-Fanta-cu-branza-dulce-si-jeleu-de-portocale-6.jpg'
  },
  {
    id: 6,
    name: 'Patiserie',
    photo_url: 'https://cofetaria-anaconda.ro/wp-content/gallery/patiserie/patiserie.jpg'
  },
];

export const recipes = [
  {
    recipeId: 1001,
    categoryId: 5,
    title: 'Vânt Spaniol',
    photo_url: 'https://i.ytimg.com/vi/ROl2eP5-jW8/maxresdefault.jpg',
    photosArray: [
      'https://i.ytimg.com/vi/ROl2eP5-jW8/maxresdefault.jpg',
      'https://media.stiridiaspora.ro/image/202101/full/ptrajitura_vant_spaniol.JPG',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_3dNlmuh7zGm0-5RkpKit46w6e8-U_0tHpw9taI2-N6M2WfznzC-nWwmM5aRxwhDCuu7i1G9_DMGQ9zPfW5_vp2kLbcVxqSnXw7pGDSeAiMRRSdY-YlyrV4W9BytN3kowQuHSc3A217Qo/s1600/2.jpg'
    ],
    time: '180',
    ingredients: [
      [16, '10'],
      [62, '1kg'],
      [55, '1kg'],
      [44, '1l'],
      [63, "1 lng"],
      [64, '2'],
      [65, '1'],
      [66, "200gr"]],
    description:
      `
      - Se face un blat de cacao din 6 ouă.
      - Se face un alt blat din 10 albușuri, cu 500gr zahăr și o linguriță de oțet, după care se bagă la cuptor.
      - Pentru realizarea cremei, se va utiliza 1 litru de lapte, 2 budinci de vanilie, 10 gălbenușuri și 12-14 linguri de zahăr.
      - Se fierbe pe aburi, după care se amestecă cu o margarină. Crema se va împărți în 2 cantități egale, una va rămâne albă iar în cealaltă se va pune cacao.
      - Aranjarea blaturilor: Se va pune blatul maro, crema galbenă, un strat de frișcă, blatul alb (bezeaua), crema maro, iar la final se va acoperi cu frișcă.
      `
  },
  {
    recipeId: 1002,
    categoryId: 3,
    title: 'Fursecuri cu ovăz și miere',
    photo_url: 'https://www.lauraadamache.ro/wp-content/uploads/2014/02/biscuiti-post-cu-ovaz-copy.jpg',
    photosArray: [
      'https://www.lauraadamache.ro/wp-content/uploads/2014/02/biscuiti-post-cu-ovaz-copy.jpg',
      "https://www.lalena.ro/images/uploaded/600x_Biscuiti-cu-fulgi-de-ovaz-si-seminte-365.jpg",
      "https://i.ytimg.com/vi/Lwv04IiuKTw/maxresdefault.jpg"
    ],
    time: '15',
    ingredients: [
    [0, '50ml'],
    [1, 'vârf de cuțit'],
    [5, "150gr"],
    [13, "100gr"],
    [12, "225gr"],
    [17, "50gr"],
    [44, "100ml"],
    [67, "50gr"],
    [66, "50gr"],
    [68, "1 plic"]],
    description:
      `
      - Punem mierea, uleiul, zaharul si laptele de soia intr-un vas. Mixam pana cand se omogenizeaza putin (nu trebuie sa obtinem o consitenta perfect omogena, ci doar sa le amestecam putin).
      - Adaugam faina amestecata cu praful de copt si ulterior cernuta, fulgii de ovaz, nucile tocate nu foarte marunt, ciocolata si sarea. Framantam pana cand obtinem un aluat compact.
      - Cu mainile usor umede, formam bilute de marimea unei nuci.
      - Punem cele 2 linguri de fulgi de ovaz intr-o farfurie si aplatizam fiecare biscuit in farfuria cu fulgi, astfel incat suprafata aplatizata sa fie acoperita cu fulgi de ovaz.
      - Punem biscuitii in tava de cuptor tapetata cu hartie de copt si ii coacem in cuptorul preincalzit la 180°C pentru circa 20 minute sau pana cand suprafata biscuitilor se rumeneste uniform.
      - Ii lasam sa se raceasca pe un gratar si apoi ii servim.
      - O sa observam ca imediat dupa ce ii scoatem din cuptor, sunt moi, dar dupa ce se racesc, se intaresc. Daca ii dorim mai moi, dupa ce s-au racit ii punem pe o farfurie pe care o bagam intr-o punga de plastic, sau, daca aveti la dispozitie, intr-un recipient de plastic inchis ermetic. Daca vrem sa le pastram consistenta crocanta, ii pastram intr-o cutie de metal inchisa ermetic.
      `
  },
  {
    recipeId: 3,
    categoryId: 4,
    title: 'Smoothie de fructe',
    photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      [59, '3 bucăți'],
      [60, '500gr.'],
      [61, '500ml'],
    ],
    description:
    `
    Într-un blender, combinați toate ingredientele și amestecați până se obține o componență ușor lichidă. Împărțiți rezultatul în 2 pahare și decorați deasupra cu diverse fructe exotice.
    `
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Tacos cu Pește',
    photo_url: 'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
    photosArray: [
      "https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg",
      'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
      'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg'
    ],
    time: '35',
    ingredients: [
      [30, '1 bucată'],
      [24, '2 lng.'],
      [0, '3 lng.'],
      [3, '1 lng.'],
      [31, '1/2 lng.'],
      [32, '2 bucăți'],
      [4, '2 lng'],
      [33, '500 gr.'],
      [27, '8 bucăți'],
      [14, '2 lingurițe'],
      [34, '1 bucată']
    ],
    description:
      `
      Într-un bol mediu, amestecați cu telul uleiul de măsline, sucul de lime, paprika, pudra chilli și chimionul.
      Adăugați peștele în compoziție până este cu totul acoperit și lăsați-l 15 minute la marinat.
      Între timp putem face sosul: Într-un bol mare, amestecați cu telul maioneza, sucul de lime și mierea, după care adăugați sare și piper.
      Într-o tigaie se vor prăji legumele la un foc mediu. Peștele va fi scos de la marinat și condimentat pe ambele părți cu sare și piper.
      Se va prăși peștele pe ambele părți, între 3 și 5 minute.
      Pentru asamblarea tacoului: Puneți bucățile de pește în lipiile prășite împreună cu avocado. Scurgeți suc de lime deasupra. 
      `
  },
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Pizza Margherita',
    photo_url: 'https://assets.protv.ro/assets/foodstory2019/2015/02/11/image_galleries/5675/cum-sa-faci-pizza-margherita-acasa_size1.jpg',
    photosArray: [
      "https://assets.protv.ro/assets/foodstory2019/2015/02/11/image_galleries/5675/cum-sa-faci-pizza-margherita-acasa_size1.jpg",
      "https://www.bindi.de/wp-content/uploads/2022/02/bindi_pizza_margherita.jpg",
      'https://la-micutu.ro/wp-content/uploads/2022/04/pizza-margherita.jpg'
    ],
    time: '15',
    ingredients: [
      [39, '270gr'],
      [53, '35g'],
      [10, "15gr"],
      [9, "15gr"],
      [1, "20gr"],
      [46, "50gr"],
      [69, "50gr"],
      [70, "50gr"]],
    description:
      `
      Pentru început avem nevoie de aluatul palinat pe care îl întindem și îl așezăm frumos pe retină. 
      Urmează a fi pus sosul de roșii, dar să nu atingă marginele pizzei. 
      Apoi răzălim frumos cașcavalul, mozzarella și topingul deasupra pizzei. 
      Acum pizza este gata de pus în cuptor pentru următoarele 7 minute.
      `
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Ulei',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 1,
    name: 'Sare',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Cartofi',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Paprika',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Piper',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Ovăz',
    photo_url: 'https://unicorn-naturals.ro/image/cache/catalog/wp/2017/11/ovaz-600x315w.jpg.webp'
  },
  {
    ingredientId: 6,
    name: 'Salvie uscată',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  },
  {
    ingredientId: 7,
    name: 'Usturoi pudră',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Ienibahar măcinat',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Oregano',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Busuioc',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Maghiran',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'Făină',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Zahăr brun',
    photo_url:
      'https://comenzi.farmaciatei.ro/gallery/39010/zahar-brun-din-trestie-de-zahar-1-kg-lucas-bites-9684.jpg'
  },
  {
    ingredientId: 14,
    name: 'Sare kosher',
    photo_url:
      'https://m.media-amazon.com/images/I/51gfVcUR1qL._SL1000_.jpg'
  },
  {
    ingredientId: 15,
    name: 'Pui',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Ouă',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Miere',
    photo_url:
      'https://edesia.ro/wp-content/uploads/2021/01/edesia.ro-miere-de-albine-poliflora-borcan-500g-1.jpg'
  },
  {
    ingredientId: 18,
    name: 'Apă',
    photo_url: 'https://depozituldeapa.ro/wp-content/uploads/2023/03/Apa-Craiului-6L-scaled.jpg'
  },
  {
    ingredientId: 19,
    name: 'Ceapă pudră',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Piept de pui',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Ceapă verde tocată',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Pastă tomate',
    photo_url:
      'https://static.mega-image.ro/medias/sys_master/h06/h0e/9244857597982.jpg'
  },
  {
    ingredientId: 24,
    name: 'Pudră Chilli',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Carne vită',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Conservă fasole boabe',
    photo_url:
      'https://static.mega-image.ro/medias/sys_master/h57/hde/9251940433950.jpg'
  },
  {
    ingredientId: 27,
    name: 'Lipie',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Pește prăjit',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Cheddar',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Lime',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Chimion',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Ardei Iute',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Pește',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avocado',
    photo_url:
      'https://fresh-fruits.ro/wp-content/uploads/2019/02/avocado_1050x700.jpg'
  },
  {
    ingredientId: 35,
    name: 'Ardei Iute Rosu',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Ceapă',
    photo_url: 'https://cdn.freshful.ro/media/cache/sylius_shop_product_original/2b/fb/4cdc2d2a09b2167a89f1fdb0c08d.jpg'
  },
  {
    ingredientId: 37,
    name: 'Ardei Iute verde',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Red Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Aluat pizza',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketchup',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Sos iute',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Unt',
    photo_url: 'https://josi.ro/wp-content/uploads/2016/05/unt-josi.jpg'
  },
  {
    ingredientId: 43,
    name: 'Smântână',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'Lapte',
    photo_url:
      'https://latti.md/wp-content/uploads/2021/05/lapte-latti-2-procente_new.jpg'
  },
  {
    ingredientId: 45,
    name: 'Brânză',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozzarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'Țelină',
    photo_url:
      'https://nearlynakedveg.co.uk/cdn/shop/products/Depositphotos_12279854_S.jpg?v=1681376705'
  },
  {
    ingredientId: 48,
    name: 'Parmezan',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'Carne Pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghete',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Usturoi',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Foietaj Lasagna',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Sos de roșii',
    photo_url:
      'https://s13emagst.akamaized.net/products/29978/29977241/images/res_9c6ae2d0c9e777cb9e625c4f40658d31.jpg'
  },
  {
    ingredientId: 54,
    name: 'Roșii',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Zahăr',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'Pătrunjel',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'Brânză Ricotta',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: 'Semințe fenicul',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banane',
    photo_url:
      'https://www.remarkt.ro/cdn/shop/products/Banane_800x.png?v=1597055769'
  },
  {
    ingredientId: 60,
    name: 'Căpșuni',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Iaurt Grecesc',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
  {
    ingredientId: 62,
    name: 'Frișcă',
    photo_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_FHtBw_9CaQ8C4_dJj4Y6Ppqn55qy7QUGUEusm_v9w&s'
  },
  {
    ingredientId: 63,
    name: 'Oțet',
    photo_url:
      'https://grupdzc.ro/media/catalog/product/3/4/34949sgzzbzgc1cxze_600x600.jpg'
  },
  {
    ingredientId: 64,
    name: 'Budincă Vanilie',
    photo_url:
      'https://s13emagst.akamaized.net/products/39198/39197736/images/res_440d10f9672b8badf15b2479f72c2587.jpg'
  },
  {
    ingredientId: 65,
    name: 'Margarină',
    photo_url:
      'https://s.cdnmpro.com/310232724/p/l/4/margarina-rama-clasic-250g~3144.jpg'
  },
  {
    ingredientId: 66,
    name: 'Cacao',
    photo_url:
      'https://dulcinea.ro/wp-content/uploads/2022/08/pudra-cacao-olandeza.png'
  },
  {
    ingredientId: 67,
    name: 'Nuci',
    photo_url:
      'https://www.roadelepamantului.ro/image/cache/catalog/produse/miez-nuca-800x800.jpg'
  },
  {
    ingredientId: 68,
    name: 'Praf de copt',
    photo_url:
      'https://cdn.freshful.ro/media/cache/sylius_shop_product_original/1a/96/5240eb239fbcfd09f4d90a8d480b.jpg'
  },
  {
    ingredientId: 69,
    name: 'Cașcaval',
    photo_url:
      'https://viomil.ro/wp-content/uploads/2016/09/product-1-1.jpg'
  },
  {
    ingredientId: 70,
    name: "Topping Pizza",
    photo_url:
      "https://storage.googleapis.com/bringoimg/web/cache/sylius_shop_product_original/c3/f1/1d4bbc6f136b1ddf8f22e22ff21e.jpg"
  }
];
