import OnboardingScreen from './OnboardingScreen';
import { render } from '@testing-library/react-native';
import React from 'react';
import wrapper from '../wrapper';

describe('Onboarding Screen Test', () => {
  it('Should match with snapshot', () => {
    const { toJSON } = render(<OnboardingScreen navigation={null} />, { wrapper: wrapper });
    expect(toJSON()).toBeDefined();
  });
});
