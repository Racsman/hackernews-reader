import {useState, useEffect} from 'react';
import {MAX_ARTICLES, PAGE_ARTICLES} from '../constants';
import {debounce} from '../util/debounce';

export const InfiniteScroll = () => {
	const [load, setLoad] = useState(false);
	const [articleNumber, setArticleNumber] = useState(PAGE_ARTICLES);

	const handleScroll = debounce(() => {
		if (load) {
			return false
		}
		let scrollTop = document.getElementById('panel-left').scrollTop;
		let scrollHeight = document.getElementById('panel-left').scrollHeight;
		let offsetHeight = document.getElementById('panel-left').offsetHeight;
		let contentHeight = scrollHeight - offsetHeight;
		if (contentHeight <= scrollTop) {
			setLoad(true);
		}
	}, 300);

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
		document.getElementById('panel-left').addEventListener('scroll', handleScroll);
		return () => document.getElementById('panel-left').removeEventListener('scroll', handleScroll);
	}, []);

	return {articleNumber};
}

