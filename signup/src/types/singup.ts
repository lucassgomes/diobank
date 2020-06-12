export interface SignupInitParams {
  readonly fullname: string;
  readonly email: string;
  readonly password: string;
  readonly dateOfBirth: string;
  readonly address: string;
}

export interface SigninInitParams {
  readonly email: string;
  readonly password: string;
}

export type SignupStatus = "IN_PROGRESS" | "COMPLETE";

export default interface Signup {
  readonly token: string;
  readonly status: SignupStatus;
  readonly initParams: SignupInitParams;
  readonly loginParams?: SigninInitParams;
  readonly selfie?: string;
  readonly frontDocumentPicture?: string;
  readonly backDocumentPicture?: string;
}
