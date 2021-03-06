import InputGroup from './input-group'
import { mount } from '@vue/test-utils'

describe('input-group', () => {
  it('should have expected default structure', async () => {
    const wrapper = mount(InputGroup)

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('input-group')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.attributes('role')).toBeDefined()
    expect(wrapper.attributes('role')).toEqual('group')
    expect(wrapper.findAll('.input-group > *').length).toBe(0)
    expect(wrapper.text()).toEqual('')
  })

  it('should render custom root element when prop tag is set', async () => {
    const wrapper = mount(InputGroup, {
      propsData: {
        tag: 'span'
      }
    })

    expect(wrapper.is('span')).toBe(true)
    expect(wrapper.classes()).toContain('input-group')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.attributes('role')).toBeDefined()
    expect(wrapper.attributes('role')).toEqual('group')
    expect(wrapper.findAll('.input-group > *').length).toBe(0)
  })

  it('should apply size class when when prop size is set', async () => {
    const wrapper = mount(InputGroup, {
      propsData: {
        size: 'lg'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('input-group')
    expect(wrapper.classes()).toContain('input-group-lg')
    expect(wrapper.classes().length).toBe(2)
  })

  it('should render default slot content', async () => {
    const wrapper = mount(InputGroup, {
      slots: {
        default: 'foobar'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('input-group')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.text()).toEqual('foobar')
    expect(wrapper.findAll('.input-group > *').length).toBe(0)
  })

  it('renders input-group-prepend & input-group-append when prepend & append props set', async () => {
    const wrapper = mount(InputGroup, {
      propsData: {
        prepend: 'foo',
        append: 'bar'
      },
      slots: {
        default: 'foobar'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('input-group')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.text()).toEqual('foofoobarbar')
    expect(wrapper.findAll('.input-group > *').length).toBe(2)
    expect(wrapper.findAll('.input-group-prepend').length).toBe(1)
    expect(wrapper.findAll('.input-group-prepend > .input-group-text').length).toBe(1)
    expect(wrapper.find('.input-group-prepend').text()).toBe('foo')
    expect(wrapper.findAll('.input-group-append').length).toBe(1)
    expect(wrapper.findAll('.input-group-append > .input-group-text').length).toBe(1)
    expect(wrapper.find('.input-group-append').text()).toBe('bar')
    expect(wrapper.find('.input-group > .input-group-prepend ~ .input-group-append').exists()).toBe(
      true
    )
  })

  it('renders input-group-prepend & input-group-append when prepend & append slots present', async () => {
    const wrapper = mount(InputGroup, {
      slots: {
        default: 'foobar',
        prepend: 'foo',
        append: 'bar'
      }
    })

    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('input-group')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.text()).toEqual('foofoobarbar')
    expect(wrapper.findAll('.input-group > *').length).toBe(2)
    expect(wrapper.findAll('.input-group-prepend').length).toBe(1)
    expect(wrapper.findAll('.input-group-prepend > .input-group-text').length).toBe(0)
    expect(wrapper.find('.input-group-prepend').text()).toBe('foo')
    expect(wrapper.findAll('.input-group-append').length).toBe(1)
    expect(wrapper.findAll('.input-group-append > .input-group-text').length).toBe(0)
    expect(wrapper.find('.input-group-append').text()).toBe('bar')
    expect(wrapper.find('.input-group > .input-group-prepend ~ .input-group-append').exists()).toBe(
      true
    )
  })
})
