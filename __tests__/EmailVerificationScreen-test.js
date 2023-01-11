/* eslint-disable prettier/prettier */
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {InputComponent} from '../src/components/InputComponent/InputComponent';
import {regexVerificationCode} from '../constants/RegularExpressions';
import {TestButton} from '../src/components/TestButton/TestButton';
import {act} from 'react-test-renderer';
import {toBeDisabled} from '@testing-library/jest-native';

expect.extend({toBeDisabled});
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper'); // removes the console warning: Animated: `useNativeDriver` is not supported because the native animated module is missing

describe('testing the functionality of the EmailVerificationScreen', () => {
  const validateCode = (code, caseToMatch) => { return caseToMatch.test(code); };

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

  it('should handle a normal code text input change', () => {
    const value = '497572';
    const setValueMock = jest.fn();
    const testID = 'testTextInput';
    const {getByTestId} = render(<InputComponent setValue={setValueMock} />);
    const testTextInput = getByTestId(testID);

    fireEvent.changeText(testTextInput, value);
    const result = validateCode(setValueMock.mock.calls[0][0], regexVerificationCode);
    expect(result).toBe(true);
  });

  it('should handle an erroneous code text input change', () => {
    const value = '73';
    const setValueMock = jest.fn();
    const {getByTestId} = render(<InputComponent setValue={setValueMock} />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, value);
    const result = validateCode(setValueMock.mock.calls[0][0], regexVerificationCode);
    expect(result).toBe(false);
  });

  it('should enable the TestButton component when code is validated', () => {
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
