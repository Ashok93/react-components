import React from 'react';
import {render} from 'react-dom';

class AutoSuggestions extends React.Component {

	constructor(props){
		super(props);
    
    }
  render () {

    var listStyle ={
        marginTop: '25px',
        backgroundColor: '#f2f2f2',
        listStyle: 'none',
        padding: '0px',
        maxHeight: '100px',
        overflow: 'auto'
    }
    
    return (
  <div>
    	<div className='typeahead'><ul className='list' style={listStyle} onClick={this.listClicked.bind(this)}></ul></div>
  <div>
    	)
  }
}

export default AutoSuggestions
