import axios from 'axios';

export const  baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newArticlesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getArticle = async (storyId) => {
	return await axios
		.get(`${storyUrl}${storyId}.json`)
		.then(response => response);
};

export const getArticleIds = async () => {
	return await axios
		.get(newArticlesUrl)
		.then(response => response);
}