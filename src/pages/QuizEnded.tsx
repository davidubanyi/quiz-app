import React from 'react'
import { Link } from 'react-router-dom'
import ResultsList from '../components/ResultsList'
import { AnsweredQuestion } from '../components/ResultsList'

const QuizEnded = ({location}:{location:{
    state:{
        result: AnsweredQuestion[]
    }
}}) => {
    const answeredQuestions = location.state?.result
    if(answeredQuestions){
    return (
        <div className="page">
            <h2 className="title--h2">
                You Scored
                <div>{answeredQuestions.filter(result => result.correct).length}/{answeredQuestions.length}</div>
            </h2>
            <ResultsList answeredQuestions={answeredQuestions}></ResultsList>
            <Link to="/" className="begin--button">Play Again</Link>
        </div>
    )} else {
        return <div>No test result <Link to="/">Please try again </Link></div>
    }

}

export default QuizEnded
