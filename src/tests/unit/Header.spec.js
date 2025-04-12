import { shallowMount } from '@vue/test-utils';
import HeaderSection from '@/components/Header.vue';

describe('Header-section.vue', () => {
  it('renders the component with the correct initial sort order', () => {
    const wrapper = shallowMount(HeaderSection, {
      propsData: { sortOrder: 'ascending' }
    });

    // Check that the select element has the correct initial value
    expect(wrapper.find('select').element.value).toBe('ascending');
  });

  it('emits changeSort event with the correct value when sort order is changed', async () => {
    const wrapper = shallowMount(HeaderSection, {
      propsData: { sortOrder: 'ascending' }
    });

    // Find the select element and set its value
    const select = wrapper.find('select');
    select.element.value = 'descending';
    await select.trigger('change'); // Trigger change event

    // Check that the event is emitted with the correct value
    expect(wrapper.emitted().changeSort).toBeTruthy();
    expect(wrapper.emitted().changeSort[0]).toEqual(['descending']);
  });
});
