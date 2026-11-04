const modules = {
  grammarForms: {
    title: "ЕГЭ 19–24: грамматические формы",
    description:
      "Этот модуль учит решать задания 19–24 ЕГЭ. Нужно поставить данное слово в правильную грамматическую форму: время, залог, степень сравнения, местоимение или числительное.",
    skills: [
      "определять время глагола по контексту",
      "видеть слова-маркеры",
      "использовать Passive Voice",
      "выбирать правильную форму местоимения, числительного или прилагательного",
      "объяснять ход решения, а не просто угадывать ответ"
    ],
    questions: [
      {
        subtopic: "Past Simple",
        level: "Easy",
        theory:
          "Past Simple используется для действий, которые произошли в прошлом. Частые маркеры: yesterday, last year, two days ago, in 2015.",
        example:
          "Yesterday he ______ to the cinema. GO → went",
        exampleExplanation:
          "Yesterday показывает прошлое время. Go — неправильный глагол, Past Simple: went.",
        question:
          "Last summer my family ______ to Spain.",
        baseWord: "GO",
        correct: "went",
        explanation:
          "Last summer указывает на Past Simple. Глагол go неправильный: go → went.",
        recommendation:
          "Повтори Past Simple и неправильные глаголы."
      },
      {
        subtopic: "Past Simple",
        level: "Easy",
        theory:
          "Если в предложении есть конкретное указание на прошлое, обычно используется Past Simple.",
        example:
          "She ______ her friend two days ago. CALL → called",
        exampleExplanation:
          "Two days ago — маркер прошлого. Правильный глагол call получает окончание -ed.",
        question:
          "They ______ a new house in 2020.",
        baseWord: "BUY",
        correct: "bought",
        explanation:
          "In 2020 показывает прошлое. Buy — неправильный глагол: buy → bought.",
        recommendation:
          "Повтори формы неправильных глаголов."
      },
      {
        subtopic: "Past Simple",
        level: "Medium",
        theory:
          "В Past Simple неправильные глаголы меняют форму. Их нужно запоминать отдельно.",
        example:
          "I ______ a letter yesterday. WRITE → wrote",
        exampleExplanation:
          "Write — неправильный глагол. В Past Simple используется wrote.",
        question:
          "My sister ______ a beautiful song at the concert.",
        baseWord: "SING",
        correct: "sang",
        explanation:
          "Речь о прошедшем событии. Sing — неправильный глагол: sing → sang.",
        recommendation:
          "Повтори основные неправильные глаголы ЕГЭ."
      },
      {
        subtopic: "Present Simple",
        level: "Easy",
        theory:
          "Present Simple используется для привычек, фактов и регулярных действий. После he/she/it к глаголу добавляется -s или -es.",
        example:
          "She usually ______ breakfast at 7. HAVE → has",
        exampleExplanation:
          "Usually показывает регулярное действие. После she нужна форма has.",
        question:
          "My brother usually ______ football after school.",
        baseWord: "PLAY",
        correct: "plays",
        explanation:
          "Usually показывает привычку. My brother = he, поэтому play → plays.",
        recommendation:
          "Повтори Present Simple для he/she/it."
      },
      {
        subtopic: "Present Simple",
        level: "Easy",
        theory:
          "Если подлежащее во множественном числе, в Present Simple глагол обычно остаётся без -s.",
        example:
          "They often ______ TV in the evening. WATCH → watch",
        exampleExplanation:
          "They — множественное число, поэтому watch без -s.",
        question:
          "Children often ______ games in the park.",
        baseWord: "PLAY",
        correct: "play",
        explanation:
          "Children — множественное число, поэтому используется play без окончания -s.",
        recommendation:
          "Повтори согласование подлежащего и сказуемого."
      },
      {
        subtopic: "Present Simple",
        level: "Medium",
        theory:
          "Глагол do в Present Simple меняется на does после he/she/it.",
        example:
          "He ______ his homework every evening. DO → does",
        exampleExplanation:
          "He требует формы does.",
        question:
          "Kate ______ her exercises every morning.",
        baseWord: "DO",
        correct: "does",
        explanation:
          "Kate = she, поэтому do превращается в does.",
        recommendation:
          "Повтори формы do/does."
      },
      {
        subtopic: "Present Continuous",
        level: "Easy",
        theory:
          "Present Continuous описывает действие, происходящее сейчас. Формула: am/is/are + V-ing.",
        example:
          "Look! He ______ in the garden. WORK → is working",
        exampleExplanation:
          "Look показывает действие сейчас. He требует is working.",
        question:
          "Listen! The baby ______.",
        baseWord: "CRY",
        correct: "is crying",
        explanation:
          "Listen показывает действие в момент речи. The baby = it, поэтому is crying.",
        recommendation:
          "Повтори Present Continuous."
      },
      {
        subtopic: "Present Continuous",
        level: "Medium",
        theory:
          "Если подлежащее во множественном числе, в Present Continuous используется are + V-ing.",
        example:
          "They ______ football now. PLAY → are playing",
        exampleExplanation:
          "Now показывает действие сейчас. They требует are playing.",
        question:
          "The students ______ a test at the moment.",
        baseWord: "WRITE",
        correct: "are writing",
        explanation:
          "At the moment показывает действие сейчас. The students = they, поэтому are writing.",
        recommendation:
          "Повтори am/is/are + V-ing."
      },
      {
        subtopic: "Past Continuous",
        level: "Medium",
        theory:
          "Past Continuous описывает процесс в определённый момент в прошлом. Формула: was/were + V-ing.",
        example:
          "At 6 o'clock yesterday I ______ dinner. COOK → was cooking",
        exampleExplanation:
          "At 6 o'clock yesterday — момент в прошлом, нужен Past Continuous.",
        question:
          "At 8 p.m. yesterday we ______ TV.",
        baseWord: "WATCH",
        correct: "were watching",
        explanation:
          "At 8 p.m. yesterday указывает на процесс в прошлом. We требует were watching.",
        recommendation:
          "Повтори Past Continuous."
      },
      {
        subtopic: "Past Continuous",
        level: "Medium",
        theory:
          "Past Continuous часто используется, когда одно действие длилось, а другое произошло на его фоне.",
        example:
          "I ______ when the phone rang. SLEEP → was sleeping",
        exampleExplanation:
          "Сон длился, звонок произошёл. Длительное действие — Past Continuous.",
        question:
          "She ______ dinner when her friend called.",
        baseWord: "COOK",
        correct: "was cooking",
        explanation:
          "Она готовила, когда позвонил друг. Длительное действие: was cooking.",
        recommendation:
          "Повтори связь Past Simple и Past Continuous."
      },
      {
        subtopic: "Present Perfect",
        level: "Medium",
        theory:
          "Present Perfect связывает прошлое с настоящим. Частые маркеры: already, just, ever, never, yet.",
        example:
          "I have already ______ this book. READ → read",
        exampleExplanation:
          "Already часто требует Present Perfect. Формула: have/has + V3.",
        question:
          "She has already ______ her homework.",
        baseWord: "FINISH",
        correct: "finished",
        explanation:
          "Has already показывает Present Perfect. Finish — правильный глагол: finished.",
        recommendation:
          "Повтори Present Perfect."
      },
      {
        subtopic: "Present Perfect",
        level: "Medium",
        theory:
          "После he/she/it в Present Perfect используется has + V3.",
        example:
          "He has never ______ to London. BE → been",
        exampleExplanation:
          "Never часто используется с Present Perfect. Be → been.",
        question:
          "My friend has never ______ abroad.",
        baseWord: "TRAVEL",
        correct: "travelled",
        explanation:
          "Has never показывает Present Perfect. Travel → travelled.",
        recommendation:
          "Повтори has/have + V3."
      },
      {
        subtopic: "Past Perfect",
        level: "Hard",
        theory:
          "Past Perfect используется, когда одно действие произошло раньше другого действия в прошлом. Формула: had + V3.",
        example:
          "When I arrived, they had already ______. LEAVE → left",
        exampleExplanation:
          "Сначала они ушли, потом я пришёл. Более раннее действие — Past Perfect.",
        question:
          "When Tom came home, he realized that he ______ his keys at school.",
        baseWord: "LEAVE",
        correct: "had left",
        explanation:
          "Сначала он оставил ключи, потом пришёл домой и понял это. Поэтому had left.",
        recommendation:
          "Повтори Past Perfect."
      },
      {
        subtopic: "Past Perfect",
        level: "Hard",
        theory:
          "Past Perfect помогает показать, какое из двух прошлых действий произошло раньше.",
        example:
          "She was upset because she had ______ the bus. MISS → missed",
        exampleExplanation:
          "Сначала она пропустила автобус, потом расстроилась.",
        question:
          "I could not call him because I ______ my phone at home.",
        baseWord: "FORGET",
        correct: "had forgotten",
        explanation:
          "Сначала я забыл телефон дома, потом не смог позвонить. Нужен Past Perfect.",
        recommendation:
          "Повтори had + V3."
      },
      {
        subtopic: "Future Simple",
        level: "Easy",
        theory:
          "Future Simple используется для будущих действий. Формула: will + глагол.",
        example:
          "I think it ______ tomorrow. RAIN → will rain",
        exampleExplanation:
          "Tomorrow показывает будущее. Нужен will rain.",
        question:
          "I hope you ______ the exam.",
        baseWord: "PASS",
        correct: "will pass",
        explanation:
          "Hope относится к будущему результату. Нужна форма will pass.",
        recommendation:
          "Повтори Future Simple."
      },
      {
        subtopic: "Future Simple",
        level: "Easy",
        theory:
          "После will глагол используется в начальной форме без -s и без -ed.",
        example:
          "She will ______ later. COME → come",
        exampleExplanation:
          "После will используется come, не comes.",
        question:
          "They ______ us tomorrow.",
        baseWord: "VISIT",
        correct: "will visit",
        explanation:
          "Tomorrow показывает будущее. Используем will visit.",
        recommendation:
          "Повтори will + infinitive."
      },
      {
        subtopic: "Passive Voice",
        level: "Medium",
        theory:
          "Passive Voice используется, когда важен объект действия. Формула: be + V3.",
        example:
          "The museum was ______ in 1890. BUILD → built",
        exampleExplanation:
          "Музей был построен. Это Past Passive: was + V3.",
        question:
          "This book ______ by many students every year.",
        baseWord: "READ",
        correct: "is read",
        explanation:
          "Книгу читают каждый год. Это Present Passive: is + V3.",
        recommendation:
          "Повтори Passive Voice."
      },
      {
        subtopic: "Passive Voice",
        level: "Medium",
        theory:
          "В Past Passive используется was/were + V3.",
        example:
          "The letter was ______ yesterday. SEND → sent",
        exampleExplanation:
          "Письмо было отправлено вчера. Нужен Past Passive.",
        question:
          "The house ______ in 1998.",
        baseWord: "BUILD",
        correct: "was built",
        explanation:
          "Дом был построен в 1998 году. Past Passive: was built.",
        recommendation:
          "Повтори was/were + V3."
      },
      {
        subtopic: "Passive Voice",
        level: "Hard",
        theory:
          "Если подлежащее во множественном числе, в Present Passive используется are + V3.",
        example:
          "Many languages are ______ in Europe. SPEAK → spoken",
        exampleExplanation:
          "Languages — множественное число, поэтому are spoken.",
        question:
          "English ______ in many countries.",
        baseWord: "SPEAK",
        correct: "is spoken",
        explanation:
          "English — единственное число. Present Passive: is spoken.",
        recommendation:
          "Повтори формы Passive Voice."
      },
      {
        subtopic: "Comparison",
        level: "Easy",
        theory:
          "После than обычно нужна сравнительная степень прилагательного.",
        example:
          "This test is easier than the first one. EASY → easier",
        exampleExplanation:
          "Than показывает сравнение. Easy → easier.",
        question:
          "This exercise is ______ than the first one.",
        baseWord: "EASY",
        correct: "easier",
        explanation:
          "Есть than, значит нужна сравнительная степень. Easy → easier.",
        recommendation:
          "Повтори comparative adjectives."
      },
      {
        subtopic: "Comparison",
        level: "Medium",
        theory:
          "Длинные прилагательные образуют сравнительную степень с more.",
        example:
          "This book is more interesting than that one. INTERESTING → more interesting",
        exampleExplanation:
          "Interesting — длинное прилагательное, поэтому more interesting.",
        question:
          "This film is ______ than the book.",
        baseWord: "INTERESTING",
        correct: "more interesting",
        explanation:
          "Interesting — длинное прилагательное. Сравнительная степень: more interesting.",
        recommendation:
          "Повтори степени сравнения длинных прилагательных."
      },
      {
        subtopic: "Superlative",
        level: "Medium",
        theory:
          "Превосходная степень используется, когда объект сравнивается со всеми остальными. Часто используется the.",
        example:
          "This is the best day of my life. GOOD → best",
        exampleExplanation:
          "Good имеет неправильную форму: good → better → best.",
        question:
          "It was the ______ day of the year.",
        baseWord: "HOT",
        correct: "hottest",
        explanation:
          "The показывает превосходную степень. Hot → hottest.",
        recommendation:
          "Повтори superlative adjectives."
      },
      {
        subtopic: "Pronouns",
        level: "Easy",
        theory:
          "В заданиях могут проверяться формы местоимений: I, me, my, mine; she, her; they, them, their.",
        example:
          "This is my book. I → my",
        exampleExplanation:
          "Перед существительным book нужно притяжательное местоимение.",
        question:
          "Kate forgot ______ umbrella at home.",
        baseWord: "SHE",
        correct: "her",
        explanation:
          "Перед umbrella нужно притяжательное местоимение her.",
        recommendation:
          "Повтори притяжательные местоимения."
      },
      {
        subtopic: "Pronouns",
        level: "Easy",
        theory:
          "После глагола часто используется объектная форма местоимения.",
        example:
          "I saw him yesterday. HE → him",
        exampleExplanation:
          "После saw нужен объект действия: him.",
        question:
          "My teacher asked ______ to answer the question.",
        baseWord: "I",
        correct: "me",
        explanation:
          "После asked нужна объектная форма местоимения: me.",
        recommendation:
          "Повтори subject/object pronouns."
      },
      {
        subtopic: "Possessive Pronouns",
        level: "Medium",
        theory:
          "Если после местоимения нет существительного, часто нужна абсолютная форма: mine, yours, his, hers, ours, theirs.",
        example:
          "This bag is mine. I → mine",
        exampleExplanation:
          "После пропуска нет существительного, поэтому mine.",
        question:
          "This phone is not mine. It is ______.",
        baseWord: "SHE",
        correct: "hers",
        explanation:
          "После пропуска нет существительного, значит нужна форма hers.",
        recommendation:
          "Повтори possessive pronouns."
      },
      {
        subtopic: "Numerals",
        level: "Medium",
        theory:
          "Порядковые числительные используются для обозначения места по порядку: first, second, third, fourth.",
        example:
          "This is my first visit to London. ONE → first",
        exampleExplanation:
          "Visit по счёту первый, поэтому first.",
        question:
          "It was my ______ attempt to pass the exam.",
        baseWord: "TWO",
        correct: "second",
        explanation:
          "Нужна порядковая форма числительного: two → second.",
        recommendation:
          "Повтори ordinal numbers."
      },
      {
        subtopic: "Numerals",
        level: "Medium",
        theory:
          "Числительные one, two, three имеют особые порядковые формы: first, second, third.",
        example:
          "He came third in the race. THREE → third",
        exampleExplanation:
          "Нужно место по порядку, поэтому third.",
        question:
          "March is the ______ month of the year.",
        baseWord: "THREE",
        correct: "third",
        explanation:
          "Март — третий месяц года. Three → third.",
        recommendation:
          "Повтори исключения в порядковых числительных."
      },
      {
        subtopic: "Gerund",
        level: "Hard",
        theory:
          "После некоторых глаголов используется герундий: enjoy doing, avoid doing, finish doing.",
        example:
          "She enjoys reading books. READ → reading",
        exampleExplanation:
          "После enjoy используется V-ing.",
        question:
          "He avoided ______ about the problem.",
        baseWord: "TALK",
        correct: "talking",
        explanation:
          "После avoid используется герундий: avoid talking.",
        recommendation:
          "Повтори глаголы, после которых нужен gerund."
      },
      {
        subtopic: "Infinitive",
        level: "Hard",
        theory:
          "После want, decide, hope, plan часто используется инфинитив с to.",
        example:
          "I decided to study harder. STUDY → to study",
        exampleExplanation:
          "После decide используется to + verb.",
        question:
          "She wants ______ a doctor.",
        baseWord: "BECOME",
        correct: "to become",
        explanation:
          "После wants используется инфинитив: to become.",
        recommendation:
          "Повтори глаголы с infinitive."
      },
      {
        subtopic: "Conditionals",
        level: "Hard",
        theory:
          "В условных предложениях первого типа после if используется Present Simple, а в главной части — will.",
        example:
          "If it rains, we will stay home. RAIN → rains",
        exampleExplanation:
          "После if в первом условном используется Present Simple.",
        question:
          "If he ______ hard, he will pass the exam.",
        baseWord: "STUDY",
        correct: "studies",
        explanation:
          "После if нужен Present Simple. He требует studies.",
        recommendation:
          "Повтори First Conditional."
      },
      {
        subtopic: "Conditionals",
        level: "Hard",
        theory:
          "Во втором условном предложении используется Past Simple для нереального условия.",
        example:
          "If I had more time, I would travel. HAVE → had",
        exampleExplanation:
          "Это нереальное условие, поэтому Past Simple.",
        question:
          "If I ______ you, I would apologize.",
        baseWord: "BE",
        correct: "were",
        explanation:
          "Во втором условном с I часто используется were: If I were you.",
        recommendation:
          "Повтори Second Conditional."
      }
    ]
  },

  wordFormation: {
    title: "ЕГЭ 25–29: словообразование",
    description:
      "Этот модуль учит решать задания 25–29 ЕГЭ. Нужно изменить данное слово так, чтобы оно грамматически и смыслово подходило в текст.",
    skills: [
      "определять нужную часть речи",
      "образовывать существительные, прилагательные и наречия",
      "использовать суффиксы -tion, -ment, -ness, -ful, -less",
      "понимать, когда нужна отрицательная приставка",
      "искать подсказки в контексте"
    ],
    questions: [
      {
        subtopic: "Adverb",
        level: "Easy",
        theory:
          "Если слово описывает действие, чаще всего нужно наречие. Наречие отвечает на вопрос “как?” и часто образуется с помощью -ly.",
        example:
          "She answered the question ______. CAREFUL → carefully",
        exampleExplanation:
          "Answered — действие. Ответила как? Carefully.",
        question:
          "The boy looked at the picture very ______.",
        baseWord: "CAREFUL",
        correct: "carefully",
        explanation:
          "Слово относится к действию looked. Он смотрел как? Carefully.",
        recommendation:
          "Повтори adjective и adverb."
      },
      {
        subtopic: "Adverb",
        level: "Easy",
        theory:
          "Наречие часто стоит после глагола и объясняет, как выполняется действие.",
        example:
          "He spoke clearly. CLEAR → clearly",
        exampleExplanation:
          "Spoke — действие. Говорил как? Clearly.",
        question:
          "She explained the rule ______.",
        baseWord: "CLEAR",
        correct: "clearly",
        explanation:
          "Слово объясняет действие explained. Нужна форма clearly.",
        recommendation:
          "Повтори наречия с -ly."
      },
      {
        subtopic: "Adverb",
        level: "Medium",
        theory:
          "Если слово стоит рядом с глаголом и отвечает на вопрос как, нужна форма наречия.",
        example:
          "He worked hard and carefully. CAREFUL → carefully",
        exampleExplanation:
          "Carefully описывает способ работы.",
        question:
          "The students listened to the teacher ______.",
        baseWord: "ATTENTIVE",
        correct: "attentively",
        explanation:
          "Слово описывает действие listened. Нужна форма attentively.",
        recommendation:
          "Повтори образование наречий от прилагательных."
      },
      {
        subtopic: "Noun: -tion",
        level: "Medium",
        theory:
          "После прилагательного часто требуется существительное. Многие существительные образуются с помощью суффикса -tion.",
        example:
          "Good ______ is important. EDUCATE → education",
        exampleExplanation:
          "Good — прилагательное, после него нужно существительное education.",
        question:
          "Good ______ is important for every student.",
        baseWord: "EDUCATE",
        correct: "education",
        explanation:
          "После good нужно существительное. Educate превращается в education.",
        recommendation:
          "Повтори существительные с суффиксом -tion."
      },
      {
        subtopic: "Noun: -tion",
        level: "Medium",
        theory:
          "Суффикс -tion часто превращает глагол в существительное.",
        example:
          "The ______ of the Internet changed the world. INVENT → invention",
        exampleExplanation:
          "Нужна форма существительного: invention.",
        question:
          "The ______ of the new machine took several years.",
        baseWord: "INVENT",
        correct: "invention",
        explanation:
          "После the нужно существительное. Invent → invention.",
        recommendation:
          "Повтори слова invention, education, information."
      },
      {
        subtopic: "Noun: -tion",
        level: "Hard",
        theory:
          "Иногда слово меняется сильнее: communicate → communication.",
        example:
          "Good communication is important. COMMUNICATE → communication",
        exampleExplanation:
          "Нужно существительное, обозначающее процесс общения.",
        question:
          "Modern ______ helps people from different countries understand each other.",
        baseWord: "COMMUNICATE",
        correct: "communication",
        explanation:
          "После modern требуется существительное. Communicate → communication.",
        recommendation:
          "Повтори сложные существительные с -tion."
      },
      {
        subtopic: "Noun: -ment",
        level: "Medium",
        theory:
          "Суффикс -ment часто образует существительные от глаголов: develop → development, improve → improvement.",
        example:
          "The city needs economic ______. DEVELOP → development",
        exampleExplanation:
          "Economic — прилагательное, после него нужно существительное development.",
        question:
          "His English showed great ______ after six months of practice.",
        baseWord: "IMPROVE",
        correct: "improvement",
        explanation:
          "Great — прилагательное, после него нужно существительное. Improve → improvement.",
        recommendation:
          "Повтори существительные с суффиксом -ment."
      },
      {
        subtopic: "Noun: -ment",
        level: "Medium",
        theory:
          "Если перед пропуском стоит прилагательное, после него часто нужно существительное.",
        example:
          "Fast development changed the town. DEVELOP → development",
        exampleExplanation:
          "Fast описывает существительное development.",
        question:
          "The ______ of the project took two years.",
        baseWord: "DEVELOP",
        correct: "development",
        explanation:
          "После the нужно существительное. Develop → development.",
        recommendation:
          "Повтори develop → development."
      },
      {
        subtopic: "Noun: -ness",
        level: "Medium",
        theory:
          "Суффикс -ness образует существительные от прилагательных: kind → kindness, happy → happiness.",
        example:
          "Her kindness surprised me. KIND → kindness",
        exampleExplanation:
          "Нужно существительное, обозначающее качество.",
        question:
          "Her ______ helped her make many friends.",
        baseWord: "KIND",
        correct: "kindness",
        explanation:
          "После her нужно существительное. Kind → kindness.",
        recommendation:
          "Повтори существительные с -ness."
      },
      {
        subtopic: "Noun: -ness",
        level: "Medium",
        theory:
          "При образовании существительных с -ness иногда меняется y на i.",
        example:
          "Happy → happiness",
        exampleExplanation:
          "Если слово заканчивается на y, часто y меняется на i перед -ness.",
        question:
          "Money does not always bring ______.",
        baseWord: "HAPPY",
        correct: "happiness",
        explanation:
          "Нужно существительное. Happy → happiness.",
        recommendation:
          "Повтори happy → happiness."
      },
      {
        subtopic: "Adjective: -ful",
        level: "Easy",
        theory:
          "Суффикс -ful образует прилагательные со значением наличия качества: useful, helpful, careful.",
        example:
          "This book is ______. USE → useful",
        exampleExplanation:
          "Книга полезная, значит нужно прилагательное useful.",
        question:
          "Thank you for your ______ advice.",
        baseWord: "HELP",
        correct: "helpful",
        explanation:
          "Advice описывается прилагательным helpful.",
        recommendation:
          "Повтори суффиксы -ful и -less."
      },
      {
        subtopic: "Adjective: -ful",
        level: "Easy",
        theory:
          "Перед существительным часто стоит прилагательное.",
        example:
          "A useful book. USE → useful",
        exampleExplanation:
          "Useful описывает book.",
        question:
          "Be ______ when you cross the road.",
        baseWord: "CARE",
        correct: "careful",
        explanation:
          "Нужно прилагательное careful — осторожный.",
        recommendation:
          "Повтори care → careful."
      },
      {
        subtopic: "Adjective: -less",
        level: "Medium",
        theory:
          "Суффикс -less означает отсутствие качества: careless — небрежный, hopeless — безнадёжный.",
        example:
          "The situation was hopeless. HOPE → hopeless",
        exampleExplanation:
          "Hopeless означает без надежды.",
        question:
          "The task seemed ______ because nobody knew what to do.",
        baseWord: "HOPE",
        correct: "hopeless",
        explanation:
          "По смыслу задача казалась безнадёжной. Hope → hopeless.",
        recommendation:
          "Повтори суффикс -less."
      },
      {
        subtopic: "Adjective: -less",
        level: "Medium",
        theory:
          "Если по смыслу качество отсутствует, часто нужен суффикс -less.",
        example:
          "Careless mistakes are common. CARE → careless",
        exampleExplanation:
          "Careless значит небрежный, без внимания.",
        question:
          "He made several ______ mistakes in the test.",
        baseWord: "CARE",
        correct: "careless",
        explanation:
          "По смыслу ошибки были небрежными. Care → careless.",
        recommendation:
          "Повтори careful и careless."
      },
      {
        subtopic: "Negative Prefix",
        level: "Medium",
        theory:
          "Иногда по смыслу нужен отрицательный вариант слова. Для этого используются приставки un-, in-, im-, il-, ir-, dis-.",
        example:
          "It is ______ to drive without a licence. LEGAL → illegal",
        exampleExplanation:
          "Водить без прав незаконно, поэтому нужен отрицательный вариант illegal.",
        question:
          "It was ______ to finish the work in five minutes.",
        baseWord: "POSSIBLE",
        correct: "impossible",
        explanation:
          "По смыслу: закончить за пять минут было невозможно. Possible → impossible.",
        recommendation:
          "Повтори отрицательные приставки."
      },
      {
        subtopic: "Negative Prefix",
        level: "Medium",
        theory:
          "Перед p и m часто используется приставка im-.",
        example:
          "Possible → impossible",
        exampleExplanation:
          "Possible начинается с p, поэтому используется im-.",
        question:
          "His behaviour was very ______.",
        baseWord: "POLITE",
        correct: "impolite",
        explanation:
          "По смыслу поведение было невежливым. Polite → impolite.",
        recommendation:
          "Повтори приставку im-."
      },
      {
        subtopic: "Negative Prefix",
        level: "Hard",
        theory:
          "Перед l часто используется приставка il-, перед r — ir-.",
        example:
          "Legal → illegal, regular → irregular",
        exampleExplanation:
          "Форма приставки зависит от первого звука слова.",
        question:
          "His answer was completely ______.",
        baseWord: "LOGICAL",
        correct: "illogical",
        explanation:
          "Перед l используется il-. Logical → illogical.",
        recommendation:
          "Повтори il-, im-, ir-, in-."
      },
      {
        subtopic: "Negative Prefix",
        level: "Hard",
        theory:
          "Приставка ir- часто используется перед словами, начинающимися на r.",
        example:
          "Regular → irregular",
        exampleExplanation:
          "Regular начинается с r, поэтому используется ir-.",
        question:
          "The timetable was changed, so the buses became ______.",
        baseWord: "REGULAR",
        correct: "irregular",
        explanation:
          "По смыслу автобусы стали нерегулярными. Regular → irregular.",
        recommendation:
          "Повтори приставку ir-."
      },
      {
        subtopic: "Person Noun",
        level: "Easy",
        theory:
          "Суффиксы -er и -or часто обозначают человека или профессию.",
        example:
          "Teach → teacher",
        exampleExplanation:
          "Teacher — человек, который учит.",
        question:
          "My brother wants to become a famous ______.",
        baseWord: "ACT",
        correct: "actor",
        explanation:
          "Нужен человек, выполняющий действие. Act → actor.",
        recommendation:
          "Повтори профессии с -er и -or."
      },
      {
        subtopic: "Person Noun",
        level: "Easy",
        theory:
          "Если речь идёт о человеке, выполняющем действие, часто нужен суффикс -er.",
        example:
          "Write → writer",
        exampleExplanation:
          "Writer — человек, который пишет.",
        question:
          "The ______ explained the rule very well.",
        baseWord: "TEACH",
        correct: "teacher",
        explanation:
          "Нужен человек, который учит. Teach → teacher.",
        recommendation:
          "Повтори teach → teacher."
      },
      {
        subtopic: "Person Noun",
        level: "Medium",
        theory:
          "Некоторые существительные человека образуются с -or: actor, visitor, director.",
        example:
          "Visit → visitor",
        exampleExplanation:
          "Visitor — человек, который посещает место.",
        question:
          "Every ______ must show a ticket at the entrance.",
        baseWord: "VISIT",
        correct: "visitor",
        explanation:
          "Нужен человек, который посещает место. Visit → visitor.",
        recommendation:
          "Повтори суффикс -or."
      },
      {
        subtopic: "Adjective: -y",
        level: "Easy",
        theory:
          "Суффикс -y часто образует прилагательные от существительных: rain → rainy, cloud → cloudy.",
        example:
          "It was a rainy day. RAIN → rainy",
        exampleExplanation:
          "Rainy описывает погоду.",
        question:
          "The weather was ______, so we stayed at home.",
        baseWord: "RAIN",
        correct: "rainy",
        explanation:
          "Нужно прилагательное rainy — дождливый.",
        recommendation:
          "Повтори sunny, rainy, cloudy, windy."
      },
      {
        subtopic: "Adjective: -y",
        level: "Easy",
        theory:
          "Прилагательные погоды часто образуются с -y.",
        example:
          "Wind → windy",
        exampleExplanation:
          "Windy значит ветреный.",
        question:
          "It was very ______ near the sea.",
        baseWord: "WIND",
        correct: "windy",
        explanation:
          "Нужно прилагательное windy — ветреный.",
        recommendation:
          "Повтори weather adjectives."
      },
      {
        subtopic: "Adjective: -ous",
        level: "Medium",
        theory:
          "Суффикс -ous образует прилагательные: danger → dangerous, fame → famous.",
        example:
          "This animal is dangerous. DANGER → dangerous",
        exampleExplanation:
          "Dangerous описывает животное.",
        question:
          "The road was very ______ after the snow.",
        baseWord: "DANGER",
        correct: "dangerous",
        explanation:
          "Нужно прилагательное dangerous — опасный.",
        recommendation:
          "Повтори прилагательные с -ous."
      },
      {
        subtopic: "Adjective: -ous",
        level: "Medium",
        theory:
          "Если слово описывает существительное, нужна форма прилагательного.",
        example:
          "A famous actor. FAME → famous",
        exampleExplanation:
          "Famous описывает actor.",
        question:
          "London is a ______ city visited by millions of tourists.",
        baseWord: "FAME",
        correct: "famous",
        explanation:
          "City описывается прилагательным famous.",
        recommendation:
          "Повтори fame → famous."
      },
      {
        subtopic: "Adjective: -able",
        level: "Medium",
        theory:
          "Суффикс -able образует прилагательные со значением возможности: readable, comfortable, enjoyable.",
        example:
          "The book is readable. READ → readable",
        exampleExplanation:
          "Readable значит такой, который можно читать.",
        question:
          "The sofa was very ______.",
        baseWord: "COMFORT",
        correct: "comfortable",
        explanation:
          "Нужно прилагательное comfortable — удобный.",
        recommendation:
          "Повтори прилагательные с -able."
      },
      {
        subtopic: "Adjective: -able",
        level: "Hard",
        theory:
          "Некоторые слова при добавлении -able меняют написание.",
        example:
          "Enjoy → enjoyable",
        exampleExplanation:
          "Enjoyable значит приятный.",
        question:
          "The trip was really ______.",
        baseWord: "ENJOY",
        correct: "enjoyable",
        explanation:
          "Нужно прилагательное enjoyable — приятный.",
        recommendation:
          "Повтори enjoy → enjoyable."
      },
      {
        subtopic: "Adjective: -ed / -ing",
        level: "Easy",
        theory:
          "Прилагательные с -ed описывают чувства человека, а с -ing — предмет или ситуацию, вызывающую чувство.",
        example:
          "I am interested. The film is interesting.",
        exampleExplanation:
          "Interested — чувство человека, interesting — качество фильма.",
        question:
          "He was very ______ after the long journey.",
        baseWord: "TIRE",
        correct: "tired",
        explanation:
          "Речь о состоянии человека. Нужна форма tired.",
        recommendation:
          "Повтори -ed и -ing adjectives."
      },
      {
        subtopic: "Adjective: -ed / -ing",
        level: "Easy",
        theory:
          "Если предмет вызывает чувство, используется форма с -ing.",
        example:
          "The lesson was boring. BORE → boring",
        exampleExplanation:
          "Урок вызывает скуку, поэтому boring.",
        question:
          "The film was really ______.",
        baseWord: "INTEREST",
        correct: "interesting",
        explanation:
          "Фильм вызывает интерес, поэтому interesting.",
        recommendation:
          "Повтори interesting/interested."
      },
      {
        subtopic: "Adjective: -ed / -ing",
        level: "Medium",
        theory:
          "Форма с -ed обычно относится к человеку, который испытывает чувство.",
        example:
          "She was bored. BORE → bored",
        exampleExplanation:
          "Она испытывала скуку, поэтому bored.",
        question:
          "The children were very ______ by the story.",
        baseWord: "EXCITE",
        correct: "excited",
        explanation:
          "Дети испытывали эмоцию. Нужна форма excited.",
        recommendation:
          "Повтори excited/exciting."
      },
      {
        subtopic: "Irregular Word Formation",
        level: "Hard",
        theory:
          "Некоторые слова образуются нестандартно, их нужно запоминать.",
        example:
          "Fun → funny",
        exampleExplanation:
          "Funny значит смешной.",
        question:
          "The story was very ______ and made everyone laugh.",
        baseWord: "FUN",
        correct: "funny",
        explanation:
          "Нужно прилагательное funny — смешной.",
        recommendation:
          "Повтори частые нестандартные формы."
      },
      {
        subtopic: "Irregular Word Formation",
        level: "Hard",
        theory:
          "Некоторые формы не строятся по простому правилу и требуют запоминания.",
        example:
          "Science → scientist",
        exampleExplanation:
          "Scientist — учёный.",
        question:
          "The famous ______ made an important discovery.",
        baseWord: "SCIENCE",
        correct: "scientist",
        explanation:
          "Нужен человек, который занимается наукой. Science → scientist.",
        recommendation:
          "Повтори science → scientist."
      }
    ]
  }
};

