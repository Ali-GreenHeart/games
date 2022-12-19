const WORDS = [
    {
        en: "into",
        az: 'daxil'
    },
    {
        en: "learn",
        az: 'öyrənmək'
    },
    {
        en: "part",
        az: 'hissə'
    },
    {
        en: "question",
        az: 'sual'
    },
    {
        en: "new",
        az: 'yeni'
    },
    {
        en: "first",
        az: 'birinci'
    },
    {
        en: "other",
        az: 'digər'
    },
    {
        en: "through",
        az: 'boyunca'
    },
    {
        en: "did",
        az: 'etdi'
    },
    {
        en: "back",
        az: 'geri'
    },
    {
        en: "take",
        az: 'almaq'
    },
    {
        en: "well",
        az: 'yaxşı'
    },
    {
        en: "talk",
        az: 'danışmaq'
    },
    {
        en: "so",
        az: 'belə ki'
    },
    {
        en: "same",
        az: 'eyni'
    },
    {
        en: "together",
        az: 'birlikdə'
    },
    {
        en: "page",
        az: 'səhifə'
    },
    {
        en: "him",
        az: 'ona'
    },
    {
        en: "what",
        az: 'nə'
    },
    {
        en: "quick",
        az: 'tez'
    },
    {
        en: "made",
        az: 'etdi'
    },
    {
        en: "people",
        az: 'xalq'
    },
    {
        en: "mother",
        az: 'ana'
    },
    {
        en: "could",
        az: 'bilər'
    },
    {
        en: "set",
        az: 'təyin etmək'
    },
    {
        en: "when",
        az: 'nə vaxt'
    },
    {
        en: "want",
        az: 'istəmək'
    },
    {
        en: "up",
        az: 'yuxarı'
    },
    {
        en: "young",
        az: 'gənc'
    },
    {
        en: "sentence",
        az: 'cümlə'
    },
    {
        en: "food",
        az: 'yemək'
    },
    {
        en: "this",
        az: 'bu'
    },
    {
        en: "about",
        az: 'haqqında'
    },
    {
        en: "are",
        az: 'var'
    },
    {
        en: "they",
        az: 'onlar'
    },
    {
        en: "spell",
        az: 'sehr'
    },
    {
        en: "want",
        az: 'istəyirəm'
    },
    {
        en: "live",
        az: 'yaşamaq'
    },
    {
        en: "life",
        az: 'həyat'
    },
    {
        en: "went",
        az: 'getdi'
    },
    {
        en: "much",
        az: 'çox'
    },
    {
        en: "answer",
        az: 'cavab'
    },
    {
        en: "through",
        az: 'vasitəsilə'
    },
    {
        en: "we",
        az: 'Biz'
    },
    {
        en: "example",
        az: 'misal'
    },
    {
        en: "big",
        az: 'böyük'
    },
    {
        en: "car",
        az: 'avtomobil'
    },
    {
        en: "soon",
        az: 'tezliklə'
    },
    {
        en: "took",
        az: 'aldı'
    },
    {
        en: "hard",
        az: 'çətin'
    },
    {
        en: "few",
        az: 'az'
    },
    {
        en: "walk",
        az: 'gəzmək'
    },
    {
        en: "had",
        az: 'var idi'
    },
    {
        en: "grow",
        az: 'böyümək'
    },
    {
        en: "with",
        az: 'ilə'
    },
    {
        en: "run",
        az: 'qaçmaq'
    },
    {
        en: "family",
        az: 'ailə'
    },
    {
        en: "boy",
        az: 'oğlan'
    },
    {
        en: "number",
        az: 'nömrə'
    },
    {
        en: "where",
        az: 'harada'
    },
    {
        en: "picture",
        az: 'şəkil'
    },
    {
        en: "too",
        az: 'da'
    },
    {
        en: "has",
        az: 'var'
    },
    {
        en: "state",
        az: 'dövlət'
    },
    {
        en: "follow",
        az: 'izləyin'
    },
    {
        en: "each",
        az: 'hər biri'
    },
    {
        en: "country",
        az: 'ölkə'
    },
    {
        en: "girl",
        az: 'qız'
    },
    {
        en: "face",
        az: 'üz'
    },
    {
        en: "if",
        az: 'əgər'
    },
    {
        en: "house",
        az: 'ev'
    },
    {
        en: "show",
        az: 'göstərmək'
    },
    {
        en: "leave",
        az: 'buraxmaq'
    },
    {
        en: "this",
        az: 'bu'
    },
    {
        en: "later",
        az: 'sonra'
    },
    {
        en: "cut",
        az: 'kəsmək'
    },
    {
        en: "until",
        az: 'qədər'
    },
    {
        en: "men",
        az: 'kişilər'
    },
    {
        en: "song",
        az: 'mahnı'
    },
    {
        en: "my",
        az: 'mənim'
    },
    {
        en: "and",
        az: 'və'
    },
    {
        en: "four",
        az: 'dörd'
    },
    {
        en: "hard",
        az: 'çətin'
    },
    {
        en: "place",
        az: 'yer'
    },
    {
        en: "without",
        az: 'olmadan'
    },
    {
        en: "tree",
        az: 'ağac'
    },
    {
        en: "point",
        az: 'nöqtə'
    },
    {
        en: "may",
        az: 'bilər'
    },
    {
        en: "night",
        az: 'gecə'
    },
    {
        en: "leave",
        az: 'buraxmaq'
    },
    {
        en: "below",
        az: 'aşağıda'
    },
    {
        en: "need",
        az: 'ehtiyac'
    },
    {
        en: "was",
        az: 'idi'
    },
    {
        en: "about",
        az: 'haqqında'
    },
    {
        en: "write",
        az: 'yaz'
    },
    {
        en: "America",
        az: 'Amerika'
    },
    {
        en: "these",
        az: 'bunlar'
    },
    {
        en: "like",
        az: 'kimi'
    },
    {
        en: "who",
        az: 'ÜST'
    },
    {
        en: "had",
        az: 'var idi'
    },
    {
        en: "than",
        az: '-dən'
    },
    {
        en: "many",
        az: 'çoxlu'
    },
    {
        en: "it",
        az: 'o'
    },
    {
        en: "so",
        az: 'belə ki'
    },
    {
        en: "children",
        az: 'uşaqlar'
    },
    {
        en: "change",
        az: 'dəyişmək'
    },
    {
        en: "help",
        az: 'kömək'
    },
    {
        en: "you",
        az: 'Sən'
    },
    {
        en: "must",
        az: 'lazımdır'
    },
    {
        en: "any",
        az: 'hər hansı'
    },
    {
        en: "were",
        az: 'idi'
    },
    {
        en: "also",
        az: 'həmçinin'
    },
    {
        en: "enough",
        az: 'yetər'
    },
    {
        en: "two",
        az: 'iki'
    },
    {
        en: "almost",
        az: 'təxminən'
    },
    {
        en: "say",
        az: 'demək'
    },
    {
        en: "later",
        az: 'sonra'
    },
    {
        en: "took",
        az: 'aldı'
    },
    {
        en: "were",
        az: 'idi'
    },
    {
        en: "live",
        az: 'yaşamaq'
    },
    {
        en: "land",
        az: 'torpaq'
    },
    {
        en: "man",
        az: 'adam'
    },
    {
        en: "letter",
        az: 'məktub'
    },
    {
        en: "another",
        az: 'başqa'
    },
    {
        en: "over",
        az: 'bitdi'
    },
    {
        en: "again",
        az: 'yenidən'
    },
    {
        en: "like",
        az: 'kimi'
    },
    {
        en: "which",
        az: 'hansı'
    },
    {
        en: "girl",
        az: 'qız'
    },
    {
        en: "our",
        az: 'bizim'
    },
    {
        en: "know",
        az: 'bilmək'
    },
    {
        en: "well",
        az: 'yaxşı'
    },
    {
        en: "white",
        az: 'ağ'
    },
    {
        en: "set",
        az: 'təyin edin'
    },
    {
        en: "big",
        az: 'böyük'
    },
    {
        en: "head",
        az: 'baş'
    },
    {
        en: "where",
        az: 'harada'
    },
    {
        en: "in",
        az: 'in'
    },
    {
        en: "call",
        az: 'zəng edin'
    },
    {
        en: "work",
        az: 'iş'
    },
    {
        en: "different",
        az: 'fərqli'
    },
    {
        en: "watch",
        az: 'izləmək'
    },
    {
        en: "even",
        az: 'hətta'
    },
    {
        en: "your",
        az: 'sənin'
    },
    {
        en: "write",
        az: 'yaz'
    },
    {
        en: "away",
        az: 'uzaqda'
    },
    {
        en: "thought",
        az: 'fikirləşdi'
    },
    {
        en: "on",
        az: 'haqqında'
    },
    {
        en: "miss",
        az: 'darıxmaq'
    },
    {
        en: "play",
        az: 'oynamaq'
    },
    {
        en: "book",
        az: 'kitab'
    },
];