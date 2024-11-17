declare global {
	type Breadcrumb = {
		label: string;
		to: string;
		newLabel?: string;
	};

	type Breadcrumbs = Record<string, Breadcrumb[]>;
}

export {};
