/* eslint-disable max-len */
export const login = async (username: string, password: string): Promise<string> => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (username === 'admin' && password === '1234') {
      resolve('ygdcuiy4grbf8g0erthe97hbhe97fhv038jrf0w_yg8ryg3f8r3y');
    } else {
      reject(new Error('Wrong password or username'));
    }
  }, 700);
});
