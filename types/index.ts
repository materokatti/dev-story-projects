export type frenchWordsGender = "feminine" | "masculine";

export type FrenchWordCategory =
  | "basic"
  | "people"
  | "dual-meaning"
  | "days"
  | "seasons"
  | "languages"
  | "metrics"
  | "english-words"
  | "professions-both"
  | "professions"
  | "nationalities"
  | "professions-specific";

export interface FrenchVocabularyForQuiz {
  word: string;
  gender: "masculine" | "feminine";
  translation: string;
  ending?: string;
  isException?: boolean;
  category?: FrenchWordCategory;
}

export type BasePronouns = "je" | "tu" | "il" | "nous" | "vous" | "ils";
export type DisplayPronouns = "je" | "tu" | "il/elle" | "nous" | "vous" | "ils/elles";
export type Conjugations = Record<BasePronouns, string>;

export interface FrenchVerb {
  infinitive: string;
  translation: string;
  conjugations: Conjugations;
}

export interface FrenchWord {
  english: string;
  french: string;
}