export interface iCustomer {
  id: number;
  firstName: string;
  alterEgo: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  latitude: string;
  longitude: string;
}
const customers: iCustomer[] = [
  {
    id: 1,
    firstName: 'Batman',
    alterEgo: 'Bruce Wayne',
    email: 'batman@dccomics.com',
    phone: '555-555-5555',
    address: 'Gotham City',
    city: 'Gotham',
    state: 'NY',
    zip: '10001',
    country: 'USA',
    latitude: '40.730610',
    longitude: '-73.935242',
  },
];

export default customers;
