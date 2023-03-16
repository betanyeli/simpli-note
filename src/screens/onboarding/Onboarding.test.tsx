import OnboardingScreen from './OnboardingScreen';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('List Screen Test', () => {
  it('Should match with snapshot', () => {
    const { toJSON } = render(<OnboardingScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
