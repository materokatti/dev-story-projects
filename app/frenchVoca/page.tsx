"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { FRENCH_WORDS } from "@/lib/data/frenchVoca"
import { FrenchWord } from "@/types/index";


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
                You&apos;ve mastered all {FRENCH_WORDS.length} words!
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
                                    ${showResult
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
