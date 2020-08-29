import React from 'react';
import style from './Pagination.module.css';

const Pagination = (props) => {
	let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pageArray = [];

	for (let i = 1; i <= pageCount; i++) {
		pageArray.push(i);
	}
	return (
		<div>
			<div className={style.center}>
				<div className={style.pagination}>
					<span>&laquo;</span>
					<div className={style.pageList}>
						{pageArray.map((item) => {
							return (
								<span
									key={item}
									className={item === props.currentPage ? style.active : ''}
									onClick={() => {
										props.changePage(item);
									}}
								>
									{item}
								</span>
							);
						})}
					</div>
					<span>&raquo;</span>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
