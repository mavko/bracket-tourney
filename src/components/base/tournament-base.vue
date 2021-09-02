<template>
	<!-- 
		Filler column to push final and grand final columns to the right
	-->
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="12" lg="12">
        <v-card class="card-gradient pa-6 mt-16" rounded="xl">
            <!---------------- 
            Header title
            Showcase League title and league sponsors or organizers 
            ----------------->
            <base-card-title />

            <!---------------- 
            Header subtitle
            Showcase Game, teams and tournmanet type
            ----------------->
            <base-card-subtitle />
            <!---------------- 
            Bracket titles
            Showcase tournament stages titles
            ----------------->
            <base-card-column-titles />
            <v-card-text>
              <!---------------- 
              Bracket 
              Showcase teams and progression
              ----------------->
              <bracket />
            </v-card-text>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import BaseCardColumnTitles from './base-card-column-titles.vue'
import baseCardSubtitle from './base-card-subtitle.vue'
import baseCardTitle from "./base-card-title.vue"
import bracket from './bracket.vue'

export default {
  name: 'tournamentBase',
  components: { 
    baseCardTitle,
    baseCardSubtitle,
    bracket,
    BaseCardColumnTitles
  },
}
</script>
<style>
.team-score {
  position: absolute;
  right: 30px;
  top: 18px;
  bottom: 0;
  font-size: 20px;
  background: #3C4256;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: #fff;
  padding: 3px 9px;
}
</style>