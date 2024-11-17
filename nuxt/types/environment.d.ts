declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NUXT_APP_NAME: string;
			NODE_ENV: "development" | "staging" | "production";
		}
	}
}

export {};