modules.mixed = {
  title: "Смешанная практика ЕГЭ 19–29",
  description:
    "Этот режим смешивает задания 19–24 и 25–29, чтобы ученик тренировался в формате реального экзамена.",
  skills: [
    "быстро определять тип задания",
    "отличать грамматическую форму от словообразования",
    "применять правила в контексте",
    "анализировать ошибки",
    "готовиться к реальному формату ЕГЭ"
  ],
  questions: [
    ...modules.grammarForms.questions,
    ...modules.wordFormation.questions
  ]
};

let currentModule = "grammarForms";
let examMode = false;
let examQuestions = [];
let examQuestionIndex = 0;
let examCorrect = 0;
let examWrong = 0;
let examTimer;
let timeLeft = 20 * 60;
let examMistakes = [];
let currentQuestion = 0;
let currentDifficulty = "Easy";

let stats = JSON.parse(localStorage.getItem("stats")) || {
  total: 0,
  correct: 0,
  wrong: 0
};
let examStats = JSON.parse(localStorage.getItem("examStats")) || {
  lastResult: null,
  bestResult: null
};

let weakSubtopics = JSON.parse(localStorage.getItem("weakSubtopics")) || {};

const questionEl = document.getElementById("question");
const baseWordEl = document.getElementById("base-word");
const resultEl = document.getElementById("result");
const inputEl = document.getElementById("answer-input");
let filteredQuestions = [];
let currentFilteredQuestions = [];
let currentQuestion = 0;
const moduleInfoEl = document.getElementById("module-info");

