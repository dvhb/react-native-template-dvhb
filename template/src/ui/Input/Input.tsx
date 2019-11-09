import React, { useState, useCallback } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData, TextInputProps } from 'react-native';

import { styles } from './styles';
import { stylesheetConfig } from '../../boot/stylesheetConfig';

type Props = {
  error?: string;
  valueType?: 'formatted' | 'extracted';
} & TextInputProps;

export function Input(props: Props) {
  const { error, onChangeText, onFocus, valueType = 'formatted', ...restProps } = props;

  const [placeholder, setPlaceholder] = useState(props.placeholder);
  const [value, setValue] = useState(props.value);

  const handleChangeText = useCallback(
    // ...[rawValue] is needed to trick TextInputProps that require only one argument for onChangeText()
    (value, ...[rawValue]) => {
      setValue(rawValue || value);
      onChangeText && onChangeText(rawValue || value);
    },
    [value],
  );

  const handleFocus = useCallback((e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus && onFocus(e);
    setPlaceholder('');
  }, []);

  const componentProps = {
    ...restProps,
    value,
    placeholder,
    onChangeText: handleChangeText,
    onFocus: handleFocus,
    placeholderTextColor: stylesheetConfig.$gray80,
    style: [styles.input, props.multiline && styles.input_multiline, error && styles.error],
  };

  return <TextInput {...componentProps} />;
}
