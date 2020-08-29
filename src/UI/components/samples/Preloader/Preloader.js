import React from 'react';
import preloader from '../../../../assets/images/loader.gif';
import style from './Preloader.module.css';

const Preloader = (props) => {
	return (
		<div className={style.preloader}>
			<img src={preloader} alt="preloader" />
		</div>
	);
};

export default Preloader;