function selectModule(moduleName) {
  currentModule = moduleName;
  currentQuestion = 0;

  document.querySelectorAll(".module-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  const activeButton = document.querySelector(
    `.module-btn[onclick="selectModule('${moduleName}')"]`
  );

  if (activeButton) {
    activeButton.classList.add("active");
  }

  loadModuleInfo();
  loadQuestion();
}

function loadModuleInfo() {
  const module = modules[currentModule];

  moduleInfoEl.innerHTML = `
    <div class="module-info-card">
      <h3>${module.title}</h3>
      <p>${module.description}</p>

      <p><b>Чему учит модуль:</b></p>
      <ul>
        ${module.skills.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>

      <p><b>Количество заданий:</b> ${module.questions.length}</p>
    </div>
  `;
}

function loadQuestion() {
  const module = modules[currentModule];

  currentFilteredQuestions = module.questions.filter(
    (q) => q.level === currentDifficulty
  );

  const filteredQuestions = currentFilteredQuestions;

if (filteredQuestions.length === 0) {
  questionEl.innerHTML = `
    <div class="error-box">
      Для этого уровня пока нет заданий.
    </div>
  `;
  return;
}

if (currentQuestion >= filteredQuestions.length) {
  currentQuestion = 0;
}

const q = filteredQuestions[currentQuestion];

  questionEl.innerHTML = `
    <div class="task-top">
      <span class="topic">${module.title}</span>
      <span class="level">${q.level}</span>
    </div>

    <div class="theory-box">
      📘 <b>1. Теория</b><br><br>
      <b>Тема:</b> ${q.subtopic}<br><br>
      ${q.theory}
    </div>

    <br>

    <div class="theory-box">
      👀 <b>2. Пример</b><br><br>
      ${q.example}<br><br>
      <b>Разбор примера:</b><br>
      ${q.exampleExplanation}
    </div>

    <br>

    <b>3. Пробное задание ${currentQuestion + 1} из ${module.questions.length}:</b><br>
    ${q.question}
  `;

  baseWordEl.textContent = q.baseWord;
  resultEl.innerHTML = "";
  inputEl.value = "";
  
  updateProgress();
}

