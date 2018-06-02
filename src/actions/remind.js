export const delete_remind=(id)=>{
    return {
        type:"DELETE_REMINDER",
        payload:id
    }
}
export const set_remind=(reminder,curr_date)=>{
    return {
        type:"SET_REMINDER",
        payload:reminder,
        payload_date:curr_date
    }
}