import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {MobileInputComponent} from '../src/components/MobileInputComponent/MobileInputComponent';

configure({adapter: new Adapter()});

describe('Mobile Input', () => {
  it('renders correctly', () => {
    const setValueMock = jest.fn();
    const wrapper = shallow(<MobileInputComponent setValue={setValueMock} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should locate the TextInput child of the MobileInputComponent parent', () => {
    const setValueMock = jest.fn();
    const wrapper = shallow(<MobileInputComponent setValue={setValueMock} />);
    const testTextInput = wrapper.find({testID: 'testTextInput'});

    expect(testTextInput).toHaveLength(1);
  });

  it('should input 10 numbers per UK phone number standards', () => {
    const setValueMock = jest.fn();
    const wrapper = shallow(<MobileInputComponent setValue={setValueMock} />);
    const testTextInput = wrapper.find({testID: 'testTextInput'});
  });
});
