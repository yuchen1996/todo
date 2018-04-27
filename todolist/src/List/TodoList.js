import React, { Component } from 'react';
import ListItem from './listItem';
import Dialog from './dialog';
import axios from 'axios';
import './main.css';
import ReactDOM from "react-dom";



class TodoList extends Component {

	constructor (props) {
		super(props);
	}

	componentDidMount() {
        var json;
	    axios.get("/todos.json")
            .then(function (response) {
                json = response.data.data;

            })
            .catch(function (error) {
                console.log(error);
            })
        this.setState({
            list: json
		});
    }

	addTask (newitem) {
		var allTask = this.state.list;

		axios.post(
			"/todos.json",
			{
				'title': newitem.title,
				'target_time': newitem.target_time
			}
			)
            .then(function (response) {
            	allTask.push(newitem);
                this.setState({

					list: allTask
				});

            })
            .catch(function (error) {
                console.log(error);
            })


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


ReactDOM.render((<TodoList />), document.getElementById('root'));