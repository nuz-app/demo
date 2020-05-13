import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  name: null,
  light: false,
  count: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'RESET':
      return {
        ...state,
        count: initialState.count,
      }
    default:
      return state
  }
}

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}
