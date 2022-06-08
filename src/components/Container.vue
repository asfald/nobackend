<template>
  <component :is="tag" :class="computedClassList">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'Container',
  props: {
    size: {
      type: String,
      validator: function (this: void, value: string): boolean {
        return ['small', 'medium', 'large', 'extra-large', 'full'].includes(
          value,
        );
      },
      default: 'medium',
    },
    tag: {
      type: String,
      default: 'section',
    },
       padding: {
      type: String,
      default: 'px-4',
    },
    center: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const computedClassList = computed(() => {
      return [
        'container w-full',
        {
          [`container--size-${props.size}`]: props.size,
          [props.padding]: props.padding,
          'mx-auto': props.center,
        },
      ];
    });
    return { computedClassList };
  },
});
</script>

<style>
:root {
  --container-size-default: 60.5rem;
  --container-size-small: 30rem;
  --container-size-medium: 50rem;
  --container-size-large: 73rem;
  --container-size-extra-large: 90rem;
}

.container {
  max-width: var(--container-size-default);
}

.container--size-small {
  max-width: var(--container-size-small);
}

.container--size-medium {
  max-width: var(--container-size-medium);
}

.container--size-large {
  max-width: var(--container-size-large);
}

.container--size-extra-large {
  max-width: var(--container-size-extra-large);
}

.container--size-full {
  @apply max-w-full;
}
</style>
