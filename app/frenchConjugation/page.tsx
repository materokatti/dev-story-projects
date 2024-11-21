"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { FrenchVerb, Conjugations, DisplayPronouns, BasePronouns } from '@/types';
import { FRENCH_VERBS, PRONOUNS } from '@/lib/data/frenchVerbConjugation';

const FrenchConjugationQuiz: React.FC = () => {
    // 남은 동사들과 맞춘 동사들을 추적
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
            // 맞춘 동사 처리
            const newMasteredVerbs = [...masteredVerbs, currentVerb];
            const newRemainingVerbs = remainingVerbs.filter(verb => verb.infinitive !== currentVerb.infinitive);

            setMasteredVerbs(newMasteredVerbs);
            setRemainingVerbs(newRemainingVerbs);

            const newStreak = streak + 1;
            setStreak(newStreak);
            if (newStreak > bestStreak) {
                setBestStreak(newStreak);
            }

            // 모든 동사를 맞췄는지 확인
            if (newRemainingVerbs.length === 0) {
                setIsCompleted(true);
                return;
            }
        } else {
            setStreak(0);
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

            // 다음 동사 선택
            if (allCorrect) {
                // 맞췄을 경우 남은 동사들 중에서 선택
                const nextVerb = getRandomVerb();
                setCurrentVerb(nextVerb);
            } else {
                // 틀렸을 경우 현재 동사를 다시 풀게 할 확률 30%
                const shouldRepeatCurrentVerb = Math.random() < 0.3;
                if (shouldRepeatCurrentVerb) {
                    // 현재 동사 유지
                } else {
                    const nextVerb = getRandomVerb();
                    setCurrentVerb(nextVerb);
                }
            }

            setTimeout(() => {
                setIsChanging(false);
            }, VERB_CSS_TRANSITION_DURATION);
        }, LOADING_DELAY);
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
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900">
            <div className="absolute top-10 flex items-center gap-4">
                <div className="bg-purple-500 rounded-lg px-6 py-2 flex items-center gap-2">
                    <span className="text-white text-xl font-bold">
                        Progress: {masteredVerbs.length}/{FRENCH_VERBS.length}
                    </span>
                </div>
                <div className="bg-yellow-500 rounded-lg px-6 py-2 flex items-center gap-2">
                    <span className="text-xl font-bold">🏆 Best: {bestStreak}</span>
                </div>
                <div className="bg-blue-500 text-white rounded-lg px-6 py-2 flex items-center gap-2">
                    <span className="text-xl font-bold">⭐ Current: {streak}</span>
                </div>
            </div>

            <Card className="w-[600px] min-h-[500px] flex flex-col items-center justify-center bg-white relative p-8">
                <CardContent className="flex flex-col items-center gap-8 w-full">
                    {isCompleted ? (
                        <div className="text-center">
                            <h2 className="text-4xl font-bold mb-4">Congratulations! 🎉</h2>
                            <p className="text-xl mb-8">You've mastered all {FRENCH_VERBS.length} verbs!</p>
                            <button
                                onClick={handleReset}
                                className="py-3 px-6 rounded-lg bg-green-600 text-white font-bold 
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
                            <h2 className="text-4xl font-bold mb-2">{currentVerb.infinitive}</h2>
                            <p className="text-gray-500 italic mb-8">&quot;{currentVerb.translation}&quot;</p>

                            <form onSubmit={checkAnswers} className="space-y-4 w-full">
                                {PRONOUNS.map((displayPronoun) => {
                                    const basePronoun = getBasePronoun(displayPronoun);
                                    return (
                                        <div key={displayPronoun} className="flex items-center gap-4 justify-between">
                                            <span className="text-xl w-20">{displayPronoun}</span>
                                            <Input
                                                type="text"
                                                value={userInputs[basePronoun]}
                                                onChange={(e) => handleInputChange(basePronoun, e.target.value)}
                                                className={`w-40 text-xl ${getInputColor(basePronoun)}`}
                                                placeholder="type here..."
                                            />
                                            {showResults && (
                                                <span className="text-lg w-40">
                                                    {currentVerb.conjugations[basePronoun]}
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
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
                    )}
                </CardContent>
            </Card>

            <p className="text-gray-400 mt-8 text-center">
                Conjugate the french verb for all pronouns
            </p>
        </div>
    );
};

export default FrenchConjugationQuiz;