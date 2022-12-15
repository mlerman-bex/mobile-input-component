import React from 'react';
import {Button, Text} from 'react-native';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {TestButton} from '../src/components/TestButton/TestButton';

configure({adapter: new Adapter()});

describe('Mobile Input', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button title="Press me" onPress={() => null} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should locate and press a button twice', () => {
    const onPressMock = jest.fn();
    const wrapper = shallow(<Button title="Press me" onPress={onPressMock} />);
    wrapper.simulate('press');
    wrapper.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(2);
  });

  it('should locate the test button', () => {
    const wrapper = shallow(<TestButton />); // creates a shallow wrapper which allows for testing an isolated component, making sure that one is the only one you're testing
    // const testButton = wrapper.find('Button'); // works too, but only if there is a singular Button as a child
    const testButton = wrapper.find({testID: 'testButton'});
    expect(testButton).toHaveLength(1);
    testButton.simulate('press');
  });

  it('should find a Text element inside the TestButton component', () => {
    const wrapper = shallow(<TestButton />);
    expect(wrapper.contains(<Text>Test text</Text>)).toBe(true);
  });
});
