export const ADD_PLACE = 'ADD_PLACE'
import * as FileSystem from 'expo-file-system'


export const addPlace = (title,img) => {
  return async dispatch => {
    

    dispatch({type:ADD_PLACE, placeData:{title,img}})
  }
  
}