// function reducerFunction(state,action){
//     switch(action){
//         case 'increment':
//             return {
//                 ...state,
//                 count:state.count+1
//             }
//         case 'decrement':
//             return {
//                 ...state,
//                 count:state.count-1
//             } 
//        case 'green':
//         return{
//             ...state,
//             color:'green'
//         }
//         case 'blue':
//             return{
//                 ...state,
//                 color:'blue'
//             } 
//             default:
//                 return state

//     }
// }
// export default reducerFunction



function reducerFunction(state,action){
    switch(action.type){
        case 'changecount':
            return {
                ...state,
                count:state.count +action.payload
            }
      
       case 'changecolor':
        return{
            ...state,
            color:action.payload
        }
       
            default:
                return state

    }
}
export default reducerFunction