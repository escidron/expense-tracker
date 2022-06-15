import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer'

//Inicial state
const inicialState = {
    transactions: []
}

//create context
export const GlobalContext = createContext(inicialState)

//Provider (outros componentes te, acesso a inicialstate)
export const GlobalProvider = ({children})=>{
   const [state,dispatch] = useReducer(AppReducer,inicialState)

   //actions
   function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    })
   } 

   function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    })
   } 

   return(
    <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>
        {children}
    </GlobalContext.Provider>
   )
}
