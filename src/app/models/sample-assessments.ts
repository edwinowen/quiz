import { Assessment } from './assessment';

export function CapitalCitiesQuiz() : Assessment {
    return {
        title: 'Capital Cities Quiz',
        description: 'A short quiz on the capital cities of Europe',
        score: undefined,
        passMark: 60,
        progress: 0,
        questions: [
            {
                content: {
                    question: 'What is the Capital of France?',
                    answers: ['Paris', 'Oslo', 'Madrid', 'Rome'],
                    correctAnswer: 0,
                    selectedAnswer: null,
                }
            },
            {
                content: {
                    question: 'What is the capital of Spain?',
                    answers: ['Barcelona', 'Madrid', 'Benidorm', 'Lisbon'],
                    correctAnswer: 1,
                    selectedAnswer: null,
                }
            },
            {
                content: {
                    question: 'What is the capital of Belgium?',
                    answers: ['Antwerp', 'Leuven', 'Brussels', 'Mechelen'],
                    correctAnswer: 2,
                    selectedAnswer: null,
                }
            },
            {
                content: {
                    question: 'Unlike most other countries, Georgia has 2 capital cities, which of these cities is a capital of Georgia?',
                    answers: ['Augusta', 'Tbilisi', 'Kutaisi', 'Atlanta'],
                    correctAnswers: [1, 2],
                    selectedAnswers: [],
                }
            },
            {
                content: {
                    question: 'What is the capital of Switzerland?',
                    answers: ['Geneva', 'Bern', 'Lausanne', 'Lucerne'],
                    correctAnswer: 1,
                    selectedAnswer: null,
                }
            }
        ]
    }
}

export function FootballQuiz() : Assessment {
    return {
        title: 'Football Quiz',
        description: 'A short quiz for Football fans',
        score: undefined,
        passMark: 60,
        progress: 0,
        questions: [
            {
                content: {
                    question: "What year did England win the FIFA World Cup?",
                    answers: ['1962', '1966', '1970', '1974'],
                    correctAnswer: 1,
                    selectedAnswer: null,
                }
            },
            {
                content: {
                    question: "Which of these teams are located in Merseyside?",
                    answers: ['Liverpool', 'Southampton', 'Everton', 'Fulham'],
                    correctAnswers: [0, 2],
                    selectedAnswers: [],
                }
            },
            {
                content: {
                    question: "What was the name of Sunderland's ground brfore they moved to the Stadium of Light?",
                    answers: ['Wearside Park', 'St. James Park', 'Roker Park', 'The Riverside Arena'],
                    correctAnswer: 2,
                    selectedAnswer: null,
                }
            },
            {
                content: {
                    question: 'Which of these clubs won the Premier League in 2019?',
                    answers: ['Chelsea', 'Manchester City', 'Tottenham', 'Liverpool'],
                    correctAnswer: 1,
                    selectedAnswer: null,
                }
            },
            {
                content: {
                    question: "Which of these north-east clubs acheived first position, giving them 3 back to back promotions between 2015 and 2018?",
                    answers: ['Darlington', 'South Shields', 'Gateshead', 'Middlesbrough'],
                    correctAnswer: 1,
                    selectedAnswer: null,
                }
            }
        ]
    }
}

export function MotorsportsQuiz() : Assessment {
    return {
        title: 'Football Quiz',
        description: 'A short quiz for Motorsport enthusiasts',
        score: undefined,
        passMark: 60,
        progress: 0,
        questions: [
            {
                content: {
                    question: 'Who finished in first in th Championship in th 2018 Formula 1 season?',
                    answers: ['Fernando Alonso', 'Lewis Hamilton', 'Jenson Button', 'Sebastian Vettel'],
                    correctAnswer: 1,
                    selectedAnswer: null,
                }
            },
            {
                content: {
                    question: 'Which of these drivers was the first Scottish person, and the youngest to win the World Rally Championship?',
                    answers: ['Alister McRae', 'Jimmy McRae', 'Colin McRae', 'Nicky Grist'],
                    correctAnswer: 2,
                    selectedAnswer: null,
                }
            },
            {
                content: {
                    question: 'Which of these drivers won the opening round of the 2018 Drift Masters European Championship on his 15th birthday?',
                    answers: ['Conor Shanahan', 'James Deane', 'Max Miller', 'Jack Shanahan'],
                    correctAnswer: 0,
                    selectedAnswer: null,
                }
            },
            {
                content: {
                    question: 'Which of these tracks are in the UK?',
                    answers: ['Silverstone', 'Mondello Park', 'Santa Pod', 'Laguna Seca'],
                    correctAnswers: [0, 2],
                    selectedAnswers: [],
                }
            },
            {
                content: {
                    question: 'Which of these drivers has won the Formula 1 Championship the most times?',
                    answers: ['Fernando Alonso', 'Lewis Hamilton', 'Michael Schumacher', 'Alain Prost'],
                    correctAnswer: 2,
                    selectedAnswer: null,
                }
            }
        ]
    }
}