function checkTextAnswer() {
  const module = modules[currentModule];
 const q = currentFilteredQuestions[currentQuestion];
  const userAnswer = inputEl.value.trim().toLowerCase();
  if (userAnswer === "") {
    resultEl.innerHTML = `
      <div class="error-box">
        Введите ответ перед проверкой.
      </div>
    `;
    return;
  }

  stats.total++;

  if (userAnswer === q.correct.toLowerCase()) {
    stats.correct++;

    resultEl.innerHTML = `
      <div class="success-box">
        ✅ <b>Верно!</b><br><br>
        <b>Ответ:</b> ${q.correct}<br><br>
        <b>Объяснение:</b><br>
        ${q.explanation}
      </div>
    `;
  } else {
    stats.wrong++;

    const key = `${module.title}: ${q.subtopic}`;
    weakSubtopics[key] = (weakSubtopics[key] || 0) + 1;

    resultEl.innerHTML = `
      <div class="error-box">
        ❌ <b>Ошибка</b><br><br>

        <b>Твой ответ:</b> ${userAnswer}<br>
        <b>Правильный ответ:</b> ${q.correct}<br><br>

        <b>Почему правильно так:</b><br>
        ${q.explanation}<br><br>

        💡 <b>Что повторить:</b><br>
        ${q.recommendation}
      </div>
    `;
  }

  saveData();
  updateProgress();
  showWeakTopic();
}

