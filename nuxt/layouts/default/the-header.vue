<template>
	<header
		class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 max-w-screen-2xl mx-auto w-full">
		<div class="flex items-center gap-2 px-4">
			<SidebarTrigger class="-ml-1" />
			<Separator orientation="vertical" class="mr-2 h-4" />
			<slot name="header" />
		</div>
	</header>
</template>
