import React from 'react';

class TodoForm extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<form onSubmit={this.props.addTask}>
				<input type="text"
					 onChange={this.props.updateTask} 
					 value={this.props.currentTask}
					 />
				<button type="submit">Submit</button>
			</form>
			);
	}
}
export default TodoForm;