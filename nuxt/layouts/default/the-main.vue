<template>
	<!-- <ScrollArea class="h-screen w-screen">
		<div class="[ relative max-w-screen-lg min-h-screen mx-auto px-10 ][ mobile:px-8 ]">
			<slot />
		</div>
	</ScrollArea> -->
	<ScrollArea>
		<div class="p-4 pt-0 flex-1 max-w-screen-2xl mx-auto w-full">
			<slot />
		</div>
	</ScrollArea>
</template>

<script setup lang="ts"></script>
