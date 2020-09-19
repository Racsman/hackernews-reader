import React, {useEffect, useState, memo} from 'react'
import {getArticle} from '../services/readerAxios';
import {FormatTimestampTimeAgo} from '../util/FormatTimestampTimeAgo';
import {ArticleDetails, ArticleTitle, ArticleWrapper} from '../style/ArticleStyle';
import {ReactComponent as IconOpenExternal} from '../icons/open.svg';

export const Article = memo(function Article({articleId, onClick}) {
	const [article, setArticle] = useState({});

	useEffect(() => {
		getArticle(articleId).then(response => response && response.data && setArticle(response.data));
	}, []);

	return article && article.url ? (
		<ArticleWrapper data-testid='article' onClick={() => onClick(article.url)}>

			<ArticleTitle>
				<div>{article.title}</div>
			</ArticleTitle>

			<ArticleDetails>
				<div>
					{`${article.score}
					  ${parseInt(article.score) === 1 ? 'point' : 'points'}`
					} by {article.by} posted {FormatTimestampTimeAgo(article.time)}
				</div>
				<div>
					{`${article.descendants} ${parseInt(article.descendants) === 1 ? 'comment' : 'comments'}`}
					<a href={article.url} target='blank' rel='external nofollow'>
						<IconOpenExternal />
					</a>
				</div>
			</ArticleDetails>

		</ArticleWrapper>
	) : '';
});