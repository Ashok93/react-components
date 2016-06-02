import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

class GetCommentList extends React.Component {

	constructor(props){
		super(props);
    }

  
  render () {
    return (
      <div>
    	 <ul className="comments">
      {
        this.props.comments.map(function(item) {
          return <li key={item}>{item}</li>
        })
      }
      </ul>
      </div>
    	)
  }
  }

export default GetCommentList
