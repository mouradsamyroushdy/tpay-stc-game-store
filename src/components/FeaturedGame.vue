<template>
  <div class="card px-0">
    <div class="row gx-0">
      <div class="col-12 col-sm-9">
        <img v-bind:src="game.poster" />
      </div>

      <div class="col-12 col-sm-3">
        <div class="info">
          <span class="title">{{ game.title }}</span>
          <span class="company">{{ game.company }}</span>
          <span class="description">{{ game.description }}</span>
          <span class="downloads">{{ game.downloads }} Downloads</span>

          <a class="more btn btn-primary w-100" v-bind:href="game.link"
            >MORE INFO</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedGame",
  props: { game: Object }
};
</script>

<style lang="scss" scoped>
.card {
  height: 299px;
  overflow: hidden;
  .info {
    padding: 28px;
    .title {
    }
    .company {
    }
    .description {
    }
    .downloads {
    }
    .more {
    }
  }
  img {
    width: 100%;
    position: center;
  }
}
</style>
