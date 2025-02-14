/// <reference types="vite/client" />

import { ThemeMode } from './behavior/theme/types';
import { LoadingFn } from './behavior/loading/types';

declare global {
  interface Window {
    Alpine: Alpine;
    __BUTTERFLY_CONFIG: {
      common: {
        loading: LoadingFn;
        mode: ThemeMode;
      };
    };
    butterfly: any;
  }
}

export {};
