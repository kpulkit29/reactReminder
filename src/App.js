import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from "react-redux";
import {set_remind,delete_remind} from "./actions/remind.js"
import moment from "moment";
import './App.css';
//custom styles

class App extends Component {
  constructor(){
    super();
    this.state={
      textset:"",
      due_date:""
    }
  }
  userSetting(e){
    this.setState({
       textset:e.target.value
    });
  }
  addReminder(){
    this.props.setReminder(this.state.textset,this.state.due_date);
  }
  deleteReminder(id){
    this.props.deleteReminder(id)
  }
  renderList(){
    const { remindRed }=this.props;
    console.log(remindRed);
     return (
       <ul className="listgroup">
        {remindRed.map(i=>{
          return <li key={i.id} className="listli">
          <div className="list-data">
          <div>{i.text}</div>
          <div>{moment(new Date(i.date)).fromNow()}</div>
          </div>
          <div className="list-data delete" onClick={()=>{this.deleteReminder(i.id)}}>&#x2715;</div>
          <hr/>
          </li>
        })}
    
       </ul>
     );
  }
  render() {
    return (
          <div>
            <div className="header"><h1>Reminder pro</h1></div>
             <div className="inputs">
              <input type="text" placeholder="eg. Go to shopping" onChange={((e)=>this.userSetting(e))}/>
              <input type="datetime-local" onChange={event => this.setState({due_date: event.target.value})}/>
              </div>
            <button className="customB" onClick={this.addReminder.bind(this)}>Add Reminder</button>
            <br/>
            {this.renderList()}
          </div>  
    );
  }
}
const mapStateToProps=(state)=>{
  return {remindRed:state};
}
const mapDispatchToProps = (dispatch) => {
  return {
      setReminder: (str,curr_date) => {
          dispatch(set_remind(str,curr_date));
      },
      deleteReminder:(id)=>{
        dispatch(delete_remind(id));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
