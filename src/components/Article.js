import React, {useEffect, useState, memo} from 'react'
import {getArticle} from '../services/readerAxios';
import {FormatTimestampTimeAgo} from '../util/FormatTimestampTimeAgo';
import {ArticleDetails, ArticleTitle, ArticleWrapper} from '../style/ArticleStyle';
import {ReactComponent as IconOpenExternal} from '../icons/open.svg';

export const Article = memo(function Article({articleId, articleNumber, onClick, isLoading}) {
	const [article, setArticle] = useState({});
	const [clicked, triggerClick] = useState(false);
	const articleDetails = article;

	useEffect(() => {
		getArticle(articleId).then(response => response && response.data && setArticle(response.data));
	}, []);

	const toggleClick = (type) => {
		triggerClick(!clicked);
		onClick({
			details: articleDetails,
			type: type
		});
	};

	return article && article.id ? (
		<ArticleWrapper data-testid='article' className={clicked ? 'active' : null} >
			<ArticleTitle onClick={() => toggleClick('preview')}>
				{articleNumber}. {article.title}
			</ArticleTitle>
			<ArticleDetails onClick={() => toggleClick('details')}>
				<div>
					{`${article.score}
					  ${parseInt(article.score) === 1 ? 'point' : 'points'}`
					} by {article.by} posted {FormatTimestampTimeAgo(article.time)}
				</div>
				<div>
					{`${article.descendants} ${parseInt(article.descendants) === 1 ? 'comment' : 'comments'}`}
					<a href={article.url} target='blank' rel='external nofollow' aria-label={article.title}>
						<IconOpenExternal />
					</a>
				</div>
			</ArticleDetails>
		</ArticleWrapper>
	) : '';
});