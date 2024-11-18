"use client";
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

const FRENCH_VERBS = [
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

const PRONOUNS = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"] as const;

const FrenchConjugationQuiz: React.FC = () => {
    const [currentVerb, setCurrentVerb] = useState(FRENCH_VERBS[0]);
    const [userInputs, setUserInputs] = useState<Record<string, string>>({
        je: "",
        tu: "",
        il: "",
        nous: "",
        vous: "",
        ils: ""
    });
    const [showResults, setShowResults] = useState(false);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    const getRandomVerb = () => {
        const randomIndex = Math.floor(Math.random() * FRENCH_VERBS.length);
        return FRENCH_VERBS[randomIndex];
    };

    const handleInputChange = (pronoun: string, value: string) => {
        setUserInputs(prev => ({
            ...prev,
            [pronoun]: value
        }));
    };

    const checkAnswers = (e: React.FormEvent) => {
        e.preventDefault();

        const results = {
            je: userInputs.je.toLowerCase().trim() === currentVerb.conjugations.je,
            tu: userInputs.tu.toLowerCase().trim() === currentVerb.conjugations.tu,
            il: userInputs.il.toLowerCase().trim() === currentVerb.conjugations.il,
            nous: userInputs.nous.toLowerCase().trim() === currentVerb.conjugations.nous,
            vous: userInputs.vous.toLowerCase().trim() === currentVerb.conjugations.vous,
            ils: userInputs.ils.toLowerCase().trim() === currentVerb.conjugations.ils,
        };

        const allCorrect = Object.values(results).every(result => result);
        setShowResults(true);
        setIsChanging(true);

        if (allCorrect) {
            const newStreak = streak + 1;
            setStreak(newStreak);
            if (newStreak > bestStreak) {
                setBestStreak(newStreak);
            }
        } else {
            setStreak(0);
        }

        setTimeout(() => {
            setShowResults(false);
            setCurrentVerb(getRandomVerb());
            setUserInputs({
                je: "",
                tu: "",
                il: "",
                nous: "",
                vous: "",
                ils: ""
            });
            setIsChanging(false);
        }, 2000);
    };

    const getInputColor = (pronoun: string) => {
        if (!showResults) return "";
        const isCorrect = userInputs[pronoun].toLowerCase().trim() === currentVerb.conjugations[pronoun];
        return isCorrect ? "bg-green-100" : "bg-red-100";
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900">
            <div className="absolute top-10 flex items-center gap-4">
                <div className="bg-yellow-500 rounded-lg px-6 py-2 flex items-center gap-2">
                    <span className="text-xl font-bold">🏆 Best: {bestStreak}</span>
                </div>
                <div className="bg-blue-500 text-white rounded-lg px-6 py-2 flex items-center gap-2">
                    <span className="text-xl font-bold">⭐ Current: {streak}</span>
                </div>
            </div>

            <Card className="w-[600px] min-h-[500px] flex flex-col items-center justify-center bg-white relative p-8">
                <CardContent className="flex flex-col items-center gap-8 w-full">
                    <div
                        className={`text-center transition-all duration-300 ease-in-out w-full
                       ${isChanging ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
                    >
                        <h2 className="text-4xl font-bold mb-2">{currentVerb.infinitive}</h2>
                        <p className="text-gray-500 italic mb-8">&quot;{currentVerb.translation}&quot;</p>

                        <form onSubmit={checkAnswers} className="space-y-4 w-full">
                            {PRONOUNS.map((pronoun) => (
                                <div key={pronoun} className="flex items-center gap-4 justify-between">
                                    <span className="text-xl w-20">{pronoun}</span>
                                    <Input
                                        type="text"
                                        value={userInputs[pronoun.split('/')[0]]}
                                        onChange={(e) => handleInputChange(pronoun.split('/')[0], e.target.value)}
                                        className={`w-40 text-xl ${getInputColor(pronoun.split('/')[0])}`}
                                        placeholder="type here..."
                                    />
                                    {showResults && (
                                        <span className="text-lg w-40">
                                            {currentVerb.conjugations[pronoun.split('/')[0]]}
                                        </span>
                                    )}
                                </div>
                            ))}
                            <button
                                type="submit"
                                className="mt-8 w-full py-3 rounded-lg bg-blue-600 text-white font-bold 
                         hover:bg-blue-700 transition-colors duration-200 
                         hover:scale-105 active:scale-95"
                            >
                                Check Answers
                            </button>
                        </form>
                    </div>
                </CardContent>
            </Card>

            <p className="text-gray-400 mt-8 text-center">
                Conjugate the verb for all pronouns
            </p>
        </div>
    );
};

export default FrenchConjugationQuiz;