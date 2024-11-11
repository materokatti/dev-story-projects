import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Sparkles } from 'lucide-react';

// 샘플 단어 데이터
const FRENCH_WORDS = [
    { word: 'maison', gender: 'feminine', translation: 'house' },
    { word: 'livre', gender: 'masculine', translation: 'book' },
    { word: 'table', gender: 'feminine', translation: 'table' },
    { word: 'château', gender: 'masculine', translation: 'castle' },
    { word: 'fleur', gender: 'feminine', translation: 'flower' },
    { word: 'ordinateur', gender: 'masculine', translation: 'computer' },
    { word: 'voiture', gender: 'feminine', translation: 'car' },
    { word: 'soleil', gender: 'masculine', translation: 'sun' },
];

const FrenchGenderQuiz = () => {
    const [currentWord, setCurrentWord] = useState(FRENCH_WORDS[0]);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const getRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * FRENCH_WORDS.length);
        return FRENCH_WORDS[randomIndex];
    };

    const handleAnswer = (selectedGender: 'feminine' | 'masculine') => {
        const correct = selectedGender === currentWord.gender;
        setIsCorrect(correct);
        setShowResult(true);

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
        }, 1500);
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900">
            <div className="absolute top-10 flex items-center gap-4">
                <div className="bg-yellow-500 rounded-lg px-4 py-2 flex items-center gap-2">
                    <Trophy className="w-6 h-6" />
                    <span className="text-xl font-bold">Best: {bestStreak}</span>
                </div>
                <div className="bg-blue-500 text-white rounded-lg px-4 py-2 flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    <span className="text-xl font-bold">Current: {streak}</span>
                </div>
            </div>

            <Card className="w-96 h-96 flex flex-col items-center justify-center bg-white relative">
                <CardContent className="flex flex-col items-center gap-8 w-full">
                    <motion.div
                        key={currentWord.word}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl font-bold mb-2">{currentWord.word}</h2>
                        <p className="text-gray-500 italic">"{currentWord.translation}"</p>
                    </motion.div>

                    <div className="flex gap-4 w-full">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-1/2 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 
                       transition-colors duration-200"
                            onClick={() => handleAnswer('masculine')}
                        >
                            Masculine
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-1/2 py-3 rounded-lg bg-pink-600 text-white font-bold hover:bg-pink-700 
                       transition-colors duration-200"
                            onClick={() => handleAnswer('feminine')}
                        >
                            Feminine
                        </motion.button>
                    </div>
                </CardContent>

                {showResult && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`absolute inset-0 flex items-center justify-center bg-opacity-90 
                      ${isCorrect ? 'bg-green-500' : 'bg-red-500'} text-white text-4xl font-bold`}
                    >
                        {isCorrect ? 'Correct!' : 'Wrong!'}
                    </motion.div>
                )}
            </Card>

            <p className="text-gray-400 mt-8 text-center">
                Choose whether the French word is masculine (le) or feminine (la)
            </p>
        </div>
    );
};

export default FrenchGenderQuiz;