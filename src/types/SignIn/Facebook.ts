type IFBGraphRequestCallback = (error: IFBSignInError, result: IFBSignInResult) => void;

interface IFBSignInError {
  message: string;
  type: string;
  code: string;
  fbtrace_id: string;
}

interface IFBSignInResult {
  email: string;
  id: string;
  name: string;
  picture: {
    data: {
      height: number;
      is_silhouette: boolean;
      url: string;
      width: number;
    },
  };
}

export {
  IFBSignInError,
  IFBGraphRequestCallback,
  IFBSignInResult,
};