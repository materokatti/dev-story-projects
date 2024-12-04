import { FrenchVerb, DisplayPronouns } from "../../types";

export const FRENCH_VERBS: FrenchVerb[] = [
    {
        infinitive: "parler",
        translation: "to speak",
        conjugations: {
            je: "parle",
            tu: "parles",
            il: "parle",
            nous: "parlons",
            vous: "parlez",
            ils: "parlent"
        }
    },
    {
        infinitive: "manger",
        translation: "to eat",
        conjugations: {
            je: "mange",
            tu: "manges",
            il: "mange",
            nous: "mangeons",
            vous: "mangez",
            ils: "mangent"
        }
    },
    {
        "infinitive": "être",
        "translation": "to be",
        "conjugations": {
            "je": "suis",
            "tu": "es",
            "il": "est",
            "nous": "sommes",
            "vous": "êtes",
            "ils": "sont"
        }
    },
    {
        "infinitive": "avoir",
        "translation": "to have",
        "conjugations": {
            "je": "ai",
            "tu": "as",
            "il": "a",
            "nous": "avons",
            "vous": "avez",
            "ils": "ont"
        }
    },
    {
        "infinitive": "aller",
        "translation": "to go",
        "conjugations": {
            "je": "vais",
            "tu": "vas",
            "il": "va",
            "nous": "allons",
            "vous": "allez",
            "ils": "vont"
        }
    },
    {
        "infinitive": "faire",
        "translation": "to do",
        "conjugations": {
            "je": "fais",
            "tu": "fais",
            "il": "fait",
            "nous": "faisons",
            "vous": "faites",
            "ils": "font"
        }
    },
    {
        "infinitive": "dire",
        "translation": "to say",
        "conjugations": {
            "je": "dis",
            "tu": "dis",
            "il": "dit",
            "nous": "disons",
            "vous": "dites",
            "ils": "disent"
        }
    },
    {
        "infinitive": "devoir",
        "translation": "to have to",
        "conjugations": {
            "je": "dois",
            "tu": "dois",
            "il": "doit",
            "nous": "devons",
            "vous": "devez",
            "ils": "doivent"
        }
    }
];

export const PRONOUNS: DisplayPronouns[] = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];