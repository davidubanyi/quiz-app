import {useEffect} from "react"
import {useParams, useHistory} from "react-router-dom"
import useQuiz from "./quizReducerHook"
import {fetchQuestions} from "../api"

const useQuestion = () => {
  let history = useHistory()
  const {number} = useParams<{number: string}>()
  const {questions, status, error, run, setAnswer, results} = useQuiz()

  useEffect(() => {
    if (questions.length > 0) {
      return
    } else {
      run(fetchQuestions())
    }
  }, [])

  function handleChoice(choice: string) {
    const currentQuestion = questions[+number - 1]
    if (currentQuestion.correct_answer === choice) {
      setAnswer({correct: true, question: currentQuestion.question})
    } else {
      setAnswer({correct: false, question: currentQuestion.question})
    }
  }
  useEffect(
    () => {
      //if the page refreshes or changes suddenly, restart the test
      if (results.length === 0 && +number > 1) {
        history.push("/questions/1")
      }
      if (results.length === 0) {
        return
      }
      if (+number === 10) {
        history.push("/results", {results})
      } else {
        history.push(`/questions/${+number + 1}`)
      }
    },
    // eslint-disable-next-line
    [results]
  )

  return {handleChoice, results, status, error, questions, number, history}
}

export default useQuestion
