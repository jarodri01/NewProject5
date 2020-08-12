import React from 'react';
import './App.css';

class SubmitButton extends React.Component {
  
  render(){
  return (
    <div className="submitButton">
        <button className='submitbtn' disabled={this.props.disabled} onClick={()=> this.props.onClick()}>
          {this.props.text}
        </button>
    </div>
  );
}
}

export default SubmitButton;