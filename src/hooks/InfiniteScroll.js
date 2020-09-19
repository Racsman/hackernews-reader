import {useState, useEffect} from 'react';
import {MAX_ARTICLES, PAGE_ARTICLES} from '../constants';
import {debounce} from '../util/debounce';

export const InfiniteScroll = () => {
	const [load, setLoad] = useState(false);
	const [articleNumber, setArticleNumber] = useState(PAGE_ARTICLES);

	const handleScroll = debounce(() => {
		if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || load) {
			return false
		}

		setLoad(true);
	}, 500);

	useEffect(() => {
		if (!load) return;

		if (articleNumber + PAGE_ARTICLES >= MAX_ARTICLES) {
			setArticleNumber(MAX_ARTICLES);
		} else {
			setArticleNumber(articleNumber + PAGE_ARTICLES);
		}

		setLoad(false)
	}, [load]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return {articleNumber};
}

