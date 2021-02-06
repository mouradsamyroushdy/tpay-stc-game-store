<template>
  <div class="card px-0">
    {{ title }}
    <!-- <a v-bind:href="link" class="btn btn-primary">SEE ALL</a> -->

    <div class="d-flex justify-content-center">
      <div v-for="game in games" :key="game.id" class="game">
        <div class="card border-0">
          <img v-bind:src="game.poster" class="card-img-top poster" />
          <div class="card-body px-0">
            <p class="card-text">
              {{ game.description }}
            </p>
            <router-link :to="'/game/' + game.id">
              <a class="btn btn-sm btn-primary">MORE INFO</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamesList",
  props: {
    link: String,
    title: String,
    games: Array
  }
};
</script>

<style lang="scss" scoped>
.game {
  width: 134px + 2 * 7px;
  padding: 7px;
  .poster {
    width: 134px;
    height: 134px;
    border-radius: 12px;
  }
}
</style>
