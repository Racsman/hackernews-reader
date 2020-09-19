export const FormatTimestampTimeAgo = timestamp => {
	let seconds = Math.floor((new Date() - timestamp * 1000) / 1000);
	let interval = seconds / 31536000;

	if (interval > 1) {
		return `${Math.floor(interval)} ${Math.floor(interval) === 1 ? 'year' : 'years'} ago`;
	}
	interval = seconds / 2592000;
	if (interval > 1) {
		return `${Math.floor(interval)} ${Math.floor(interval) === 1 ? 'month' : 'months'} ago`;
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return `${Math.floor(interval)} ${Math.floor(interval) === 1 ? 'day' : 'days'} ago`;
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return `${Math.floor(interval)} ${Math.floor(interval) === 1 ? 'hour' : 'hours'} ago`;
	}
	interval = seconds / 60;
	if (interval > 1) {
		return `${Math.floor(interval)} ${Math.floor(interval) === 1 ? 'minute' : 'minutes'} ago`;
	}
	return `${Math.floor(seconds)} ${Math.floor(seconds) === 1 ? 'second' : 'seconds'} ago`;
};