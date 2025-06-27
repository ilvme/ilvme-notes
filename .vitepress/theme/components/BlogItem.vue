<script setup>

</script>

<template>
  <div class="">
    <a :href="post.url">{{ post.frontmatter.title }}</a>
    <div>
          <span style="margin-right: 10px; font-size: 0.8em">
            {{ formatTime(post.frontmatter.date, 'YYYY/MM/DD') }}
          </span>

      <!-- tags -->
      <Badge v-for="tag in post.frontmatter.tags" type="info" :text="'# ' + tag" />
      <Badge type="warning" :text="post.frontmatter.category" />
    </div>
  </div>
</template>

<style scoped>

</style>