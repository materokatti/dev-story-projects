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
