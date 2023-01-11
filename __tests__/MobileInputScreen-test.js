/* eslint-disable prettier/prettier */
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {MobileInputComponent} from '../src/components/MobileInputComponent/MobileInputComponent';
import {TestButton} from '../src/components/TestButton/TestButton';
import {toHaveProp} from '../@types/toHaveProp';

//expect.extend({toHaveProp});

describe('testing the full functionality of the MobileInputScreen', () => {
  it('should render the component', () => {
    const setValueMock = jest.fn(); // creates a mock function to be a placeholder for the non-optional-to-include-in-the-props setValue function
    const {getByTestId} = render(<MobileInputComponent setValue={setValueMock} />); // creates a 'shallow wrapper' to isolate the testing of the respective parent component to be tested
    const testTextInput = getByTestId('testTextInput'); // retrieves the only component with a testID of 'testTextInput'

    expect(testTextInput).toBeDefined(); // checks that the component gets mounted
  });

  it('should locate the TextInput child of the MobileInputComponent parent', () => {
    const setValueMock = jest.fn();
    const {getAllByTestId} = render(<MobileInputComponent setValue={setValueMock} />);
    const testTextInputOccurrences = getAllByTestId('testTextInput'); // retrieves all occurrences of components that have a testID of 'testTextInput'

    expect(testTextInputOccurrences).toHaveLength(1); // expects the number of components matching the above statement to be 1
    expect(testTextInputOccurrences).not.toHaveLength(2); // expects the number of components matching above statement to NOT be 2
  });

  // tests for a normal phone number input
  it('should handle a regular text input change', () => {
    const phoneNumber = '7752202630'; // creates a placeholder test value phone number
    const setValueMock = jest.fn();
    const {getByTestId} = render(<MobileInputComponent setValue={setValueMock} />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, phoneNumber);
    expect(setValueMock).toHaveBeenCalledWith('7752202630'); // checks the setValue function gets called with the expected phone number
  });

  // tests for a phone number input that matches respective criteria of the parent component
  it('should handle an extreme text input change', () => {
    const phoneNumber = '7752202630';
    const valueMock = jest.fn('');
    const setValueMock = jest.fn();
    const {getByTestId} = render(<MobileInputComponent setValue={setValueMock} value={valueMock} />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, phoneNumber);
    expect(setValueMock.mock.calls[0][0][0]).toBe('7') && // checks the phone number starts with 7
    expect(setValueMock.mock.calls[0][0]).toHaveLength(10); // checks the phone number has 10 characters
  });

  // tests that all cases that do NOT match the criteria come back as false
  it('should handle an erroneous text input change', () => {
    const phoneNumber = '57369321';
    const valueMock = jest.fn('');
    const setValueMock = jest.fn();
    const {getByTestId} = render(<MobileInputComponent setValue={setValueMock} value={valueMock} />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, phoneNumber);
    expect(setValueMock.mock.calls[0][0][0]).not.toBe('7') && // .not is used to expect the test case to 'fail' which passes the test
    expect(setValueMock.mock.calls[0][0]).not.toHaveLength(10);
  });

  // tests if the TestButton becomes enabled after the mobileInput value reaches 10 acceptable numbers
  // it('should make the TestButton enabled after the mobileInput value reaches 10 acceptable numbers', () => {
  //   const phoneNumber = '7752202630';
  //   const valueMock = jest.fn('');
  //   const setValueMock = jest.fn();
  //   const component1 = render(<MobileInputComponent setValue={setValueMock} value={valueMock} />);
  //   const testTextInput = component1.getByTestId('testTextInput');
  //   const messageMock = jest.fn('');
  //   const component2 = render(<TestButton alertMessage={messageMock} disabled={true} />);

  //   expect(component2).toHaveProp('disabled', true);
  //   fireEvent.changeText(testTextInput, phoneNumber);
  // });
});