// Единая точка входа для кнопки и клавиши Enter.
// В экзамене проверяем именно examQuestions, а не задание обычной тренировки.
function checkAnswer() {
  if (examMode) {
    checkExamAnswer();
  } else {
    checkTextAnswer();
  }
}

function nextQuestion() {
  const module = modules[currentModule];

  const filteredQuestions =
    module.questions.filter(
      (q) => q.level === currentDifficulty
    );

  currentQuestion++;

  if (currentQuestion >= filteredQuestions.length) {
    currentQuestion = 0;
  }

  loadQuestion();
}

function updateProgress() {
  document.getElementById("total").textContent = stats.total;
  document.getElementById("correct").textContent = stats.correct;
  document.getElementById("wrong").textContent = stats.wrong;
}

function saveData() {
  localStorage.setItem("stats", JSON.stringify(stats));
  localStorage.setItem("weakSubtopics", JSON.stringify(weakSubtopics));
}

function showWeakTopic() {
  let weakest = null;
  let maxMistakes = 0;

  for (let subtopic in weakSubtopics) {
    if (weakSubtopics[subtopic] > maxMistakes) {
      maxMistakes = weakSubtopics[subtopic];
      weakest = subtopic;
    }
  }

  let old = document.getElementById("weak-topic");

  if (old) {
    old.remove();
  }

  if (weakest) {
    const advice = document.createElement("div");
    advice.id = "weak-topic";
    advice.className = "weak-topic-box";

    advice.innerHTML = `
      📌 <b>Слабая тема:</b> ${weakest}<br><br>
      Сайт заметил, что ошибки чаще всего появляются здесь.
      Рекомендуется повторить эту тему.
    `;

    document.querySelector(".progress-box").appendChild(advice);
  }
}

