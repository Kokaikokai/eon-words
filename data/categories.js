const CARD_CATEGORIES = [
  // zh: 人 | en: person | ja: ひと | es: persona
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "69ca8ecc1c18", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 我 | en: me | ja: わたし | es: yo
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "1c982cd26ef7", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 爸爸 | en: dad | ja: パパ | es: papá
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "f0ab14a0084e", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 妈妈 | en: mom | ja: ママ | es: mamá
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "9b8838aec96c", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 爷爷 | en: grandpa | ja: おじいちゃん | es: abuelo
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "c059c75daf19", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 奶奶 | en: grandma | ja: おばあちゃん | es: abuela
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "3d846673c68e", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 哥哥 | en: big brother | ja: おにいちゃん | es: hermano mayor
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "065d0474ac39", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 姐姐 | en: big sister | ja: おねえちゃん | es: hermana mayor
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "55e4d5a0a860", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 弟弟 | en: little brother | ja: おとうと | es: hermano menor
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "1a296d8c5afa", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 妹妹 | en: little sister | ja: いもうと | es: hermana menor
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "7ca73a25d6f4", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 叔叔 | en: uncle | ja: おじさん | es: tío
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "a8df7f43ecf0", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 阿姨 | en: aunt | ja: おばさん | es: tía
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "52e5e996eb84", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 家 | en: home | ja: いえ | es: familia
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 家人称呼 | en: Family | ja: 家族 | es: Familia y personas
  {"id": "868f38267634", "cat": "7c64ba88beda", "subcat": "9468e0f25883"},
  // zh: 老师 | en: teacher | ja: せんせい | es: maestro
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 职业 | en: Jobs | ja: 仕事 | es: Profesiones
  {"id": "d06a051f9a09", "cat": "7c64ba88beda", "subcat": "34f21a5096e9"},
  // zh: 警察 | en: police officer | ja: けいさつかん | es: policía
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 职业 | en: Jobs | ja: 仕事 | es: Profesiones
  {"id": "bfb5efe11ad4", "cat": "7c64ba88beda", "subcat": "34f21a5096e9"},
  // zh: 消防员 | en: firefighter | ja: しょうぼうし | es: bombero
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 职业 | en: Jobs | ja: 仕事 | es: Profesiones
  {"id": "071505336d89", "cat": "7c64ba88beda", "subcat": "34f21a5096e9"},
  // zh: 厨师 | en: chef | ja: ちょうりし | es: cocinero
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 职业 | en: Jobs | ja: 仕事 | es: Profesiones
  {"id": "7886da371a70", "cat": "7c64ba88beda", "subcat": "34f21a5096e9"},
  // zh: 医生 | en: doctor | ja: いしゃ | es: médico
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 职业 | en: Jobs | ja: 仕事 | es: Profesiones
  {"id": "1e925098d6f7", "cat": "7c64ba88beda", "subcat": "34f21a5096e9"},
  // zh: 头 | en: head | ja: あたま | es: cabeza
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "52fd19994909", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 脸 | en: face | ja: かお | es: cara
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "a7d66a8a197e", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 眉毛 | en: eyebrow | ja: まゆげ | es: cejas
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "58e280b3f47a", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 眼睛 | en: eye | ja: め | es: ojos
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "e8fb9c083478", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 耳朵 | en: ear | ja: みみ | es: orejas
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "2a7cdff1e4e4", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 鼻子 | en: nose | ja: はな | es: nariz
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "baa531707657", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 口 | en: mouth | ja: くち | es: boca
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "59911b182806", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 牙 | en: tooth | ja: は | es: dientes
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "39c42be21721", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 舌头 | en: tongue | ja: した | es: lengua
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "edfb38c525da", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 肩膀 | en: shoulder | ja: かた | es: hombro
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "36908a4705b5", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 手 | en: hand | ja: て | es: mano
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "9adb29cb0e5e", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 手指 | en: finger | ja: ゆび | es: dedo
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "f8b9113dda33", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 心 | en: heart | ja: ハート | es: corazón
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "637b91acfe02", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 肚子 | en: belly | ja: おなか | es: barriga
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "ec9435b1ffa0", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 腰 | en: waist | ja: こし | es: cintura
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "aed20178dc55", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 背 | en: back | ja: せなか | es: espalda
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "7c58de162066", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 腿 | en: leg | ja: あし | es: pierna
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "1c8e1dc1d024", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 脚 | en: foot | ja: あし | es: pie
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 身体部位 | en: Body parts | ja: 体の部位 | es: Partes del cuerpo
  {"id": "b9c670004cec", "cat": "7c64ba88beda", "subcat": "fd7048eb6c8f"},
  // zh: 高兴 | en: happy | ja: うれしい | es: contento
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 心情感受 | en: Feelings | ja: 気持ち | es: Emociones y sensaciones
  {"id": "0889c14a6a7b", "cat": "7c64ba88beda", "subcat": "a46a95a3a41d"},
  // zh: 爱 | en: love | ja: あい | es: amor
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 心情感受 | en: Feelings | ja: 気持ち | es: Emociones y sensaciones
  {"id": "350f8950d7fd", "cat": "7c64ba88beda", "subcat": "a46a95a3a41d"},
  // zh: 害怕 | en: scared | ja: こわい | es: tener miedo
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 心情感受 | en: Feelings | ja: 気持ち | es: Emociones y sensaciones
  {"id": "06fb8f733c36", "cat": "7c64ba88beda", "subcat": "a46a95a3a41d"},
  // zh: 着急 | en: anxious | ja: あせる | es: preocupado
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 心情感受 | en: Feelings | ja: 気持ち | es: Emociones y sensaciones
  {"id": "577379112fbb", "cat": "7c64ba88beda", "subcat": "a46a95a3a41d"},
  // zh: 累 | en: tired | ja: つかれた | es: cansado
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 心情感受 | en: Feelings | ja: 気持ち | es: Emociones y sensaciones
  {"id": "844dd6d99526", "cat": "7c64ba88beda", "subcat": "a46a95a3a41d"},
  // zh: 困 | en: sleepy | ja: ねむい | es: tener sueño
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 心情感受 | en: Feelings | ja: 気持ち | es: Emociones y sensaciones
  {"id": "eb540ca1361d", "cat": "7c64ba88beda", "subcat": "a46a95a3a41d"},
  // zh: 饿 | en: hungry | ja: おなかがすいた | es: tener hambre
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 心情感受 | en: Feelings | ja: 気持ち | es: Emociones y sensaciones
  {"id": "a524a63ec665", "cat": "7c64ba88beda", "subcat": "a46a95a3a41d"},
  // zh: 渴 | en: thirsty | ja: のどがかわいた | es: tener sed
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 心情感受 | en: Feelings | ja: 気持ち | es: Emociones y sensaciones
  {"id": "3cdd057df7e3", "cat": "7c64ba88beda", "subcat": "a46a95a3a41d"},
  // zh: 痛 | en: painful | ja: いたい | es: dolor
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 心情感受 | en: Feelings | ja: 気持ち | es: Emociones y sensaciones
  {"id": "c0513d187318", "cat": "7c64ba88beda", "subcat": "a46a95a3a41d"},
  // zh: 冷 | en: cold | ja: つめたい | es: frío
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 心情感受 | en: Feelings | ja: 気持ち | es: Emociones y sensaciones
  {"id": "429760d1a5be", "cat": "7c64ba88beda", "subcat": "a46a95a3a41d"},
  // zh: 热 | en: hot | ja: あつい | es: caliente
  // cat: zh: 人物身体 | en: People & body | ja: 人と体 | es: Personas y cuerpo
  // subcat: zh: 心情感受 | en: Feelings | ja: 気持ち | es: Emociones y sensaciones
  {"id": "f634daea0253", "cat": "7c64ba88beda", "subcat": "a46a95a3a41d"},
  // zh: 吃 | en: eat | ja: たべる | es: comer
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "9b456f339c31", "cat": "7c62ccf190c7"},
  // zh: 喝 | en: drink | ja: のむ | es: beber
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "47ae5d13e037", "cat": "7c62ccf190c7"},
  // zh: 睡觉 | en: sleep | ja: ねる | es: dormir
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "f36cf2c4b327", "cat": "7c62ccf190c7"},
  // zh: 洗 | en: wash | ja: あらう | es: lavar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "65df07e0997c", "cat": "7c62ccf190c7"},
  // zh: 穿衣 | en: put on clothes | ja: ふくをきる | es: vestirse
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "2862d6e276dd", "cat": "7c62ccf190c7"},
  // zh: 脱衣 | en: take off clothes | ja: ふくをぬぐ | es: desvestirse
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "6c972713afa9", "cat": "7c62ccf190c7"},
  // zh: 坐 | en: sit | ja: すわる | es: sentarse
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "cc44806b54fe", "cat": "7c62ccf190c7"},
  // zh: 走 | en: walk | ja: あるく | es: caminar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "90a884bd3efe", "cat": "7c62ccf190c7"},
  // zh: 跑 | en: run | ja: はしる | es: correr
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "6d17cfdda28e", "cat": "7c62ccf190c7"},
  // zh: 跳 | en: jump | ja: ジャンプする | es: saltar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "0eceec46e4b0", "cat": "7c62ccf190c7"},
  // zh: 爬 | en: climb | ja: のぼる | es: gatear
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "632496071432", "cat": "7c62ccf190c7"},
  // zh: 飞 | en: fly | ja: とぶ | es: volar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "613bdb54e4d9", "cat": "7c62ccf190c7"},
  // zh: 游泳 | en: swim | ja: およぐ | es: nadar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "e2a10f29a97a", "cat": "7c62ccf190c7"},
  // zh: 玩 | en: play | ja: あそぶ | es: jugar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "ff348ccad2f4", "cat": "7c62ccf190c7"},
  // zh: 踢 | en: kick | ja: ける | es: patear
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "a22af70cce11", "cat": "7c62ccf190c7"},
  // zh: 拿 | en: take | ja: とる | es: tomar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "dfe9750a7d88", "cat": "7c62ccf190c7"},
  // zh: 放 | en: put | ja: おく | es: poner
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "e1dc13f20efb", "cat": "7c62ccf190c7"},
  // zh: 推 | en: push | ja: おす | es: empujar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "17177206baee", "cat": "7c62ccf190c7"},
  // zh: 拉 | en: pull | ja: ひく | es: jalar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "4b2e34ab120e", "cat": "7c62ccf190c7"},
  // zh: 开 | en: open | ja: あける | es: abrir
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "e3a8630cc913", "cat": "7c62ccf190c7"},
  // zh: 关 | en: close | ja: しめる | es: cerrar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "f0c132a6d042", "cat": "7c62ccf190c7"},
  // zh: 看 | en: look | ja: みる | es: mirar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "6117b09149ca", "cat": "7c62ccf190c7"},
  // zh: 听 | en: listen | ja: きく | es: escuchar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "ab2a5db1e85d", "cat": "7c62ccf190c7"},
  // zh: 找 | en: look for | ja: さがす | es: buscar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "2a7355e8fcc1", "cat": "7c62ccf190c7"},
  // zh: 读 | en: read | ja: よむ | es: leer
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "30d17756180d", "cat": "7c62ccf190c7"},
  // zh: 抱 | en: hug | ja: だく | es: abrazar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "6eb26d6ff786", "cat": "7c62ccf190c7"},
  // zh: 笑 | en: laugh | ja: わらう | es: reír
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "8799ac861f68", "cat": "7c62ccf190c7"},
  // zh: 哭 | en: cry | ja: なく | es: llorar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "0d612561b368", "cat": "7c62ccf190c7"},
  // zh: 唱歌 | en: sing | ja: うたう | es: cantar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "37b347a058d8", "cat": "7c62ccf190c7"},
  // zh: 拍手 | en: clap hands | ja: てをたたく | es: aplaudir
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "65e3f519c1ef", "cat": "7c62ccf190c7"},
  // zh: 吹气 | en: blow | ja: ふく | es: soplar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "613e331a2e6d", "cat": "7c62ccf190c7"},
  // zh: 等 | en: wait | ja: まつ | es: esperar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "d5552691aa78", "cat": "7c62ccf190c7"},
  // zh: 帮忙 | en: help | ja: てつだう | es: ayudar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "563abee77490", "cat": "7c62ccf190c7"},
  // zh: 谢谢 | en: thank you | ja: ありがとう | es: gracias
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "0443beddbe2e", "cat": "7c62ccf190c7"},
  // zh: 写 | en: write | ja: かく | es: escribir
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "5203ea21d966", "cat": "7c62ccf190c7"},
  // zh: 画 | en: draw | ja: えをかく | es: dibujar
  // cat: zh: 动作表达 | en: Actions | ja: 動作 | es: Acciones y expresiones
  {"id": "728ac4ed4d99", "cat": "7c62ccf190c7"},
  // zh: 房子 | en: house | ja: いえ | es: casa
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "8a08b93b969c", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 屋顶 | en: roof | ja: やね | es: tejado
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "c1a87a1ac0dd", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 墙 | en: wall | ja: かべ | es: pared
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "51cdb481dd4f", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 地板 | en: floor | ja: ゆか | es: piso
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "2361ce8975aa", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 天花板 | en: ceiling | ja: てんじょう | es: techo
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "9df3dd16adc5", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 门 | en: door | ja: ドア | es: puerta
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "3e9a0e710c0a", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 门把手 | en: door handle | ja: ドアハンドル | es: manija de la puerta
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "367199021602", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 门锁 | en: door lock | ja: ドアロック | es: cerradura
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "9f028239915f", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 门铃 | en: doorbell | ja: ドアベル | es: timbre
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "d01794e4da21", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 窗 | en: window | ja: まど | es: ventana
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "ad71151f7882", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 纱窗 | en: window screen | ja: あみど | es: mosquitero
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "82d53a687d86", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 楼梯 | en: stairs | ja: かいだん | es: escaleras
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "b6ae44b05317", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 栏杆 | en: railing | ja: てすり | es: barandilla
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 房屋结构 | en: Parts of a house | ja: 家のつくり | es: Partes de la casa
  {"id": "8d433cda57dd", "cat": "bab0102e1b9c", "subcat": "2b2cae765f7f"},
  // zh: 窗帘 | en: curtains | ja: カーテン | es: cortina
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 家具寝具 | en: Furniture & bedding | ja: 家具・寝具 | es: Muebles y ropa de cama
  {"id": "808459ab4c5b", "cat": "bab0102e1b9c", "subcat": "6ecad4e01aee"},
  // zh: 桌子 | en: table | ja: テーブル | es: mesa
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 家具寝具 | en: Furniture & bedding | ja: 家具・寝具 | es: Muebles y ropa de cama
  {"id": "8a6cd1770c7f", "cat": "bab0102e1b9c", "subcat": "6ecad4e01aee"},
  // zh: 椅子 | en: chair | ja: いす | es: silla
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 家具寝具 | en: Furniture & bedding | ja: 家具・寝具 | es: Muebles y ropa de cama
  {"id": "41ee2d97313f", "cat": "bab0102e1b9c", "subcat": "6ecad4e01aee"},
  // zh: 床 | en: bed | ja: ベッド | es: cama
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 家具寝具 | en: Furniture & bedding | ja: 家具・寝具 | es: Muebles y ropa de cama
  {"id": "17b8658065fc", "cat": "bab0102e1b9c", "subcat": "6ecad4e01aee"},
  // zh: 被子 | en: quilt | ja: かけぶとん | es: cobija
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 家具寝具 | en: Furniture & bedding | ja: 家具・寝具 | es: Muebles y ropa de cama
  {"id": "567300c16d0d", "cat": "bab0102e1b9c", "subcat": "6ecad4e01aee"},
  // zh: 枕头 | en: pillow | ja: まくら | es: almohada
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 家具寝具 | en: Furniture & bedding | ja: 家具・寝具 | es: Muebles y ropa de cama
  {"id": "5df3d81cae38", "cat": "bab0102e1b9c", "subcat": "6ecad4e01aee"},
  // zh: 地毯 | en: rug | ja: ラグ | es: alfombra
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 家具寝具 | en: Furniture & bedding | ja: 家具・寝具 | es: Muebles y ropa de cama
  {"id": "7b221452c996", "cat": "bab0102e1b9c", "subcat": "6ecad4e01aee"},
  // zh: 镜子 | en: mirror | ja: かがみ | es: espejo
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 家具寝具 | en: Furniture & bedding | ja: 家具・寝具 | es: Muebles y ropa de cama
  {"id": "3fc1ca79b0bb", "cat": "bab0102e1b9c", "subcat": "6ecad4e01aee"},
  // zh: 衣架 | en: clothes hanger | ja: ハンガー | es: gancho para ropa
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 家具寝具 | en: Furniture & bedding | ja: 家具・寝具 | es: Muebles y ropa de cama
  {"id": "e6ab3e75efe5", "cat": "bab0102e1b9c", "subcat": "6ecad4e01aee"},
  // zh: 衣服 | en: clothes | ja: ふく | es: ropa
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 衣物 | en: Clothing | ja: 衣類 | es: Ropa
  {"id": "e12de6d411d6", "cat": "bab0102e1b9c", "subcat": "1629945afecf"},
  // zh: 裤子 | en: pants | ja: ズボン | es: pantalones
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 衣物 | en: Clothing | ja: 衣類 | es: Ropa
  {"id": "7f27ff07b485", "cat": "bab0102e1b9c", "subcat": "1629945afecf"},
  // zh: 袜子 | en: socks | ja: くつした | es: calcetines
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 衣物 | en: Clothing | ja: 衣類 | es: Ropa
  {"id": "6abf9d24934f", "cat": "bab0102e1b9c", "subcat": "1629945afecf"},
  // zh: 鞋 | en: shoes | ja: くつ | es: zapatos
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 衣物 | en: Clothing | ja: 衣類 | es: Ropa
  {"id": "5e3abba1f0aa", "cat": "bab0102e1b9c", "subcat": "1629945afecf"},
  // zh: 帽子 | en: hat | ja: ぼうし | es: sombrero
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 衣物 | en: Clothing | ja: 衣類 | es: Ropa
  {"id": "58e0e04cb47a", "cat": "bab0102e1b9c", "subcat": "1629945afecf"},
  // zh: 电扇 | en: electric fan | ja: せんぷうき | es: ventilador
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "4ea7e5a81412", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 冰箱 | en: refrigerator | ja: れいぞうこ | es: refrigerador
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "edfe8dd6d76c", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 洗衣机 | en: washing machine | ja: せんたくき | es: lavadora
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "921cff555677", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 烘干机 | en: dryer | ja: かんそうき | es: secadora
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "29b38355710a", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 吸尘器 | en: vacuum cleaner | ja: そうじき | es: aspiradora
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "12b6d714d024", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 吹风机 | en: hair dryer | ja: ドライヤー | es: secador de pelo
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "0224e061adba", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 电水壶 | en: electric kettle | ja: でんきケトル | es: hervidor eléctrico
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "ca9bcad1953a", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 灯 | en: light | ja: ライト | es: lámpara
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "952a2ffe9439", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 灯泡 | en: light bulb | ja: でんきゅう | es: foco
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "2ea3b2edd763", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 手电筒 | en: flashlight | ja: かいちゅうでんとう | es: linterna
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "18e05bb7886a", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 电池 | en: batteries | ja: でんち | es: pila
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "24b6f47d660f", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 插线板 | en: power strip | ja: でんげんタップ | es: regleta de enchufes
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "4205abd2d389", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 充电器 | en: charger | ja: じゅうでんき | es: cargador
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "ef14a3da5470", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 遥控器 | en: remote control | ja: リモコン | es: control remoto
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "9323f57dfef3", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 手机 | en: mobile phone | ja: けいたいでんわ | es: teléfono celular
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "1dbbe741c4a0", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 闹钟 | en: alarm clock | ja: めざましどけい | es: despertador
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 电器 | en: Electrical appliances | ja: 電気機器 | es: Aparatos eléctricos
  {"id": "ebac02340251", "cat": "bab0102e1b9c", "subcat": "e02ef59c8f57"},
  // zh: 钥匙 | en: key | ja: かぎ | es: llave
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 日用工具 | en: Everyday tools | ja: 日用工具 | es: Herramientas
  {"id": "cacfcd636883", "cat": "bab0102e1b9c", "subcat": "28949f3b43ab"},
  // zh: 伞 | en: umbrella | ja: かさ | es: paraguas
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 日用工具 | en: Everyday tools | ja: 日用工具 | es: Herramientas
  {"id": "8ae50d7dfa6c", "cat": "bab0102e1b9c", "subcat": "28949f3b43ab"},
  // zh: 锤子 | en: hammer | ja: かなづち | es: martillo
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 日用工具 | en: Everyday tools | ja: 日用工具 | es: Herramientas
  {"id": "3fb253d05d55", "cat": "bab0102e1b9c", "subcat": "28949f3b43ab"},
  // zh: 螺丝刀 | en: screwdriver | ja: ドライバー | es: destornillador
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 日用工具 | en: Everyday tools | ja: 日用工具 | es: Herramientas
  {"id": "0279f2d82d01", "cat": "bab0102e1b9c", "subcat": "28949f3b43ab"},
  // zh: 扳手 | en: wrench | ja: スパナ | es: llave inglesa
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 日用工具 | en: Everyday tools | ja: 日用工具 | es: Herramientas
  {"id": "54e9b56492f8", "cat": "bab0102e1b9c", "subcat": "28949f3b43ab"},
  // zh: 卷尺 | en: tape measure | ja: まきじゃく | es: cinta métrica
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 日用工具 | en: Everyday tools | ja: 日用工具 | es: Herramientas
  {"id": "c887d7b5cc27", "cat": "bab0102e1b9c", "subcat": "28949f3b43ab"},
  // zh: 胶带 | en: adhesive tape | ja: ねんちゃくテープ | es: cinta adhesiva
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 日用工具 | en: Everyday tools | ja: 日用工具 | es: Herramientas
  {"id": "b08635fafbc8", "cat": "bab0102e1b9c", "subcat": "28949f3b43ab"},
  // zh: 洒水壶 | en: watering can | ja: じょうろ | es: regadera
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 日用工具 | en: Everyday tools | ja: 日用工具 | es: Herramientas
  // extraCats: zh: 农场 | en: Farm | ja: 農場 | es: Granja
  {"id": "8cafd6477253", "cat": "bab0102e1b9c", "subcat": "28949f3b43ab", "extraCats": ["f9acc354318e"]},
  // zh: 碗 | en: bowl | ja: おわん | es: tazón
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 厨具餐具 | en: Kitchen & tableware | ja: 調理器具・食器 | es: Cocina y vajilla
  {"id": "1f9bd6d60d11", "cat": "bab0102e1b9c", "subcat": "1523d92170e7"},
  // zh: 盘子 | en: plate | ja: さら | es: plato
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 厨具餐具 | en: Kitchen & tableware | ja: 調理器具・食器 | es: Cocina y vajilla
  {"id": "680f4117a335", "cat": "bab0102e1b9c", "subcat": "1523d92170e7"},
  // zh: 杯子 | en: cup | ja: コップ | es: vaso
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 厨具餐具 | en: Kitchen & tableware | ja: 調理器具・食器 | es: Cocina y vajilla
  {"id": "74e5d8fa1fa7", "cat": "bab0102e1b9c", "subcat": "1523d92170e7"},
  // zh: 筷子 | en: chopsticks | ja: はし | es: palillos
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 厨具餐具 | en: Kitchen & tableware | ja: 調理器具・食器 | es: Cocina y vajilla
  {"id": "e7f33e8a1fd5", "cat": "bab0102e1b9c", "subcat": "1523d92170e7"},
  // zh: 勺子 | en: spoon | ja: スプーン | es: cuchara
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 厨具餐具 | en: Kitchen & tableware | ja: 調理器具・食器 | es: Cocina y vajilla
  {"id": "11a5648a9304", "cat": "bab0102e1b9c", "subcat": "1523d92170e7"},
  // zh: 叉子 | en: fork | ja: フォーク | es: tenedor
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 厨具餐具 | en: Kitchen & tableware | ja: 調理器具・食器 | es: Cocina y vajilla
  {"id": "93d85bf3ae4f", "cat": "bab0102e1b9c", "subcat": "1523d92170e7"},
  // zh: 锅 | en: cooking pot | ja: なべ | es: olla
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 厨具餐具 | en: Kitchen & tableware | ja: 調理器具・食器 | es: Cocina y vajilla
  {"id": "d8a84bf7638e", "cat": "bab0102e1b9c", "subcat": "1523d92170e7"},
  // zh: 保鲜膜 | en: plastic wrap | ja: ラップ | es: película de plástico
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 厨具餐具 | en: Kitchen & tableware | ja: 調理器具・食器 | es: Cocina y vajilla
  {"id": "444e5425cca6", "cat": "bab0102e1b9c", "subcat": "1523d92170e7"},
  // zh: 铝箔 | en: aluminum foil | ja: アルミホイル | es: papel de aluminio
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 厨具餐具 | en: Kitchen & tableware | ja: 調理器具・食器 | es: Cocina y vajilla
  {"id": "0b688cd9ebda", "cat": "bab0102e1b9c", "subcat": "1523d92170e7"},
  // zh: 保鲜袋 | en: resealable bags | ja: ジッパーつきふくろ | es: bolsa para alimentos
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 厨具餐具 | en: Kitchen & tableware | ja: 調理器具・食器 | es: Cocina y vajilla
  {"id": "bef0de4c3280", "cat": "bab0102e1b9c", "subcat": "1523d92170e7"},
  // zh: 盆 | en: basin | ja: たらい | es: palangana
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 清洁用品 | en: Cleaning supplies | ja: 掃除用品 | es: Artículos de limpieza
  {"id": "3a10e95b920e", "cat": "bab0102e1b9c", "subcat": "d58a966caaaf"},
  // zh: 桶 | en: bucket | ja: バケツ | es: cubeta
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 清洁用品 | en: Cleaning supplies | ja: 掃除用品 | es: Artículos de limpieza
  {"id": "8cc22e8b43fa", "cat": "bab0102e1b9c", "subcat": "d58a966caaaf"},
  // zh: 厨房纸 | en: paper towels | ja: キッチンペーパー | es: toallas de papel
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 清洁用品 | en: Cleaning supplies | ja: 掃除用品 | es: Artículos de limpieza
  {"id": "d36185f61a5c", "cat": "bab0102e1b9c", "subcat": "d58a966caaaf"},
  // zh: 洗衣液 | en: laundry detergent | ja: せんたくようせんざい | es: detergente para ropa
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 清洁用品 | en: Cleaning supplies | ja: 掃除用品 | es: Artículos de limpieza
  {"id": "b137624a2056", "cat": "bab0102e1b9c", "subcat": "d58a966caaaf"},
  // zh: 洗洁精 | en: dish soap | ja: しょっきようせんざい | es: detergente para platos
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 清洁用品 | en: Cleaning supplies | ja: 掃除用品 | es: Artículos de limpieza
  {"id": "3db685f1ff61", "cat": "bab0102e1b9c", "subcat": "d58a966caaaf"},
  // zh: 海绵 | en: sponge | ja: スポンジ | es: esponja
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 清洁用品 | en: Cleaning supplies | ja: 掃除用品 | es: Artículos de limpieza
  {"id": "457f679cfabc", "cat": "bab0102e1b9c", "subcat": "d58a966caaaf"},
  // zh: 刷子 | en: scrub brush | ja: たわし | es: cepillo
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 清洁用品 | en: Cleaning supplies | ja: 掃除用品 | es: Artículos de limpieza
  {"id": "055eb6b5bc5b", "cat": "bab0102e1b9c", "subcat": "d58a966caaaf"},
  // zh: 扫帚 | en: broom | ja: ほうき | es: escoba
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 清洁用品 | en: Cleaning supplies | ja: 掃除用品 | es: Artículos de limpieza
  {"id": "c61bad51b03c", "cat": "bab0102e1b9c", "subcat": "d58a966caaaf"},
  // zh: 拖把 | en: mop | ja: モップ | es: trapeador
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 清洁用品 | en: Cleaning supplies | ja: 掃除用品 | es: Artículos de limpieza
  {"id": "1cc9added6cb", "cat": "bab0102e1b9c", "subcat": "d58a966caaaf"},
  // zh: 垃圾袋 | en: trash bags | ja: ごみぶくろ | es: bolsa de basura
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 清洁用品 | en: Cleaning supplies | ja: 掃除用品 | es: Artículos de limpieza
  {"id": "f59ba3b05dcf", "cat": "bab0102e1b9c", "subcat": "d58a966caaaf"},
  // zh: 毛巾 | en: towel | ja: タオル | es: toalla
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "24d660a1a037", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 浴巾 | en: bath towel | ja: バスタオル | es: toalla de baño
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "ba046e183a28", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 牙刷 | en: toothbrush | ja: はブラシ | es: cepillo de dientes
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "323b167269b5", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 牙膏 | en: toothpaste | ja: はみがきこ | es: pasta de dientes
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "0d2d2a58f966", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 梳子 | en: comb | ja: くし | es: peine
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "cc6c11a4bfe2", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 肥皂 | en: soap | ja: せっけん | es: jabón
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "6fd13bbb370c", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 洗手液 | en: liquid hand soap | ja: ハンドソープ | es: jabón líquido
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "070e632fac59", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 洗发水 | en: shampoo | ja: シャンプー | es: champú
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "9ddd200afed6", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 纸巾 | en: tissues | ja: ティッシュ | es: pañuelos de papel
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "3ad8031b887a", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 卫生纸 | en: toilet paper | ja: トイレットペーパー | es: papel higiénico
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "b79729ed7287", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 湿巾 | en: wet wipes | ja: ウェットティッシュ | es: toallitas húmedas
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "0b2a12803c93", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 尿布 | en: diaper | ja: おむつ | es: pañal
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "0290bd9c3fe7", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 棉签 | en: cotton swabs | ja: めんぼう | es: hisopo
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "f354c07478bc", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 创可贴 | en: adhesive bandage | ja: ばんそうこう | es: curita
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 个人护理 | en: Personal care | ja: 身だしなみ | es: Higiene personal
  {"id": "de6d6b7394ec", "cat": "bab0102e1b9c", "subcat": "2615218e170a"},
  // zh: 书包 | en: school bag | ja: つうがくかばん | es: mochila
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 文具 | en: Stationery | ja: 文房具 | es: Papelería
  {"id": "188f3905a239", "cat": "bab0102e1b9c", "subcat": "5cafe538559d", "extraCats": []},
  // zh: 笔 | en: pen | ja: ペン | es: bolígrafo
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 文具 | en: Stationery | ja: 文房具 | es: Papelería
  {"id": "62bf3b36fadd", "cat": "bab0102e1b9c", "subcat": "5cafe538559d"},
  // zh: 纸 | en: paper | ja: かみ | es: papel
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 文具 | en: Stationery | ja: 文房具 | es: Papelería
  {"id": "71cd8dade642", "cat": "bab0102e1b9c", "subcat": "5cafe538559d"},
  // zh: 剪刀 | en: scissors | ja: はさみ | es: tijeras
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 文具 | en: Stationery | ja: 文房具 | es: Papelería
  {"id": "bd145e2f1931", "cat": "bab0102e1b9c", "subcat": "5cafe538559d"},
  // zh: 书 | en: book | ja: ほん | es: libro
  // cat: zh: 生活用品 | en: Everyday items | ja: 生活用品 | es: Objetos cotidianos
  // subcat: zh: 文具 | en: Stationery | ja: 文房具 | es: Papelería
  {"id": "0d427f3fb553", "cat": "bab0102e1b9c", "subcat": "5cafe538559d"},
  // zh: 苹果 | en: apple | ja: りんご | es: manzana
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "cdaaa5ff35cb", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 生梨 | en: pear | ja: なし | es: pera
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "43457f734585", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 桃子 | en: peach | ja: もも | es: durazno
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "4071dbfed112", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 李子 | en: plum | ja: すもも | es: ciruela
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "f4c54ffbabd2", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 枣子 | en: jujube | ja: なつめ | es: azufaifa
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "b858a6cf4b13", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 柿子 | en: persimmon | ja: かき | es: caqui
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "09eb6bfd5f9d", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 香蕉 | en: banana | ja: バナナ | es: plátano
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "26a22815eb7c", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 橘子 | en: tangerine | ja: みかん | es: mandarina
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "773c53776a10", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 柚子 | en: pomelo | ja: ザボン | es: pomelo
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "dfb1dfc65780", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 西柚 | en: grapefruit | ja: グレープフルーツ | es: toronja
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "1d8fc18946b6", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 柠檬 | en: lemon | ja: レモン | es: limón
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "3052084735dd", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 葡萄 | en: grapes | ja: ぶどう | es: uvas
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "f8db8d59fb77", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 草莓 | en: strawberry | ja: いちご | es: fresa
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "25ddb4fdedd9", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 蓝莓 | en: blueberry | ja: ブルーベリー | es: arándanos
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "3d9f558e1ce7", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 黑莓 | en: blackberry | ja: ブラックベリー | es: moras
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "90015dcf99c4", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 树莓 | en: raspberries | ja: ラズベリー | es: frambuesas
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "e3cc16185639", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 樱桃 | en: cherry | ja: さくらんぼ | es: cerezas
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "fa0e8cb0dde2", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 西瓜 | en: watermelon | ja: すいか | es: sandía
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "a0cf25d97375", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 哈密瓜 | en: cantaloupe | ja: カンタロープメロン | es: melón
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "2a46b096206b", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 菠萝 | en: pineapple | ja: パイナップル | es: piña
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "c225356fd517", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 芒果 | en: mango | ja: マンゴー | es: mango
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "36979eba3362", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 猕猴桃 | en: kiwi fruit | ja: キウイフルーツ | es: kiwi
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "9e71364172ef", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 石榴 | en: pomegranate | ja: ざくろ | es: granada
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "8ffc40cb65c9", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 荔枝 | en: lychee | ja: ライチ | es: lichi
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "16386870327b", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 火龙果 | en: dragon fruit | ja: ドラゴンフルーツ | es: pitahaya
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "5e8a8e216278", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 椰子 | en: coconut | ja: ココナッツ | es: coco
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "530eebdb5a2b", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 牛油果 | en: avocado | ja: アボカド | es: aguacate
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 水果 | en: Fruit | ja: 果物 | es: Frutas
  {"id": "64baa655d4ca", "cat": "bec78d613125", "subcat": "956c0b6418e3"},
  // zh: 蔬菜 | en: vegetable | ja: やさい | es: verduras
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "a1266ca4f447", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 白菜 | en: Chinese cabbage | ja: はくさい | es: col china
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "a3fd909b9d15", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 卷心菜 | en: cabbage | ja: キャベツ | es: repollo
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "6e99fbdcb79e", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 生菜 | en: lettuce | ja: レタス | es: lechuga
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "d95120a58f19", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 菠菜 | en: spinach | ja: ほうれんそう | es: espinaca
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "712839d55a21", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 芹菜 | en: celery | ja: セロリ | es: apio
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "c78ef8a3c277", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 西兰花 | en: broccoli | ja: ブロッコリー | es: brócoli
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "a4a1135d1f13", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 花椰菜 | en: cauliflower | ja: カリフラワー | es: coliflor
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "88b001c2b02d", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 黄瓜 | en: cucumber | ja: きゅうり | es: pepino
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "22baccb53e0e", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 西葫芦 | en: zucchini | ja: ズッキーニ | es: calabacita
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "72bfab12f86c", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 南瓜 | en: pumpkin | ja: かぼちゃ | es: calabaza
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "35ce41ec07f8", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 番茄 | en: tomato | ja: トマト | es: tomate
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "d7c2721f9178", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 彩椒 | en: bell peppers | ja: パプリカ | es: pimientos de colores
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "7fa1cb3a01d3", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 青椒 | en: green pepper | ja: ピーマン | es: pimiento verde
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "99a7c46223a0", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 茄子 | en: eggplant | ja: なす | es: berenjena
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "56724db0e1f1", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 萝卜 | en: radish | ja: だいこん | es: rábano
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "234ec04bed52", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 甜菜 | en: beet | ja: ビーツ | es: betabel
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "db4cdf752c8d", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 土豆 | en: potato | ja: じゃがいも | es: papa
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "fd1a0e2e5f21", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 红薯 | en: sweet potato | ja: さつまいも | es: camote
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "81c6ba24a37f", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 玉米 | en: corn | ja: とうもろこし | es: maíz
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "f943bdad15cf", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 豆 | en: bean | ja: まめ | es: frijoles
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "115e383208c2", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 豌豆 | en: peas | ja: えんどうまめ | es: chícharos
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "c91d59c159b0", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 四季豆 | en: green beans | ja: さやいんげん | es: ejotes
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "f13278824207", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 莲藕 | en: lotus root | ja: れんこん | es: raíz de loto
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "05505cd20340", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 竹笋 | en: bamboo shoot | ja: たけのこ | es: brote de bambú
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "3c4694d38470", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 芦笋 | en: asparagus | ja: アスパラガス | es: espárragos
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "36a3be42c1e8", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 蘑菇 | en: mushroom | ja: きのこ | es: champiñones
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "31f9b403b184", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 洋葱 | en: onion | ja: たまねぎ | es: cebolla
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "0d57e0d255ee", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 葱 | en: scallion | ja: ねぎ | es: cebollín
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "7182915328b6", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 大蒜 | en: garlic | ja: にんにく | es: ajo
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "fc9d7d108b06", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 生姜 | en: ginger | ja: しょうが | es: jengibre
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "879756f17b2d", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 香菜 | en: cilantro | ja: パクチー | es: cilantro
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 蔬菜菌菇 | en: Vegetables & mushrooms | ja: 野菜・きのこ | es: Verduras y hongos
  {"id": "eae3febfc47a", "cat": "bec78d613125", "subcat": "f0b66a0e163d"},
  // zh: 米 | en: rice | ja: こめ | es: arroz crudo
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "475764d75bba", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 饭 | en: cooked rice | ja: ごはん | es: arroz cocido
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "d495702f6e87", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 粥 | en: rice porridge | ja: おかゆ | es: gachas de arroz
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "1114065f1727", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 面粉 | en: flour | ja: こむぎこ | es: harina
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "7e1c07cab2b1", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 面条 | en: noodles | ja: めん | es: fideos
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "3fe8d5ec16df", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 意大利面 | en: pasta | ja: パスタ | es: pasta
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "085475cd1eae", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 馒头 | en: steamed bun | ja: マントウ | es: pan al vapor
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "5734ae91d3b9", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 包子 | en: steamed bun | ja: ちゅうかまん | es: pan relleno al vapor
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "f8bd24633a1a", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 饺子 | en: dumpling | ja: ぎょうざ | es: empanadillas chinas
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "c9c2b679eb85", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 馄饨 | en: wontons | ja: ワンタン | es: wontón
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "72b5e8d423fa", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 麦片 | en: breakfast cereal | ja: シリアル | es: cereal
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "9442aac8088c", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 披萨 | en: pizza | ja: ピザ | es: pizza
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "13fdb1fb4854", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 面包 | en: bread | ja: パン | es: pan
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "fd612e5b1d27", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 贝果 | en: bagel | ja: ベーグル | es: bagel
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "6b26c0ce4e91", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 牛角包 | en: croissant | ja: クロワッサン | es: cruasán
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 主食面包 | en: Staples & bread | ja: 主食・パン | es: Cereales, pasta y pan
  {"id": "d73c0eb927c8", "cat": "bec78d613125", "subcat": "ee8483210172"},
  // zh: 华夫饼 | en: waffle | ja: ワッフル | es: wafle
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "a57ae5f67eac", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 松饼 | en: pancakes | ja: パンケーキ | es: panqueques
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "5a6ae3cd4735", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 饼干 | en: biscuit | ja: ビスケット | es: galleta
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "c9b4e8516201", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 蛋糕 | en: cake | ja: ケーキ | es: pastel
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "c95eaee56ddc", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 蛋 | en: egg | ja: たまご | es: huevo
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "05f047090492", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 肉 | en: meat | ja: おにく | es: carne
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "268f70c22a33", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 排骨 | en: pork ribs | ja: スペアリブ | es: costillas
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "afff45375971", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 鸡胸肉 | en: chicken breast | ja: とりむねにく | es: pechuga de pollo
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "55895ade5e13", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 鸡腿 | en: chicken drumstick | ja: チキンドラムスティック | es: muslo de pollo
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "4d902cc67f54", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 牛排 | en: steak | ja: ステーキ | es: bistec
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "9e0e99da9d05", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 三文鱼 | en: salmon | ja: サーモン | es: salmón
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "df895c1046a3", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 香肠 | en: sausages | ja: ソーセージ | es: salchicha
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "a09ec55ce891", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 培根 | en: bacon | ja: ベーコン | es: tocino
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "8f9e0f8df66b", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 火腿 | en: ham | ja: ハム | es: jamón
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "4749996b36f6", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 肉丸 | en: meatballs | ja: ミートボール | es: albóndigas
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "df09d99f6384", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 豆腐 | en: tofu | ja: とうふ | es: tofu
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "08255386ec06", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 牛奶 | en: milk | ja: ぎゅうにゅう | es: leche
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "bf05e5311822", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 酸奶 | en: yogurt | ja: ヨーグルト | es: yogur
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "4c3780727f53", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 奶酪 | en: cheese | ja: チーズ | es: queso
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "6b8ca7ba8f9b", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 黄油 | en: butter | ja: バター | es: mantequilla
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 肉蛋豆奶 | en: Meat, eggs, beans & dairy | ja: 肉・卵・豆・乳製品 | es: Carne, huevos, soya y lácteos
  {"id": "dc38a18f18db", "cat": "bec78d613125", "subcat": "0dc0366ac1c0"},
  // zh: 汤 | en: soup | ja: スープ | es: sopa
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 饮品汤水 | en: Drinks & soups | ja: 飲み物・スープ | es: Bebidas y sopas
  {"id": "76c174748570", "cat": "bec78d613125", "subcat": "6268c6150a7e"},
  // zh: 果汁 | en: juice | ja: ジュース | es: jugo
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 饮品汤水 | en: Drinks & soups | ja: 飲み物・スープ | es: Bebidas y sopas
  {"id": "379e57e1c4ba", "cat": "bec78d613125", "subcat": "6268c6150a7e"},
  // zh: 茶 | en: tea | ja: おちゃ | es: té
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 饮品汤水 | en: Drinks & soups | ja: 飲み物・スープ | es: Bebidas y sopas
  {"id": "c665461c910b", "cat": "bec78d613125", "subcat": "6268c6150a7e"},
  // zh: 糖果 | en: candy | ja: キャンディー | es: caramelos
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "a775ed61e577", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 巧克力 | en: chocolate | ja: チョコレート | es: chocolate
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "6b3c2c26fb7f", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 冰淇淋 | en: ice cream | ja: アイスクリーム | es: helado
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "401d34f9a698", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 棒冰 | en: popsicle | ja: アイスキャンディー | es: paleta de hielo
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "d6e878d8faab", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 爆米花 | en: popcorn | ja: ポップコーン | es: palomitas de maíz
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "d5ee8f017910", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 薯片 | en: potato chips | ja: ポテトチップス | es: papas de bolsa
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "78c39ffa8a2c", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 薯条 | en: French fries | ja: フライドポテト | es: papas fritas
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "22d4634d626b", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 葡萄干 | en: raisins | ja: レーズン | es: pasas
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "682fa93c1d6e", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 花生 | en: peanuts | ja: ピーナッツ | es: cacahuates
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "74151e852ac3", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 核桃 | en: walnuts | ja: くるみ | es: nueces
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "6b1878289a96", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 腰果 | en: cashews | ja: カシューナッツ | es: nueces de la India
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "c836774edfea", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 开心果 | en: pistachios | ja: ピスタチオ | es: pistachos
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 零食点心 | en: Snacks & treats | ja: おやつ | es: Botanas y dulces
  {"id": "054d8776c4de", "cat": "bec78d613125", "subcat": "2dd34a724c3e"},
  // zh: 盐 | en: salt | ja: しお | es: sal
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 调味品 | en: Seasonings | ja: 調味料 | es: Condimentos y conservas
  {"id": "e8a06fe9af85", "cat": "bec78d613125", "subcat": "cca2d6104e41"},
  // zh: 油 | en: oil | ja: あぶら | es: aceite
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 调味品 | en: Seasonings | ja: 調味料 | es: Condimentos y conservas
  {"id": "5defb4768c19", "cat": "bec78d613125", "subcat": "cca2d6104e41"},
  // zh: 橄榄油 | en: olive oil | ja: オリーブオイル | es: aceite de oliva
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 调味品 | en: Seasonings | ja: 調味料 | es: Condimentos y conservas
  {"id": "b0e01710de29", "cat": "bec78d613125", "subcat": "cca2d6104e41"},
  // zh: 酱油 | en: soy sauce | ja: しょうゆ | es: salsa de soya
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 调味品 | en: Seasonings | ja: 調味料 | es: Condimentos y conservas
  {"id": "00d13cb82703", "cat": "bec78d613125", "subcat": "cca2d6104e41"},
  // zh: 醋 | en: vinegar | ja: す | es: vinagre
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 调味品 | en: Seasonings | ja: 調味料 | es: Condimentos y conservas
  {"id": "9a5071210769", "cat": "bec78d613125", "subcat": "cca2d6104e41"},
  // zh: 蜂蜜 | en: honey | ja: はちみつ | es: miel
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 调味品 | en: Seasonings | ja: 調味料 | es: Condimentos y conservas
  {"id": "6e9c746fec04", "cat": "bec78d613125", "subcat": "cca2d6104e41"},
  // zh: 花生酱 | en: peanut butter | ja: ピーナッツバター | es: crema de cacahuate
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 调味品 | en: Seasonings | ja: 調味料 | es: Condimentos y conservas
  {"id": "ee06834978e8", "cat": "bec78d613125", "subcat": "cca2d6104e41"},
  // zh: 果酱 | en: jam | ja: ジャム | es: mermelada
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 调味品 | en: Seasonings | ja: 調味料 | es: Condimentos y conservas
  {"id": "dec6791480fd", "cat": "bec78d613125", "subcat": "cca2d6104e41"},
  // zh: 番茄酱 | en: ketchup | ja: ケチャップ | es: kétchup
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  // subcat: zh: 调味品 | en: Seasonings | ja: 調味料 | es: Condimentos y conservas
  {"id": "1602e8f0f69f", "cat": "bec78d613125", "subcat": "cca2d6104e41"},
  // zh: 罐头 | en: canned food | ja: かんづめ | es: lata de conservas
  // cat: zh: 食物饮品 | en: Food & drinks | ja: 食べ物・飲み物 | es: Comida y bebidas
  {"id": "d02eff1f2ed0", "cat": "bec78d613125"},
  // zh: 猫 | en: cat | ja: ねこ | es: gato
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "8ba809523f57", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 狗 | en: dog | ja: いぬ | es: perro
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "5c712f5020d1", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 兔 | en: rabbit | ja: うさぎ | es: conejo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "bf43f2bfeb9c", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 老鼠 | en: mouse | ja: ねずみ | es: ratón
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "638913d12a92", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 松鼠 | en: squirrel | ja: りす | es: ardilla
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "da66abde4e0f", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 刺猬 | en: hedgehog | ja: ハリネズミ | es: erizo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "ddf94ee2e4a1", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 马 | en: horse | ja: うま | es: caballo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "ea67561bf058", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 牛 | en: cow | ja: うし | es: vaca
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "203d10027688", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 羊 | en: goat | ja: やぎ | es: cabra
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "4dcc3b4927c4", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 绵羊 | en: sheep | ja: ひつじ | es: oveja
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "28df3529c76a", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 猪 | en: pig | ja: ぶた | es: cerdo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "a0eb471c686d", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 鸡 | en: chicken | ja: にわとり | es: gallina
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "6c173f510726", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 鸭 | en: duck | ja: あひる | es: pato
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "41943de4003d", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 鹅 | en: goose | ja: がちょう | es: ganso
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "3dee5239e182", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 大象 | en: elephant | ja: ぞう | es: elefante
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "21ad262dc4f4", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 长颈鹿 | en: giraffe | ja: キリン | es: jirafa
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "45d68bc6c683", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 斑马 | en: zebra | ja: シマウマ | es: cebra
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "14b41b60cc7f", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 鹿 | en: deer | ja: しか | es: venado
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "93563a45db31", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 河马 | en: hippopotamus | ja: カバ | es: hipopótamo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "ed40984eb58f", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 袋鼠 | en: kangaroo | ja: カンガルー | es: canguro
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "29b952744a6e", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 猴 | en: monkey | ja: さる | es: mono
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "af3f0b05a701", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 熊 | en: bear | ja: くま | es: oso
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "a10c13e3d325", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 熊猫 | en: panda | ja: パンダ | es: panda
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "186984379a29", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 老虎 | en: tiger | ja: とら | es: tigre
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "705388a60209", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 狮子 | en: lion | ja: ライオン | es: león
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "213002836299", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 狼 | en: wolf | ja: おおかみ | es: lobo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "757977c5f02e", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 狐狸 | en: fox | ja: きつね | es: zorro
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "1b5e4a5ca901", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 鸟 | en: bird | ja: とり | es: ave
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "e2ce2021ca75", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 企鹅 | en: penguin | ja: ペンギン | es: pingüino
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "7d5b11cff26b", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 鹦鹉 | en: parrot | ja: オウム | es: loro
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "7ca05f5b7646", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 乌鸦 | en: crow | ja: カラス | es: cuervo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "45878ece97c0", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 鱼 | en: fish | ja: さかな | es: pez
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 辐鳍鱼纲 | en: Ray-finned fish | ja: 条鰭類 | es: Peces de aletas radiadas
  // extraCats: zh: 软骨鱼纲 | en: Cartilaginous fish | ja: 軟骨魚類 | es: Peces cartilaginosos
  {"id": "503c2186548c", "cat": "cbe26d1333f9", "subcat": "da61285573e5", "extraCats": ["ecb856310c35"]},
  // zh: 金鱼 | en: goldfish | ja: きんぎょ | es: pez dorado
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 辐鳍鱼纲 | en: Ray-finned fish | ja: 条鰭類 | es: Peces de aletas radiadas
  {"id": "80284a726414", "cat": "cbe26d1333f9", "subcat": "da61285573e5"},
  // zh: 鲸鱼 | en: whale | ja: くじら | es: ballena
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "786631316050", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 海豚 | en: dolphin | ja: イルカ | es: delfín
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "ace8239b3701", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 虾 | en: shrimp | ja: えび | es: camarón
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "18cfe5d59a13", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 螃蟹 | en: crab | ja: かに | es: cangrejo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "cc8f6a84c7e6", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 章鱼 | en: octopus | ja: たこ | es: pulpo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 软体动物门 | en: Mollusks | ja: 軟体動物 | es: Moluscos
  {"id": "9ef217889e11", "cat": "cbe26d1333f9", "subcat": "c436a94bfc02"},
  // zh: 海星 | en: starfish | ja: ヒトデ | es: estrella de mar
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 棘皮动物门 | en: Echinoderms | ja: 棘皮動物 | es: Equinodermos
  {"id": "d8d8621e0cb9", "cat": "cbe26d1333f9", "subcat": "6b9004514b3a"},
  // zh: 龟 | en: turtle | ja: かめ | es: tortuga
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 爬行纲 | en: Reptiles | ja: 爬虫類 | es: Reptiles
  {"id": "9877957bd87c", "cat": "cbe26d1333f9", "subcat": "efb9d9f8ed9c"},
  // zh: 鳄鱼 | en: crocodile | ja: ワニ | es: cocodrilo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 爬行纲 | en: Reptiles | ja: 爬虫類 | es: Reptiles
  {"id": "c7703c515ca6", "cat": "cbe26d1333f9", "subcat": "efb9d9f8ed9c"},
  // zh: 蛇 | en: snake | ja: へび | es: serpiente
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 爬行纲 | en: Reptiles | ja: 爬虫類 | es: Reptiles
  {"id": "d0479d6881ab", "cat": "cbe26d1333f9", "subcat": "efb9d9f8ed9c"},
  // zh: 青蛙 | en: frog | ja: かえる | es: rana
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 两栖纲 | en: Amphibians | ja: 両生類 | es: Anfibios
  {"id": "e4499404b3ec", "cat": "cbe26d1333f9", "subcat": "0ca5a28747b0"},
  // zh: 虫 | en: bug | ja: むし | es: insectos
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "8f0298cd8e48", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 甲虫 | en: beetle | ja: こうちゅう | es: escarabajo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "c312f65cf706", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 蝴蝶 | en: butterfly | ja: ちょう | es: mariposa
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "b75d82cee6e0", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 蜜蜂 | en: bee | ja: みつばち | es: abeja
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "ecde8c10c95f", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 蚂蚁 | en: ant | ja: あり | es: hormiga
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "872b8af9eba8", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 蜘蛛 | en: spider | ja: くも | es: araña
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "73d55d1a0b3a", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 蚕 | en: silkworm | ja: かいこ | es: gusano de seda
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "4492d46b3bce", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 蝉 | en: cicada | ja: せみ | es: cigarra
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "ef80704e142e", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 蚯蚓 | en: earthworm | ja: ミミズ | es: lombriz
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 环节动物门 | en: Annelids | ja: 環形動物 | es: Anélidos
  {"id": "ffbd1f02c732", "cat": "cbe26d1333f9", "subcat": "7960edda37e5"},
  // zh: 蜗牛 | en: snail | ja: かたつむり | es: caracol
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 软体动物门 | en: Mollusks | ja: 軟体動物 | es: Moluscos
  {"id": "d8605ba0c2da", "cat": "cbe26d1333f9", "subcat": "c436a94bfc02"},
  // zh: 驴 | en: donkey | ja: ロバ | es: burro
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "6cfc9b8af3e9", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 骆驼 | en: camel | ja: ラクダ | es: camello
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "34f6348c2a26", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 犀牛 | en: rhinoceros | ja: サイ | es: rinoceronte
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "dc654fcf78d0", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 猩猩 | en: orangutan | ja: オランウータン | es: orangután
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "b75d3aa89791", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 浣熊 | en: raccoon | ja: アライグマ | es: mapache
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "dfd12e80f806", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 水獭 | en: otter | ja: カワウソ | es: nutria
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "dd13291cc431", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 河狸 | en: beaver | ja: ビーバー | es: castor
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "ad577d275dc5", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 海豹 | en: seal | ja: アザラシ | es: foca
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "fa630db2993c", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 海狮 | en: sea lion | ja: アシカ | es: león marino
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "072b46b62124", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 北极熊 | en: polar bear | ja: ホッキョクグマ | es: oso polar
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "dd69c2bbd7d6", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 树懒 | en: sloth | ja: ナマケモノ | es: perezoso
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "d8d862393f53", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 考拉 | en: koala | ja: コアラ | es: koala
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "22669ae8749b", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 仓鼠 | en: hamster | ja: ハムスター | es: hámster
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "2fafebae154f", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 豚鼠 | en: guinea pig | ja: モルモット | es: cuyo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "649498e71af7", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 蝙蝠 | en: bat | ja: コウモリ | es: murciélago
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "a149ae76b0f1", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 麻雀 | en: sparrow | ja: スズメ | es: gorrión
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "f2f10a5349c1", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 鸽子 | en: pigeon | ja: ハト | es: paloma
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "ae105a05676e", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 燕子 | en: swallow | ja: ツバメ | es: golondrina
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "df19b4035120", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 喜鹊 | en: magpie | ja: カササギ | es: urraca
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "7498ea0bf1a7", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 啄木鸟 | en: woodpecker | ja: キツツキ | es: pájaro carpintero
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "2ac30e9ea793", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 猫头鹰 | en: owl | ja: フクロウ | es: búho
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "b8a2757d8123", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 老鹰 | en: eagle | ja: ワシ | es: águila
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "d44ad7f27f47", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 孔雀 | en: peacock | ja: クジャク | es: pavo real
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "302fa6d1b4d4", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 天鹅 | en: swan | ja: ハクチョウ | es: cisne
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "381acabbc58f", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 火鸡 | en: turkey | ja: シチメンチョウ | es: pavo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "7e8da523ac4e", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 鸵鸟 | en: ostrich | ja: ダチョウ | es: avestruz
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "fa2560a81c59", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 火烈鸟 | en: flamingo | ja: フラミンゴ | es: flamenco
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "4013cf9183c3", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 鹈鹕 | en: pelican | ja: ペリカン | es: pelícano
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "803d8f4199b1", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 海鸥 | en: seagull | ja: カモメ | es: gaviota
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "56666702c5b8", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 鹌鹑 | en: quail | ja: ウズラ | es: codorniz
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 鸟纲 | en: Birds | ja: 鳥類 | es: Aves
  {"id": "de80e2bb7059", "cat": "cbe26d1333f9", "subcat": "fe69a6e98dc4"},
  // zh: 蜥蜴 | en: lizard | ja: トカゲ | es: lagartija
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 爬行纲 | en: Reptiles | ja: 爬虫類 | es: Reptiles
  {"id": "d4d1aaec4a83", "cat": "cbe26d1333f9", "subcat": "efb9d9f8ed9c"},
  // zh: 壁虎 | en: gecko | ja: ヤモリ | es: geco
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 爬行纲 | en: Reptiles | ja: 爬虫類 | es: Reptiles
  {"id": "11c2c16da539", "cat": "cbe26d1333f9", "subcat": "efb9d9f8ed9c"},
  // zh: 变色龙 | en: chameleon | ja: カメレオン | es: camaleón
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 爬行纲 | en: Reptiles | ja: 爬虫類 | es: Reptiles
  {"id": "5f114e908d34", "cat": "cbe26d1333f9", "subcat": "efb9d9f8ed9c"},
  // zh: 蝾螈 | en: salamander | ja: サンショウウオ | es: salamandra
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 两栖纲 | en: Amphibians | ja: 両生類 | es: Anfibios
  {"id": "ba2ceacc600d", "cat": "cbe26d1333f9", "subcat": "0ca5a28747b0"},
  // zh: 蟾蜍 | en: toad | ja: ヒキガエル | es: sapo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 两栖纲 | en: Amphibians | ja: 両生類 | es: Anfibios
  {"id": "23c13b695685", "cat": "cbe26d1333f9", "subcat": "0ca5a28747b0"},
  // zh: 鲨鱼 | en: shark | ja: サメ | es: tiburón
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 软骨鱼纲 | en: Cartilaginous fish | ja: 軟骨魚類 | es: Peces cartilaginosos
  {"id": "41baed660f72", "cat": "cbe26d1333f9", "subcat": "ecb856310c35"},
  // zh: 鳐鱼 | en: ray | ja: エイ | es: raya
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 软骨鱼纲 | en: Cartilaginous fish | ja: 軟骨魚類 | es: Peces cartilaginosos
  {"id": "7101f1bc46f8", "cat": "cbe26d1333f9", "subcat": "ecb856310c35"},
  // zh: 海马 | en: seahorse | ja: タツノオトシゴ | es: caballito de mar
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 辐鳍鱼纲 | en: Ray-finned fish | ja: 条鰭類 | es: Peces de aletas radiadas
  {"id": "5634fd93d896", "cat": "cbe26d1333f9", "subcat": "da61285573e5"},
  // zh: 水母 | en: jellyfish | ja: クラゲ | es: medusa
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 刺胞动物门 | en: Cnidarians | ja: 刺胞動物 | es: Cnidarios
  {"id": "de798de459c2", "cat": "cbe26d1333f9", "subcat": "4225e687e334"},
  // zh: 乌贼 | en: cuttlefish | ja: コウイカ | es: sepia
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 软体动物门 | en: Mollusks | ja: 軟体動物 | es: Moluscos
  {"id": "61d9e053bfef", "cat": "cbe26d1333f9", "subcat": "c436a94bfc02"},
  // zh: 龙虾 | en: spiny lobster | ja: イセエビ | es: langosta
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "1374f89554cd", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 蛤蜊 | en: clam | ja: アサリ | es: almeja
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 软体动物门 | en: Mollusks | ja: 軟体動物 | es: Moluscos
  {"id": "52774025ae9d", "cat": "cbe26d1333f9", "subcat": "c436a94bfc02"},
  // zh: 牡蛎 | en: oyster | ja: カキ | es: ostra
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 软体动物门 | en: Mollusks | ja: 軟体動物 | es: Moluscos
  {"id": "a950c5afd1ac", "cat": "cbe26d1333f9", "subcat": "c436a94bfc02"},
  // zh: 蜻蜓 | en: dragonfly | ja: トンボ | es: libélula
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "35c1dbd982ee", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 瓢虫 | en: ladybug | ja: テントウムシ | es: mariquita
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "a77ffba98f67", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 蚱蜢 | en: grasshopper | ja: バッタ | es: saltamontes
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "db9b8083b3f9", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 螳螂 | en: praying mantis | ja: カマキリ | es: mantis
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "87a418b84198", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 萤火虫 | en: firefly | ja: ホタル | es: luciérnaga
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "7022622454e7", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 蚊子 | en: mosquito | ja: カ | es: mosquito
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "b5d372415ddb", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 苍蝇 | en: fly | ja: ハエ | es: mosca
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 节肢动物门 | en: Arthropods | ja: 節足動物 | es: Artrópodos
  {"id": "d8cab06fc3c8", "cat": "cbe26d1333f9", "subcat": "4524c3cbcdd8"},
  // zh: 小熊猫 | en: red panda | ja: レッサーパンダ | es: panda rojo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "9516bb2dde72", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 水豚 | en: capybara | ja: カピバラ | es: capibara
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "460faabd05c8", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 狐獴 | en: meerkat | ja: ミーアキャット | es: suricata
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "29e9ffa7f78c", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 猎豹 | en: cheetah | ja: チーター | es: guepardo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "d562cafc7635", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 雪豹 | en: snow leopard | ja: ユキヒョウ | es: leopardo de las nieves
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "67a4b80a46b6", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 美洲豹 | en: jaguar | ja: ジャガー | es: jaguar
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "38519bfe3390", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 大猩猩 | en: gorilla | ja: ゴリラ | es: gorila
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "7c62f16efaa5", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 狐猴 | en: lemur | ja: キツネザル | es: lémur
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "d09b9a64ba81", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 貘 | en: tapir | ja: バク | es: tapir
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 哺乳纲 | en: Mammals | ja: 哺乳類 | es: Mamíferos
  {"id": "275c60b273fa", "cat": "cbe26d1333f9", "subcat": "58435b443422"},
  // zh: 科莫多巨蜥 | en: Komodo dragon | ja: コモドオオトカゲ | es: dragón de Komodo
  // cat: zh: 动物 | en: Animals | ja: 動物 | es: Animales
  // subcat: zh: 爬行纲 | en: Reptiles | ja: 爬虫類 | es: Reptiles
  {"id": "dfbf70f2b76e", "cat": "cbe26d1333f9", "subcat": "efb9d9f8ed9c"},
  // zh: 花 | en: flower | ja: はな | es: flor
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 植物 | en: Plants | ja: 植物 | es: Plantas
  {"id": "3b8b1f360736", "cat": "dd24baf8e065", "subcat": "ece2fc2439ce"},
  // zh: 草 | en: grass | ja: くさ | es: pasto
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 植物 | en: Plants | ja: 植物 | es: Plantas
  {"id": "2f9501f922aa", "cat": "dd24baf8e065", "subcat": "ece2fc2439ce"},
  // zh: 树 | en: tree | ja: き | es: árbol
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 植物 | en: Plants | ja: 植物 | es: Plantas
  {"id": "cf79d317d471", "cat": "dd24baf8e065", "subcat": "ece2fc2439ce"},
  // zh: 树林 | en: woods | ja: はやし | es: arboleda
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 植物 | en: Plants | ja: 植物 | es: Plantas
  {"id": "74f2b8bf0f63", "cat": "dd24baf8e065", "subcat": "ece2fc2439ce"},
  // zh: 竹子 | en: bamboo | ja: たけ | es: bambú
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 植物 | en: Plants | ja: 植物 | es: Plantas
  {"id": "f8b10af6047f", "cat": "dd24baf8e065", "subcat": "ece2fc2439ce"},
  // zh: 树根 | en: root | ja: ねっこ | es: raíz
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 植物 | en: Plants | ja: 植物 | es: Plantas
  {"id": "91dd9c835c66", "cat": "dd24baf8e065", "subcat": "ece2fc2439ce"},
  // zh: 树枝 | en: branch | ja: えだ | es: rama
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 植物 | en: Plants | ja: 植物 | es: Plantas
  {"id": "13568884ef2d", "cat": "dd24baf8e065", "subcat": "ece2fc2439ce"},
  // zh: 叶子 | en: leaf | ja: はっぱ | es: hoja
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 植物 | en: Plants | ja: 植物 | es: Plantas
  {"id": "63130919103d", "cat": "dd24baf8e065", "subcat": "ece2fc2439ce"},
  // zh: 芽 | en: sprout | ja: め | es: brote
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 植物 | en: Plants | ja: 植物 | es: Plantas
  {"id": "7eed4cf1179f", "cat": "dd24baf8e065", "subcat": "ece2fc2439ce"},
  // zh: 木头 | en: wood | ja: き | es: madera
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 植物 | en: Plants | ja: 植物 | es: Plantas
  {"id": "cfd06b499047", "cat": "dd24baf8e065", "subcat": "ece2fc2439ce"},
  // zh: 干草 | en: hay | ja: ほしくさ | es: heno
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 植物 | en: Plants | ja: 植物 | es: Plantas
  // extraCats: zh: 农场 | en: Farm | ja: 農場 | es: Granja
  {"id": "a92d586f836e", "cat": "dd24baf8e065", "subcat": "ece2fc2439ce", "extraCats": ["f9acc354318e"]},
  // zh: 天空 | en: sky | ja: そら | es: cielo
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "e032370256ee", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 太阳 | en: sun | ja: おひさま | es: sol
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "bf6672797ec5", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 月亮 | en: moon | ja: つき | es: luna
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "a3d6ca579da6", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 星星 | en: star | ja: ほし | es: estrellas
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "264a34a428f9", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 云 | en: cloud | ja: くも | es: nube
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "2e564beae37d", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 晴天 | en: sunny | ja: はれ | es: día soleado
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "45645395ac7e", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 阴天 | en: cloudy | ja: くもり | es: día nublado
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "94dc746087c7", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 雨 | en: rain | ja: あめ | es: lluvia
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "4bb3b104f78a", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 雪 | en: snow | ja: ゆき | es: nieve
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "7201ae5865fb", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 风 | en: wind | ja: かぜ | es: viento
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "79016bcbb11c", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 雾 | en: fog | ja: きり | es: niebla
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "b252cec5a4d9", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 打雷 | en: thunder | ja: かみなり | es: trueno
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "9990b63023e1", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 彩虹 | en: rainbow | ja: にじ | es: arcoíris
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 天空 | en: Sky | ja: 空 | es: Cielo
  {"id": "4a60aec3eb62", "cat": "dd24baf8e065", "subcat": "35930101f431"},
  // zh: 石头 | en: stone | ja: いし | es: piedra
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 大地 | en: Earth | ja: 大地 | es: Tierra
  {"id": "fbb4b5087342", "cat": "dd24baf8e065", "subcat": "223ba1a106a1"},
  // zh: 泥 | en: mud | ja: どろ | es: lodo
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 大地 | en: Earth | ja: 大地 | es: Tierra
  {"id": "88586abbad98", "cat": "dd24baf8e065", "subcat": "223ba1a106a1"},
  // zh: 沙子 | en: sand | ja: すな | es: arena
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 大地 | en: Earth | ja: 大地 | es: Tierra
  {"id": "a9809bcd8022", "cat": "dd24baf8e065", "subcat": "223ba1a106a1"},
  // zh: 水 | en: water | ja: みず | es: agua
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 大地 | en: Earth | ja: 大地 | es: Tierra
  {"id": "126ac3f19628", "cat": "dd24baf8e065", "subcat": "223ba1a106a1"},
  // zh: 冰 | en: ice | ja: こおり | es: hielo
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 大地 | en: Earth | ja: 大地 | es: Tierra
  {"id": "e08ddb30927d", "cat": "dd24baf8e065", "subcat": "223ba1a106a1"},
  // zh: 火 | en: fire | ja: ひ | es: fuego
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 大地 | en: Earth | ja: 大地 | es: Tierra
  {"id": "05aee324dce1", "cat": "dd24baf8e065", "subcat": "223ba1a106a1"},
  // zh: 山 | en: mountain | ja: やま | es: montaña
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 大地 | en: Earth | ja: 大地 | es: Tierra
  {"id": "0eb2f57dcff4", "cat": "dd24baf8e065", "subcat": "223ba1a106a1"},
  // zh: 河 | en: river | ja: かわ | es: río
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 大地 | en: Earth | ja: 大地 | es: Tierra
  {"id": "2c559b57e3b5", "cat": "dd24baf8e065", "subcat": "223ba1a106a1"},
  // zh: 湖 | en: lake | ja: みずうみ | es: lago
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 大地 | en: Earth | ja: 大地 | es: Tierra
  {"id": "d14eaf736391", "cat": "dd24baf8e065", "subcat": "223ba1a106a1"},
  // zh: 大海 | en: sea | ja: うみ | es: mar
  // cat: zh: 自然植物 | en: Nature & plants | ja: 自然・植物 | es: Naturaleza y plantas
  // subcat: zh: 大地 | en: Earth | ja: 大地 | es: Tierra
  {"id": "17ff7cf51ef3", "cat": "dd24baf8e065", "subcat": "223ba1a106a1"},
  // zh: 自行车 | en: bicycle | ja: じてんしゃ | es: bicicleta
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  {"id": "0bfcca953d86", "cat": "f32cdd7ee320", "subcat": "165a71457c3e"},
  // zh: 汽车 | en: car | ja: くるま | es: automóvil
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  {"id": "b26ae66852a6", "cat": "f32cdd7ee320", "subcat": "165a71457c3e"},
  // zh: 公交车 | en: bus | ja: バス | es: autobús
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  {"id": "5283d14f7cca", "cat": "f32cdd7ee320", "subcat": "165a71457c3e"},
  // zh: 卡车 | en: truck | ja: トラック | es: camión
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  {"id": "6e9b8024a460", "cat": "f32cdd7ee320", "subcat": "165a71457c3e"},
  // zh: 救护车 | en: ambulance | ja: きゅうきゅうしゃ | es: ambulancia
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  {"id": "d2016b4726db", "cat": "f32cdd7ee320", "subcat": "165a71457c3e"},
  // zh: 消防车 | en: fire engine | ja: しょうぼうしゃ | es: camión de bomberos
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  {"id": "2a88069af2a5", "cat": "f32cdd7ee320", "subcat": "165a71457c3e"},
  // zh: 警车 | en: police car | ja: パトカー | es: patrulla
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  {"id": "f6a9ac3e9626", "cat": "f32cdd7ee320", "subcat": "165a71457c3e"},
  // zh: 拖拉机 | en: tractor | ja: トラクター | es: tractor
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  // extraCats: zh: 农场 | en: Farm | ja: 農場 | es: Granja
  {"id": "0508eb3234da", "cat": "f32cdd7ee320", "subcat": "165a71457c3e", "extraCats": ["f9acc354318e"]},
  // zh: 火车 | en: train | ja: れっしゃ | es: tren
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  {"id": "fdd8ec10ee94", "cat": "f32cdd7ee320", "subcat": "165a71457c3e"},
  // zh: 地铁 | en: subway | ja: ちかてつ | es: metro
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  {"id": "85bae3b2a361", "cat": "f32cdd7ee320", "subcat": "165a71457c3e"},
  // zh: 船 | en: boat | ja: ふね | es: barco
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  {"id": "d5c453fb5462", "cat": "f32cdd7ee320", "subcat": "165a71457c3e"},
  // zh: 飞机 | en: airplane | ja: ひこうき | es: avión
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  {"id": "3357dc3af725", "cat": "f32cdd7ee320", "subcat": "165a71457c3e"},
  // zh: 直升机 | en: helicopter | ja: ヘリコプター | es: helicóptero
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 载具 | en: Vehicles | ja: 乗り物 | es: Vehículos
  {"id": "9c9080d70036", "cat": "f32cdd7ee320", "subcat": "165a71457c3e"},
  // zh: 马路 | en: road | ja: みち | es: calle
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 交通设施 | en: Transport facilities | ja: 交通施設 | es: Elementos del transporte
  {"id": "eb7bfe2a100b", "cat": "f32cdd7ee320", "subcat": "3d3a5d95f8a3"},
  // zh: 桥 | en: bridge | ja: はし | es: puente
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 交通设施 | en: Transport facilities | ja: 交通施設 | es: Elementos del transporte
  {"id": "48cf990ee711", "cat": "f32cdd7ee320", "subcat": "3d3a5d95f8a3"},
  // zh: 车站 | en: station | ja: えき | es: estación
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 交通设施 | en: Transport facilities | ja: 交通施設 | es: Elementos del transporte
  {"id": "7e2c97315dfa", "cat": "f32cdd7ee320", "subcat": "3d3a5d95f8a3"},
  // zh: 票 | en: ticket | ja: きっぷ | es: boleto
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 交通设施 | en: Transport facilities | ja: 交通施設 | es: Elementos del transporte
  {"id": "6479528c18c5", "cat": "f32cdd7ee320", "subcat": "3d3a5d95f8a3"},
  // zh: 停 | en: stop | ja: とまる | es: alto
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 交通设施 | en: Transport facilities | ja: 交通施設 | es: Elementos del transporte
  {"id": "a8f2586bdca8", "cat": "f32cdd7ee320", "subcat": "3d3a5d95f8a3"},
  // zh: 车轮 | en: wheel | ja: しゃりん | es: rueda
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 交通设施 | en: Transport facilities | ja: 交通施設 | es: Elementos del transporte
  {"id": "5a9f7df19531", "cat": "f32cdd7ee320", "subcat": "3d3a5d95f8a3"},
  // zh: 学校 | en: school | ja: がっこう | es: escuela
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 场所 | en: Places | ja: 場所 | es: Lugares
  {"id": "7a1b3a28a3b0", "cat": "f32cdd7ee320", "subcat": "b97a5df1bc72"},
  // zh: 公园 | en: park | ja: こうえん | es: parque
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 场所 | en: Places | ja: 場所 | es: Lugares
  {"id": "497924935b3b", "cat": "f32cdd7ee320", "subcat": "b97a5df1bc72"},
  // zh: 商店 | en: shop | ja: みせ | es: tienda
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 场所 | en: Places | ja: 場所 | es: Lugares
  {"id": "1579030245cc", "cat": "f32cdd7ee320", "subcat": "b97a5df1bc72"},
  // zh: 图书馆 | en: library | ja: としょかん | es: biblioteca
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 场所 | en: Places | ja: 場所 | es: Lugares
  {"id": "f1f9f076d5cc", "cat": "f32cdd7ee320", "subcat": "b97a5df1bc72"},
  // zh: 泳池 | en: swimming pool | ja: プール | es: alberca
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 场所 | en: Places | ja: 場所 | es: Lugares
  {"id": "57a4501b857e", "cat": "f32cdd7ee320", "subcat": "b97a5df1bc72"},
  // zh: 院子 | en: courtyard | ja: にわ | es: patio
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 场所 | en: Places | ja: 場所 | es: Lugares
  {"id": "d23795f43eca", "cat": "f32cdd7ee320", "subcat": "b97a5df1bc72"},
  // zh: 街道 | en: street | ja: とおり | es: calle urbana
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 场所 | en: Places | ja: 場所 | es: Lugares
  {"id": "26fbb97dd39d", "cat": "f32cdd7ee320", "subcat": "b97a5df1bc72"},
  // zh: 村子 | en: village | ja: むら | es: pueblo
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 场所 | en: Places | ja: 場所 | es: Lugares
  {"id": "4148e42a6aa1", "cat": "f32cdd7ee320", "subcat": "b97a5df1bc72"},
  // zh: 城市 | en: city | ja: まち | es: ciudad
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 场所 | en: Places | ja: 場所 | es: Lugares
  {"id": "c5985f87187e", "cat": "f32cdd7ee320", "subcat": "b97a5df1bc72"},
  // zh: 稻草人 | en: scarecrow | ja: かかし | es: espantapájaros
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 农场 | en: Farm | ja: 農場 | es: Granja
  {"id": "3fbb5412fc6c", "cat": "f32cdd7ee320", "subcat": "f9acc354318e"},
  // zh: 农场 | en: farm | ja: のうじょう | es: granja
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 农场 | en: Farm | ja: 農場 | es: Granja
  {"id": "5765714cc3c9", "cat": "f32cdd7ee320", "subcat": "f9acc354318e"},
  // zh: 谷仓 | en: barn | ja: なや | es: granero
  // cat: zh: 交通场所 | en: Transport & places | ja: 乗り物・場所 | es: Transporte y lugares
  // subcat: zh: 农场 | en: Farm | ja: 農場 | es: Granja
  {"id": "3b24995c84ed", "cat": "f32cdd7ee320", "subcat": "f9acc354318e"},
  // zh: 气球 | en: balloon | ja: ふうせん | es: globo
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 玩具游戏 | en: Toys & games | ja: おもちゃ・ゲーム | es: Juguetes y juegos
  {"id": "3a699c0206fb", "cat": "2e3812368964", "subcat": "39166172731e"},
  // zh: 积木 | en: building blocks | ja: つみき | es: bloques de construcción
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 玩具游戏 | en: Toys & games | ja: おもちゃ・ゲーム | es: Juguetes y juegos
  {"id": "0fcea3d4d751", "cat": "2e3812368964", "subcat": "39166172731e"},
  // zh: 球 | en: ball | ja: ボール | es: pelota
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 球类运动 | en: Ball sports | ja: 球技 | es: Deportes de pelota
  {"id": "80c9d669bc4d", "cat": "2e3812368964", "subcat": "c79b1e190a79"},
  // zh: 足球 | en: soccer ball | ja: サッカーボール | es: balón de fútbol
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 球类运动 | en: Ball sports | ja: 球技 | es: Deportes de pelota
  {"id": "101642355ae3", "cat": "2e3812368964", "subcat": "c79b1e190a79"},
  // zh: 篮球 | en: basketball | ja: バスケットボール | es: balón de baloncesto
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 球类运动 | en: Ball sports | ja: 球技 | es: Deportes de pelota
  {"id": "ddf174d01e5b", "cat": "2e3812368964", "subcat": "c79b1e190a79"},
  // zh: 排球 | en: volleyball | ja: バレーボール | es: balón de voleibol
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 球类运动 | en: Ball sports | ja: 球技 | es: Deportes de pelota
  {"id": "9d5f5f38fda8", "cat": "2e3812368964", "subcat": "c79b1e190a79"},
  // zh: 网球 | en: tennis | ja: テニス | es: tenis
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 球类运动 | en: Ball sports | ja: 球技 | es: Deportes de pelota
  {"id": "15b400fa70b6", "cat": "2e3812368964", "subcat": "c79b1e190a79"},
  // zh: 乒乓球 | en: table tennis | ja: たっきゅう | es: tenis de mesa
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 球类运动 | en: Ball sports | ja: 球技 | es: Deportes de pelota
  {"id": "340ff407e954", "cat": "2e3812368964", "subcat": "c79b1e190a79"},
  // zh: 棒球 | en: baseball | ja: やきゅう | es: béisbol
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 球类运动 | en: Ball sports | ja: 球技 | es: Deportes de pelota
  {"id": "5f27f3d664a4", "cat": "2e3812368964", "subcat": "c79b1e190a79"},
  // zh: 泳衣 | en: swimsuit | ja: みずぎ | es: traje de baño
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 水上运动 | en: Water sports | ja: ウォータースポーツ | es: Deportes acuáticos
  // extraCats: zh: 衣物 | en: Clothing | ja: 衣類 | es: Ropa
  {"id": "87cfeecd4658", "cat": "2e3812368964", "subcat": "98c3f4614791", "extraCats": ["1629945afecf"]},
  // zh: 泳帽 | en: swim cap | ja: すいえいぼう | es: gorro de natación
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 水上运动 | en: Water sports | ja: ウォータースポーツ | es: Deportes acuáticos
  // extraCats: zh: 衣物 | en: Clothing | ja: 衣類 | es: Ropa
  {"id": "c16f0612fab5", "cat": "2e3812368964", "subcat": "98c3f4614791", "extraCats": ["1629945afecf"]},
  // zh: 泳镜 | en: swimming goggles | ja: すいえいゴーグル | es: gafas de natación
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 水上运动 | en: Water sports | ja: ウォータースポーツ | es: Deportes acuáticos
  {"id": "81bdc5b1e440", "cat": "2e3812368964", "subcat": "98c3f4614791"},
  // zh: 脚蹼 | en: swim fins | ja: あしひれ | es: aletas de natación
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 水上运动 | en: Water sports | ja: ウォータースポーツ | es: Deportes acuáticos
  {"id": "0418e7999e6b", "cat": "2e3812368964", "subcat": "98c3f4614791"},
  // zh: 游泳圈 | en: swim ring | ja: うきわ | es: flotador
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 水上运动 | en: Water sports | ja: ウォータースポーツ | es: Deportes acuáticos
  {"id": "5e1cf8a5a7be", "cat": "2e3812368964", "subcat": "98c3f4614791"},
  // zh: 钢琴 | en: piano | ja: ピアノ | es: piano
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 乐器 | en: Musical instruments | ja: 楽器 | es: Instrumentos musicales
  {"id": "5aec35e9a007", "cat": "2e3812368964", "subcat": "642c04423007"},
  // zh: 手风琴 | en: accordion | ja: アコーディオン | es: acordeón
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 乐器 | en: Musical instruments | ja: 楽器 | es: Instrumentos musicales
  {"id": "9e883c2a0221", "cat": "2e3812368964", "subcat": "642c04423007"},
  // zh: 吉他 | en: guitar | ja: ギター | es: guitarra
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 乐器 | en: Musical instruments | ja: 楽器 | es: Instrumentos musicales
  {"id": "cbd8a4ea3d20", "cat": "2e3812368964", "subcat": "642c04423007"},
  // zh: 小提琴 | en: violin | ja: バイオリン | es: violín
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 乐器 | en: Musical instruments | ja: 楽器 | es: Instrumentos musicales
  {"id": "ecbf983fa5b8", "cat": "2e3812368964", "subcat": "642c04423007"},
  // zh: 长笛 | en: flute | ja: フルート | es: flauta
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 乐器 | en: Musical instruments | ja: 楽器 | es: Instrumentos musicales
  {"id": "9372894de660", "cat": "2e3812368964", "subcat": "642c04423007"},
  // zh: 小号 | en: trumpet | ja: トランペット | es: trompeta
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 乐器 | en: Musical instruments | ja: 楽器 | es: Instrumentos musicales
  {"id": "6323b0ecc750", "cat": "2e3812368964", "subcat": "642c04423007"},
  // zh: 萨克斯 | en: saxophone | ja: サックス | es: saxofón
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 乐器 | en: Musical instruments | ja: 楽器 | es: Instrumentos musicales
  {"id": "4738c55fb799", "cat": "2e3812368964", "subcat": "642c04423007"},
  // zh: 鼓 | en: drum | ja: たいこ | es: tambor
  // cat: zh: 文娱体育 | en: Play, music & sports | ja: 遊び・音楽・運動 | es: Juegos, música y deportes
  // subcat: zh: 乐器 | en: Musical instruments | ja: 楽器 | es: Instrumentos musicales
  {"id": "b7746ad18053", "cat": "2e3812368964", "subcat": "642c04423007"},
  // zh: 字 | en: character | ja: もじ | es: carácter chino
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  {"id": "8c3c3227fb83", "cat": "00f32415b421", "subcat": "5b5a75de73da"},
  // zh: 零 | en: zero | ja: ゼロ | es: cero
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  {"id": "e40d088a692c", "cat": "00f32415b421", "subcat": "5b5a75de73da"},
  // zh: 一 | en: one | ja: いち | es: uno
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  // extraCats: zh: 1-10 | en: 1–10 | ja: 1〜10 | es: 1-10
  {"id": "7e2c4b863d57", "cat": "00f32415b421", "subcat": "5b5a75de73da", "extraCats": ["5b4e8c579e31"]},
  // zh: 二 | en: two | ja: に | es: dos
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  // extraCats: zh: 1-10 | en: 1–10 | ja: 1〜10 | es: 1-10
  {"id": "ff77fed12a9a", "cat": "00f32415b421", "subcat": "5b5a75de73da", "extraCats": ["5b4e8c579e31"]},
  // zh: 三 | en: three | ja: さん | es: tres
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  // extraCats: zh: 1-10 | en: 1–10 | ja: 1〜10 | es: 1-10
  {"id": "91ff3b875cdc", "cat": "00f32415b421", "subcat": "5b5a75de73da", "extraCats": ["5b4e8c579e31"]},
  // zh: 四 | en: four | ja: よん | es: cuatro
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  // extraCats: zh: 1-10 | en: 1–10 | ja: 1〜10 | es: 1-10
  {"id": "04a6edd95b3c", "cat": "00f32415b421", "subcat": "5b5a75de73da", "extraCats": ["5b4e8c579e31"]},
  // zh: 五 | en: five | ja: ご | es: cinco
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  // extraCats: zh: 1-10 | en: 1–10 | ja: 1〜10 | es: 1-10
  {"id": "8c2db0d07844", "cat": "00f32415b421", "subcat": "5b5a75de73da", "extraCats": ["5b4e8c579e31"]},
  // zh: 六 | en: six | ja: ろく | es: seis
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  // extraCats: zh: 1-10 | en: 1–10 | ja: 1〜10 | es: 1-10
  {"id": "656e671a31b6", "cat": "00f32415b421", "subcat": "5b5a75de73da", "extraCats": ["5b4e8c579e31"]},
  // zh: 七 | en: seven | ja: なな | es: siete
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  // extraCats: zh: 1-10 | en: 1–10 | ja: 1〜10 | es: 1-10
  {"id": "3fde10344196", "cat": "00f32415b421", "subcat": "5b5a75de73da", "extraCats": ["5b4e8c579e31"]},
  // zh: 八 | en: eight | ja: はち | es: ocho
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  // extraCats: zh: 1-10 | en: 1–10 | ja: 1〜10 | es: 1-10
  {"id": "99aed3add733", "cat": "00f32415b421", "subcat": "5b5a75de73da", "extraCats": ["5b4e8c579e31"]},
  // zh: 九 | en: nine | ja: きゅう | es: nueve
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  // extraCats: zh: 1-10 | en: 1–10 | ja: 1〜10 | es: 1-10
  {"id": "d7540aa96ed8", "cat": "00f32415b421", "subcat": "5b5a75de73da", "extraCats": ["5b4e8c579e31"]},
  // zh: 十 | en: ten | ja: じゅう | es: diez
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  // extraCats: zh: 1-10 | en: 1–10 | ja: 1〜10 | es: 1-10
  {"id": "d29862d68af7", "cat": "00f32415b421", "subcat": "5b5a75de73da", "extraCats": ["5b4e8c579e31"]},
  // zh: 百 | en: hundred | ja: ひゃく | es: cien
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  {"id": "d087fa9af05e", "cat": "00f32415b421", "subcat": "5b5a75de73da"},
  // zh: 千 | en: thousand | ja: せん | es: mil
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  {"id": "0cf7a31d1ab3", "cat": "00f32415b421", "subcat": "5b5a75de73da"},
  // zh: 万 | en: ten thousand | ja: いちまん | es: diez mil
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 数字文字 | en: Numbers & writing | ja: 数字・文字 | es: Números y escritura
  {"id": "6c963728e1dd", "cat": "00f32415b421", "subcat": "5b5a75de73da"},
  // zh: 时间 | en: time | ja: じかん | es: tiempo
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 时间 | en: Time | ja: 時間 | es: Tiempo
  {"id": "113add4ff12e", "cat": "00f32415b421", "subcat": "fcc0be5951f6"},
  // zh: 秒 | en: second | ja: びょう | es: segundo
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 时间 | en: Time | ja: 時間 | es: Tiempo
  {"id": "1f90c2c83ae1", "cat": "00f32415b421", "subcat": "fcc0be5951f6"},
  // zh: 早上 | en: morning | ja: あさ | es: por la mañana
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 时间 | en: Time | ja: 時間 | es: Tiempo
  {"id": "a495a40d82dd", "cat": "00f32415b421", "subcat": "fcc0be5951f6"},
  // zh: 晚上 | en: evening | ja: ばん | es: por la noche
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 时间 | en: Time | ja: 時間 | es: Tiempo
  {"id": "58fac1cd90f4", "cat": "00f32415b421", "subcat": "fcc0be5951f6"},
  // zh: 昨天 | en: yesterday | ja: きのう | es: ayer
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 时间 | en: Time | ja: 時間 | es: Tiempo
  {"id": "ff96a64779a0", "cat": "00f32415b421", "subcat": "fcc0be5951f6"},
  // zh: 今天 | en: today | ja: きょう | es: hoy
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 时间 | en: Time | ja: 時間 | es: Tiempo
  {"id": "3d3b2a7c1bc7", "cat": "00f32415b421", "subcat": "fcc0be5951f6"},
  // zh: 明天 | en: tomorrow | ja: あした | es: mañana
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 时间 | en: Time | ja: 時間 | es: Tiempo
  {"id": "fdb85198bd01", "cat": "00f32415b421", "subcat": "fcc0be5951f6"},
  // zh: 年 | en: year | ja: とし | es: año
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 时间 | en: Time | ja: 時間 | es: Tiempo
  {"id": "57db942b7451", "cat": "00f32415b421", "subcat": "fcc0be5951f6"},
  // zh: 春天 | en: spring | ja: はる | es: primavera
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 季节 | en: Seasons | ja: 季節 | es: Estaciones del año
  {"id": "602f69e2ff6d", "cat": "00f32415b421", "subcat": "cc1235b9598f"},
  // zh: 夏天 | en: summer | ja: なつ | es: verano
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 季节 | en: Seasons | ja: 季節 | es: Estaciones del año
  {"id": "b7f258bbb57d", "cat": "00f32415b421", "subcat": "cc1235b9598f"},
  // zh: 秋天 | en: autumn | ja: あき | es: otoño
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 季节 | en: Seasons | ja: 季節 | es: Estaciones del año
  {"id": "b34ee3f88242", "cat": "00f32415b421", "subcat": "cc1235b9598f"},
  // zh: 冬天 | en: winter | ja: ふゆ | es: invierno
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 季节 | en: Seasons | ja: 季節 | es: Estaciones del año
  {"id": "2e6839ef5383", "cat": "00f32415b421", "subcat": "cc1235b9598f"},
  // zh: 红 | en: red | ja: あか | es: rojo
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 颜色 | en: Colors | ja: 色 | es: Colores
  {"id": "6935ce7cd41e", "cat": "00f32415b421", "subcat": "9b3cba9a6be6"},
  // zh: 橙 | en: orange (color) | ja: オレンジいろ | es: naranja
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 颜色 | en: Colors | ja: 色 | es: Colores
  {"id": "a021d0702a0b", "cat": "00f32415b421", "subcat": "9b3cba9a6be6"},
  // zh: 黄 | en: yellow | ja: きいろ | es: amarillo
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 颜色 | en: Colors | ja: 色 | es: Colores
  {"id": "592b4d2840b1", "cat": "00f32415b421", "subcat": "9b3cba9a6be6"},
  // zh: 绿 | en: green | ja: みどり | es: verde
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 颜色 | en: Colors | ja: 色 | es: Colores
  {"id": "376c712c3d96", "cat": "00f32415b421", "subcat": "9b3cba9a6be6"},
  // zh: 蓝 | en: blue | ja: あお | es: azul
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 颜色 | en: Colors | ja: 色 | es: Colores
  {"id": "742d7de80bba", "cat": "00f32415b421", "subcat": "9b3cba9a6be6"},
  // zh: 紫 | en: purple | ja: むらさき | es: morado
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 颜色 | en: Colors | ja: 色 | es: Colores
  {"id": "5c75889d3f7c", "cat": "00f32415b421", "subcat": "9b3cba9a6be6"},
  // zh: 粉 | en: pink | ja: ピンク | es: rosa
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 颜色 | en: Colors | ja: 色 | es: Colores
  {"id": "53667feea342", "cat": "00f32415b421", "subcat": "9b3cba9a6be6"},
  // zh: 棕 | en: brown | ja: ちゃいろ | es: café
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 颜色 | en: Colors | ja: 色 | es: Colores
  {"id": "f56b11ae8c15", "cat": "00f32415b421", "subcat": "9b3cba9a6be6"},
  // zh: 黑 | en: black | ja: くろ | es: negro
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 颜色 | en: Colors | ja: 色 | es: Colores
  {"id": "da1b340855b4", "cat": "00f32415b421", "subcat": "9b3cba9a6be6"},
  // zh: 白 | en: white | ja: しろ | es: blanco
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 颜色 | en: Colors | ja: 色 | es: Colores
  {"id": "a81c4bf1a817", "cat": "00f32415b421", "subcat": "9b3cba9a6be6"},
  // zh: 形状 | en: shape | ja: かたち | es: formas
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 图形 | en: Shapes | ja: 図形 | es: Figuras
  {"id": "f824374e49d5", "cat": "00f32415b421", "subcat": "41611026ef02"},
  // zh: 圆形 | en: circle | ja: まる | es: círculo
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 图形 | en: Shapes | ja: 図形 | es: Figuras
  {"id": "bcd98f7030a8", "cat": "00f32415b421", "subcat": "41611026ef02"},
  // zh: 方形 | en: square | ja: しかく | es: cuadrado
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 图形 | en: Shapes | ja: 図形 | es: Figuras
  {"id": "668bf2a3512d", "cat": "00f32415b421", "subcat": "41611026ef02"},
  // zh: 三角形 | en: triangle | ja: さんかく | es: triángulo
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 图形 | en: Shapes | ja: 図形 | es: Figuras
  {"id": "82068b2deac0", "cat": "00f32415b421", "subcat": "41611026ef02"},
  // zh: 点 | en: dot | ja: てん | es: punto
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 图形 | en: Shapes | ja: 図形 | es: Figuras
  {"id": "f102f5814c21", "cat": "00f32415b421", "subcat": "41611026ef02"},
  // zh: 直线 | en: straight line | ja: ちょくせん | es: línea recta
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 图形 | en: Shapes | ja: 図形 | es: Figuras
  {"id": "143c2a01cc53", "cat": "00f32415b421", "subcat": "41611026ef02"},
  // zh: 曲线 | en: curved line | ja: きょくせん | es: línea curva
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 图形 | en: Shapes | ja: 図形 | es: Figuras
  {"id": "ebe7ec6106a2", "cat": "00f32415b421", "subcat": "41611026ef02"},
  // zh: 大 | en: big | ja: おおきい | es: grande
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 比较 | en: Comparisons | ja: 比較 | es: Comparaciones
  {"id": "5d82c7bf49c3", "cat": "00f32415b421", "subcat": "5e7b5a6ca8b9"},
  // zh: 小 | en: small | ja: ちいさい | es: pequeño
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 比较 | en: Comparisons | ja: 比較 | es: Comparaciones
  {"id": "eba84e9f406f", "cat": "00f32415b421", "subcat": "5e7b5a6ca8b9"},
  // zh: 长 | en: long | ja: ながい | es: largo
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 比较 | en: Comparisons | ja: 比較 | es: Comparaciones
  {"id": "4ea60d8afa70", "cat": "00f32415b421", "subcat": "5e7b5a6ca8b9"},
  // zh: 短 | en: short | ja: みじかい | es: corto
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 比较 | en: Comparisons | ja: 比較 | es: Comparaciones
  {"id": "2f09edfee697", "cat": "00f32415b421", "subcat": "5e7b5a6ca8b9"},
  // zh: 高 | en: tall | ja: たかい | es: alto
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 比较 | en: Comparisons | ja: 比較 | es: Comparaciones
  {"id": "3e0e24461d11", "cat": "00f32415b421", "subcat": "5e7b5a6ca8b9"},
  // zh: 矮 | en: short in height | ja: せがひくい | es: bajo
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 比较 | en: Comparisons | ja: 比較 | es: Comparaciones
  {"id": "ead97387d843", "cat": "00f32415b421", "subcat": "5e7b5a6ca8b9"},
  // zh: 多 | en: many | ja: おおい | es: muchos
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 比较 | en: Comparisons | ja: 比較 | es: Comparaciones
  {"id": "92fe3670d7aa", "cat": "00f32415b421", "subcat": "5e7b5a6ca8b9"},
  // zh: 少 | en: few | ja: すくない | es: pocos
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 比较 | en: Comparisons | ja: 比較 | es: Comparaciones
  {"id": "cc480645359f", "cat": "00f32415b421", "subcat": "5e7b5a6ca8b9"},
  // zh: 快 | en: fast | ja: はやい | es: rápido
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 比较 | en: Comparisons | ja: 比較 | es: Comparaciones
  {"id": "c09f10f87f5c", "cat": "00f32415b421", "subcat": "5e7b5a6ca8b9"},
  // zh: 慢 | en: slow | ja: おそい | es: lento
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 比较 | en: Comparisons | ja: 比較 | es: Comparaciones
  {"id": "dd42088acee9", "cat": "00f32415b421", "subcat": "5e7b5a6ca8b9"},
  // zh: 上面 | en: up | ja: うえ | es: arriba
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 方位 | en: Directions | ja: 位置・方向 | es: Posiciones
  {"id": "c8a180a2255a", "cat": "00f32415b421", "subcat": "7c2ff5333f5e"},
  // zh: 下面 | en: down | ja: した | es: abajo
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 方位 | en: Directions | ja: 位置・方向 | es: Posiciones
  {"id": "2c4734f7fa1d", "cat": "00f32415b421", "subcat": "7c2ff5333f5e"},
  // zh: 前面 | en: front | ja: まえ | es: delante
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 方位 | en: Directions | ja: 位置・方向 | es: Posiciones
  {"id": "0bec2ff85747", "cat": "00f32415b421", "subcat": "7c2ff5333f5e"},
  // zh: 后面 | en: back | ja: うしろ | es: detrás
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 方位 | en: Directions | ja: 位置・方向 | es: Posiciones
  {"id": "8e106f75774f", "cat": "00f32415b421", "subcat": "7c2ff5333f5e"},
  // zh: 左边 | en: left | ja: ひだり | es: izquierda
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 方位 | en: Directions | ja: 位置・方向 | es: Posiciones
  {"id": "5dfee5f101ba", "cat": "00f32415b421", "subcat": "7c2ff5333f5e"},
  // zh: 右边 | en: right | ja: みぎ | es: derecha
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 方位 | en: Directions | ja: 位置・方向 | es: Posiciones
  {"id": "68bbb5f77479", "cat": "00f32415b421", "subcat": "7c2ff5333f5e"},
  // zh: 里面 | en: inside | ja: なか | es: dentro
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 方位 | en: Directions | ja: 位置・方向 | es: Posiciones
  {"id": "15ba18a4e2d6", "cat": "00f32415b421", "subcat": "7c2ff5333f5e"},
  // zh: 外面 | en: outside | ja: そと | es: fuera
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 方位 | en: Directions | ja: 位置・方向 | es: Posiciones
  {"id": "0dbab402c5ef", "cat": "00f32415b421", "subcat": "7c2ff5333f5e"},
  // zh: 中间 | en: middle | ja: まんなか | es: en medio
  // cat: zh: 基础认知 | en: Early concepts | ja: 基本の概念 | es: Conceptos básicos
  // subcat: zh: 方位 | en: Directions | ja: 位置・方向 | es: Posiciones
  {"id": "2a99d5965ca3", "cat": "00f32415b421", "subcat": "7c2ff5333f5e"}
];
