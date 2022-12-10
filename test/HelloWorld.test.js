import { describe, expect, test } from 'vitest'
import App from '../app.vue'
import { setup, $fetch } from '@nuxt/test-utils'
import { mount } from '@vue/test-utils'

describe('My test', async () => {
  test('my test', () => {
    expect(true).toBe(true);
    expect(mount(App).text()).toBe("Hello world!");
  })
})
