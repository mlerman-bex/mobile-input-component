/* eslint-disable prettier/prettier */
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {toHaveStyle} from '@testing-library/jest-native/dist/to-have-style';
import '@testing-library/jest-native/extend-expect';
import {act} from 'react-test-renderer';

import {MinimumCharactersText} from '../src/components/PasswordInclusions/PasswordInclusions';
import {PasswordInputComponent} from '../src/components/PasswordInputComponent/PasswordInputComponent';
import {Styles} from '../src/components/Support files/Styles';

expect.extend({toHaveStyle}); // allows for testing with .toHaveStyle()

describe('testing the functionality of the CreatePasswordScreen', () => {
  const validateLength = (password) => { return password.length >= 8; };
  const validateCase = (password, caseToMatch) => { return password.includes(caseToMatch); };

  it('should render the component', () => {
    const setPasswordMock = jest.fn(); // creates a mock function to be a placeholder for the non-optional-to-include-in-the-props setValue function
    const {getByTestId} = render(<PasswordInputComponent setPassword={setPasswordMock} />); // creates a 'shallow wrapper' to isolate the testing of the respective parent component to be tested
    const testTextInput = getByTestId('testTextInput'); // retrieves the only component with a testID of 'testTextInput'

    expect(testTextInput).toBeDefined(); // checks that the component gets mounted
  });

  it('should locate the TextInput child of the PasswordInputComponent parent', () => {
    const setPasswordMock = jest.fn();
    const {getAllByTestId} = render(<PasswordInputComponent setPassword={setPasswordMock} />);
    const testTextInputOccurrences = getAllByTestId('testTextInput');

    expect(testTextInputOccurrences).toHaveLength(1);
    expect(testTextInputOccurrences).not.toHaveLength(2);
  });

  it('should handle a normal text input change', () => {
    const password = 'Admin@123';
    const setPasswordMock = jest.fn();
    const {getByTestId} = render(<PasswordInputComponent setPassword={setPasswordMock} />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, password);
    expect(setPasswordMock).toHaveBeenCalledWith('Admin@123');
  });

  it('should handle an extreme text input change', () => {
    const password = 'Ornam83!';
    const setPasswordMock = jest.fn();
    const {getByTestId} = render(<PasswordInputComponent setPassword={setPasswordMock} />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, password);
    expect(setPasswordMock).toHaveBeenCalledWith('Ornam83!');
  });

  it('should handle an erroneous text input change', () => {
    const password = 'jydfkfkygfu';
    const setPasswordMock = jest.fn();
    const {getByTestId} = render(<PasswordInputComponent setPassword={setPasswordMock} />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, password);
    expect(setPasswordMock).not.toHaveBeenCalledWith('Ornam83!');
  });

  it('should check the password has at least 8 characters', () => {
    const password = 'Admin@123';
    const setPasswordMock = jest.fn();
    const {getByTestId} = render(<PasswordInputComponent setPassword={setPasswordMock} />);
    const testTextInput = getByTestId('testTextInput');

    fireEvent.changeText(testTextInput, password);
    const result = validateLength(setPasswordMock.mock.calls[0][0]);
    expect(result).toBe(true);
  });

  it('should change the colour of the "8 characters" Text component from red to green if it matches the case', () => {
    const password = 'Admin@123';
    const onStateChangeMock = jest.fn();
    const state = validateLength(password);
    const component = render(<MinimumCharactersText />); // would be CreatePasswordScreen
    let testText = component.getByTestId('testInclude1');

    expect(testText).toHaveStyle(Styles.invalid); // text component should have style of {color: Colours.red}
    act(() => {
      component.rerender(<MinimumCharactersText password={password} confirmPassword={password} state={state} onStateChange={onStateChangeMock} />);
    });
    testText = component.getByTestId('testInclude1');
    expect(testText).toHaveStyle(Styles.valid); // text component should have style of {color: Colours.green}
  });
});
