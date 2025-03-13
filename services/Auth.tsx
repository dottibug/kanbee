import { View } from 'react-native';
import { useState } from 'react';
import { supabase } from '@/services/supabase';
import { router } from 'expo-router';
import { baseStyles } from '@/styles/baseStyles';
import { formStyles } from '@/styles/formStyles';
import EmailInput from '@/components/ui/inputs/EmailInput';
import PasswordInput from '@/components/ui/inputs/PasswordInput';
import PrimaryButton from '@/components/ui/buttons/PrimaryButton';
import TextButton from '@/components/ui/buttons/TextButton';

// TODO: Refactor inputs; use a base input component that includes a title if the param is added; otherwise no title. Then EmailInput and PasswordInput can extend this base input component.
// TODO: Input validation
// TODO: Error handling
// TODO: Loading state
// TODO: Forgot password flow
// TODO: Reconsider your style organization
// TODO: Start the color app setup to get it up to a similar stage (signup and login auth flow)

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // TODO: Loader and error handling
  const handleLogin = async () => {
    console.log('Login');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.log(`(in Auth.tsx) Error signing in: ${error.message}`);
      setError(error.message);
    }

    setLoading(false);
    router.replace('/dashboard');
  };

  const handleCreateAccount = async () => {
    console.log('Create Account');
    setLoading(true);

    const redirectTo = 'kanbee://auth/callback';

    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) {
      console.log(`(in Auth.tsx) Error signing up: ${error.message}`);
      setError(error.message);
      setLoading(false);
      router.replace('/');
    }

    if (!session) {
      console.log(`(in Auth.tsx) No session data returned from signup`);
      setError('No session data returned from signup');
      setLoading(false);
      router.replace('/');
    }

    setLoading(false);
  };

  // TODO: Forgot password flow
  const handleForgotPassword = () => console.log('Forgot Password');

  return (
    <View style={formStyles.formContainer}>
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput password={password} setPassword={setPassword} />
      <PrimaryButton label={LOGIN} onPress={handleLogin} />
      <View style={baseStyles.centerItems}>
        <TextButton label={CREATE_ACCOUNT} onPress={handleCreateAccount} width="50%" />
        <TextButton label={FORGOT_PASSWORD} onPress={handleForgotPassword} width="50%" />
      </View>
    </View>
  );
}

const LOGIN = 'Login';
const CREATE_ACCOUNT = 'Create Account';
const FORGOT_PASSWORD = 'Forgot Password?';
