"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { FrenchVerb, Conjugations, DisplayPronouns, BasePronouns } from '@/types';
import { FRENCH_VERBS, PRONOUNS } from '@/lib/data/frenchVerbConjugation';

const FrenchConjugationQuiz: React.FC = () => {
    const [remainingVerbs, setRemainingVerbs] = useState<FrenchVerb[]>(FRENCH_VERBS);
    const [masteredVerbs, setMasteredVerbs] = useState<FrenchVerb[]>([]);
    const [currentVerb, setCurrentVerb] = useState<FrenchVerb>(FRENCH_VERBS[0]);
    const [userInputs, setUserInputs] = useState<Conjugations>({
        je: "",
        tu: "",
        il: "",
        nous: "",
        vous: "",
        ils: ""
    });

    const VERB_CSS_TRANSITION_DURATION = 300;
    const LOADING_DELAY = 2000;
    const [showResults, setShowResults] = useState(false);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [isChanging, setIsChanging] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const getRandomVerb = (): FrenchVerb => {
        const randomIndex = Math.floor(Math.random() * remainingVerbs.length);
        return remainingVerbs[randomIndex];
    };

    const handleInputChange = (pronoun: BasePronouns, value: string) => {
        setUserInputs(prev => ({
            ...prev,
            [pronoun]: value
        }));
    };

    const checkAnswers = (e: React.FormEvent) => {
        e.preventDefault();

        const results = Object.entries(currentVerb.conjugations).map(([pronoun, correctAnswer]) => {
            const userAnswer = userInputs[pronoun as BasePronouns].toLowerCase().trim();
            return userAnswer === correctAnswer;
        });

        const allCorrect = results.every(result => result);
        setShowResults(true);

        if (allCorrect) {
            const newMasteredVerbs = [...masteredVerbs, currentVerb];
            const newRemainingVerbs = remainingVerbs.filter(verb => verb.infinitive !== currentVerb.infinitive);

            setMasteredVerbs(newMasteredVerbs);
            setRemainingVerbs(newRemainingVerbs);

            const newStreak = streak + 1;
            setStreak(newStreak);
            if (newStreak > bestStreak) {
                setBestStreak(newStreak);
            }

            if (newRemainingVerbs.length === 0) {
                setIsCompleted(true);
                return;
            }

            setTimeout(() => {
                setIsChanging(true);
                setShowResults(false);
                setUserInputs({
                    je: "",
                    tu: "",
                    il: "",
                    nous: "",
                    vous: "",
                    ils: ""
                });

                if (newRemainingVerbs.length > 0) {
                    const nextVerb = newRemainingVerbs[Math.floor(Math.random() * newRemainingVerbs.length)];
                    setCurrentVerb(nextVerb);
                }

                setTimeout(() => {
                    setIsChanging(false);
                }, VERB_CSS_TRANSITION_DURATION);
            }, LOADING_DELAY);
        } else {
            // 틀린 경우
            setStreak(0);

            setTimeout(() => {
                setIsChanging(true);
                setShowResults(false);
                setUserInputs({
                    je: "",
                    tu: "",
                    il: "",
                    nous: "",
                    vous: "",
                    ils: ""
                });

                const nextVerb = remainingVerbs[Math.floor(Math.random() * remainingVerbs.length)];
                setCurrentVerb(nextVerb);

                setTimeout(() => {
                    setIsChanging(false);
                }, VERB_CSS_TRANSITION_DURATION);
            }, LOADING_DELAY);
        }
    };

    const getInputColor = (pronoun: BasePronouns): string => {
        if (!showResults) return "";
        const isCorrect = userInputs[pronoun].toLowerCase().trim() === currentVerb.conjugations[pronoun];
        return isCorrect ? "bg-green-100" : "bg-red-100";
    };

    const getBasePronoun = (displayPronoun: DisplayPronouns): BasePronouns => {
        return displayPronoun.split('/')[0] as BasePronouns;
    };

    const handleReset = () => {
        setRemainingVerbs(FRENCH_VERBS);
        setMasteredVerbs([]);
        setCurrentVerb(FRENCH_VERBS[0]);
        setUserInputs({
            je: "",
            tu: "",
            il: "",
            nous: "",
            vous: "",
            ils: ""
        });
        setStreak(0);
        setIsCompleted(false);
        setShowResults(false);
        setIsChanging(false);
    };

    return (
        <div className="w-full min-h-screen px-4 md:px-0 lg:px-0 flex flex-col items-center justify-center bg-gray-900">
            {/* Stats Bar */}
            <div className="w-full md:absolute lg:absolute md:top-10 lg:top-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6 mb-4 md:mb-0 lg:mb-0">
                <div className="w-full md:w-auto lg:w-auto bg-purple-500 rounded-lg px-4 md:px-6 lg:px-8 py-2 flex items-center justify-center gap-2">
                    <span className="text-white text-lg md:text-xl lg:text-2xl font-bold">
                        Progress: {masteredVerbs.length}/{FRENCH_VERBS.length}
                    </span>
                </div>
                <div className="w-full md:w-auto lg:w-auto bg-yellow-500 rounded-lg px-4 md:px-6 lg:px-8 py-2 flex items-center justify-center gap-2">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold">🏆 Best: {bestStreak}</span>
                </div>
                <div className="w-full md:w-auto lg:w-auto bg-blue-500 text-white rounded-lg px-4 md:px-6 lg:px-8 py-2 flex items-center justify-center gap-2">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold">⭐ Current: {streak}</span>
                </div>
            </div>

            {/* Main Card */}
            <Card className="w-full md:w-[600px] lg:w-[800px] min-h-[500px] flex flex-col items-center justify-center bg-white relative p-4 md:p-8 lg:p-10 mx-4 md:mx-0 lg:mx-0 md:mt-20">
                <CardContent className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 w-full">
                    {isCompleted ? (
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Congratulations! 🎉</h2>
                            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 lg:mb-10">
                                You&apos;ve mastered all {FRENCH_VERBS.length} verbs!
                            </p>
                            <button
                                onClick={handleReset}
                                className="py-3 px-6 lg:px-8 rounded-lg bg-green-600 text-white font-bold 
                                         hover:bg-green-700 transition-colors duration-200"
                            >
                                Start Over
                            </button>
                        </div>
                    ) : (
                        <div
                            className={`text-center transition-all duration-[${VERB_CSS_TRANSITION_DURATION}] ease-in-out w-full
                           ${isChanging ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{currentVerb.infinitive}</h2>
                            <p className="text-gray-500 italic mb-6 md:mb-8 lg:mb-10">&quot;{currentVerb.translation}&quot;</p>

                            <form onSubmit={checkAnswers} className="space-y-4 w-full">
                                {PRONOUNS.map((displayPronoun) => {
                                    const basePronoun = getBasePronoun(displayPronoun);
                                    return (
                                        <div key={displayPronoun} className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-2 md:gap-4 lg:gap-6 md:justify-between lg:justify-between">
                                            <span className="text-lg md:text-xl lg:text-2xl w-full md:w-20 lg:w-24">{displayPronoun}</span>
                                            <div className="w-full flex flex-row items-center gap-2">
                                                <Input
                                                    type="text"
                                                    value={userInputs[basePronoun]}
                                                    onChange={(e) => handleInputChange(basePronoun, e.target.value)}
                                                    className={`w-full md:w-80 lg:w-96 text-lg md:text-xl lg:text-2xl ${getInputColor(basePronoun)}`}
                                                    placeholder="type here..."
                                                />
                                                {showResults && (
                                                    <span className="text-base md:text-lg lg:text-xl w-full md:w-40 lg:w-48">
                                                        {currentVerb.conjugations[basePronoun]}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                                <button
                                    type="submit"
                                    disabled={showResults}
                                    className={`mt-6 md:mt-8 lg:mt-10 w-full py-3 rounded-lg font-bold 
        transition-colors duration-200 hover:scale-105 active:scale-95
        ${showResults
                                            ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400 hover:scale-100'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    Check Answers
                                </button>
                            </form>
                        </div>
                    )}
                </CardContent>
            </Card>
            <p className="text-gray-400 mt-6 md:mt-8 lg:mt-10 text-center px-4">
                Conjugate the french verb for all pronouns
            </p>
        </div >
    );
};

export default FrenchConjugationQuiz;