<template>
	<v-app id="inspire" class="pa-5">
		<v-main>
			<background />
			<tournament-base />
		</v-main>
	</v-app>
</template>

<script>
import background from './components/graphics/background.vue'
import tournamentBase from './components/base/tournament-base.vue'

export default {
	name: 'app',
	components: {
		background,
		tournamentBase
	},
}
</script>
<style>
/*
TournamentBase Overriding vuetify framework styling with custom css
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.card-gradient {
	background: rgba(41, 47, 66, 0.8) !important;
}
.v-application {
	background: #0f1423 !important;
}
</style>
