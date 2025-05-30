"use client";
import React, {useState} from "react";
import {Card, CardContent} from "@/components/ui/Card";
import {FRENCH_WORDS} from "@/lib/data/frenchWords";
import {FrenchVocabularyForQuiz} from "@/types";
import {frenchWordsGender} from "@/types";

const FrenchGenderQuiz: React.FC = () => {
  const [currentWord, setCurrentWord] = useState<FrenchVocabularyForQuiz>(
    FRENCH_WORDS[0]
  );
  const [streak, setStreak] = useState<number>(0);
  const [bestStreak, setBestStreak] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const getRandomWord = (): FrenchVocabularyForQuiz => {
    const randomIndex = Math.floor(Math.random() * FRENCH_WORDS.length);
    return FRENCH_WORDS[randomIndex];
  };

  const handleAnswer = (selectedGender: frenchWordsGender): void => {
    const correct = selectedGender === currentWord.gender;
    setIsCorrect(correct);
    setShowResult(true);
    setIsChanging(true);

    if (correct) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
      }
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      setShowResult(false);
      setCurrentWord(getRandomWord());
      setIsChanging(false);
    }, 1500);
  };

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gray-900'>
      <div className='absolute top-10 flex items-center gap-4'>
        <div className='bg-yellow-500 rounded-lg px-6 py-2 flex items-center gap-2'>
          <span className='text-xl font-bold'>🏆 Best: {bestStreak}</span>
        </div>
        <div className='bg-blue-500 text-white rounded-lg px-6 py-2 flex items-center gap-2'>
          <span className='text-xl font-bold'>⭐ Current: {streak}</span>
        </div>
      </div>

      <Card className='w-96 h-96 flex flex-col items-center justify-center bg-white relative'>
        <CardContent className='flex flex-col items-center gap-8 w-full'>
          <div
            className={`text-center transition-all duration-300 ease-in-out 
                       ${
                         isChanging
                           ? "opacity-0 translate-y-4"
                           : "opacity-100 translate-y-0"
                       }`}
          >
            <h2 className='text-4xl font-bold mb-2'>{currentWord.word}</h2>
            <p className='text-gray-500 italic'>
              &quot;{currentWord.translation}&quot;
            </p>
          </div>

          <div className='flex gap-4 w-full'>
            <button
              className='w-1/2 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 
                       transition-colors duration-200 hover:scale-105 active:scale-95'
              onClick={() => handleAnswer("masculine")}
            >
              Masculine
            </button>
            <button
              className='w-1/2 py-3 rounded-lg bg-pink-600 text-white font-bold hover:bg-pink-700 
                       transition-colors duration-200 hover:scale-105 active:scale-95'
              onClick={() => handleAnswer("feminine")}
            >
              Feminine
            </button>
          </div>
        </CardContent>

        {showResult && (
          <div
            className={`absolute inset-0 flex items-center justify-center bg-opacity-90 
                     transition-opacity duration-300 rounded-lg
                     ${
                       isCorrect ? "bg-green-500" : "bg-red-500"
                     } text-white text-4xl font-bold`}
          >
            {isCorrect ? "Correct!" : "Wrong!"}
          </div>
        )}
      </Card>

      <p className='text-gray-400 mt-8 text-center'>
        Choose whether the French word is masculine (le) or feminine (la)
      </p>
    </div>
  );
};

export default FrenchGenderQuiz;
