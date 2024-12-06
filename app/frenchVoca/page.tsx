"use client";
import React, {useState, useEffect} from "react";
import {Card, CardContent} from "@/components/ui/Card";
import {Input} from "@/components/ui/Input";

interface FrenchWord {
  english: string;
  french: string;
}

// Data structure definition
const FRENCH_WORDS: FrenchWord[] = [
  // Essential Expressions
  {english: "What is this?", french: "Qu'est-ce que c'est?"},
  {
    english: "How do you say '~' in French?",
    french: "Comment dit-on '~' en français?",
  },
  {english: "Please repeat", french: "Répétez, s'il vous plaît?"},
  {
    english: "Please speak more slowly",
    french: "Parlez plus lentement, s'il vous plaît",
  },
  {english: "I understand", french: "D'accord"},
  {english: "Just a moment", french: "Un moment"},
  {english: "Me too", french: "moi aussi"},
  {english: "I don't understand well", french: "Je ne comprends pas"},
  {english: "What does ~ mean?", french: "Que signifie ~"},

  // Self Introduction
  {english: "Hello", french: "Bonjour"},
  {english: "My name is Doyun", french: "Je m'appelle Doyun"},
  {english: "I am 30 years old", french: "Je suis âgé de trente ans"},
  {english: "I work as a developer", french: "Je travaille comme développeur"},
  {
    english: "I've been learning French for 1 month",
    french: "J'étudie le français depuis un mois",
  },
  {english: "Nice to meet you", french: "Enchanté de vous rencontrer"},
  {english: "See you next time", french: "À bientôt"},
  {english: "Have a nice day", french: "Bonne journée"},
  {english: "How are you?", french: "Comment allez-vous?"},

  // Days of the Week
  {english: "Monday", french: "le lundi"},
  {english: "Tuesday", french: "le mardi"},
  {english: "Wednesday", french: "le mercredi"},
  {english: "Thursday", french: "le jeudi"},
  {english: "Friday", french: "le vendredi"},
  {english: "Saturday", french: "le samedi"},
  {english: "Sunday", french: "le dimanche"},

  // Seasons
  {english: "Spring", french: "le printemps"},
  {english: "Summer", french: "le été"},
  {english: "Autumn", french: "le automne"},
  {english: "Winter", french: "le hiver"},

  // Months
  {english: "January", french: "le janvier"},
  {english: "February", french: "le février"},
  {english: "March", french: "le mars"},
  {english: "April", french: "l'avril"},
  {english: "May", french: "le mai"},
  {english: "June", french: "le juin"},
  {english: "July", french: "le juillet"},
  {english: "August", french: "l'août"},
  {english: "September", french: "le septembre"},
  {english: "October", french: "l'octobre"},
  {english: "November", french: "le novembre"},
  {english: "December", french: "le décembre"},

  // Numbers 0-10
  {english: "Zero", french: "Zéro"},
  {english: "One", french: "un"},
  {english: "Two", french: "deux"},
  {english: "Three", french: "trois"},
  {english: "Four", french: "quatre"},
  {english: "Five", french: "cinq"},
  {english: "Six", french: "six"},
  {english: "Seven", french: "sept"},
  {english: "Eight", french: "huit"},
  {english: "Nine", french: "Neuf"},
  {english: "Ten", french: "dix"},

  // Numbers 11-20
  {english: "Eleven", french: "onze"},
  {english: "Twelve", french: "douze"},
  {english: "Thirteen", french: "treize"},
  {english: "Fourteen", french: "quatorze"},
  {english: "Fifteen", french: "quinze"},
  {english: "Sixteen", french: "seize"},
  {english: "Seventeen", french: "dix-sept"},
  {english: "Eighteen", french: "dix-huit"},
  {english: "Nineteen", french: "dix-neuf"},
  {english: "Twenty", french: "vingt"},

  // Numbers 21-30
  {english: "Twenty one", french: "vingt-et-un"},
  {english: "Twenty two", french: "vingt-deux"},
  {english: "Twenty three", french: "vingt-trois"},
  {english: "Twenty four", french: "vingt-quatre"},
  {english: "Twenty five", french: "vingt-cinq"},
  {english: "Twenty six", french: "vingt-six"},
  {english: "Twenty seven", french: "vingt-sept"},
  {english: "Twenty eight", french: "vingt-huit"},
  {english: "Twenty nine", french: "vingt-neuf"},
  {english: "Thirty", french: "trente"},

  // Numbers by tens up to 100
  {english: "Forty", french: "quarante"},
  {english: "Fifty", french: "cinquante"},
  {english: "Sixty", french: "soixante"},
  {english: "Seventy", french: "soixante-dix"},
  {english: "Eighty", french: "quatre-vingts"},
  {english: "Ninety", french: "quatre-vingt-dix"},
  {english: "One hundred", french: "cent"},

  // Ordinal Numbers
  {english: "First", french: "premier/première"},
  {english: "Second", french: "deuxième"},
  {english: "Third", french: "troisième"},
  {english: "Fourth", french: "quatrième"},
  {english: "Fifth", french: "cinquième"},
  {english: "Sixth", french: "sixième"},
  {english: "Seventh", french: "septième"},
  {english: "Eighth", french: "huitième"},
  {english: "Ninth", french: "neuvième"},
  {english: "Tenth", french: "dixième"},

  // Common Words
  {english: "Often", french: "Souvent"},
  {english: "Every morning", french: "Tous les matins"},
  {english: "First time", french: "Première fois"},
  {english: "To come", french: "Venir à"},
  {english: "To run", french: "Courir"},
  {english: "Beautiful", french: "Beau"},
  {english: "Pleasant", french: "Agréable"},
  {english: "A park", french: "Un parc"},
  {english: "Have a good evening", french: "Bonne soirée"},
  {english: "See you tomorrow", french: "À demain"},
];