inputEl.onkeydown = function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    checkAnswer();
  }
};

loadModuleInfo();
loadQuestion();
showWeakTopic();
updateExamProgress();
function startExamMode() {
  examMode = true;

  examQuestions = [
    ...modules.grammarForms.questions,
    ...modules.wordFormation.questions
  ];

  examQuestions = examQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  examQuestionIndex = 0;
  examCorrect = 0;
  examWrong = 0;
  examMistakes = [];

  timeLeft = 20 * 60;

  startTimer();
  document.getElementById("main-action-btn").textContent =
  "Ответить";

  loadExamQuestion();
}

function startTimer() {
  clearInterval(examTimer);

  updateTimer();

  examTimer = setInterval(() => {
    timeLeft--;

    updateTimer();

    if (timeLeft <= 0) {
      finishExam();
    }
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  document.getElementById("timer-box").innerHTML =
    `⏳ ${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function loadExamQuestion() {
  const q = examQuestions[examQuestionIndex];

  questionEl.innerHTML = `
    <div class="task-top">
      <span class="topic">Экзамен ЕГЭ 19–29</span>
      <span class="level">${q.level}</span>
    </div>

    <b>Задание ${examQuestionIndex + 1} из ${examQuestions.length}</b><br><br>

    ${q.question}
  `;

  baseWordEl.textContent = q.baseWord;

  resultEl.innerHTML = "";

  inputEl.value = "";
}



  const module = modules[currentModule];
  const q = currentFilteredQuestions[currentQuestion];

  const userAnswer = inputEl.value.trim().toLowerCase();

  if (userAnswer === "") {
    resultEl.innerHTML = `
      <div class="error-box">
        Введите ответ перед проверкой.
      </div>
    `;
    return;
  }

  stats.total++;

  if (userAnswer === q.correct.toLowerCase()) {
    stats.correct++;

    resultEl.innerHTML = `
      <div class="success-box">
        ✅ <b>Верно!</b><br><br>
        <b>Ответ:</b> ${q.correct}<br><br>
        <b>Объяснение:</b><br>
        ${q.explanation}
      </div>
    `;
  } else {
    stats.wrong++;

    const key = `${module.title}: ${q.subtopic}`;
    weakSubtopics[key] = (weakSubtopics[key] || 0) + 1;

    resultEl.innerHTML = `
      <div class="error-box">
        ❌ <b>Ошибка</b><br><br>

        <b>Твой ответ:</b> ${userAnswer}<br>
        <b>Правильный ответ:</b> ${q.correct}<br><br>

        <b>Почему правильно так:</b><br>
        ${q.explanation}<br><br>

        💡 <b>Что повторить:</b><br>
        ${q.recommendation}
      </div>
    `;
  }

  saveData();
  updateProgress();
  showWeakTopic();
}

function checkExamAnswer() {
  const q = examQuestions[examQuestionIndex];

  const userAnswer = inputEl.value.trim().toLowerCase();

  if (userAnswer === "") {
    resultEl.innerHTML = `
      <div class="error-box">
        Введите ответ перед переходом дальше.
      </div>
    `;
    return;
  }

  if (userAnswer === q.correct.toLowerCase()) {
    examCorrect++;
  } else {
    examWrong++;

  examMistakes.push({
  question: q.question,
  baseWord: q.baseWord,
  userAnswer: userAnswer,
  correct: q.correct,
  subtopic: q.subtopic,
  explanation: q.explanation,
  mistakeAnalysis: getMistakeAnalysis(q, userAnswer),
  recommendation: q.recommendation
});
  }

  examQuestionIndex++;

  if (examQuestionIndex >= examQuestions.length) {
    finishExam();
  } else {
    loadExamQuestion();
  }
}

function finishExam() {
  clearInterval(examTimer);

  examMode = false;

  const percent = Math.round(
    (examCorrect / examQuestions.length) * 100
  );
examStats.lastResult = percent;

if (
  examStats.bestResult === null ||
  percent > examStats.bestResult
) {
  examStats.bestResult = percent;
}

localStorage.setItem("examStats", JSON.stringify(examStats));
updateExamProgress();
  const mistakesHtml =
    examMistakes.length === 0
      ? `<p>🎉 Ошибок нет. Отличный результат!</p>`
      : examMistakes
          .map(
            (mistake, index) => `
              <div class="mistake-card">
                <h4>Ошибка ${index + 1}: ${mistake.subtopic}</h4>

                <p><b>Задание:</b><br>
                ${mistake.question}</p>

                <p><b>Данное слово:</b> ${mistake.baseWord}</p>

                <p><b>Твой ответ:</b> ${mistake.userAnswer}</p>

                <p><b>Правильный ответ:</b> ${mistake.correct}</p>

                <p><b>Объяснение:</b><br>
                ${mistake.mistakeAnalysis}

                <p><b>Что повторить:</b><br>
                ${mistake.recommendation}</p>
              </div>
            `
          )
          .join("");

  questionEl.innerHTML = `
    <div class="exam-result-box">
      <h2>Экзамен завершён</h2>

      <p><b>Правильных:</b> ${examCorrect} из ${examQuestions.length}</p>
      <p><b>Ошибок:</b> ${examWrong}</p>
      <p><b>Результат:</b> ${percent}%</p>

      <br>

      <h3>Разбор ошибок</h3>
      ${mistakesHtml}

      <br>

      <button class="btn" onclick="restartAfterExam()">
        Вернуться к обучению
      </button>

      <button class="btn secondary-btn" onclick="startExamMode()">
        Пройти экзамен ещё раз
      </button>
    </div>
  `;

  baseWordEl.textContent = "";
  resultEl.innerHTML = "";
  inputEl.style.display = "none";

  document.querySelector(".buttons").style.display =
    "none";

  document.getElementById("timer-box").innerHTML = "";
}

function restartAfterExam() {
  inputEl.style.display = "block";

  document.querySelector(".buttons").style.display =
    "flex";

  document.getElementById("timer-box").innerHTML = "";

  loadModuleInfo();

  loadQuestion();document.getElementById("main-action-btn").textContent =
  "Проверить";
}
function getMistakeAnalysis(q, userAnswer) {
  if (q.subtopic.includes("Past Simple")) {
    return `
      Ошибка связана с Past Simple. В задании есть указание на прошлое время,
      поэтому нужно было поставить глагол в форму прошедшего времени.
      Данное слово: ${q.baseWord}. Правильная форма: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Present Simple")) {
    return `
      Ошибка связана с Present Simple. Нужно было проверить подлежащее.
      Если подлежащее he/she/it, к глаголу часто добавляется -s или -es.
      Правильный ответ: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Present Continuous")) {
    return `
      Ошибка в образовании Present Continuous. Нужно было использовать
      am/is/are + глагол с окончанием -ing.
      Правильный ответ: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Past Continuous")) {
    return `
      Ошибка в Past Continuous. Это длительное действие в прошлом,
      поэтому нужна форма was/were + V-ing.
      Правильный ответ: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Present Perfect")) {
    return `
      Ошибка связана с Present Perfect. Нужно было использовать
      have/has + третью форму глагола.
      Правильный ответ: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Past Perfect")) {
    return `
      Ошибка связана с Past Perfect. Одно действие произошло раньше другого
      действия в прошлом, поэтому нужна форма had + V3.
      Правильный ответ: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Passive Voice")) {
    return `
      Ошибка в Passive Voice. В предложении действие направлено на объект,
      поэтому нужна конструкция be + V3.
      Правильный ответ: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Comparison") || q.subtopic.includes("Superlative")) {
    return `
      Ошибка в степени сравнения. Нужно было определить, есть ли сравнение
      с другим предметом или превосходная степень.
      Правильный ответ: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Pronouns")) {
    return `
      Ошибка в форме местоимения. Нужно было понять, требуется ли форма
      подлежащего, дополнения или притяжательная форма.
      Правильный ответ: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Numerals")) {
    return `
      Ошибка в числительном. В задании требовалась порядковая форма,
      а не количественное числительное.
      Правильный ответ: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Adverb")) {
    return `
      Ошибка в выборе части речи. Слово описывает действие, поэтому нужно
      наречие. Обычно оно образуется с помощью -ly.
      Правильный ответ: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Noun")) {
    return `
      Ошибка в словообразовании. По структуре предложения требовалось
      существительное. Нужно было изменить данное слово в noun-form.
      Правильный ответ: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Adjective")) {
    return `
      Ошибка в словообразовании. Здесь требовалось прилагательное,
      потому что слово описывает существительное или состояние.
      Правильный ответ: ${q.correct}.
    `;
  }

  if (q.subtopic.includes("Negative Prefix")) {
    return `
      Ошибка в отрицательной приставке. По смыслу предложения нужен был
      отрицательный вариант слова.
      Правильный ответ: ${q.correct}.
    `;
  }

  return q.explanation;
}
function setDifficulty(level) {
  currentDifficulty = level;

  currentQuestion = 0;

  document
    .querySelectorAll(".difficulty-btn")
    .forEach((btn) => {
      btn.classList.remove("active-difficulty");
    });

  const activeBtn = [...document.querySelectorAll(".difficulty-btn")]
    .find((btn) => btn.textContent.trim() === level);

  if (activeBtn) {
    activeBtn.classList.add("active-difficulty");
  }

  loadQuestion();
}
function updateExamProgress() {
  const lastResultEl = document.getElementById("last-exam-result");
  const bestResultEl = document.getElementById("best-exam-result");

  if (!lastResultEl || !bestResultEl) {
    return;
  }

  lastResultEl.textContent =
    examStats.lastResult === null
      ? "—"
      : `${examStats.lastResult}%`;

  bestResultEl.textContent =
    examStats.bestResult === null
      ? "—"
      : `${examStats.bestResult}%`;
}