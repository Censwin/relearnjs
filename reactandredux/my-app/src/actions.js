import * as actionType from './actionType'


export const getList = (city_id) => {
  return {
    type: actionType.get,
    city_id
  }
}