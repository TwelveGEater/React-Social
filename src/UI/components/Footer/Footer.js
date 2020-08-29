import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={style.footer_distributed}>
			<div className={style.footer_right}>
				<a href="#">{/* <i className="fa fa-facebook" /> */}</a>
				<a href="#">{/* <i className="fa fa-twitter" /> */}</a>
				<a href="#">{/* <i className="fa fa-linkedin" /> */}</a>
				<a href="#">{/* <i className="fa fa-github" /> */}</a>
			</div>

			<div className={style.footer_left}>
				<p className={style.footer_links}>
					<a className={style.link_1} href="#">
						Home
					</a>

					<a href="#">Blog</a>

					<a href="#">Pricing</a>

					<a href="#">About</a>

					<a href="#">Faq</a>

					<a href="#">Contact</a>
				</p>

				<p>Company Name &copy; 2020</p>
			</div>
		</footer>
	);
};

export default Footer;
