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
</script>
