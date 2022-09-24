import AppContext, { defaultValues as state } from '@/AppContext';

const { Provider } = AppContext;

const ProviderComponent = ({ children }) => {
  return (
    <>
      <Provider value={state}>{children}</Provider>
    </>
  );
};

export default ProviderComponent;
