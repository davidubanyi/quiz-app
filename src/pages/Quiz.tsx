import React from "react"
import useQuestion from "../hooks/questionHook"
import {Link} from "react-router-dom"
import Button from "../components/Button"
import ShowQuestion from "../components/ShowQuestion"

const Questions:React.FC = () => {
  const {questions, status, error, number, handleChoice} = useQuestion()

  if (status === "idle" || status === "pending") {
    return <div className="page">Loading</div>
  }
  if (error || status === "rejected") {
    return (
      <div className="page">
        There was an error, <Link to="/">Please try again</Link>
      </div>
    )
  }
  const currentQuestion = {
    ...questions[+number - 1],
    number: +number,
  }
  return (
    <div className="page">
      <ShowQuestion currentQuestion={currentQuestion} />
      <div>
        <Button handleClick={handleChoice} type="True" />
        <Button handleClick={handleChoice} type="False" />
      </div>
    </div>
  )
}

export default Questions
