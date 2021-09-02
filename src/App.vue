<template>
	<v-app id="inspire" class="pa-5">
		<img src="./assets/valo.png" class="main-bg" />
		<v-main>
			<v-container fluid>
				<v-row justify="center">
					<v-col cols="12" md="12" lg="12">
						<v-card class="card-gradient pa-6 mt-16" rounded="xl">
							<!---------------- 
							Header title
							Showcase League title and league sponsors or organizers 
							----------------->
							<v-card-title class="text-h3">
								<img
									src="./assets/valo-logo.svg"
									width="40"
									class="mr-3 my-3"
								/>
								Riot Pro League
								<v-spacer />
								<p class="text-body-1 mb-0 mt-6">
									Organised by:
									<v-chip
										rounded
										color="black"
										class="font-weight-bold text-body-1"
									>
										<v-avatar left>
											<v-img src="./assets/riot-logo.png"></v-img>
										</v-avatar>
										Riot Games
									</v-chip>
								</p>
							</v-card-title>
							<!---------------- 
							Header subtitle
							Showcase Game, teams and tournmanet type
							----------------->
							<v-card-subtitle>
								<v-row dense class="text-h6">
									<v-col cols="auto">
										Valorant
									</v-col>
									<v-col cols="auto">
										8/8 Teams (5v5)
									</v-col>
									<v-col cols="auto">
										Groups then Single Elimination
									</v-col>
								</v-row>
							</v-card-subtitle>
							<!---------------- 
							Bracket titles
							Showcase tournament stages titles
							----------------->
							<v-card-text>
								<v-divider></v-divider>
								<v-row class="my-2 text-body-1" justify="space-between">
									<v-col cols="auto">Semi-finals</v-col>
									<v-col cols="auto">Finals</v-col>
									<v-col cols="auto">Grand Final</v-col>
								</v-row>
								<v-divider class="mb-5"></v-divider>
								<bracket />
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import bracket from './components/bracket.vue'
export default {
	name: 'app',
	components: {
		bracket,
	},
}
</script>
<style scoped>
/* Valo background positioning
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.main-bg {
	position: absolute;
	z-index: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	image-rendering: optimizespeed;
	background-position: top;
	background-size: cover;
}
/* Overriding vuetify framework styling with custom css
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.card-gradient {
	background: rgba(41, 47, 66, 0.8) !important;
}
.v-application {
	background: #0f1423 !important;
}
</style>
