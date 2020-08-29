import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import { Route } from 'react-router-dom';
import Dialog from './DialogsItem/Dialog/Dialog';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';

const Dialogs = (props) => {
	return (
		<div className={style.dialogs}>
			<div className={style.dialog_items}>
				{props.dialogsData.dialogsList.map((dialog) => <DialogsItem dialog={dialog} key={dialog.id} />)}
				<Route path="/dialogs/1" component={Dialog} />
			</div>
		</div>
	);
};

export default withAuthRedirect(Dialogs);
