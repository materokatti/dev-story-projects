import {FrenchVocabularyForQuiz} from "@/types/index";

export const FRENCH_WORDS: FrenchVocabularyForQuiz[] = [
  // Basic nouns mentioned in PDF
  {
    word: "téléphone",
    gender: "masculine",
    translation: "phone",
    category: "basic",
  },
  {word: "homme", gender: "masculine", translation: "man", category: "basic"},
  {word: "chien", gender: "masculine", translation: "dog", category: "basic"},
  {word: "ville", gender: "feminine", translation: "city", category: "basic"},

  // Family and people with obvious gender
  {word: "garçon", gender: "masculine", translation: "boy", category: "people"},
  {word: "fille", gender: "feminine", translation: "girl", category: "people"},
  {word: "homme", gender: "masculine", translation: "man", category: "people"},
  {word: "femme", gender: "feminine", translation: "woman", category: "people"},
  {
    word: "oncle",
    gender: "masculine",
    translation: "uncle",
    category: "people",
  },
  {word: "tante", gender: "feminine", translation: "aunt", category: "people"},
  {
    word: "grand-père",
    gender: "masculine",
    translation: "grandfather",
    category: "people",
  },
  {
    word: "grand-mère",
    gender: "feminine",
    translation: "grandmother",
    category: "people",
  },
  {
    word: "frère",
    gender: "masculine",
    translation: "brother",
    category: "people",
  },
  {word: "sœur", gender: "feminine", translation: "sister", category: "people"},

  // -ACLE ending (masculine)
  {
    word: "obstacle",
    gender: "masculine",
    translation: "obstacle",
    ending: "acle",
  },
  {
    word: "miracle",
    gender: "masculine",
    translation: "miracle",
    ending: "acle",
  },
  {word: "oracle", gender: "masculine", translation: "oracle", ending: "acle"},

  // -AGE ending (masculine)
  {
    word: "paysage",
    gender: "masculine",
    translation: "landscape",
    ending: "age",
  },
  {
    word: "coloriage",
    gender: "masculine",
    translation: "coloring",
    ending: "age",
  },
  {word: "âge", gender: "masculine", translation: "age", ending: "age"},
  // Exceptions to -AGE
  {
    word: "page",
    gender: "feminine",
    translation: "page",
    ending: "age",
    isException: true,
  },
  {
    word: "plage",
    gender: "feminine",
    translation: "beach",
    ending: "age",
    isException: true,
  },

  // -AL ending (masculine)
  {word: "cheval", gender: "masculine", translation: "horse", ending: "al"},
  {word: "canal", gender: "masculine", translation: "canal", ending: "al"},
  {
    word: "journal",
    gender: "masculine",
    translation: "newspaper",
    ending: "al",
  },

  // -EAU ending (masculine)
  {word: "morceau", gender: "masculine", translation: "piece", ending: "eau"},
  {word: "château", gender: "masculine", translation: "castle", ending: "eau"},
  {word: "gâteau", gender: "masculine", translation: "cake", ending: "eau"},
  // Exceptions to -EAU
  {
    word: "eau",
    gender: "feminine",
    translation: "water",
    ending: "eau",
    isException: true,
  },
  {
    word: "peau",
    gender: "feminine",
    translation: "skin",
    ending: "eau",
    isException: true,
  },

  // -EU ending (masculine)
  {word: "cheveu", gender: "masculine", translation: "hair", ending: "eu"},
  {word: "neveu", gender: "masculine", translation: "nephew", ending: "eu"},
  {word: "bleu", gender: "masculine", translation: "bruise", ending: "eu"},

  // -ET ending (masculine)
  {word: "tabouret", gender: "masculine", translation: "stool", ending: "et"},
  {word: "fouet", gender: "masculine", translation: "whip", ending: "et"},
  {word: "ticket", gender: "masculine", translation: "receipt", ending: "et"},

  // -IER ending (masculine)
  {
    word: "pommier",
    gender: "masculine",
    translation: "apple tree",
    ending: "ier",
  },
  {word: "papier", gender: "masculine", translation: "paper", ending: "ier"},
  {
    word: "chantier",
    gender: "masculine",
    translation: "construction site",
    ending: "ier",
  },

  // -IN ending (masculine)
  {word: "vin", gender: "masculine", translation: "wine", ending: "in"},
  {word: "voisin", gender: "masculine", translation: "neighbor", ending: "in"},
  {word: "raisin", gender: "masculine", translation: "grape", ending: "in"},

  // -ISME ending (masculine)
  {
    word: "organisme",
    gender: "masculine",
    translation: "organization",
    ending: "isme",
  },
  {word: "prisme", gender: "masculine", translation: "prism", ending: "isme"},

  // -MENT ending (masculine)
  {
    word: "changement",
    gender: "masculine",
    translation: "change",
    ending: "ment",
  },
  {
    word: "argument",
    gender: "masculine",
    translation: "argument",
    ending: "ment",
  },
  {
    word: "jugement",
    gender: "masculine",
    translation: "judgment",
    ending: "ment",
  },

  // -OIR ending (masculine)
  {word: "rasoir", gender: "masculine", translation: "razor", ending: "oir"},
  {word: "bavoir", gender: "masculine", translation: "bib", ending: "oir"},
  {word: "devoir", gender: "masculine", translation: "homework", ending: "oir"},

  // -OU ending (masculine)
  {word: "trou", gender: "masculine", translation: "hole", ending: "ou"},
  {word: "clou", gender: "masculine", translation: "nail", ending: "ou"},
  {word: "hibou", gender: "masculine", translation: "owl", ending: "ou"},

  // -ON ending (masculine)
  {word: "avion", gender: "masculine", translation: "plane", ending: "on"},
  {word: "garçon", gender: "masculine", translation: "boy", ending: "on"},
  {word: "crayon", gender: "masculine", translation: "pencil", ending: "on"},
  // Exception to -ON
  {
    word: "prison",
    gender: "feminine",
    translation: "jail",
    ending: "on",
    isException: true,
  },

  // -ADE ending (feminine)
  {word: "balade", gender: "feminine", translation: "walk", ending: "ade"},
  {word: "pommade", gender: "feminine", translation: "ointment", ending: "ade"},

  // -ALE ending (feminine)
  {word: "rivale", gender: "feminine", translation: "rival", ending: "ale"},
  {word: "chorale", gender: "feminine", translation: "choir", ending: "ale"},
  {word: "finale", gender: "feminine", translation: "final", ending: "ale"},

  // -ANCE ending (feminine)
  {word: "chance", gender: "feminine", translation: "chance", ending: "ance"},
  {word: "nuance", gender: "feminine", translation: "nuance", ending: "ance"},
  {word: "balance", gender: "feminine", translation: "scale", ending: "ance"},

  // -ENCE ending (feminine)
  {
    word: "exigence",
    gender: "feminine",
    translation: "requirement",
    ending: "ence",
  },
  {word: "agence", gender: "feminine", translation: "agency", ending: "ence"},
  {
    word: "urgence",
    gender: "feminine",
    translation: "emergency",
    ending: "ence",
  },

  // -ETTE ending (feminine)
  {word: "vedette", gender: "feminine", translation: "star", ending: "ette"},
  {
    word: "sucette",
    gender: "feminine",
    translation: "lollipop",
    ending: "ette",
  },
  {
    word: "vignette",
    gender: "feminine",
    translation: "thumbnail",
    ending: "ette",
  },

  // -IE ending (feminine)
  {word: "galaxie", gender: "feminine", translation: "galaxy", ending: "ie"},
  {word: "colonie", gender: "feminine", translation: "colony", ending: "ie"},
  {word: "calorie", gender: "feminine", translation: "calorie", ending: "ie"},

  // -IQUE ending (feminine)
  {word: "brique", gender: "feminine", translation: "brick", ending: "ique"},
  {
    word: "manique",
    gender: "feminine",
    translation: "pot holder",
    ending: "ique",
  },
  {word: "crique", gender: "feminine", translation: "creek", ending: "ique"},

  // -OIRE ending (feminine)
  {
    word: "victoire",
    gender: "feminine",
    translation: "victory",
    ending: "oire",
  },
  {word: "poire", gender: "feminine", translation: "pear", ending: "oire"},
  {word: "foire", gender: "feminine", translation: "fair", ending: "oire"},

  // -SION ending (feminine)
  {
    word: "télévision",
    gender: "feminine",
    translation: "television",
    ending: "sion",
  },
  {
    word: "révision",
    gender: "feminine",
    translation: "revision",
    ending: "sion",
  },
  {word: "passion", gender: "feminine", translation: "passion", ending: "sion"},

  // -TÉ ending (feminine)
  {word: "société", gender: "feminine", translation: "society", ending: "té"},
  {word: "moitié", gender: "feminine", translation: "half", ending: "tié"},
  {
    word: "amitié",
    gender: "feminine",
    translation: "friendship",
    ending: "tié",
  },
  // Exception to -TÉ
  {
    word: "été",
    gender: "masculine",
    translation: "summer",
    ending: "té",
    isException: true,
  },

  // -TION ending (feminine)
  {
    word: "partition",
    gender: "feminine",
    translation: "partition",
    ending: "tion",
  },
  {
    word: "fraction",
    gender: "feminine",
    translation: "fraction",
    ending: "tion",
  },
  {word: "lotion", gender: "feminine", translation: "lotion", ending: "tion"},

  // -URE ending (feminine)
  {
    word: "aventure",
    gender: "feminine",
    translation: "adventure",
    ending: "ure",
  },
  {word: "rayure", gender: "feminine", translation: "stripe", ending: "ure"},
  {word: "voiture", gender: "feminine", translation: "car", ending: "ure"},

  // Words with different meanings based on gender
  {
    word: "champagne",
    gender: "masculine",
    translation: "champagne (drink)",
    category: "dual-meaning",
  },
  {
    word: "champagne",
    gender: "feminine",
    translation: "Champagne (region)",
    category: "dual-meaning",
  },
  {
    word: "chèvre",
    gender: "masculine",
    translation: "goat cheese",
    category: "dual-meaning",
  },
  {
    word: "chèvre",
    gender: "feminine",
    translation: "goat",
    category: "dual-meaning",
  },
  {
    word: "livre",
    gender: "masculine",
    translation: "book",
    category: "dual-meaning",
  },
  {
    word: "livre",
    gender: "feminine",
    translation: "pound",
    category: "dual-meaning",
  },
  {
    word: "manœuvre",
    gender: "masculine",
    translation: "laborer",
    category: "dual-meaning",
  },
  {
    word: "manœuvre",
    gender: "feminine",
    translation: "operation",
    category: "dual-meaning",
  },
  {
    word: "mort",
    gender: "masculine",
    translation: "dead person",
    category: "dual-meaning",
  },
  {
    word: "mort",
    gender: "feminine",
    translation: "death",
    category: "dual-meaning",
  },
  {
    word: "mémoire",
    gender: "masculine",
    translation: "memoir",
    category: "dual-meaning",
  },
  {
    word: "mémoire",
    gender: "feminine",
    translation: "memory",
    category: "dual-meaning",
  },
  {
    word: "mode",
    gender: "masculine",
    translation: "method",
    category: "dual-meaning",
  },
  {
    word: "mode",
    gender: "feminine",
    translation: "fashion",
    category: "dual-meaning",
  },
  {
    word: "moule",
    gender: "masculine",
    translation: "mold",
    category: "dual-meaning",
  },
  {
    word: "moule",
    gender: "feminine",
    translation: "mussel",
    category: "dual-meaning",
  },
  {
    word: "poêle",
    gender: "masculine",
    translation: "stove",
    category: "dual-meaning",
  },
  {
    word: "poêle",
    gender: "feminine",
    translation: "pan",
    category: "dual-meaning",
  },
  {
    word: "poste",
    gender: "masculine",
    translation: "job",
    category: "dual-meaning",
  },
  {
    word: "poste",
    gender: "feminine",
    translation: "post office",
    category: "dual-meaning",
  },
  {
    word: "rose",
    gender: "masculine",
    translation: "pink (color)",
    category: "dual-meaning",
  },
  {
    word: "rose",
    gender: "feminine",
    translation: "rose (flower)",
    category: "dual-meaning",
  },
  {
    word: "tour",
    gender: "masculine",
    translation: "turn",
    category: "dual-meaning",
  },
  {
    word: "tour",
    gender: "feminine",
    translation: "tower",
    category: "dual-meaning",
  },
  {
    word: "vase",
    gender: "masculine",
    translation: "vase",
    category: "dual-meaning",
  },
  {
    word: "vase",
    gender: "feminine",
    translation: "mud",
    category: "dual-meaning",
  },
  {
    word: "voile",
    gender: "masculine",
    translation: "veil",
    category: "dual-meaning",
  },
  {
    word: "voile",
    gender: "feminine",
    translation: "sail",
    category: "dual-meaning",
  },

  // Always masculine categories mentioned in PDF
  // Days of the week
  {word: "lundi", gender: "masculine", translation: "Monday", category: "days"},
  {
    word: "mardi",
    gender: "masculine",
    translation: "Tuesday",
    category: "days",
  },
  {
    word: "mercredi",
    gender: "masculine",
    translation: "Wednesday",
    category: "days",
  },

  // Seasons
  {
    word: "été",
    gender: "masculine",
    translation: "summer",
    category: "seasons",
  },
  {
    word: "hiver",
    gender: "masculine",
    translation: "winter",
    category: "seasons",
  },
  {
    word: "printemps",
    gender: "masculine",
    translation: "spring",
    category: "seasons",
  },
  {
    word: "automne",
    gender: "masculine",
    translation: "fall",
    category: "seasons",
  },

  // Languages
  {
    word: "français",
    gender: "masculine",
    translation: "French",
    category: "languages",
  },
  {
    word: "russe",
    gender: "masculine",
    translation: "Russian",
    category: "languages",
  },
  {
    word: "grecque",
    gender: "masculine",
    translation: "Greek",
    category: "languages",
  },

  // Weights and metrics
  {
    word: "kilomètre",
    gender: "masculine",
    translation: "kilometer",
    category: "metrics",
  },
  {
    word: "litre",
    gender: "masculine",
    translation: "liter",
    category: "metrics",
  },
  {
    word: "gramme",
    gender: "masculine",
    translation: "gram",
    category: "metrics",
  },

  // English words used in French
  {
    word: "week-end",
    gender: "masculine",
    translation: "weekend",
    category: "english-words",
  },
  {
    word: "email",
    gender: "masculine",
    translation: "email",
    category: "english-words",
  },
  {
    word: "parking",
    gender: "masculine",
    translation: "parking lot",
    category: "english-words",
  },

  // Professions & People where only the article changes
  {
    word: "architecte",
    gender: "masculine",
    translation: "architect (male)",
    category: "professions-both",
  },
  {
    word: "architecte",
    gender: "feminine",
    translation: "architect (female)",
    category: "professions-both",
  },
  {
    word: "collègue",
    gender: "masculine",
    translation: "colleague (male)",
    category: "professions-both",
  },
  {
    word: "collègue",
    gender: "feminine",
    translation: "colleague (female)",
    category: "professions-both",
  },
  {
    word: "élève",
    gender: "masculine",
    translation: "student (male)",
    category: "professions-both",
  },
  {
    word: "élève",
    gender: "feminine",
    translation: "student (female)",
    category: "professions-both",
  },
  {
    word: "enfant",
    gender: "masculine",
    translation: "child (male)",
    category: "professions-both",
  },
  {
    word: "enfant",
    gender: "feminine",
    translation: "child (female)",
    category: "professions-both",
  },
  {
    word: "malade",
    gender: "masculine",
    translation: "sick person (male)",
    category: "professions-both",
  },
  {
    word: "malade",
    gender: "feminine",
    translation: "sick person (female)",
    category: "professions-both",
  },
  {
    word: "secrétaire",
    gender: "masculine",
    translation: "secretary (male)",
    category: "professions-both",
  },
  {
    word: "secrétaire",
    gender: "feminine",
    translation: "secretary (female)",
    category: "professions-both",
  },
  {
    word: "touriste",
    gender: "masculine",
    translation: "tourist (male)",
    category: "professions-both",
  },
  {
    word: "touriste",
    gender: "feminine",
    translation: "tourist (female)",
    category: "professions-both",
  },
  {
    word: "guide",
    gender: "masculine",
    translation: "tour guide (male)",
    category: "professions-both",
  },
  {
    word: "guide",
    gender: "feminine",
    translation: "tour guide (female)",
    category: "professions-both",
  },

  // Professions with regular feminine forms (adding -e)
  {
    word: "avocat",
    gender: "masculine",
    translation: "lawyer (male)",
    category: "professions",
  },
  {
    word: "avocate",
    gender: "feminine",
    translation: "lawyer (female)",
    category: "professions",
  },
  {
    word: "étudiant",
    gender: "masculine",
    translation: "student (male)",
    category: "professions",
  },
  {
    word: "étudiante",
    gender: "feminine",
    translation: "student (female)",
    category: "professions",
  },
  {
    word: "client",
    gender: "masculine",
    translation: "customer (male)",
    category: "professions",
  },
  {
    word: "cliente",
    gender: "feminine",
    translation: "customer (female)",
    category: "professions",
  },
  {
    word: "enseignant",
    gender: "masculine",
    translation: "teacher (male)",
    category: "professions",
  },
  {
    word: "enseignante",
    gender: "feminine",
    translation: "teacher (female)",
    category: "professions",
  },
  {
    word: "cousin",
    gender: "masculine",
    translation: "cousin (male)",
    category: "professions",
  },
  {
    word: "cousine",
    gender: "feminine",
    translation: "cousin (female)",
    category: "professions",
  },
  {
    word: "voisin",
    gender: "masculine",
    translation: "neighbor (male)",
    category: "professions",
  },
  {
    word: "voisine",
    gender: "feminine",
    translation: "neighbor (female)",
    category: "professions",
  },

  // Nationalities mentioned in PDF
  {
    word: "américain",
    gender: "masculine",
    translation: "American (male)",
    category: "nationalities",
  },
  {
    word: "américaine",
    gender: "feminine",
    translation: "American (female)",
    category: "nationalities",
  },
  {
    word: "anglais",
    gender: "masculine",
    translation: "English person (male)",
    category: "nationalities",
  },
  {
    word: "anglaise",
    gender: "feminine",
    translation: "English person (female)",
    category: "nationalities",
  },
  {
    word: "français",
    gender: "masculine",
    translation: "French person (male)",
    category: "nationalities",
  },
  {
    word: "française",
    gender: "feminine",
    translation: "French person (female)",
    category: "nationalities",
  },

  // Professions with specific feminine endings
  // -ER -> -ÈRE
  {
    word: "infirmier",
    gender: "masculine",
    translation: "nurse (male)",
    category: "professions-specific",
  },
  {
    word: "infirmière",
    gender: "feminine",
    translation: "nurse (female)",
    category: "professions-specific",
  },
  {
    word: "boulanger",
    gender: "masculine",
    translation: "baker (male)",
    category: "professions-specific",
  },
  {
    word: "boulangère",
    gender: "feminine",
    translation: "baker (female)",
    category: "professions-specific",
  },

  // -EUR -> -EUSE
  {
    word: "coiffeur",
    gender: "masculine",
    translation: "hairdresser (male)",
    category: "professions-specific",
  },
  {
    word: "coiffeuse",
    gender: "feminine",
    translation: "hairdresser (female)",
    category: "professions-specific",
  },
  {
    word: "chanteur",
    gender: "masculine",
    translation: "singer (male)",
    category: "professions-specific",
  },
  {
    word: "chanteuse",
    gender: "feminine",
    translation: "singer (female)",
    category: "professions-specific",
  },

  // -IEN -> -IENNE
  {
    word: "pharmacien",
    gender: "masculine",
    translation: "pharmacist (male)",
    category: "professions-specific",
  },
  {
    word: "pharmacienne",
    gender: "feminine",
    translation: "pharmacist (female)",
    category: "professions-specific",
  },
  {
    word: "diététicien",
    gender: "masculine",
    translation: "dietician (male)",
    category: "professions-specific",
  },
  {
    word: "diététicienne",
    gender: "feminine",
    translation: "dietician (female)",
    category: "professions-specific",
  },

  // -ON -> -ONNE
  {
    word: "patron",
    gender: "masculine",
    translation: "boss (male)",
    category: "professions-specific",
  },
  {
    word: "patronne",
    gender: "feminine",
    translation: "boss (female)",
    category: "professions-specific",
  },
  {
    word: "baron",
    gender: "masculine",
    translation: "baron",
    category: "professions-specific",
  },
  {
    word: "baronne",
    gender: "feminine",
    translation: "baroness",
    category: "professions-specific",
  },

  // -TEUR -> -TRICE
  {
    word: "acteur",
    gender: "masculine",
    translation: "actor",
    category: "professions-specific",
  },
  {
    word: "actrice",
    gender: "feminine",
    translation: "actress",
    category: "professions-specific",
  },
  {
    word: "explorateur",
    gender: "masculine",
    translation: "explorer (male)",
    category: "professions-specific",
  },
  {
    word: "exploratrice",
    gender: "feminine",
    translation: "explorer (female)",
    category: "professions-specific",
  },

  // -F -> -VE
  {
    word: "veuf",
    gender: "masculine",
    translation: "widower",
    category: "professions-specific",
  },
  {
    word: "veuve",
    gender: "feminine",
    translation: "widow",
    category: "professions-specific",
  },

  // -X -> -SE
  {
    word: "époux",
    gender: "masculine",
    translation: "spouse (male)",
    category: "professions-specific",
  },
  {
    word: "épouse",
    gender: "feminine",
    translation: "spouse (female)",
    category: "professions-specific",
  },
];

export const getExceptionsByEnding = (ending: string) => {
  return FRENCH_WORDS.filter(
    (word) => word.ending === ending && word.isException
  );
};

export const getWordsByEnding = (ending: string) => {
  return FRENCH_WORDS.filter((word) => word.ending === ending);
};

export const getDualMeaningWords = () => {
  return FRENCH_WORDS.filter((word) => word.category === "dual-meaning");
};

export const getProfessionsByType = (type: string) => {
  return FRENCH_WORDS.filter((word) =>
    word.category?.startsWith("professions")
  );
};
