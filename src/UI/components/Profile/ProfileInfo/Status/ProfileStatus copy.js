import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.userStatus
	};
	enterEditMode = () => {
		this.setState({
			editMode: true
		});
	};
	exitEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.setStatus(this.state.status);
	};

	statusOnChange = (e) => {
		this.setState({
			status: e.target.value
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.userStatus
			});
		}
	}
	render() {
		return (
			<div className="input-group input-group-sm mb-3">
				{this.state.editMode ? (
					<div className="input-group-prepend">
						<input
							onChange={this.statusOnChange}
							autoFocus={true}
							type="text"
							className="form-control"
							value={this.state.status}
							onBlur={this.exitEditMode}
						/>
					</div>
				) : (
					<div className="input-group-prepend" onDoubleClick={this.enterEditMode}>
						<p className="card-text">{this.props.userStatus || '*****'}</p>
					</div>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
