/// <reference types="vite/client" />

import { ThemeMode } from './behavior/theme/types';
import { LoadingInstance, LoadingType } from './modules/Loading/src';

declare global {
  interface Window {
    Alpine: Alpine;
    __BUTTERFLY_CONFIG: {
      common: {
        loading: LoadingType;
        mode: ThemeMode;
      };
    };
    __BUTTERFLY_LOADING: LoadingInstance;
    __BUTTERFLY_MAIN: any;
  }
}

export {};
