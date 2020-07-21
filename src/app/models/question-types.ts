export type Question = {
    content: MultipleChoiceQuestion | MultipleAnswerQuestion;
}

export type QuestionResult = {
    correct: boolean;
    points: number;
}

export type MultipleChoiceQuestion = {
    question: string;
    answers: string[];
    correctAnswer: number;
    selectedAnswer: number;
}

export type MultipleAnswerQuestion = {
    question: string;
    answers: string[];
    correctAnswers: number[];
    selectedAnswers: number[];
}