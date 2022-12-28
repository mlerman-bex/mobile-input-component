import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {InputComponent} from '../src/components/InputComponent/InputComponent';

describe('testing the functionality of the InputComponent', () => {
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
});
