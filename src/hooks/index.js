import { AuthProvider } from './useAuth';
import { MediaProvider } from './useMedia';

const combine = (providers) => {
  return providers.reduce(
    (AccumulatedProviders, CurrentProvider) => {
      return ({ children }) => {
        return (
          <AccumulatedProviders>
            <CurrentProvider>{children}</CurrentProvider>
          </AccumulatedProviders>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

const providers = [MediaProvider, AuthProvider];

export const ContextProviders = combine(providers);

export { default as useAuth } from './useAuth';
export { default as useList } from './useList';
export { default as useMedia } from './useMedia';
export { default as useScroll } from './useScroll';
export { default as useUpdate } from './useUpdate';
