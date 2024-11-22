<template>
	<Sidebar collapsible="icon">
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger as-child>
							<SidebarMenuButton size="lg" class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
								<div
									class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<span class="text-primary-foreground">{{ activeApp?.initial }}</span>
								</div>
								<div class="grid flex-1 text-left text-sm leading-tight">
									<span class="truncate font-semibold">{{ activeApp?.name }}</span>
								</div>
								<Icon name="mdi:chevron-up-down" class="ml-auto" />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
							align="start"
							side="bottom"
							:side-offset="4">
							<DropdownMenuLabel class="text-xs text-muted-foreground"> Other apps </DropdownMenuLabel>
							<NuxtLink v-for="app in inActiveApps" :key="app.name" :to="app.url" target="_blank">
								<DropdownMenuItem class="gap-2 p-2">
									<div
										class="flex size-6 aspect-square items-center justify-center rounded-sm border"
										:style="{ backgroundColor: app.themeColor }">
										<div class="size-4 shrink-0" />
									</div>
									<span class="truncate">{{ app.name }}</span>
								</DropdownMenuItem>
							</NuxtLink>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
		<SidebarContent>
			<ScrollArea>
				<SidebarGroup>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton as-child tooltip="Home">
								<NuxtLink to="/">
									<Icon name="mdi:home-outline" class="size-4 aspect-square" />
									<span class="truncate">Home</span>
								</NuxtLink>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<Collapsible as-child class="group/collapsible">
							<SidebarMenuItem>
								<CollapsibleTrigger as-child>
									<SidebarMenuButton tooltip="Schedules">
										<Icon name="mdi:calendar-outline" class="size-4 aspect-square" />
										<span class="truncate">Schedules</span>
										<Icon
											name="mdi:chevron-right"
											class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton as-child>
												<NuxtLink to="/schedules/channel-one">
													<span class="truncate">Channel One</span>
												</NuxtLink>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>

										<SidebarMenuSubItem>
											<SidebarMenuSubButton as-child>
												<NuxtLink to="/schedules/channel-two">
													<span class="truncate">Channel Two</span>
												</NuxtLink>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>

										<SidebarMenuSubItem>
											<SidebarMenuSubButton as-child>
												<NuxtLink to="/schedules/channel-three">
													<span class="truncate">Channel Three</span>
												</NuxtLink>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>

						<Collapsible as-child class="group/collapsible">
							<SidebarMenuItem>
								<CollapsibleTrigger as-child>
									<SidebarMenuButton tooltip="My Stuff">
										<Icon name="mdi:box-variant" class="size-4 aspect-square" />
										<span class="truncate">My Stuff</span>
										<Icon
											name="mdi:chevron-right"
											class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton as-child>
												<NuxtLink to="/my-stuff/attendance">
													<span class="truncate">Attendance</span>
												</NuxtLink>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>

										<SidebarMenuSubItem>
											<SidebarMenuSubButton as-child>
												<NuxtLink to="/my-stuff/overtimes">
													<span class="truncate">Overtimes</span>
												</NuxtLink>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>

										<SidebarMenuSubItem>
											<SidebarMenuSubButton as-child>
												<NuxtLink to="/my-stuff/requests">
													<span class="truncate">Requests</span>
												</NuxtLink>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>

										<SidebarMenuSubItem>
											<SidebarMenuSubButton as-child>
												<NuxtLink to="/my-stuff/schedules">
													<span class="truncate">Schedules</span>
												</NuxtLink>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					</SidebarMenu>
				</SidebarGroup>

				<SidebarSeparator class="hidden group-data-[collapsible=icon]:block" />

				<SidebarGroup class="group-collapsible">
					<SidebarGroupLabel class="truncate">Finance</SidebarGroupLabel>

					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton as-child tooltip="Payslip">
								<NuxtLink to="/finance/payslip">
									<Icon name="mdi:cash-multiple" class="size-4 aspect-square" />
									<span class="truncate">Payslip</span>
								</NuxtLink>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<SidebarMenuItem>
							<SidebarMenuButton as-child tooltip="Team Members">
								<NuxtLink to="/finance/team-members">
									<Icon name="mdi:account-multiple-outline" class="size-4 aspect-square" />
									<span class="truncate">Team Members</span>
								</NuxtLink>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<Collapsible as-child class="group/collapsible">
							<SidebarMenuItem>
								<CollapsibleTrigger as-child>
									<SidebarMenuButton tooltip="Setup">
										<Icon name="mdi:cog-outline" class="size-4 aspect-square" />
										<span class="truncate">Setup</span>
										<Icon
											name="mdi:chevron-right"
											class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton as-child>
												<NuxtLink to="/finance/setup/channels">
													<span class="truncate">Channels</span>
												</NuxtLink>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>

										<SidebarMenuSubItem>
											<SidebarMenuSubButton as-child>
												<NuxtLink to="/finance/setup/mandatory-deductions">
													<span class="truncate">Mandatory Deductions</span>
												</NuxtLink>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>

						<Collapsible as-child class="group/collapsible">
							<SidebarMenuItem>
								<CollapsibleTrigger as-child>
									<SidebarMenuButton tooltip="References">
										<Icon name="mdi:book-open-page-variant-outline" class="size-4 aspect-square" />
										<span class="truncate">References</span>
										<Icon
											name="mdi:chevron-right"
											class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									</SidebarMenuButton>
								</CollapsibleTrigger>
								<CollapsibleContent>
									<SidebarMenuSub>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton as-child>
												<NuxtLink to="/finance/references/sss">
													<span class="truncate">SSS</span>
												</NuxtLink>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>

										<SidebarMenuSubItem>
											<SidebarMenuSubButton as-child>
												<NuxtLink to="/finance/references/tax">
													<span class="truncate">Tax</span>
												</NuxtLink>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					</SidebarMenu>
				</SidebarGroup>

				<SidebarSeparator class="hidden group-data-[collapsible=icon]:block" />

				<SidebarGroup class="group-collapsible">
					<SidebarGroupLabel class="truncate">Admin</SidebarGroupLabel>

					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton as-child tooltip="Reports">
								<NuxtLink to="/admin/reports">
									<Icon name="mdi:report-line" class="size-4 aspect-square" />
									<span class="truncate">Reports</span>
								</NuxtLink>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<SidebarMenuItem>
							<SidebarMenuButton as-child tooltip="Requests">
								<NuxtLink to="/admin/requests">
									<Icon name="mdi:gesture-tap" class="size-4 aspect-square" />
									<span class="truncate">Requests</span>
								</NuxtLink>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<SidebarMenuItem>
							<SidebarMenuButton as-child tooltip="Overtimes">
								<NuxtLink to="/admin/overtimes">
									<Icon name="mdi:clock-plus-outline" class="size-4 aspect-square" />
									<span class="truncate">Overtimes</span>
								</NuxtLink>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<SidebarMenuItem>
							<SidebarMenuButton as-child tooltip="Cutoffs">
								<NuxtLink to="/admin/cutoffs">
									<Icon name="mdi:calendar-clock-outline" class="size-4 aspect-square" />
									<span class="truncate">Cutoffs</span>
								</NuxtLink>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<SidebarMenuItem>
							<SidebarMenuButton as-child tooltip="Team Members">
								<NuxtLink to="/admin/team-members">
									<Icon name="mdi:account-multiple-outline" class="size-4 aspect-square" />
									<span class="truncate">Team Members</span>
								</NuxtLink>
							</SidebarMenuButton>
						</SidebarMenuItem>

						<SidebarMenuItem>
							<SidebarMenuButton as-child tooltip="Setup">
								<NuxtLink to="/admin/setup">
									<Icon name="mdi:cog-outline" class="size-4 aspect-square" />
									<span class="truncate">Setup</span>
								</NuxtLink>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroup>
			</ScrollArea>
		</SidebarContent>

		<SidebarSeparator />

		<SidebarFooter>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger as-child>
							<SidebarMenuButton size="lg" class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
								<Avatar class="h-8 w-8 rounded-lg">
									<AvatarImage :src="user.avatar" :alt="user.name" />
									<AvatarFallback class="rounded-lg"> ID </AvatarFallback>
								</Avatar>
								<div class="grid flex-1 text-left text-sm leading-tight">
									<span class="truncate font-semibold">{{ user.name }}</span>
									<span class="truncate text-xs">{{ user.email }}</span>
								</div>
								<Icon name="mdi:chevron-up-down" class="ml-auto size-4" />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
							side="bottom"
							align="end"
							:side-offset="4">
							<DropdownMenuLabel class="p-0 font-normal">
								<div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
									<Avatar class="h-8 w-8 rounded-lg">
										<AvatarImage :src="user.avatar" :alt="user.name" />
										<AvatarFallback class="rounded-lg"> ID </AvatarFallback>
									</Avatar>
									<div class="grid flex-1 text-left text-sm leading-tight">
										<span class="truncate font-semibold">{{ user.name }}</span>
										<span class="truncate text-xs">{{ user.email }}</span>
									</div>
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<Icon name="mdi:account-outline" />
									Account Settings
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Icon name="mdi:bell-outline" />
									Notifications
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Icon name="mdi:logout" />
								Log out
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarFooter>
		<SidebarRail />
	</Sidebar>
</template>

<script setup lang="ts">
	import appsData from "@/assets/json/apps.json";

	const config = useRuntimeConfig();
	const apps: Apps = appsData;
	const user: User = {
		name: "Ian Del Rosario",
		email: "edge.idr@gmail.com",
		avatar: "/avatars/shadcn.jpg",
	};

	const activeApp = computed(() => apps.find((app) => app.name == config.public.appName));
	const inActiveApps = computed(() => apps.filter((app) => app.name != config.public.appName));
</script>
