// import React from 'react';
// import { shallow, mount, render } from 'enzyme';

// import Bill from '../components/Bill';

// describe('Bill', () => {
//   it('Should render', () => {
//     expect(shallow(<Bill />).exists()).toBe(true)
//   });

//   it('Should render dates correctly', () => {
//     const wrapper = shallow(<Bill />); 
//     expect(wrapper.instance().formatDate('2018-10-06')).toBe('6th Oct 2018');
//   });

//   it('Should render currencies correctly', () => {
//     const wrapper = shallow(<Bill />); 
//     expect(wrapper.instance().formatCurrency('110.7')).toBe('£110.70');
//   });
// });