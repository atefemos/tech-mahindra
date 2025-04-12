import { shallowMount } from '@vue/test-utils';
import UserCard from '@/components/UserCard.vue';

describe('UserCard.vue', () => {
  const user = {
    picture: { large: 'https://example.com/user.jpg' },
    name: { first: 'John', last: 'Doe' },
    location: {
      street: { number: '123', name: 'Main St' },
      city: 'Tokio',
      country: 'Japan'
    },
    cell: '123-456-7890'
  };

  it('renders the user information correctly', () => {
    const wrapper = shallowMount(UserCard, {
      propsData: { user }
    });

    // Check that the image source is correct
    expect(wrapper.find('img').attributes('src')).toBe(user.picture.large);

    // Check that the full name is displayed correctly
    expect(wrapper.find('.full-name').text()).toBe(`${user.name.first} ${user.name.last}`);

    // Check that the address details are displayed correctly
    const addressParagraphs = wrapper.findAll('.address p');
    expect(addressParagraphs.at(0).text()).toBe(`${user.location.street.number} ${user.location.street.name}`);
    expect(addressParagraphs.at(1).text()).toBe(user.location.city);
    expect(addressParagraphs.at(2).text()).toBe(user.location.country);

    // Check that the phone link is correct
    expect(wrapper.find('a').attributes('href')).toBe(`tel:${user.cell}`);
    expect(wrapper.find('a').text()).toBe(`call ${user.cell}`);
  });
});
