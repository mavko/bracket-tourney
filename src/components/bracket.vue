<template>
	<v-container fluid>
		<seperator-top />
		<v-row no-gutters justify="space-between">
			<v-col cols="12" md="3" lg="3" class="flex-grow-0 flex-shrink-0">
				<v-alert
					color="black"
					min-width="200"
					class="text-body-1 font-weight-bold mb-1 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/100_Thieves_logo.svg" alt="" />
					</v-avatar>
					100 Thieves
					<div class="v-alert__border__winner"></div>
				</v-alert>
				<v-alert
					color="black"
					class="text-body-1 font-weight-bold mb-1 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/cloud-data.svg" alt="" />
					</v-avatar>
					Evil Geniuses
					<div class="v-alert__border__loser"></div>
				</v-alert>
			</v-col>
		</v-row>
		<!-- second row teams -->
		<v-row no-gutters justify="space-between" class="my-5">
			<v-col cols="12" md="3" lg="3" class="flex-grow-0 flex-shrink-0">
				<v-alert
					color="black"
					min-width="200"
					class="text-body-1 font-weight-bold mb-1 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/ig.svg" alt="" />
					</v-avatar>
					OG
					<div class="v-alert__border__winner"></div>
				</v-alert>
				<v-alert
					color="black"
					class="text-body-1 font-weight-bold mb-1 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/overwatch.svg" alt="" />
					</v-avatar>
					NRG
					<div class="v-alert__border__loser"></div>
				</v-alert>
			</v-col>
		</v-row>
		<!-- third row finalists + grand final -->

		<v-row no-gutters dense justify="space-between" class="my-5">
			<!-- filler spot -->
			<v-col
				cols="12"
				md="3"
				lg="3"
				style="min-width: 200px;"
				class="flex-grow-1 flex-shrink-0"
			></v-col>
			<!-- finalists -->
			<v-col
				cols="12"
				md="3"
				lg="3"
				style="min-width: 200px;"
				class="flex-grow-1 flex-shrink-0"
			>
				<v-alert
					color="black"
					min-width="200"
					class="text-body-1 font-weight-bold mb-1 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/100_Thieves_logo.svg" alt="" />
					</v-avatar>
					100 Thieves
					<div class="v-alert__border__winner"></div>
				</v-alert>
				<v-alert
					color="black"
					class="text-body-1 font-weight-bold mb-1 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/ig.svg" alt="" />
					</v-avatar>
					OG
					<div class="v-alert__border__loser"></div>
				</v-alert>
				<v-spacer class="my-8">
					<!-- spacer between finalists -->
				</v-spacer>
				<v-alert
					color="black"
					min-width="200"
					class="text-body-1 font-weight-bold mb-1 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/dotaunderload.svg" alt="" />
					</v-avatar>
					Natus Vincere
					<div class="v-alert__border__winner"></div>
				</v-alert>
				<v-alert
					color="black"
					class="text-body-1 font-weight-bold mb-1 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/liquid.svg" alt="" />
					</v-avatar>
					Virtus Pro
					<div class="v-alert__border__loser"></div>
				</v-alert>
			</v-col>
			<!-- grand finalists -->
			<v-col
				cols="12"
				md="2"
				lg="2"
				style="min-width: 200px;"
				class="d-flex align-content-center flex-wrap"
			>
				<v-alert
					color="black"
					min-width="200"
					class="text-body-1 font-weight-bold mb-2 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/100_Thieves_logo.svg" alt="" />
					</v-avatar>
					100 Thieves
					<div class="v-alert__border__loser"></div>
				</v-alert>
				<v-alert
					color="black"
					min-width="200"
					class="text-body-1 font-weight-bold mt-2 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/dotaunderload.svg" alt="" />
					</v-avatar>
					Natus Vincere
					<div class="v-alert__border__winner"></div>
				</v-alert>
			</v-col>
		</v-row>
		<!-- third lower bracket -->
		<v-row no-gutters justify="space-between">
			<v-col cols="12" md="3" lg="3" class="flex-grow-0 flex-shrink-0">
				<v-alert
					color="black"
					min-width="200"
					class="text-body-1 font-weight-bold mb-1 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/liquid.svg" alt="" />
					</v-avatar>
					Virtus Pro
					<div class="v-alert__border__winner"></div>
				</v-alert>
				<v-alert
					color="black"
					class="text-body-1 font-weight-bold mb-1 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/secret.svg" alt="" />
					</v-avatar>
					Team Secret
					<div class="v-alert__border__loser"></div>
				</v-alert>
			</v-col>
		</v-row>
		<!-- fourth lower bracket -->
		<v-row no-gutters justify="space-between" class="my-5">
			<v-col cols="12" md="3" lg="3" class="flex-grow-0 flex-shrink-0">
				<v-alert
					color="black"
					min-width="200"
					class="text-body-1 font-weight-bold mb-1 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/dotaunderload.svg" alt="" />
					</v-avatar>
					Natus Vincere
					<div class="v-alert__border__winner"></div>
				</v-alert>
				<v-alert
					color="black"
					class="text-body-1 font-weight-bold mb-1 overflow-hidden"
					rounded="lg"
				>
					<v-avatar left color="white" size="30" class="mr-1">
						<img src="../assets/hearthstone.svg" alt="" />
					</v-avatar>
					BIG
					<div class="v-alert__border__loser"></div>
				</v-alert>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import seperatorTop from './seperator-top.vue'

export default {
	name: 'brackets',
	components: {
		seperatorTop,
	},
}
</script>
<style scoped>
/* status color */
.v-alert__border__winner {
	border-style: solid;
	border-width: 4px;
	content: '';
	position: absolute;
	opacity: 1;
	color: #10baa8;
	height: 100%;
	right: 0;
	top: 0;
}
.v-alert__border__loser {
	border-style: solid;
	border-width: 4px;
	content: '';
	position: absolute;
	opacity: 1;
	color: #ba1010;
	height: 100%;
	right: 0;
	top: 0;
}
</style>
