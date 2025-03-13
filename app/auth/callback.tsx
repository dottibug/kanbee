import { ActivityIndicator, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '@/services/supabase';

/**
 * AuthCallback - Handles Supabase email verification flow.
 *
 * This screen handles deep links from in emails, such as email verification upon signup. Authentication tokens are parsed from the URL to setup a Supabase session and redirect the user to the main menu. This ensures a smoother user experience, as users do not have sign in after clicking the email verification link.
 */

export default function AuthCallback() {
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    const verifyEmail = async () => {
      const accessToken = params.access_token as string;
      const refreshToken = params.refresh_token as string;
      const tokenType = params.token_type as string;

      // Route back to login screen if no tokens are found
      if (!accessToken || !refreshToken) {
        console.log(
          `(in AuthCallback.tsx) No access token or refresh token found in params`
        );
        router.replace('/');
      }

      // Set session with tokens
      try {
        await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        console.log(
          `(in AuthCallback.tsx) Session set successfully. Redirecting to dashboard`
        );

        router.replace('/dashboard');
      } catch (error) {
        // TODO: Handle error
        console.log(`(in AuthCallback.tsx) Error setting session: ${error}`);
        router.replace('/'); // Route back to login screen for now
      }
    };

    verifyEmail();
  }, [params, router]);

  // TODO: Style activity indicator
  return (
    <SafeAreaView>
      <ActivityIndicator size="large" color="green" />
      <Text>Authenticating...</Text>
    </SafeAreaView>
  );
}
