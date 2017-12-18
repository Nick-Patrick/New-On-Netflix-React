import * as types from '../constants/ActionTypes'

export default function newTitles (state = {
  isFetching: false,
  item: []
}, action) {
  switch (action.type) {
    case types.RECEIVE_NEW:
      return Object.assign({}, state, {
        isFetching: false,
        item: [...state.item, action.newTitles]
      })

    case types.REQUEST_NEW:
      return Object.assign({}, state, {
        isFetching: true
      })

    default:
      return state
  }
}
