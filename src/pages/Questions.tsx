import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useAsync } from '../utils'
import { fetchQuestions } from '../api'
import Button from '../components/Button'
import ShowQuestion from '../components/ShowQuestion'
import { AnsweredQuestion } from '../components/ResultsList'

const Questions = () => {
    let history = useHistory()
    const { number } = useParams<{number:string}>()
    const [result, setResult] = useState<AnsweredQuestion[]>([])
    const { data: questions, status, error, run } = useAsync(null)

    useEffect(() => {
        if (questions) {
            return
        } else {
            run(fetchQuestions())
        }
    }, [questions, run])


    function handleClick(choice:string) {
        const currentQuestion = questions[+number - 1]
        setResult((result) => {
           if(currentQuestion.correct_answer === choice){
               return [...result, { correct: true, question: currentQuestion.question }]
           } else {
               return [...result, { correct: false, question: currentQuestion.question }]
           }
        })
    }

    useEffect(() => {
        if((result.length === 0) && (+number > 1)){
            history.push('/questions/1')
        }
        if (result.length === 0) {
            return
        }
        if (+number === 10) {
            history.push('/results', { result })
        } else {
            history.push(`/questions/${+number + 1}`)
        }

    },
    // eslint-disable-next-line 
    [result])



    if (status === 'idle' || status === 'pending') {
        return <div className="page">Loading</div>
    }
    if (error || status === 'rejected') {
        return <div className="page">There was an error, Please try again</div>
    }
    if (status === 'resolved') {
        const currentQuestion = {
            ...questions[+number - 1],
            number
        }
        return <div className="page">
            <ShowQuestion currentQuestion={currentQuestion} />
            <div>
                <Button handleClick={handleClick} type='True' />
                <Button handleClick={handleClick} type='False' />
            </div>
        </div>
    }
}


export default Questions
