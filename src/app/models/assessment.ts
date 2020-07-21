import { Question } from './question-types';

export type Assessment = {
    title: string;
    description: string;
    score: number;
    passMark: number;
    progress: number;
    questions: Question[];
}