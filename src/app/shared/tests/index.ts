import type { Component } from 'vue';
import * as VueTestUtils from '@vue/test-utils';
import flushPromises from 'flush-promises';

export const mountComponent = async (
  component: Component,
  props?: Record<string, any>,
  typeMount: 'shallowMount' | 'mount' = 'shallowMount'
) => {
  await flushPromises();
  return await VueTestUtils[typeMount](component, {
    ...props,
    global:  {
      ...props?.global,
      directives: {
        ...props?.global?.directives
      }
    }
  });
};