<template>
	<header
		class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 max-w-screen-2xl mx-auto w-full">
		<div class="flex items-center gap-2 px-4">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem v-for="(breadcrumb, index) in currentBreadcrumb" :key="breadcrumb.path">
						<template v-if="index < currentBreadcrumb.length - 1">
							<BreadcrumbLink class="capitalize" as-child>
								<NuxtLink :to="breadcrumb.to">
									{{ breadcrumb.newLabel }}
								</NuxtLink>
							</BreadcrumbLink>
							<BreadcrumbSeparator />
						</template>

						<BreadcrumbPage class="capitalize" v-else>{{ breadcrumb.newLabel }}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	</header>
</template>

<script setup lang="ts">
	import breadcrumbs from "@/assets/json/breadcrumbs.json";

	const currentBreadcrumb = computed(() => {
		let route = useRoute();
		let breadcrumb = breadcrumbs[route.name];

		return breadcrumb?.flatMap((item) => {
			item.newLabel = item.label.replaceAll(":slug", route.params.slug).replaceAll("-", " ");
			return item;
		});
	});
</script>
