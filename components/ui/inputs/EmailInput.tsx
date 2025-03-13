import TitledTextInput from './TitledTextInput';

interface EmailInputProps {
  readonly email: string;
  readonly setEmail: (value: string) => void;
}

export default function EmailInput({ email, setEmail }: EmailInputProps) {
  return (
    <TitledTextInput
      subtitle={EMAIL}
      placeholder={EMAIL_PLACEHOLDER}
      value={email}
      setValue={setEmail}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
}

const EMAIL = 'Email';
const EMAIL_PLACEHOLDER = 'Enter your email';
