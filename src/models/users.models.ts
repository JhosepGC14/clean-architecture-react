export interface EndpointUser {
  name: string;
  last_name: string;
}

export interface User {
  name: string;
  lastName: string;
}

export interface Action<T> {
  type: string;
  payload: T;
}
