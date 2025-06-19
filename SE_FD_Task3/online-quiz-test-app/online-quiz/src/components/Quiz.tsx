// components/Quiz.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Question } from "../types";

const questions: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    id: 3,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    id: 4,
    question: "Who was the first president of the United States?",
    options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
    correctAnswer: "George Washington",
  },
  {
    id: 5,
    question: "What is the highest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    correctAnswer: "Mount Everest",
  },
  {
    id: 6,
    question: "Who discovered penicillin?",
    options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Albert Einstein"],
    correctAnswer: "Alexander Fleming",
  },
  {
    id: 7,
    question: "What is the process by which plants make their own food?",
    options: ["Photosynthesis", "Respiration", "Digestion", "Transpiration"],
    correctAnswer: "Photosynthesis",
  },
  {
    id: 8,
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
  },
  {
    id: 9,
    question: "What is the largest ocean?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean",
  },
  {
    id: 10,
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
    correctAnswer: "Sahara",
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const navigate = useNavigate();

  const currentQuestion = questions[current];

  const handleAnswer = (option: string) => {
    setSelected(option);
    setShowFeedback(true);
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowFeedback(false);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-orange-100 p-4">
      <div className="w-full max-w-xl bg-white/90 rounded-2xl shadow-2xl border border-gray-200 p-6 space-y-6">
        {/* Progress Indicator */}
        <div className="text-sm text-gray-500 text-right">
          Question {current + 1} of {questions.length}
        </div>

        {/* Question Text */}
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
          {currentQuestion.question}
        </h2>

        {/* Option Buttons */}
        <div className="flex flex-col gap-4">
          {currentQuestion.options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              disabled={!!selected}
              className={`w-full text-left px-5 py-3 rounded-lg border-2 transition-all duration-200 font-medium text-gray-700
                ${
                  selected
                    ? opt === currentQuestion.correctAnswer
                      ? "bg-green-100 border-green-400 text-green-800"
                      : opt === selected
                      ? "bg-red-100 border-red-400 text-red-800"
                      : "bg-gray-50 border-gray-200 opacity-70"
                    : "hover:bg-blue-50 hover:border-blue-200"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Next Button */}
        {showFeedback && (
          <div className="flex justify-center">
            <button
              onClick={nextQuestion}
              className="mt-6 bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
