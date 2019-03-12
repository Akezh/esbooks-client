import { User } from 'react-native-google-signin';

type IGoogleSignInError = { code: string; } | null;

type IGoogleSignInResult = User | null;

export {
  IGoogleSignInError,
  IGoogleSignInResult,
};