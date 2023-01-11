import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {InputComponent} from '../src/components/InputComponent/InputComponent';
import {regexEmail, regexMobile, regexPassword, validateCase} from '../constants/RegularExpressions';
import {TestButton} from '../src/components/TestButton/TestButton';
import {act} from 'react-test-renderer';
import {toBeDisabled} from '@testing-library/jest-native';

expect.extend({toBeDisabled});
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper'); // removes the console warning: Animated: `useNativeDriver` is not supported because the native animated module is missing

describe('testing the functionality of the LoginScreen', () => {
  it('should render the component', () => {
    const setValueMock = jest.fn();
    const testID = 'testTextInput';
    const {getByTestId} = render(<InputComponent setValue={setValueMock} />);
    const testTextInput = getByTestId(testID);

    expect(testTextInput).toBeDefined();
  });

  it('should locate the TextInput child of the InputComponent parent', () => {
    const setValueMock = jest.fn();
    const {getAllByTestId} = render(<InputComponent setValue={setValueMock} />);
    const testTextInputOccurrences = getAllByTestId('testTextInput');

    expect(testTextInputOccurrences).toHaveLength(1);
    expect(testTextInputOccurrences).not.toHaveLength(2);
  });

  it('should handle a normal email text input change', () => {
    const value = 'example_email@gmail.co.uk';
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} inputType="login" />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, value);
    const result = validateCase(setValueMock.mock.calls[0][0], regexEmail);
    expect(result).toBe(true);
  });

  it('should handle an erroneous email text input change', () => {
    const value = '   &&^^%$$$!@@gmail.c.c.c    ';
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} inputType="login" />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, value);
    const result = validateCase(setValueMock.mock.calls[0][0], regexEmail);
    expect(result).toBe(false);
  });

  it('should handle a normal mobile text input change', () => {
    const value = '7752202630';
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} inputType="login" />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, value);
    const result = validateCase(setValueMock.mock.calls[0][0], regexMobile);
    expect(result).toBe(true);
  });

  it('should handle an erroneous mobile text input change', () => {
    const value = '358672';
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} inputType="login" />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, value);
    const result = validateCase(setValueMock.mock.calls[0][0], regexMobile);
    expect(result).toBe(false);
  });

  it('should handle a normal password text input change', () => {
    const value = 'Admin@123';
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} inputType="password" />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, value);
    const result = validateCase(setValueMock.mock.calls[0][0], regexPassword);
    expect(result).toBe(true);
  });

  it('should handle an erroneous password text input change', () => {
    const value = 'dkgbeyf';
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} inputType="password" />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, value);
    const result = validateCase(setValueMock.mock.calls[0][0], regexPassword);
    expect(result).toBe(false);
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
