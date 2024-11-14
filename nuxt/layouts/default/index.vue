<template>
	<SidebarProvider>
		<TheSidebar />
		<SidebarInset class="h-screen">
			<TheHeader />
			<TheMain>
				<slot />
			</TheMain>
		</SidebarInset>
	</SidebarProvider>
</template>

<script setup lang="ts">
	import TheSidebar from "./the-sidebar.vue";
	import TheHeader from "./the-header.vue";
	import TheMain from "./the-main.vue";
	import apps from "@/assets/json/apps.json";
	const data = {
		user: {
			name: "Ian Del Rosario",
			email: "edge.idr@gmail.com",
			avatar: "/avatars/shadcn.jpg",
		},
		navMain: [
			{
				title: "Playground",
				url: "#",
				// icon: SquareTerminal,
				isActive: true,
				items: [
					{
						title: "History",
						url: "#",
					},
					{
						title: "Starred",
						url: "#",
					},
					{
						title: "Settings",
						url: "#",
					},
				],
			},
			{
				title: "Models",
				url: "#",
				// icon: Bot,
				items: [
					{
						title: "Genesis",
						url: "#",
					},
					{
						title: "Explorer",
						url: "#",
					},
					{
						title: "Quantum",
						url: "#",
					},
				],
			},
			{
				title: "Documentation",
				url: "#",
				// icon: BookOpen,
				items: [
					{
						title: "Introduction",
						url: "#",
					},
					{
						title: "Get Started",
						url: "#",
					},
					{
						title: "Tutorials",
						url: "#",
					},
					{
						title: "Changelog",
						url: "#",
					},
				],
			},
			{
				title: "Settings",
				url: "#",
				// icon: Settings2,
				items: [
					{
						title: "General",
						url: "#",
					},
					{
						title: "Team",
						url: "#",
					},
					{
						title: "Billing",
						url: "#",
					},
					{
						title: "Limits",
						url: "#",
					},
				],
			},
		],
		projects: [
			{
				name: "Design Engineering",
				url: "#",
				// icon: Frame,
			},
			{
				name: "Sales & Marketing",
				url: "#",
				// icon: PieChart,
			},
			{
				name: "Travel",
				url: "#",
				// icon: Map,
			},
		],
	};

	const activeApp = ref(apps.find((app) => app.name == "Seasonal Work Manager"));

	const setActiveApp = (app: (typeof apps)[number]) => {
		activeApp.value = app;
	};
</script>
