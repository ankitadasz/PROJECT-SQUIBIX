import { createContext } from 'react';

export const AccountContext = createContext({
  auth : localStorage.getItem("account_context"),
  setAuth : ( value ) => {}
});