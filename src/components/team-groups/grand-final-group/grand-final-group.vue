<template>
	<v-col
		cols="12"
		md="2"
		lg="2"
		style="min-width: 200px;"
		class="d-flex align-content-center flex-wrap"
	>
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
			<span>100 Thieves</span> 
			<div class="text-right team-score">0</div>
      <!-- 
        Edit team win/lose colors by
        css class __loser or __winner
       -->
			<div class="v-alert__border__loser"></div>
		</v-alert>
		<v-alert
			light
			min-width="300"
			class="text-body-1 font-weight-bold mt-2 overflow-hidden"
			rounded="lg"
			elevation="12"
		>
      <!-- 
        Edit team logo
       -->
			<v-avatar left color="white" size="30" class="mr-1">
				<img src="@/assets/logos/dotaunderload.svg" alt="" />
			</v-avatar>
      <!-- 
        Edit team name and score
       -->
			Natus Vincere
			<div class="text-right team-score">2</div>
      <!-- 
        Edit team win/lose colors by
        css class __loser or __winner
       -->
			<div class="v-alert__border__winner"></div>
		</v-alert>
	</v-col>
</template>
<script>
export default {
	name: 'grandFinalGroup',
}
</script>
