import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './Button.styles';
import useThemedStyles from '../../../hooks/theme/useThemedStyles';
import useTheme from '../../../hooks/theme/useTheme';

export enum ButtonVariant {
  PRIMARY,
  DANGER,
}

type ButtonProps = {
  onPress: () => void;
  label: string;
  variant: ButtonVariant;
  disabled?: boolean;
  icon?: string;
  loading?: boolean;
};

const Button = ({
  label,
  onPress,
  disabled,
  variant = ButtonVariant.PRIMARY,
  icon,
  loading,
}: ButtonProps) => {
  const style = useThemedStyles(styles);
  const theme = useTheme();
  const danger = variant === ButtonVariant.DANGER;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[style.container, disabled && style.opacity, danger && style.danger]}
    >
      {!loading ? (
        <>
          <Text style={style.icon}>{icon}</Text>
          <Text style={style.label}>{label}</Text>
        </>
      ) : (
        <ActivityIndicator color={theme.colors.WHITE} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
