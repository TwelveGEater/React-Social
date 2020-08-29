import React from 'react';
import style from './Header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
			<img
				src="https://e7.pngegg.com/pngimages/992/871/png-clipart-logo-game-maker-computer-icons-gamemaker-studio-others-miscellaneous-game.png"
				alt="logo"
			/>
			{/* <a href="#">Home</a>
			<a href="#">Friends</a>
			<a href="#">Messages</a> */}
		</header>
	);
};

export default Header;
