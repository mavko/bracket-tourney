<template>
	<div>
		<div class="bracket">
			<section class="round quarterfinals">
				<div class="winners">
					<div class="matchups">
						<div class="matchup">
							<div class="participants">
                                    <v-alert
                                        color="black"
                                        min-width="200"
                                        class="text-body-1 font-weight-bold mb-1 overflow-hidden"
                                        rounded="lg"
                                    >
                                        <v-avatar left color="white" size="30" class="mr-1">
                                            <img src="../assets/100_Thieves_logo.svg" alt="">
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
                                            <img src="../assets/cloud-data.svg" alt="">
                                        </v-avatar>
                                        Evil Geniuses
                                        <div class="v-alert__border__loser"></div>
                                    </v-alert>
							</div>
						</div>
						<div class="matchup">
							<div class="participants">
                                <v-alert
                                    color="black"
                                    min-width="200"
                                    class="text-body-1 font-weight-bold mb-1 overflow-hidden"
                                >
                                    <v-avatar left color="white" size="30" class="mr-1">
                                        <img src="../assets/ig.svg" alt="">
                                    </v-avatar>
                                    OG
                                    <div class="v-alert__border__winner"></div>
                                </v-alert>
                                <v-alert
                                    color="black"
                                    class="text-body-1 font-weight-bold mb-1 overflow-hidden"
                                >
                                    <v-avatar left color="white" size="30" class="mr-1">
                                        <img src="../assets/overwatch.svg" alt="">
                                    </v-avatar>
                                    NRG
                                    <div class="v-alert__border__loser"></div>
                                </v-alert>
							</div>
						</div>
					</div>
					<div class="connector">
						<div class="merger"></div>
						<div class="line"></div>
					</div>
				</div>
				<div class="winners">
					<div class="matchups">
						<div class="matchup">
							<div class="participants">
                                    <v-alert
                                        border="right"
                                        color="primary"
                                        min-width="200"
                                        class="text-body-1 font-weight-bold black--text mb-1"
                                    >
                                        <v-avatar left color="white" size="30" class="mr-1">
                                            <img src="../assets/secret.svg" alt="">
                                        </v-avatar>
                                        Team Secret
                                    </v-alert>
                                    <v-alert
                                        border="right"
                                        color="gray"
                                        class="mb-1"
                                        
                                    >
                                        <v-avatar left color="white" size="30" class="mr-1">
                                            <img src="../assets/liquid.svg" alt="">
                                        </v-avatar>
                                        Virtus Pro
                                    </v-alert>
							</div>
						</div>
						<div class="matchup">
							<div class="participants">
                                    <v-alert
                                        border="right"
                                        color="primary"
                                        min-width="200"
                                        class="text-body-1 font-weight-bold black--text mb-1"
                                    >
                                        <v-avatar left color="white" size="30" class="mr-1">
                                            <img src="../assets/dotaunderload.svg" alt="">
                                        </v-avatar>
                                        Natus Vincere
                                    </v-alert>
                                    <v-alert
                                        border="right"
                                        color="gray"
                                        class="mb-1"
                                        
                                    >
                                        <v-avatar left color="white" size="30" class="mr-1">
                                            <img src="../assets/hearthstone.svg" alt="">
                                        </v-avatar>
                                        BIG
                                    </v-alert>
							</div>
						</div>
					</div>
					<div class="connector">
						<div class="merger"></div>
						<div class="line"></div>
					</div>
				</div>
			</section>
			<section class="round semifinals">
				<div class="winners">
					<div class="matchups">
						<div class="matchup">
							<div class="participants">
                                    <v-alert
                                        border="right"
                                        color="gray"
                                        class="mb-1"
                                        
                                    >
                                        100 Thieves
                                    </v-alert>
                                    <v-alert
                                        border="right"
                                        color="primary"
                                        min-width="200"
                                        class="text-body-1 font-weight-bold black--text mb-1"
                                    >
                                        OG
                                    </v-alert>
							</div>
						</div>
						<div class="matchup">
							<div class="participants">
                                    <v-alert
                                        border="right"
                                        color="gray"
                                        class="mb-1"
                                        
                                    >
                                        Team Secret
                                    </v-alert>
                                    <v-alert
                                        border="right"
                                        color="primary"
                                        min-width="200"
                                        class="text-body-1 font-weight-bold black--text mb-1"
                                    >
                                        Natus Vincere
                                    </v-alert>
							</div>
						</div>
					</div>
					<div class="connector">
						<div class="merger"></div>
						<div class="line"></div>
					</div>
				</div>
			</section>
			<section class="round finals">
				<div class="winners">
					<div class="matchups">
						<div class="matchup">
							<div class="participants">
                                    <v-alert
                                        border="right"
                                        color="primary"
                                        min-width="200"
                                        class="text-body-1 font-weight-bold black--text mb-1"
                                    >
                                        100 Thieves
                                    </v-alert>
                                    <v-alert
                                        border="right"
                                        color="gray"
                                        class="mb-1"
                                        
                                    >
                                        Evil Geniuses
                                    </v-alert>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: 'brackets',
}
</script>
<style scoped>
/* base layout */
.bracket .round {
	display: inline-block;
	vertical-align: middle;
}
.bracket .round .winners > div {
	display: inline-block;
	vertical-align: middle;
}



.bracket .round .winners > div.connector .line,
.bracket .round .winners > div.connector .merger {
	box-sizing: border-box;
	width: 2rem;
	display: inline-block;
	vertical-align: top;
}
.bracket .round .winners > div.connector .line {
	border-bottom: thin solid #7c8abb;
	height: 4rem;
    width: 18rem;
}
.bracket .round .winners > div.connector .merger {
	position: relative;
	height: 8.2rem;
}
.bracket .round .winners > div.connector .merger:before,
.bracket .round .winners > div.connector .merger:after {
	content: '';
	display: block;
	box-sizing: border-box;
	width: 100%;
	height: 50%;
	border: 0 solid;
	border-color: #7c8abb;
}
.bracket .round .winners > div.connector .merger:before {
	border-right-width: thin;
	border-top-width: thin;
}
.bracket .round .winners > div.connector .merger:after {
	border-right-width: thin;
	border-bottom-width: thin;
}
.bracket .round.quarterfinals .winners:not(:last-child) {
	margin-bottom: 2rem;
}
.bracket .round.quarterfinals .winners .matchups .matchup:not(:last-child) {
	margin-bottom: 2rem;
}
.bracket .round.semifinals .winners .matchups .matchup:not(:last-child) {
	margin-bottom: 10rem;
}
.bracket .round.semifinals .winners .connector .merger {
	height: 16rem;
}
.bracket .round.semifinals .winners .connector .line {
	height: 8rem;
}
.bracket .round.finals .winners .connector .merger {
	height: 3rem;
}
.bracket .round.finals .winners .connector .line {
	height: 1.5rem;
}
.v-alert__border__winner {
    border-style: solid;
    border-width: 4px;
    content: "";
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
    content: "";
    position: absolute;
    opacity: 1;
    color: #ba1010;
    height: 100%;
    right: 0;
    top: 0;
}
</style>
