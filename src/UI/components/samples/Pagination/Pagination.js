import React from 'react';
import style from './Pagination.module.css';
import Pagination from '@material-ui/lab/Pagination';

const PaginationList = ({
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
				<Pagination
					count={totalItemsCount}
					showFirstButton
					showLastButton
					page={currentPage}
					onChange={(event, page) => {
						changePage(page);
					}}
					size="large"
					variant="outlined"
					color="secondary"
				/>
				{/* <span
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
					</span> */}
			</div>
		</div>
	);
};

export default PaginationList;
