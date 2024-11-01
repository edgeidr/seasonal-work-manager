<template>
	<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
		<div class="flex flex-col space-y-2 text-center">
			<h1 class="text-2xl font-semibold tracking-tight">Welcome back!</h1>
			<p class="text-sm text-muted-foreground">Enter your email below to sign in</p>
		</div>

		<div class="grid gap-6">
			<form @submit="onSubmit">
				<div class="grid gap-2">
					<div class="grid gap-1">
						<Label class="sr-only" for="email"> Email </Label>
						<Input
							id="email"
							placeholder="name@example.com"
							type="email"
							auto-capitalize="none"
							auto-complete="email"
							auto-correct="off"
							:disabled="isLoading" />
					</div>
					<Button :disabled="isLoading">
						<Icon v-if="isLoading" name="mingcute:loading-fill" class="mr-2 size-4 animate-spin" />
						Sign In with Email
					</Button>
				</div>
			</form>
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<span class="w-full border-t" />
				</div>
				<div class="relative flex justify-center text-xs">
					<span class="bg-background px-2 text-muted-foreground"> or continue with </span>
				</div>
			</div>
			<Button variant="outline" type="button" :disabled="isLoading || isLoadingGoogle">
				<Icon v-if="isLoadingGoogle" name="mingcute:loading-fill" class="mr-2 size-4 animate-spin" />
				<Icon v-else name="mdi:google" class="mr-2 size-4" />
				Sign in with Google
			</Button>
		</div>

		<p class="px-8 text-center text-sm text-muted-foreground">
			By clicking continue, you agree to our
			<a href="/terms" class="underline underline-offset-4 hover:text-primary"> Terms of Service </a>
			and
			<a href="/privacy" class="underline underline-offset-4 hover:text-primary"> Privacy Policy </a>
			.
		</p>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "authentication",
	});

	const isLoading = ref(false);
	const isLoadingGoogle = ref(false);

	const onSubmit = (event: Event) => {
		event.preventDefault();
		isLoading.value = true;

		setTimeout(async () => {
			isLoading.value = false;
			await navigateTo({ name: "index" });
		}, 3000);
	};
</script>
