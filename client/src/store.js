import {createStore, combineReducers, applyMiddleware} from 'redux'
import  thunk  from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { taskListReducer,taskCreateReducer,taskUpdateReducer, taskDeleteReducer } from './reducers/notesReducers';


const reducer = combineReducers({
 userLogin: userLoginReducer,
 userRegister: userRegisterReducer,
 taskList: taskListReducer,
 taskCreate: taskCreateReducer,
 taskDelete: taskDeleteReducer,
 taskUpdate: taskUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userinfo')
  ?JSON.parse(localStorage.getItem("userinfo"))
  :null

const initialState = {
userLogin: {userinfo: userInfoFromStorage},

};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))  
);

export default store;