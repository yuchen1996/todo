import React, { Component } from 'react';

class ListItem extends Component {
	constructor (props) {
		super(props);

		this.handleFinished = this.handleFinished.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleChange = this.handleChange.bind(this);
	} 

	handleFinished () {
		var status = this.props.item.is_end;
		status = !status;
        console.log(status)
		var obj = {
			id: this.props.item.id,
			title: this.props.item.title,
			is_end: status
		}
		
		this.props.finishedChange(obj);
	}

	handleChange (e) {
		var obj = {

			id: this.props.item.id,
			title: e.target.value,
			is_end: this.props.item.is_end
		}
        console.log(obj);
		this.props.finishedChange(obj);
	}

	handleDelete () {
		this.props.totalChange(this.props.item);
	}

	render () {
		const item = this.props.item;

		const unfinish = {
			backgroundColor: '#DFFCB5',
			color: '#2EB872',
		};

		const finish = {
			backgroundColor: '#FFFA9D',
			color: '#FF9A3C',
			textDecoration: 'line-through'
		}

		var itemStyle = item.is_end === false ? unfinish : finish;
		console.log(item)
		return (
			<li key={item.id} style={itemStyle}>
				<span 
					onClick={this.handleFinished} 
					id={item.id}
					className="check-btn"
					style={{backgroundColor: item.status === 0 ? '#fff' : '#A1EAFB'}}
				></span>
                <span><input type="text"  defaultValue={item.title} onChange={e => this.handleChange(e)} /></span>
                <span className="delete-btn">
                    <span onClick={this.handleDelete}>删除</span>
                </span>

			</li>
		);
	}
}

export default ListItem;