/* eslint-disable prettier/prettier */
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {InputComponent} from '../src/components/InputComponent/InputComponent';
import {regexDefault, regexEmail, regexDate, validateCase} from '../constants/RegularExpressions';
import {TestButton} from '../src/components/TestButton/TestButton';
import {act} from 'react-test-renderer';
import {toBeDisabled} from '@testing-library/jest-native';

expect.extend({toBeDisabled});
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper'); // removes the console warning: Animated: `useNativeDriver` is not supported because the native animated module is missing

describe('testing the functionality of the PersonalInfoScreen', () => {
  it('should render the component', () => {
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} />);
    const testTextInput = getByTestId('testTextInput');

    expect(testTextInput).toBeDefined();
  });

  it('should locate the TextInput child of the InputComponent parent', () => {
    const setValueMock = jest.fn();
    const {getAllByTestId} = render(<InputComponent setValue={setValueMock} />);
    const testTextInputOccurrences = getAllByTestId('testTextInput');

    expect(testTextInputOccurrences).toHaveLength(1);
    expect(testTextInputOccurrences).not.toHaveLength(2);
  });

  it('should handle a normal default text input change', () => {
    const value = 'Max';
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, value);
    const result = validateCase(setValueMock.mock.calls[0][0], regexDefault);
    expect(result).toBe(true);
  });

  it('should handle an erroneous default text input change', () => {
    const value = '657483     Max   *&&^%$%^';
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, value);
    const result = validateCase(setValueMock.mock.calls[0][0], regexDefault);
    expect(result).toBe(false);
  });

  it('should handle a normal email text input change', () => {
    const value = 'example_email@gmail.co.uk';
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} inputType="email" />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, value);
    const result = validateCase(setValueMock.mock.calls[0][0], regexEmail);
    expect(result).toBe(true);
  });

  it('should handle an erroneous email text input change', () => {
    const value = '   &&^^%$$$!@@gmail.c.c.c    ';
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} inputType="email" />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, value);
    const result = validateCase(setValueMock.mock.calls[0][0], regexEmail);
    expect(result).toBe(false);
  });

  it('should handle a normal date of birth text input change', () => {
    const value = '26/08/2001';
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} inputType="date" />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, value);
    const result = validateCase(setValueMock.mock.calls[0][0], regexDate);
    expect(result).toBe(true);
  });

  it('should enable the TestButton component when all fields are validated', () => {
    const testID = 'testButton';
    const validated = false;
    const component = render(<TestButton alertMessage="test message" disabled={!validated} />);
    let testButton = component.getByTestId(testID);

    expect(testButton).toBeDisabled();
    act(() => {
      component.rerender(<TestButton alertMessage="test message" disabled={validated} />);
    });
    expect(testButton).not.toBeDisabled();
  });
});
