import {bake_cookie,read_cookie} from "sfcookies";
function pushReminder(str){
    console.log(str);
    return {
        text:str.payload,
        date:str.payload_date,
        id:Math.random()
    };
}
const removeById = (state = [], id) => {
    state = state.filter(i => i.id !== id);
    console.log('new reduced reminders', state);
    return state;
  }
const red1=(state=[],action)=>{
    state=read_cookie("reminders");
   switch(action.type){
        case "SET_REMINDER":
            state=[...state,pushReminder(action)];
            //console.log(state);
            bake_cookie("reminders",state);
            return state;
        case "DELETE_REMINDER":
            state= removeById(state, action.payload);
            bake_cookie('reminders', state);
            return state;
        default:
         return state;
   }
   
}
export default red1;