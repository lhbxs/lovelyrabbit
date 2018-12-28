import update from 'immutability-helper'
import { api } from 'utils/api'

const initialState = {
  data: null
}

const UPDATE_DATA = 'homePage/updateData'

export const updateData = () => {
  return (dispatch, getState) => {
    return api('api/oa/list').then((responseData) => {
      dispatch({
        type: UPDATE_DATA,
        payload: responseData
      })
      return responseData
    })
  }
}

export const actions = {
  updateData
}

const ACTION_HANDLERS = {
  [UPDATE_DATA]: (state, action) => {
    return update(state, {
      data: {
        $set: action.payload
      }
    })
  }
}

const modules = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

export default modules
