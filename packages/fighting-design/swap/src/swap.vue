<script lang="ts" setup name="FSwap">
  import { Props } from './props'
  import { FSvgIcon } from '../../svg-icon'
  import { useRun } from '../../_hooks'
  import { computed } from 'vue'
  import { EMIT_UPDATE } from '../../_tokens'
  import type { ClassList } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits({
    [EMIT_UPDATE]: (target: boolean): boolean => target
  })

  /** 切换时执行 */
  const changeSwap = (): void => {
    emit(EMIT_UPDATE, !prop.modelValue)
    useRun(prop.onChange, !prop.modelValue)
  }

  /** 类名列表 */
  const classList = computed((): ClassList => {
    const { modelValue, type } = prop

    return ['f-swap', modelValue ? `f-swap__${type}-on` : `f-swap__${type}-off`] as const
  })
</script>

<template>
  <div role="switch" :class="classList" @click="changeSwap">
    <f-svg-icon :icon="modelValue ? iconOn : iconOff" :size="size" />
  </div>
</template>
