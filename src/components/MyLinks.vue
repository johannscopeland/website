<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>YouTube</template>

    <p>
      You can watch my videos on <a href="https://www.youtube.com/c/JohannesCopeland">My YouTube Channel</a>.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Blog</template>

    <p>
      You can read my blog posts at <a href="https://blog.johannescopeland.com">My Medium Blog</a>.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>𝕏</template>

    I post daily to <a href="https://twitter.com/jcopelandblog">Twitter</a>. Follow me to stay up to date
    with my latest content and AI projects.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>GitHub</template>

    Looking for my code? Check out my
    <a href="https://github.com/AIByJohannes">GitHub Profile</a>
  </WelcomeItem>
</template>
