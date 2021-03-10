import {get, STARTED, SUCCESS, FAILURE} from './actionType'

export const getList = (city_id) => {
  return {
    type: get,
    city_id
  }
}
export const fetchStart = () => ({type: STARTED})
export const fetchSuccess = (res) => ({
  type: SUCCESS,
  result: res
})
export const fetchFail = (err) => ({
  type: FAILURE,
  error: err
})
