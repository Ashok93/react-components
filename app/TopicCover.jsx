import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import CommentArea from './CommentArea.jsx'

class TopicCover extends React.Component {

	constructor(props) {
		super(props);
    this.state={
      comments: this.props.comments
    }
    }
 
  render () {
    return (
      <div>
          <div>
              <CommentArea/>
          </div>
      </div>
    	)
  }
  }

export default TopicCover
