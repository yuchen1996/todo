import React, { Component } from 'react';
import ListItem from './listItem';
import Dialog from './dialog';
import axios from 'axios';
import './main.css';

class TodoList extends Component {
	constructor (props) {
		super(props);
		axios.get("http://127.0.0.1:8000/todos.json")
            .then(function (response) {
                let json = response.data.data;
                this.state = {
                	list: json
				};
            })
            .catch(function (error) {
                console.log(error);
            })

	}

	addTask (newitem) {
		var allTask = this.state.list;
		allTask.push(newitem);
		this.setState({
			list: allTask
		});
	}

	updateFinished (todoItem) {
		this.state.list.forEach( (item) => {
			if (item.id === todoItem.id) {
				item.status = todoItem.status;
			}
		});

	}

	updateTotal (todoItem) {
		var obj = [];
		this.state.list.forEach((item) => {
			if (item.id !== todoItem.id) {
				obj.push(item);
			}
		});
		this.setState({
			list: obj
		});
	}

	render () {
		return (
			<div className="container">
				<h1>TodoList</h1>
				<ul>
					{ this.state.list.map ((item, index) =>
						<ListItem 
							item={item}  
							finishedChange={this.updateFinished.bind(this)} 
							totalChange={this.updateTotal.bind(this)}
							key={index}
						/>
					)}
					<li>{this.state.list.length}总数</li>
				</ul>
				<Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
			</div>
		);
	}
}

export default TodoList;