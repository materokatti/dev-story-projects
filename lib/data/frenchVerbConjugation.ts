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
    // Add more verbs as needed
];

export const PRONOUNS: DisplayPronouns[] = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];