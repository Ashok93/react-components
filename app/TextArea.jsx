import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button.jsx';
import {render} from 'react-dom';

class TextArea extends React.Component {
	constructor(props){
		super(props);
    }

  render () {
    return (
        <div>
    	<textarea></textarea>
        </div>
    	)
  }
}

export default TextArea
