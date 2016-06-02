import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

class Button extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		color : (props.color) ? props.color : 'black',
		name : (props.name) ? props.name : 'button',
		radius : (props.shape =='oval') ? '50%' : '',
		background_color : (props.background_color) ? props.background_color : ''
	}
	}

	makeBrighter(event) {
    	event.currentTarget.style.opacity = '1'
    }

    makeNormal(event){
    	event.currentTarget.style.opacity = '0.7'
    }

    /*buttonClicked(){
    	debugger;
    	this.props.click;
    }
*/
  render () {
  	
  	var buttonStyles = {
	padding: '10px 20px',
	border: '0',
	color: this.state.color,
	borderRadius: this.state.radius,
	backgroundColor: this.state.background_color,
	cursor:'pointer',
	fontWeight: 'bold',
	lineHeight: 'initial',
    textTransform: 'uppercase',
    textAlign: 'center',
    textDecoration: 'none',
    opacity: '0.7',
    webkitBoxShadow: '5px 8px 8px 0px #888'
}
    return (
    	<button class='btn' style={buttonStyles}  onClick={this.props.click.bind(this)} onMouseOver={this.makeBrighter.bind(this)} onMouseOut={this.makeNormal.bind(this)}>{this.state.name}</button>
    	)
  }
}





export default Button
