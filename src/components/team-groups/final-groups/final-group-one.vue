<template>
	<div>
		<v-alert
			light
			min-width="300"
			class="text-body-1 font-weight-bold black--text mb-2 overflow-hidden"
			rounded="lg"
			elevation="12"
		>
      <!-- 
        Edit team logo
       -->
			<v-avatar left color="white" size="30" class="mr-1">
				<img src="@/assets/logos/100-thieves-logo.svg" alt="" />
			</v-avatar>
      <!-- 
        Edit team name and score
       -->
			100 Thieves
			<div class="text-right team-score">2</div>
      <!-- 
        Edit team win/lose colors by
        css class __loser or __winner
       -->
			<div class="v-alert__border__winner"></div>
		</v-alert>
		<v-alert
			light
			min-width="300"
			class="text-body-1 font-weight-bold black--text mb-2 overflow-hidden"
			rounded="lg"
			elevation="12"
		>
      <!-- 
        Edit team logo
       -->
			<v-avatar left color="white" size="30" class="mr-1">
				<img src="@/assets/logos/ig.svg" alt="" />
			</v-avatar>
      <!-- 
        Edit team name and score
       -->
			OG
			<div class="text-right team-score">1</div>
      <!-- 
        Edit team win/lose colors by
        css class __loser or __winner
       -->
			<div class="v-alert__border__loser"></div>
		</v-alert>
	</div>
</template>
<script>
export default {
	name: 'finalGroupOne',
}
</script>
