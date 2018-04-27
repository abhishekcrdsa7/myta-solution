import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../../../actions/index';
import { Redirect } from 'react-router-dom';

class Elechrg extends Component {

  constructor(props){
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.questions = this.questions.bind(this);
    this.ques = [];
  }

  fetchData() {
    this.props.fetchMessage();
  }

  componentDidMount(){
    this.fetchData();
  }

  questions() {
    this.ques = this.props.message.gradesList[0].subjectList[0].chapterList[0].questionList.map((data,ind) => {
      return (
      <div key={ind}>
        <p><strong>Ques{ind+1}:</strong> {data.question}</p>
        <p><strong>Answer:</strong> {data.answer}</p>
      </div>
    );
    })
  }

  render() {
    if(localStorage.getItem("token")){
      if(!this.props.message){
        return <div>Loading...</div>
      }else{
        this.questions();
        return(
          <div className="container questionPaper">
            <div  className="text-center">
              <h3 className="queshead">{this.props.message.gradesList[0].subjectList[0].chapterList[0].name}</h3>
            </div>
            <div>
              {this.ques}
            </div>
          </div>
        );
      }
    }else{
      return(
        <div>
          <Redirect to="/"/>
        </div>
      );
    }
  }
}

function mapStateToProps(state){
  return {
    message: state.auth.message
  };
}
export default connect(mapStateToProps,{ fetchMessage })(Elechrg);
