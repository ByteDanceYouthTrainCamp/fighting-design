import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSlider } from '../index'

describe('FSlider', () => {
  test('class', () => {
    const wrapper = mount(FSlider, {
      props: { modelValue: 0 }
    })
    expect(wrapper.find('div').classes()).toContain('f-slider')
  })

  test('disabled', () => {
    const wrapper = mount(FSlider, {
      props: {
        modelValue: 0,
        disabled: true
      }
    })
    expect(wrapper.find('.f-slider').classes()).toContain('f-slider__disabled')
  })

  test('bgColor', () => {
    const wrapper = mount(FSlider, {
      props: {
        modelValue: 0,
        bgColor: '#bfa'
      }
    })
    expect(wrapper.find('.f-slider').attributes('style')).toContain('--f-slider-bg-color: #bfa')
  })
})
