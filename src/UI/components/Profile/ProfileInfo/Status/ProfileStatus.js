import React, { useState, useEffect } from 'react';
import { isPageOwner } from './../../../samples/isPageOwner/isPageOwner';

const ProfileStatus = (props) => {
	const [ editMode, setEditMode ] = useState(false);
	const [ status, setStatus ] = useState(props.userStatus);

	useEffect(() => setStatus(props.userStatus), [ props.userStatus ]);

	const enterEditMode = () => {
		setEditMode(true);
	};
	const exitEditMode = () => {
		setEditMode(false);
		props.setStatus(status);
	};

	const statusOnChange = (e) => {
		setStatus(e.target.value);
	};

	return (
		<div className="input-group input-group-sm mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
			{editMode && isPageOwner.check() ? (
				<div className="input-group-prepend">
					<input
						onChange={statusOnChange}
						autoFocus={true}
						type="text"
						className="form-control"
						value={status}
						onBlur={exitEditMode}
					/>
				</div>
			) : (
				<div
					className="input-group-prepend"
					onDoubleClick={enterEditMode}
					title={'Profile status.' + (isPageOwner.check() ? ' Double click to edit!' : '')}
					style={{ cursor: 'pointer' }}
				>
					<p className="card-text">{status || String.fromCodePoint(0x1f44b)}</p>
				</div>
			)}
		</div>
	);
};

export default ProfileStatus;
