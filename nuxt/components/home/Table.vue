<template>
	<div>
		<Popover>
			<PopoverTrigger as-child>
				<Button variant="outline" :class="cn('w-60 justify-start text-left font-normal', !date && 'text-muted-foreground')">
					<Icon name="mdi:calendar-outline" class="mr-2 size-4" />
					{{ date ? df.format(date.toDate(getLocalTimeZone())) : "Pick a date" }}
				</Button>
			</PopoverTrigger>
			<PopoverContent class="w-auto p-0">
				<Calendar v-model="date" initial-focus />
			</PopoverContent>
		</Popover>

		<div class="rounded-md border mt-4">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead> UUID </TableHead>
						<TableHead> Start </TableHead>
						<TableHead> End </TableHead>
						<TableHead> Channel </TableHead>
						<TableHead> </TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow v-for="(item, index) in currentSchedule" :key="index">
						<TableCell>{{ item.uuid }}</TableCell>
						<TableCell>{{ item.timeStart }}</TableCell>
						<TableCell>{{ item.timeEnd }}</TableCell>
						<TableCell>{{ item.channelName }}</TableCell>
						<TableCell class="text-right">
							<DropdownMenu>
								<DropdownMenuTrigger>
									<Button variant="ghost" size="sm"><Icon name="mdi:dots-horizontal" /></Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>
										<Icon name="mdi:content-copy" />
										<span>Copy UUID</span>
									</DropdownMenuItem>
									<DropdownMenuSub>
										<DropdownMenuSubTrigger>
											<Icon name="mdi:tag-outline" class="mr-2" />
											<span class="mr-10">Mark as</span>
										</DropdownMenuSubTrigger>
										<DropdownMenuPortal>
											<DropdownMenuSubContent>
												<DropdownMenuItem>
													<Icon name="mdi:timer-sand" />
													<span>Ongoing</span>
												</DropdownMenuItem>
												<DropdownMenuItem>
													<Icon name="mdi:check" />
													<span>Done</span>
												</DropdownMenuItem>
											</DropdownMenuSubContent>
										</DropdownMenuPortal>
									</DropdownMenuSub>
								</DropdownMenuContent>
							</DropdownMenu>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	</div>
</template>

<script setup lang="ts">
	import currentScheduleData from "@/assets/json/dummy/currentSchedule.json";
	import { DateFormatter, type DateValue, getLocalTimeZone } from "@internationalized/date";
	import { cn } from "@/lib/utils";
	const df = new DateFormatter("en-US", {
		dateStyle: "long",
	});

	const { getDate, getTimeString } = useDateTime();
	const date = ref<DateValue>();

	const currentSchedule = computed(() => {
		let data = currentScheduleData.map((item) => {
			return {
				...item,
				date: getDate(item.dateStart),
				timeStart: getTimeString(item.dateStart),
				timeEnd: getTimeString(item.dateEnd),
			};
		});

		return data;
	});
</script>
