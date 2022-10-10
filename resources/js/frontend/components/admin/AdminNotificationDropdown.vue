<template>
	<dropdown :width="80">
		<template #trigger>
			<button class="ti-bell px-4 relative text-xl text-gray-800 rounded-full hover:text-primary-500 focus:outline-none focus:text-primary-600 transition duration-150 ease-in-out">
				<span class="bg-primary text-white text-xs absolute w-5 h-5 rounded-full flex items-center justify-center border border-white" style="top:-5px; right: 8px" v-if="countNotifications">{{countNotifications}}</span>
			</button>
		</template>

		<template #content>
			<!-- Header -->
			<div class="p-3 border-b">
				<div class="flex items-center">
					<p class="font-semibold text-sm">
						Notifications ({{ countNotifications }})
					</p>
					<span v-if="notifications.length" role="button" @click="markAllAsRead" class="font-medium ml-auto text-sm text-primary-500 hover:underline hover:text-primary-600">Mark As Read</span>
				</div>
			</div>

			<!-- Notification List -->
			<div style="max-height: 245px; overflow: auto">
				<div v-if="notifications.length">
					<div role="button" class="border-b px-4 py-2 text-sm leading-5 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition" @click="handleClick(notification)" v-for="notification in notifications" :key="notification.id" :class="{'bg-gray-50' : notification.read_at === null}">
						<div class="">
							<p class="mb-1" :class="{
								'text-indigo-500': notification.data.type == 'info', 
								'text-green-500': notification.data.type == 'success', 
								'text-yellow-500': notification.data.type == 'warning',
								'text-red-500': notification.data.type == 'error',
								'font-semibold' : notification.read_at === null }">{{ notification.data.title }}</p>
							<p class="text-xs text-gray-700 truncate font-normal">
								{{ notification.data.subtitle }}
							</p>
						</div>
					</div>
				</div>
				<div v-else>
					<div class="text-gray-500 text-center w-full py-3 border-b text-sm">No notifications found</div>
				</div>
			</div>

			<!-- Clear Notification -->
			<div class="p-2 text-center">
				<a class="font-medium text-sm text-primary-500 hover:text-primary-600 hover:underline" href="javascript:void(0)" @click.prevent="clearAll">Clear All</a>
			</div>
		</template>
	</dropdown>
</template>

<script>
export default {
	props:['countNotifications'],
	data() {
		return {
			notifications: [],
		};
	},
	
};
</script>


<style lang="scss" scoped>
</style>