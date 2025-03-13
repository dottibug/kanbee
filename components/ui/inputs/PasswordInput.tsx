import TitledTextInput from './TitledTextInput';

interface PasswordInputProps {
  readonly password: string;
  readonly setPassword: (password: string) => void;
}

{
  /* TODO: Create password input component (or add parameter to TitledTextInput/OutlinedTextInput to create a password input)*/
}

export default function PasswordInput({ password, setPassword }: PasswordInputProps) {
  return (
    <TitledTextInput
      subtitle={PASSWORD}
      placeholder={PASSWORD_PLACEHOLDER}
      value={password}
      setValue={setPassword}
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
}

const PASSWORD = 'Password';
const PASSWORD_PLACEHOLDER = 'Enter your password';
