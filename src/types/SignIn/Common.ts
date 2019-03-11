interface IUserInfo {
  email: string | null;
  fullName: string | null;
  avatar: string | null;
  providerData: {
    provider: string,
    uid: string | null,
  };
}

interface ISuccessSignInResponse {
  success: boolean;
  token: string;
  user: {
    fullName: string;
    avatar: string;
  };
}

interface IErrorSignInResponse {
  error: true;
  errorMessage: string;
}

type IPermissions = string[];

export { 
  IErrorSignInResponse,
  IPermissions,
  ISuccessSignInResponse,
  IUserInfo,
};