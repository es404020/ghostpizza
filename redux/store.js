import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {persistReducer,persistStore} from "redux-persist";

import storage from "redux-persist/lib/storage"; 

import thunk from "redux-thunk";
import { LoginReducers } from "./Auth/authReducer";
import { cartReducer } from "./Cart/cartReducer";
import {getAllPizzasTReducer} from './Pizza/pizzaReducer';
import { RegisterReducers } from "./User/userReducer";



 //localstorage for dta persist using redux persist
const persistConfig ={
    key:'root',
    blacklist:['getAllPizzasTReducer','RegisterReducers'],//blacklist getPizza and registration reducer from persist
    storage//using localstorage 
}
//configuring final reducers
const finalReducer =  combineReducers({
    getAllPizzasTReducer:getAllPizzasTReducer,//get all pizza reducers
    cartReducer:cartReducer,//Manage users cart reducer
    RegisterReducers:RegisterReducers,//Users registration
    LoginReducers:LoginReducers//user authentication

});

//setting up initstate
const initstate={

  
};

const persistedReducer = persistReducer(persistConfig,finalReducer )

const composeEnhancers = composeWithDevTools({});

const store = createStore(persistedReducer ,initstate,composeEnhancers(applyMiddleware(thunk)));//using redux thunk has a middlewear



export default store;

