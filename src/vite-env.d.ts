/// <reference types="vite/client" />

import { ThemeMode } from './modules/Theme';
import { LoadingInstance, LoadingType } from './external/Loading/src';

declare global {
  interface Window {
    Alpine: Alpine;
    __BUTTERFLY_CONFIG: {
      style: {
        mode: ThemeMode;
      };
      loading: {
        type: LoadingType;
      };
    };
    __BUTTERFLY_LOADING: LoadingInstance;
    __BUTTERFLY_MAIN: any;
  }
}

export {};
