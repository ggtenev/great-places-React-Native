import { ADD_PLACE } from "../actions/places"
import Place from '../../models/place'

const initState = {
  places:[]
}

export default (state=initState, action) => {
  switch(action.type){
    case ADD_PLACE:
      const newPlace = new Place(new Date().toString(),action.placeData.title,action.placeData.img)
      return{
        ...state,
        places:[newPlace,...state.places]
      }
  }
  return state
}