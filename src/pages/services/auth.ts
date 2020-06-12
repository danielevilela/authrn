interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'adsjbfajsbfcsaljbclSKAJCBkjabcK',
        user: {
          name: 'Daniele',
          email: 'test@gmail.com',
        },
      });
    }, 2000);
  });
}
