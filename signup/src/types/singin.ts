export interface SigninInitParams {
  readonly email: string;
  readonly password: string;
}

export default interface Signin {
  readonly token?: string;
  readonly email?: string;
  readonly password?: string;
  readonly status?: number;
  readonly message?: string;
}
