/// <reference types="vite/client" />

import { ThemeMode } from './behavior/theme/types';
import { LoadingType } from './plugins/Loading/types';

declare global {
  interface Window {
    Alpine: Alpine;
    __BUTTERFLY_CONFIG: {
      common: {
        loading: LoadingType;
        mode: ThemeMode;
      };
    };
    butterfly: any;
  }
}

export {};
