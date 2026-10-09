const CATEGORY_DEFINITIONS = [
  // zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  {"id": "7c64ba88beda", "parent": null},
  // zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  // parent: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  {"id": "9468e0f25883", "parent": "7c64ba88beda"},
  // zh: 职业 | en: Jobs | ja: 仕事 | es: Profesiones
  // parent: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  {"id": "34f21a5096e9", "parent": "7c64ba88beda"},
  // zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  // parent: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  {"id": "fd7048eb6c8f", "parent": "7c64ba88beda"},
  // zh: 心情感受 | en: Feelings | ja: 気持ち | es: Emociones y sensaciones
  // parent: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  {"id": "a46a95a3a41d", "parent": "7c64ba88beda"},
  // zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "7c62ccf190c7", "parent": null},
  // zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  {"id": "bab0102e1b9c", "parent": null},
  // zh: 衣物 | en: Clothing | ja: 衣類 | es: Ropa
  // parent: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  {"id": "1629945afecf", "parent": "bab0102e1b9c"},
  // zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  // parent: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  {"id": "2b2cae765f7f", "parent": "bab0102e1b9c"},
  // zh: 家具寝具 | en: Furniture & bedding | ja: 家具・寝具 | es: Muebles y ropa de cama
  // parent: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  {"id": "6ecad4e01aee", "parent": "bab0102e1b9c"},
  // zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  // parent: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  {"id": "e02ef59c8f57", "parent": "bab0102e1b9c"},
  // zh: 日用工具 | en: Everyday tools | ja: 日用工具 | es: Herramientas
  // parent: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  {"id": "28949f3b43ab", "parent": "bab0102e1b9c"},
  // zh: 厨具餐具 | en: Kitchen & tableware | ja: 調理器具・食器 | es: Cocina y vajilla
  // parent: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  {"id": "1523d92170e7", "parent": "bab0102e1b9c"},
  // zh: 清洁用品 | en: Cleaning supplies | ja: 掃除用品 | es: Artículos de limpieza
  // parent: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  {"id": "d58a966caaaf", "parent": "bab0102e1b9c"},
  // zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  // parent: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  {"id": "2615218e170a", "parent": "bab0102e1b9c"},
  // zh: 文具 | en: Stationery | ja: 文房具 | es: Papelería
  // parent: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  {"id": "5cafe538559d", "parent": "bab0102e1b9c"},
  // zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  {"id": "bec78d613125", "parent": null},
  // zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  // parent: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  {"id": "956c0b6418e3", "parent": "bec78d613125"},
  // zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  // parent: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  {"id": "f0b66a0e163d", "parent": "bec78d613125"},
  // zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  // parent: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  {"id": "ee8483210172", "parent": "bec78d613125"},
  // zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  // parent: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  {"id": "0dc0366ac1c0", "parent": "bec78d613125"},
  // zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  // parent: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  {"id": "2dd34a724c3e", "parent": "bec78d613125"},
  // zh: 饮品汤水 | en: Drinks & soups | ja: 飲み物・スープ | es: Bebidas y sopas
  // parent: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  {"id": "6268c6150a7e", "parent": "bec78d613125"},
  // zh: 调味品 | en: Seasonings | ja: 調味料 | es: Condimentos y conservas
  // parent: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  {"id": "cca2d6104e41", "parent": "bec78d613125"},
  // zh: 动物 | en: Animals | ja: 動物 | es: Animales
  {"id": "cbe26d1333f9", "parent": null},
  // zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  // parent: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  {"id": "58435b443422", "parent": "cbe26d1333f9"},
  // zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  // parent: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  {"id": "fe69a6e98dc4", "parent": "cbe26d1333f9"},
  // zh: 爬行纲 | en: Reptiles | ja: 爬虫類 | es: Reptiles
  // parent: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  {"id": "efb9d9f8ed9c", "parent": "cbe26d1333f9"},
  // zh: 两栖纲 | en: Amphibians | ja: 両生類 | es: Anfibios
  // parent: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  {"id": "0ca5a28747b0", "parent": "cbe26d1333f9"},
  // zh: 辐鳍鱼纲 | en: Ray-finned fish | ja: 条鰭類 | es: Peces de aletas radiadas
  // parent: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  {"id": "da61285573e5", "parent": "cbe26d1333f9"},
  // zh: 软骨鱼纲 | en: Cartilaginous fish | ja: 軟骨魚類 | es: Peces cartilaginosos
  // parent: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  {"id": "ecb856310c35", "parent": "cbe26d1333f9"},
  // zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  // parent: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  {"id": "4524c3cbcdd8", "parent": "cbe26d1333f9"},
  // zh: 软体动物门 | en: Mollusks | ja: 軟体動物 | es: Moluscos
  // parent: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  {"id": "c436a94bfc02", "parent": "cbe26d1333f9"},
  // zh: 棘皮动物门 | en: Echinoderms | ja: 棘皮動物 | es: Equinodermos
  // parent: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  {"id": "6b9004514b3a", "parent": "cbe26d1333f9"},
  // zh: 环节动物门 | en: Annelids | ja: 環形動物 | es: Anélidos
  // parent: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  {"id": "7960edda37e5", "parent": "cbe26d1333f9"},
  // zh: 刺胞动物门 | en: Cnidarians | ja: 刺胞動物 | es: Cnidarios
  // parent: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  {"id": "4225e687e334", "parent": "cbe26d1333f9"},
  // zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  {"id": "dd24baf8e065", "parent": null},
  // zh: 植物 | en: Plants | ja: 植物 | es: Plantas
  // parent: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  {"id": "ece2fc2439ce", "parent": "dd24baf8e065"},
  // zh: 天空 | en: Sky | ja: 空 | es: Cielo
  // parent: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  {"id": "35930101f431", "parent": "dd24baf8e065"},
  // zh: 大地 | en: Earth | ja: 大地 | es: Tierra
  // parent: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  {"id": "223ba1a106a1", "parent": "dd24baf8e065"},
  // zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  {"id": "f32cdd7ee320", "parent": null},
  // zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  // parent: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  {"id": "165a71457c3e", "parent": "f32cdd7ee320"},
  // zh: 交通设施 | en: Transport facilities | ja: 交通施設 | es: Elementos del transporte
  // parent: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  {"id": "3d3a5d95f8a3", "parent": "f32cdd7ee320"},
  // zh: 场所 | en: Places | ja: 場所 | es: Lugares
  // parent: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  {"id": "b97a5df1bc72", "parent": "f32cdd7ee320"},
  // zh: 农场 | en: Farm | ja: 農場 | es: Granja
  // parent: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  {"id": "f9acc354318e", "parent": "f32cdd7ee320"},
  // zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  {"id": "2e3812368964", "parent": null},
  // zh: 玩具游戏 | en: Toys & games | ja: おもちゃ・ゲーム | es: Juguetes y juegos
  // parent: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  {"id": "39166172731e", "parent": "2e3812368964"},
  // zh: 球类运动 | en: Ball sports | ja: 球技 | es: Deportes de pelota
  // parent: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  {"id": "c79b1e190a79", "parent": "2e3812368964"},
  // zh: 水上运动 | en: Water sports | ja: ウォータースポーツ | es: Deportes acuáticos
  // parent: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  {"id": "98c3f4614791", "parent": "2e3812368964"},
  // zh: 乐器 | en: Musical instruments | ja: 楽器 | es: Instrumentos musicales
  // parent: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  {"id": "642c04423007", "parent": "2e3812368964"},
  // zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  {"id": "00f32415b421", "parent": null},
  // zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  // parent: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  {"id": "5b5a75de73da", "parent": "00f32415b421"},
  // zh: 1-10 | en: 1–10 | ja: 1〜10 | es: 1-10
  // parent: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  {"id": "5b4e8c579e31", "parent": "00f32415b421"},
  // zh: 时间 | en: Time | ja: 時間 | es: Tiempo
  // parent: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  {"id": "fcc0be5951f6", "parent": "00f32415b421"},
  // zh: 季节 | en: Seasons | ja: 季節 | es: Estaciones del año
  // parent: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  {"id": "cc1235b9598f", "parent": "00f32415b421"},
  // zh: 颜色 | en: Colors | ja: 色 | es: Colores
  // parent: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  {"id": "9b3cba9a6be6", "parent": "00f32415b421"},
  // zh: 图形 | en: Shapes | ja: 図形 | es: Figuras
  // parent: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  {"id": "41611026ef02", "parent": "00f32415b421"},
  // zh: 比较 | en: Comparisons | ja: 比較 | es: Comparaciones
  // parent: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  {"id": "5e7b5a6ca8b9", "parent": "00f32415b421"},
  // zh: 方位 | en: Directions | ja: 位置・方向 | es: Posiciones
  // parent: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  {"id": "7c2ff5333f5e", "parent": "00f32415b421"}
];
