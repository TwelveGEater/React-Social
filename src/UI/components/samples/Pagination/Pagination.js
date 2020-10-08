import React from 'react';
import style from './Pagination.module.css';

const Pagination = ({
	totalItemsCount,
	pageSize,
	currentPage,
	changePage,
	portionSize = 10,
	setPortionNumber,
	portionNumber
}) => {
	const pageCount = Math.ceil(totalItemsCount / pageSize);
	const pageArray = [];

	for (let i = 1; i <= pageCount; i++) {
		pageArray.push(i);
	}
	const portionCount = Math.ceil(pageCount / portionSize);
	const leftPortionLimit = (portionNumber - 1) * portionSize + 1;
	const rightPortionLimit = portionNumber * portionSize;

	return (
		<div>
			<div className={style.center}>
				<div className={style.pagination}>
					<span
						onClick={() => {
							return portionNumber > 1 && setPortionNumber(portionNumber - 1);
						}}
					>
						&laquo;
					</span>

					<div className={portionCount > portionNumber ? style.pageList : style.lastPageList}>
						{pageArray
							.filter((item) => item >= leftPortionLimit && item <= rightPortionLimit)
							.map((item) => {
								return (
									<span
										key={item}
										className={item === currentPage ? style.active : ''}
										onClick={() => {
											changePage(item);
										}}
									>
										{item}
									</span>
								);
							})}
					</div>
					<span
						onClick={() => {
							return portionCount > portionNumber && setPortionNumber(portionNumber + 1);
						}}
					>
						&raquo;
					</span>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
