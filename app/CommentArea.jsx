import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button.jsx';
import TextArea from './TextArea.jsx'
import GetCommentList from './GetCommentList.jsx'
import {render} from 'react-dom';

class CommentArea extends React.Component {

	constructor(props){
		super(props);
    this.state={
      data: [],
    }
    }

    printTextArea(event){
      let current_state = this.state.data;
      current_state.push(this.refs.txt_area.value);
      this.setState({
        data: current_state
      });
    }
  render () {
    return (
        <div>
    	       <h3>comments</h3>
             <GetCommentList comments = {this.state.data}/>
            <div className="text-area-wrapper">
              <div>
                  <textarea ref="txt_area"></textarea>
                  <button onClick={this.printTextArea.bind(this)}>submit</button>
              </div>
          </div>
        </div>
    	)
  }
}

export default CommentArea
