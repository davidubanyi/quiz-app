import {useCallback, useReducer} from "react"
import {
  ActionTypes,
  AnsweredAction,
  AnsweredQuestion,
  ApiQuestion,
  QuizState,
  ResolvedAction,
} from "../interfaces"
import {useSafeDispatch} from "./utils"

const quizReducer = (
  state: QuizState,
  action: ResolvedAction | AnsweredAction | ActionTypes
) => {
  switch (action.type) {
    case "pending": {
      state = {status: "pending", questions: [], error: null, results: []}
      return state
    }
    case "resolved": {
      state = {
        status: "resolved",
        questions: action.data,
        error: null,
        results: [],
      }
      return state
    }
    case "rejected": {
      return {
        status: "rejected",
        questions: [],
        error: action.error,
        results: [],
      }
    }
    case "answered": {
      return {...state, results: [...state.results, action.data]}
    }
    default: {
      throw new Error(`Unhandled action type: action does not exist`)
    }
  }
}

/**
 * Handles the business logic for fetching the questions and updating the results
 * @returns {error, status, questions, results, setAnswer, run}
 */
function useAsyncQuiz() {
  const [state, unsafeDispatch] = useReducer(quizReducer, {
    status: "idle",
    questions: [],
    error: null,
    results: [],
  })

  const dispatch = useSafeDispatch(unsafeDispatch)

  const {questions, error, status, results} = state

  const run = useCallback(
    (promise) => {
      dispatch({type: "pending"})
      promise.then(
        (data: ApiQuestion) => {
          dispatch({type: "resolved", data})
        },
        (error: string) => {
          dispatch({type: "rejected", error})
        }
      )
    },
    [dispatch]
  )

  const setAnswer = (data: AnsweredQuestion) => {
    dispatch({type: "answered", data})
  }

  return {
    error,
    status,
    questions,
    run,
    setAnswer,
    results,
  }
}

export default useAsyncQuiz
