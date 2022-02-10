export class BearerToken {
  constructor(
    public access_token?: string,
    public expires_in?: number,
    public refresh_expires_in?: number,
    public refresh_token?: string,
    public token_type?: string,
    public not_before_policy?: number,
    public session_state?: string,
    public scope?: string) { };
}

export class test {

  private token?: BearerToken;
  private user?: string;

  constructor() {}

  setvalidated(token: BearerToken, user:string) {
    this.token = token;
    this.user = user;
  }
  isValidated():  boolean
  {
    return this.token != null && this.user != null;
  }

  getBearerToken(): string
  {
    if (this.token) {
      return <string>this.token.access_token;
    }
    return "";
  }
}
