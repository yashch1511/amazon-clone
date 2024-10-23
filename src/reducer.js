export const initialState = {
    basket: [],
    user: null
    
  };
  

  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        const newItem = {
          ...action.item,
          uniqueId: `${action.item.id}-${Date.now()}`}
        return {
          ...state,
          basket: [...state.basket, newItem],
        };
        default:
            return state;

            case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
  
        return {
          ...state,
          basket: newBasket
        }
        case "SET_USER":
          return {
            ...state,
            user: action.user
          }
    }
};




            export default reducer;
      /*case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        }*/
  
      
  
        
      
     /* case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };
  
*/