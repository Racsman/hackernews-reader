import React, {useEffect, useState} from 'react';
import {Article} from './Article';
import {InfiniteScroll} from '../hooks/InfiniteScroll';
import {getArticleIds} from '../services/readerAxios';

export const ArticleList = ({ reloadList, onClick, loadingList }) => {
	const {articleNumber} = InfiniteScroll();
	const [articleIds, setArticleIds] = useState([]);
	const [article, updateArticles] = useState(true);

	const retrieveArticles = () => {
		getArticleIds()
			.then(article => setArticleIds(article.data));
	};
	useEffect(() => {
		retrieveArticles();
	}, []);

	useEffect(() => loadingList(true), [articleIds, articleNumber]);

	if (reloadList && article) {
		reloadList = false;
		updateArticles(false);
		retrieveArticles();
	}

	return (
		<>
			{articleIds.slice(0, articleNumber).map(articleId => (
				<Article articleId={articleId} onClick={onClick} key={articleId}/>
			))}
		</>
	);
};