import _ from 'lodash';

const data = [
  {
    username: 'joni',
    role: 'admin'
  },
  {
    username: 'aby',
    role: 'seller'
  },
  {
    username: 'mata',
    role: 'seller'
  },
  {
    username: 'migue',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);
