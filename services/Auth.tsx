// https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native?queryGroups=auth-store&auth-store=async-storage

import { View } from 'react-native';
import { useState } from 'react';
import TitledTextInput from '@/components/ui/inputs/TitledTextInput';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import TextButton from '@/components/ui/buttons/TextButton';
import { formStyles } from '@/styles/formStyles';
import { baseStyles } from '@/styles/baseStyles';

// TODO: Complete signup, login, forgot password flows
// TODO: Input validation
// TODO: Error handling
// TODO: Loading state

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login');
  };

  const handleCreateAccount = () => {
    console.log('Create Account');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password');
  };

  return (
    <View style={formStyles.formContainer}>
      <TitledTextInput
        subtitle={EMAIL}
        placeholder={EMAIL_PLACEHOLDER}
        value={email}
        setValue={setEmail}
      />
      {/* TODO: Create password input component (or add parameter to TitledTextInput/OutlinedTextInput to create a password input)*/}
      <TitledTextInput
        subtitle={PASSWORD}
        placeholder={PASSWORD_PLACEHOLDER}
        value={password}
        setValue={setPassword}
      />
      <PrimaryButton label={LOGIN} onPress={handleLogin} />
      <View style={baseStyles.centerItems}>
        <TextButton label={CREATE_ACCOUNT} onPress={handleCreateAccount} width="50%" />
        <TextButton label={FORGOT_PASSWORD} onPress={handleForgotPassword} width="50%" />
      </View>
    </View>
  );
}

const EMAIL = 'Email';
const EMAIL_PLACEHOLDER = 'Enter your email';
const PASSWORD = 'Password';
const PASSWORD_PLACEHOLDER = 'Enter your password';
const LOGIN = 'Login';
const CREATE_ACCOUNT = 'Create Account';
const FORGOT_PASSWORD = 'Forgot Password?';
