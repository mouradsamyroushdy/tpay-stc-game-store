<template>
  <div class="row">
    <!--(Featured Game)-->
    <FeaturedGame :game="game"></FeaturedGame>

    <!--(Most Recommendation)-->
    <GamesList
      class="mt-4"
      :games="recommendations"
      :title="'Most Recommendations'"
      :link="recommendationsLink"
    ></GamesList>

    <!--(Most Popular)-->
    <GamesList
      class="mt-4"
      :games="popular"
      :title="'Most Popular'"
      :link="popularLink"
    ></GamesList>
  </div>
</template>

<script>
import http from "../services/http";

import FeaturedGame from "../components/FeaturedGame.vue";
import GamesList from "../components/GamesList.vue";

export default {
  name: "Home",
  components: {
    FeaturedGame,
    GamesList
  },
  data() {
    return {
      game: {
        description: "SURF the urban wave! DODGE the oncoming trains!",
        title: "Subway Surfers",
        company: "SYBO Games",
        poster:
          "https://via.placeholder.com/559x300.png/000000/FFFFFF?text=POSTER"
      },
      recommendations: null,
      popular: [
        {
          description: "SURF the urban wave! DODGE the oncoming trains!",
          title: "Subway Surfers",
          company: "SYBO Games",
          poster:
            "https://via.placeholder.com/300x300.png/000000/FFFFFF?text=POSTER"
        },
        {
          description: "SURF the urban wave! DODGE the oncoming trains!",
          title: "Subway Surfers",
          company: "SYBO Games",
          poster:
            "https://via.placeholder.com/300x300.png/000000/FFFFFF?text=POSTER"
        },
        {
          description: "SURF the urban wave! DODGE the oncoming trains!",
          title: "Subway Surfers",
          company: "SYBO Games",
          poster:
            "https://via.placeholder.com/300x300.png/000000/FFFFFF?text=POSTER"
        },
        {
          description: "SURF the urban wave! DODGE the oncoming trains!",
          title: "Subway Surfers",
          company: "SYBO Games",
          poster:
            "https://via.placeholder.com/300x300.png/000000/FFFFFF?text=POSTER"
        },
        {
          description: "SURF the urban wave! DODGE the oncoming trains!",
          title: "Subway Surfers",
          company: "SYBO Games",
          poster:
            "https://via.placeholder.com/300x300.png/000000/FFFFFF?text=POSTER"
        }
      ]
    };
  },

  created() {
    http
      .get(`/games`)
      .then(response => {
        this.recommendations = response.data;
      })
      .catch();
  }
};
</script>
