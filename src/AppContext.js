import { createContext, useContext } from 'react';

export const defaultValues = {
  name: 'lucasb',
};
const AppContext = createContext(defaultValues);

export default AppContext;
export const useAppContext = () => useContext(AppContext);
