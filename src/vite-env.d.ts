/// <reference types="vite/client" />

declare global {
  interface Window {
    Alpine: Alpine;
    __BUTTERFLY_CONFIG: {
      common: {
        loading: LoadingType;
        mode: 'auto' | 'user' | 'light' | 'dark';
      };
    };
    butterfly: any;
  }
}

export {};
