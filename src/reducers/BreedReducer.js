const initialState = {
    breeds: [],
    breedFilter:[],
    breedImages: [],
    currentBreed:"",
    favImage:[],
    likeBreed:[],
    likeBreedFilter:[]
    
  };
  const BreedReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LIST_BREEDS":{
        return { ...state, breeds: action.payload, breedFilter: action.payload};
    }
    case "FILTER":
        return{
          ...state, breedFilter: state.breeds.filter((item)=> item.toLowerCase().includes(action.payload.toLowerCase()))
        }
        case "GET_BREED_IMAGES":{
          return { ...state, breedImages: action.payload,};
      }   
      case "CURRENT-BREED":{
        return { ...state, currentBreed: action.payload,};
    }  
    case "LIKE":{
      return {
         ...state, favImage: [action.payload.item,...state.favImage],
         likeBreed  : [...state.likeBreed, action.payload]
        };
  } 
  case "DISLIKE":
        return{
          ...state, favImage: state.favImage.filter((item)=> item!== action.payload.item),
           likeBreed: state.likeBreed.filter((item)=> item.item!== action.payload.item)
        }
        case "CLEAR-REDUX":{
          return{
            initialState
          }
        }
        case "FAVFILTER":
        return{
          ...state, likeBreedFilter: state.likeBreed.filter((item)=> item.toLowerCase().includes(action.payload.toLowerCase()))
        }

      default:
        return state;
    }
  };
  export default BreedReducer;