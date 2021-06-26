import React from 'react'
import { Link } from 'react-router-dom'

const QuizStarter = () => {
    return (
        <div className="page">
            <div>
            <h1 className="title--h1">
                Welcome to the Trivia Challenge!
            </h1>
                <p className="quiz-start--description">
                You will be presented with 10 True or False questions. 
                </p>
            </div>
            <div>
                <p>Can you score 100%?</p>
                <Link className="begin--button" to="/questions/1">Begin</Link>
            </div>
        </div>
    )
}

export default QuizStarter