const FrenchVocabQuiz: React.FC = () => {
  const [remainingWords, setRemainingWords] =
    useState<FrenchWord[]>(FRENCH_WORDS);
  const [masteredWords, setMasteredWords] = useState<FrenchWord[]>([]);
  const [currentWord, setCurrentWord] = useState<FrenchWord>(FRENCH_WORDS[0]);
  const [userInput, setUserInput] = useState<string>("");

  const LOADING_DELAY = 2000;
  const [showResult, setShowResult] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const getRandomWord = (): FrenchWord => {
    const randomIndex = Math.floor(Math.random() * remainingWords.length);
    return remainingWords[randomIndex];
  };

  const handleInputChange = (value: string) => {
    setUserInput(value);
  };

  const checkAnswer = (e: React.FormEvent) => {
    e.preventDefault();

    const userAnswer = userInput.toLowerCase().trim();
    const correctAnswer = currentWord.french.toLowerCase().trim();
    const isCorrect = userAnswer === correctAnswer;

    setShowResult(true);

    if (isCorrect) {
      const newMasteredWords = [...masteredWords, currentWord];
      const newRemainingWords = remainingWords.filter(
        (word) => word.english !== currentWord.english
      );

      setMasteredWords(newMasteredWords);
      setRemainingWords(newRemainingWords);

      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
      }

      if (newRemainingWords.length === 0) {
        setIsCompleted(true);
        return;
      }

      setTimeout(() => {
        setShowResult(false);
        setUserInput("");

        if (newRemainingWords.length > 0) {
          const nextWord = getRandomWord();
          setCurrentWord(nextWord);
        }
      }, LOADING_DELAY);
    } else {
      setStreak(0);

      setTimeout(() => {
        setShowResult(false);
        setUserInput("");

        const nextWord = getRandomWord();
        setCurrentWord(nextWord);
      }, LOADING_DELAY);
    }
  };

  const getInputColor = (): string => {
    if (!showResult) return "";
    return userInput.toLowerCase().trim() ===
      currentWord.french.toLowerCase().trim()
      ? "bg-green-100"
      : "bg-red-100";
  };

  const handleReset = () => {
    setRemainingWords(FRENCH_WORDS);
    setMasteredWords([]);
    setCurrentWord(FRENCH_WORDS[0]);
    setUserInput("");
    setStreak(0);
    setIsCompleted(false);
    setShowResult(false);
    setIsChanging(false);
  };

  return (
    <div className='w-full min-h-screen px-4 md:px-0 lg:px-0 flex flex-col items-center justify-center bg-gray-900'>
      {/* Stats Bar */}
      <div className='w-full md:absolute lg:absolute md:top-10 lg:top-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6 mb-4 md:mb-0 lg:mb-0'>
        <div className='w-full md:w-auto lg:w-auto bg-purple-500 rounded-lg px-4 md:px-6 lg:px-8 py-2 flex items-center justify-center gap-2'>
          <span className='text-white text-lg md:text-xl lg:text-2xl font-bold'>
            Progress: {masteredWords.length}/{FRENCH_WORDS.length}
          </span>
        </div>
        <div className='w-full md:w-auto lg:w-auto bg-yellow-500 rounded-lg px-4 md:px-6 lg:px-8 py-2 flex items-center justify-center gap-2'>
          <span className='text-lg md:text-xl lg:text-2xl font-bold'>
            🏆 Best: {bestStreak}
          </span>
        </div>
        <div className='w-full md:w-auto lg:w-auto bg-blue-500 text-white rounded-lg px-4 md:px-6 lg:px-8 py-2 flex items-center justify-center gap-2'>
          <span className='text-lg md:text-xl lg:text-2xl font-bold'>
            ⭐ Current: {streak}
          </span>
        </div>
      </div>

      {/* Main Card */}
      <Card className='w-full md:w-[600px] lg:w-[800px] min-h-[300px] flex flex-col items-center justify-center bg-white relative p-4 md:p-8 lg:p-10 mx-4 md:mx-0 lg:mx-0 md:mt-20'>
        <CardContent className='flex flex-col items-center gap-6 md:gap-8 lg:gap-10 w-full'>
          {isCompleted ? (
            <div className='text-center'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                Congratulations! 🎉
              </h2>
              <p className='text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 lg:mb-10'>
                You've mastered all {FRENCH_WORDS.length} words!
              </p>
              <button
                onClick={handleReset}
                className='py-3 px-6 lg:px-8 rounded-lg bg-green-600 text-white font-bold 
                                         hover:bg-green-700 transition-colors duration-200'
              >
                Start Over
              </button>
            </div>
          ) : (
            <div className='text-center w-full'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
                {currentWord.english}
              </h2>

              <form onSubmit={checkAnswer} className='space-y-4 w-full'>
                <div className='flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-2 md:gap-4 lg:gap-6 justify-center'>
                  <Input
                    type='text'
                    value={userInput}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className={`w-full md:w-96 lg:w-96 text-lg md:text-xl lg:text-2xl ${getInputColor()}`}
                    placeholder='Type the French translation...'
                  />
                  {showResult && (
                    <span className='text-base md:text-lg lg:text-xl w-full md:w-auto lg:w-auto text-center'>
                      {currentWord.french}
                    </span>
                  )}
                </div>
                <button
                  type='submit'
                  disabled={showResult}
                  className={`mt-6 md:mt-8 lg:mt-10 w-full py-3 rounded-lg font-bold 
                                    transition-colors duration-200 hover:scale-105 active:scale-95
                                    ${
                                      showResult
                                        ? "bg-gray-400 text-gray-200 cursor-not-allowed hover:scale-100 active:scale-100"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                    }`}
                >
                  Check Answer
                </button>
              </form>
            </div>
          )}
        </CardContent>
      </Card>
      <p className='text-gray-400 mt-6 md:mt-8 lg:mt-10 text-center px-4'>
        Type the French translation for each word or phrase
      </p>
    </div>
  );
};

export default FrenchVocabQuiz;
