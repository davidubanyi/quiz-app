import * as React from 'react'
import { AnsweredQuestion } from './components/ResultsList'

function useSafeDispatch(dispatch: React.Dispatch<ActionTypes>) {
  const mounted = React.useRef(false)

  React.useLayoutEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch],
  )
}



type QuizState = {
  status: string,
  results: AnsweredQuestion[],
  questions: ApiQuestion[],
  error: null | string
}

type ActionTypes = {
  type: 'pending' | 'rejected',
  error: null | string
}

type ResolvedAction = {
  type: 'resolved',
  data: ApiQuestion[]
}

type AnsweredAction = {
  type: 'answered',
  data: AnsweredQuestion
}


type ApiQuestion = {
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
  0: string,
  question: string,
  type: string,
}
const  asyncReducer  = (state:QuizState, action: ResolvedAction | AnsweredAction | ActionTypes) => {
  switch (action.type) {
    case 'pending': {
      state = { status: 'pending', questions: [], error: null, results: [] }
      return state
    }
    case 'resolved': {
      state = { status: 'resolved', questions: (action.data), error: null, results: [] }
      return state
    }
    case 'rejected': {
      return { status: 'rejected', questions: [], error: action.error, results: [] }
    }
    case 'answered': {
      return {...state, results: [...state.results, action.data] }
    }
    default: {
      throw new Error(`Unhandled action type: action does not exist`)
    }
  }
}

function useQuiz() {
  const [state, unsafeDispatch] = React.useReducer(asyncReducer, {
    status: 'idle',
    questions: [],
    error: null,
    results: []
  })

  const dispatch = useSafeDispatch(unsafeDispatch)

  const { questions, error, status, results } = state

  const run = React.useCallback(
    promise => {
      dispatch({ type: 'pending' })
      promise.then(
        (data:ApiQuestion) => {
          dispatch({ type: 'resolved', data })
        },
        (error: string) => {
          dispatch({ type: 'rejected', error })
        },
      )
    },
    [dispatch],
  )

  const setAnswer = (data:AnsweredQuestion) => {
    dispatch({ type: 'answered', data })
  }

  return {
    error,
    status,
    questions,
    run,
    setAnswer,
    results
  }
}

export { useQuiz }
