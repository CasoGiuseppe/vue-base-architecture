import { describe, it, expect, beforeEach } from 'vitest'
import { mountComponent } from '@tests/index'
import ComponentName from '../ComponentName.vue'
import i18n from '@translation/index'
import { $uiComponentRoot } from './utilities'
import type { VueWrapper } from '@vue/test-utils'

let $wrapper: VueWrapper
describe('ComponentName component test', () => {
  describe('Test HTML attribute', () => {
    beforeEach(async () => {
      $wrapper = await mountComponent(ComponentName, {
        global: {
          plugins: [i18n]
        }
      })
    })

    it('Should root element hace correct data-test-id', async () => {
      const DOMElement = await $wrapper.html()
      expect(DOMElement).contains(`data-testid="${$uiComponentRoot}"`)
    })
  })
})
