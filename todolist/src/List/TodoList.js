import React, { Component } from 'react';
import ListItem from './listItem';
import Dialog from './dialog';
import axios from 'axios';
import './main.css';
import ReactDOM from 'react-dom';


class TodoList extends Component {

    constructor (props) {
        super(props);
        this.state = {
            todolist: [],
        }
        axios.get("/todos.json")
            .then((response) => {
                console.log(response)
                let json = response.data;
                console.log(json)
                this.setState({
                    todolist: json
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    addTask (newitem) {
        axios.post(
            "/todos.json",
            {
                title: newitem.title,
            }
        )
            .then( (response) => {
                axios.get("/todos.json")
                    .then((response) => {
                        console.log(response)
                        let json = response.data;
                        console.log(json)
                        this.setState({
                            todolist: json
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    })

            })
            .catch(function (error) {
                console.log(error);
            })


    }

    updateItem (todoItem) {
        var obj = [];
        axios.put(
            "/todos/" + todoItem.id + ".json",
            {
                title: todoItem.title,
                is_end: todoItem.is_end
            }
        )
            .then((response) => {
                axios.get("/todos.json")
                    .then((response) => {
                        console.log(response)
                        let json = response.data;
                        console.log(json)
                        this.setState({
                            todolist: json
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    updateTotal (todoItem) {

        axios.delete(
            "/todos/"+todoItem.id+".json"
        )
            .then((response) => {
                axios.get("/todos.json")
                    .then((response) => {
                        console.log(response)
                        let json = response.data;
                        console.log(json)
                        this.setState({
                            todolist: json
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    render () {
        console.log(this.state)
        if (this.state.todolist === []) {
            return null;
        }
        return (
            <div className="container">
                <h1>TodoList</h1>
                <ul>
                    { this.state.todolist.map ((item, index) =>
                        <ListItem
                            item={item}
                            finishedChange={this.updateItem.bind(this)}
                            totalChange={this.updateTotal.bind(this)}
                            key={index}
                        />
                    )}
                    <li>{this.state.todolist.length}总数</li>
                </ul>
                <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.todolist.length}/>
            </div>
        );
    }
}

export default TodoList;


ReactDOM.render((<TodoList />), document.getElementById('root'));