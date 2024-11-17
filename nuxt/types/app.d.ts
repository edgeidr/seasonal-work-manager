declare global {
	type App = {
		name: string;
		url: string;
		initial: string;
		themeColor: string;
		logo?: string;
	};

	type Apps = App[];
}

export {};
