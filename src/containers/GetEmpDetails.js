import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserDetails, getGroup, getEmp, clearAll, showImage } from '../actions';
import { bindActionCreators } from 'redux';

class GetEmpDetails extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.dispatch(getGroup());
	}
	render() {
		return (
			<div className="App container-fluid">
				<select
					className="form-control"
					onChange={(e) => {
						this.props.dispatch(getEmp(e.target.value));
					}}
				>
					<option hidden>Select Department </option>
					{this.props.count.hasOwnProperty('dep') ? (
						this.props.count.dep.map((el, ind) => <option key={ind + el}>{el}</option>)
					) : (
						''
					)}
				</select>

				<select
					className="form-control"
					onChange={(e) => {
						this.props.dispatch(getUserDetails(e.target.value));
					}}
				>
					<option hidden>Select Employee </option>
					{this.props.count.hasOwnProperty('emp') ? (
						this.props.count.emp.map((el, ind) => <option key={ind + el}>{el}</option>)
					) : (
						''
					)}
				</select>

				<input
					type="button"
					className="form-control btn btn-outline-secondary"
					value="Get Details"
					onClick={() => this.props.dispatch(showImage())}
				/>
				<input
					type="button"
					className="form-control btn btn-outline-secondary"
					value="clear"
					onClick={() => {
						this.props.dispatch(clearAll());
						setTimeout(() => this.props.dispatch(getGroup()));
					}}
				/>
				<br />
				<br />

				{this.props.count.showImage && !this.props.count.id ? <div className="center">Loading...</div> : null}
				{this.props.count.showImage && this.props.count.id ? (
					<div className="space">
						<img className="rounded mx-auto d-block" src={this.props.count.avatar} />{' '}
						<span className="sp1">{this.props.count.id}</span>
						<span className="sp2">{`${this.props.count.first_name} ${this.props.count.last_name}`}</span>
					</div>
				) : null}
			</div>
		);
	}
}
function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(getUserDetails, dispatch), dispatch };
}
function mapStateToProps(state) {
	console.log(state);
	return {
		count: state.empReducer
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GetEmpDetails);
