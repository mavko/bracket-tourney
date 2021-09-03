<template>
	<v-container fluid>

		<!---------------- 
		Custom lines drawn to link tournament stages
		----------------->
		<connectors />

		<!---------------- 
		Starter group first row
		Showcase teams
		----------------->
		<starter-group-one />
		
		<!---------------- 
		Starter group second row
		Showcase teams
		----------------->
		<starter-group-two />

		<!---------------- 
		Tournament final and grand final
		Showcase teams
		----------------->
		<v-row no-gutters dense justify="space-between" class="my-5">
			<!-- 
				Filler First Column
			-->
			<final-group-filler />

			<!---------------- 
			Finalists group, third row, second column 
			Showcase teams
			Edit in components/final-groups/
			----------------->
			<v-col
				cols="12"
				md="3"
				lg="3"
				style="min-width: 200px;"
				class="flex-grow-0 flex-shrink-0"
			>
				<final-group-one />

				<v-spacer class="my-8"></v-spacer>

				<final-group-two />
			</v-col>

			<!---------------- 
			Grand finalists group third row, last column 
			Showcase teams
			Edit in components/grand-final-group/
			----------------->
			<grand-final-group />

		</v-row>

		<!---------------- 
		Starter group fourth row
		Showcase teams
		Edit in components/starter-groups/
		----------------->
		<starter-group-three />

		<!---------------- 
		Starter group fifth row
		Showcase teams
		Edit in components/starter-groups/
		----------------->
		<starter-group-four />
	</v-container>
</template>

<script>
import connectors from '../graphics/connectors.vue'
import starterGroupOne from '../team-groups/starter-groups/starter-group-one.vue'
import starterGroupTwo from '../team-groups/starter-groups/starter-group-two.vue'
import starterGroupThree from '../team-groups/starter-groups/starter-group-three.vue'
import starterGroupFour from '../team-groups/starter-groups/starter-group-four.vue'
import finalGroupFiller from '../team-groups/final-groups/final-group-filler.vue'
import finalGroupOne from '../team-groups/final-groups/final-group-one.vue'
import finalGroupTwo from '../team-groups/final-groups/final-group-two.vue'
import grandFinalGroup from '../team-groups/grand-final-group/grand-final-group.vue'

export default {
	name: 'brackets',
	components: {
		connectors,
		starterGroupOne,
		starterGroupTwo,
		starterGroupThree,
		starterGroupFour,
		finalGroupFiller,
    finalGroupOne,
		finalGroupTwo,
		grandFinalGroup
	},
}
</script>
<style>
/* Sta,
StarterGroupFourtus color for teams - winners / losers
–––––––––––––––––––––––––––––––––––––––––––––––––– */
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
