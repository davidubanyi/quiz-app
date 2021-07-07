import * as React from "react"
import {ActionTypes, AnsweredAction, ResolvedAction} from "../interfaces"

//handles unmounting the component while expecting data
function useSafeDispatch(
  dispatch: React.Dispatch<ActionTypes | ResolvedAction | AnsweredAction>
) {
  const mounted = React.useRef(false)

  React.useLayoutEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  return React.useCallback(
    (action) => (mounted.current ? dispatch(action) : void 0),
    [dispatch]
  )
}

export {useSafeDispatch}
