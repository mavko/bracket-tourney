<template>
<!---------------- 
Header title
Showcase League title and league sponsors or organizers 
----------------->
<div>
  <v-card-title class="text-h3">
  <img
    src="@/assets/logos/valo-logo.svg"
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
        <v-img src="@/assets/logos/riot-logo.png"></v-img>
      </v-avatar>
      Riot Games
    </v-chip>
  </p>
</v-card-title>
</div>
</template>
<script>
export default {
	name: 'baseCardTitle',
}
</script>
