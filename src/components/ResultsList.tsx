import React from 'react'
import Result from './Result'

export type AnsweredQuestion = {
    question: string,
    correct: boolean
}

const ResultsList = ({answeredQuestions}:{answeredQuestions:AnsweredQuestion[]}) => {
    return (
        <div>
            {answeredQuestions.map(result => <Result key={result.question} correct={result.correct} question={result.question}></Result>)}
        </div>
    )
}

export default ResultsList
