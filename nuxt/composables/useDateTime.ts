export const useDateTime = () => {
	const getDate = (datetime: string): string => {
		if (!datetime) return "";

		const date = new Date(datetime);

		if (isNaN(date.getDate())) return "";

		return datetime.split(" ")[0];
	};

	const getTime = (datetime: string): string => {
		if (!datetime) return "";

		const date = new Date(datetime);

		if (isNaN(date.getTime())) return "";

		return date.toTimeString().split(" ")[0];
	};

	const getDateString = (datetime: string): string => {
		if (!datetime) return "";

		const date = new Date(datetime);

		if (isNaN(date.getDate())) return "";

		const formattedDate = date.toLocaleString("default", {
			weekday: "short",
			month: "short",
			day: "2-digit",
			year: "numeric",
		});

		return formattedDate;
	};

	const getTimeString = (datetime: string): string => {
		if (!datetime) return "";

		const date = new Date(datetime);

		if (isNaN(date.getTime())) return "";

		const timeString = date.toLocaleString("default", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		});

		return timeString;
	};

	return {
		getDate,
		getTime,
		getDateString,
		getTimeString,
	};
};
