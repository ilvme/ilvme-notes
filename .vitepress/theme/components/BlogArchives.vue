<script setup>
import { data as originalPosts } from '../../../notes/blogs/blogs.data.js'
import { computed } from 'vue'
import { formatTime } from '../../../scripts/utils.js'
import { useRouter } from 'vitepress'

const posts = computed(() => originalPosts.filter((item) => item.frontmatter.layout !== 'page'))
console.log(posts.value)

const router = useRouter()
const onGoToPostPage = ({ url }) => {
  router.go(url)
}
</script>

<template>
  <div style="width: 60%; max-width: 800px; margin: 0 auto">
    <div v-for="post in posts" class="blog-item-container" @click="onGoToPostPage(post)">
      <Badge v-for="tag in post.frontmatter.tags" :text="tag" type="danger" />

      <h2 class="post-title">{{ post.frontmatter.title }}</h2>
      <p style="font-size: 0.8rem">{{ post.frontmatter.description }}</p>
      <p style="font-size: 0.8rem; text-align: right">
        {{ formatTime(post.frontmatter.date, 'YYYY-MM-DD') }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.blog-item-container {
  border: 1px var(--vp-c-divider) solid;
  margin: 20px 0;
  padding: 20px 20px 10px 20px;
  border-radius: 20px;

  cursor: pointer;
}

.blog-item-container:hover {
  background-color: var(--vp-c-divider);
  border-color: var(--vp-c-border);
}

.post-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin: 10px 0;
}
</style>
