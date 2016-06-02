import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button.jsx';
import TypeAheadList from './TypeAheadList.jsx'
import TextArea from './TextArea.jsx';
import TopicCover from './TopicCover.jsx'
import {render} from 'react-dom';

class App extends React.Component {

	firstClick(event){
      alert("First button clicked");
  	}

  	secondClick(event){
      alert("Second button clicked");
  	}

  	thirdClick(event){
      alert("Third button clicked");
  	}

  	forthClick(event){
      alert("Forth button clicked");
  	}

    printTextArea(event){
      debugger;
      alert("Print text called")
    }


  render (){
  	var Wrapper = {
  		padding: '10px'
  	}
  	var componentSpace = {
  		padding: '5px',
  		float: 'left'
  	}
  	var clearFix = {
  		clear: 'both',
    	content: "",
    	display: 'block'
  	}

    return (
    <div>
    
    <h3>Buttons</h3>
  <div style={Object.assign({}, Wrapper)}>
	<div style={componentSpace}><Button name="blue" color='blue' background_color='orange' shape='oval' click={this.firstClick}/></div>
	<div style={componentSpace}><Button name="red" color='red' click={this.secondClick}/></div>
	<div style={componentSpace}><Button name="green" color='green' shape='oval' click={this.thirdClick}/></div>
	<div style={componentSpace} click={this.forthClick}><Button click={this.forthClick}/></div>
	<br style={clearFix}></br>
	</div>
  
  <h3>Type Ahead List</h3>
  <div style={Object.assign({}, Wrapper)}>
    <div style={componentSpace}><TypeAheadList placeholder_data="colors" values= {["red","blue","green","yellow","orange","pink","purple"]} /></div>
  <div style={componentSpace}><TypeAheadList placeholder_data="city" values= {["Chennai","banglore","Mumbai","Kolkatta","Delhi","Madurai","Pune","Jaipur"]} /></div>
  <div style={componentSpace}><TypeAheadList placeholder_data="state" values= {["Tamil Nadu","Andhra Pradesh","Kerela","Karnataka"]} /></div>
  <br style={clearFix}></br>
  </div>
  
  <h3></h3>
    <TopicCover/>
    </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
