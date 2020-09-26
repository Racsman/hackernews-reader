import axios from 'axios';
import { DEFAULT_ENDPOINT, VALID_ENDPOINTS } from '../constants';

export const  baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const storyUrl = `${baseUrl}item/`;

export const getArticle = async (storyId) => {
	return await axios
		.get(`${storyUrl}${storyId}.json`)
		.then(response => response);
};

export const getArticleIds = async (articleList) => {
	if (!articleList || !VALID_ENDPOINTS.includes(articleList)) {
		articleList = DEFAULT_ENDPOINT;
	}

	return await axios
		.get(`${baseUrl}${articleList}.json`)
		.then(response => response);
}