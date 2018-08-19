<template>
  <div class="question">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Question extends Vue {
  @Prop() private msg!: string;
}
</script>