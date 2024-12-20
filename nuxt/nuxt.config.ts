// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	ssr: false,
	app: {
		head: {
			title: process.env.NUXT_APP_NAME || "",
		},
	},
	runtimeConfig: {
		public: {
			appName: process.env.NUXT_APP_NAME || "",
		},
	},
	modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/google-fonts", "@nuxt/icon"],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: "",
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: "./components/ui",
	},
	googleFonts: {
		families: {
			Poppins: [100, 300, 400, 500, 700, 900],
			Montserrat: [100, 300, 400, 500, 700, 900],
		},
	},
});
