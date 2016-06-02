import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

class TypeAheadList extends React.Component {
	constructor(props){
		super(props);
         this.state={
      input_data: '',
    }
	}
    
    constructTypeAheadBox(event){
         this.setState({
        input_data: event.currentTarget.value
      });
        //get width and position of input field
        var pos = this.getPos(event.currentTarget);
        var input_width = event.currentTarget.offsetWidth;
        var e = ReactDOM.findDOMNode(this)

        var dropdown_values = this.props.values;
        var list = e.getElementsByClassName("list")[0];
        var length = dropdown_values.length;
        list.innerHTML = '';
        
        //get matching values from array and append to list
        if(event.currentTarget.value != ''){
            var search_term = new RegExp(event.currentTarget.value, "i");
            for( var i=0; i<length; i++)
            {
                if(dropdown_values[i].match(search_term)){
                        list.innerHTML += "<li class= 'list-items'>"+dropdown_values[i]+"</li>";
                }
            }
        }

        //positioning the list just below the input field
        list.style.position = 'fixed';
        list.style.left = pos.x;
        list.style.top = pos.y;
        list.style.width = input_width;
    }

    listClicked(event){
        var e = ReactDOM.findDOMNode(this);
        e.getElementsByTagName('input')[0].value = event.target.innerHTML;
        event.currentTarget.innerHTML = '';
    }

    getPos(el) {
    for (var lx=0, ly=0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
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
    	<input className ='input' placeholder={this.props.placeholder_data} onKeyUp={this.constructTypeAheadBox.bind(this)}></input>
        <div className='typeahead'>
        <ul className='list' style={listStyle} onClick={this.listClicked.bind(this)}></ul>
       </div>
        </div>
    	)
  }
}

export default TypeAheadList
