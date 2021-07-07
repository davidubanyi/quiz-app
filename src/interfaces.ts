export type QuizState = {
    status: string,
    results: AnsweredQuestion[],
    questions: ApiQuestion[],
    error: null | string
}

export type ActionTypes = {
    type: 'pending' | 'rejected',
    error: null | string
}

export type ResolvedAction = {
    type: 'resolved',
    data: ApiQuestion[]
}

export type AnsweredAction = {
    type: 'answered',
    data: AnsweredQuestion
}
export type ApiQuestion = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    0: string,
    question: string,
    type: string,
}

export type AnsweredQuestion = {
    question: string,
    correct: boolean
}