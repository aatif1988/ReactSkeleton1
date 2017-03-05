import React from 'react';

export default class TodoItem extends React.Component {
	constructor(props){
		super(props);
		this.toggleState = this.toggleState.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.renderForm = this.renderForm.bind(this);
		this.updateItem = this.updateItem.bind(this);
		this.state = {
			isEditing: false
		}
	}
	updateItem(evt){
		evt.preventDefault();
		this.props.editTask(this.props.index , this.refs.myInput.value)
		this.toggleState()
	}
	toggleState(){
		const { isEditing } = this.state;
		this.setState({
			isEditing: !isEditing
		})
	}
	renderItem(){
		return(
			<li onClick={()=>{
					this.props.clickHandler(this.props.index)}}
					className={this.props.detail.completed ? "completed" : '' }
					>
				{this.props.detail.text}
				{'  '}
				<button onClick={(evt)=>{
					evt.stopPropagation();
					this.props.deleteTask(this.props.index);
				}}>Delete</button>
				<button onClick={(evt)=>{
					evt.stopPropagation();
					this.toggleState();
				}}>Edit</button>
			</li>
			)
	}
	renderForm(){
		return (
			<form onSubmit={this.updateItem}>
				<input type="text" 
					ref="myInput"
					defaultValue={this.props.detail.text}
				/>
				<button type="submit">Update Item</button>
			</form>	
			)
	}
	render(){
		const isEditing = this.state.isEditing;
		return(
			<section>
				{
					isEditing ? this.renderForm() : this.renderItem()
				}
			</section>

			)
		

	}
}