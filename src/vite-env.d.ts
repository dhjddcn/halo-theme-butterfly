/// <reference types="vite/client" />

import { THEME_MODE } from './modules/Theme';
import { LoadingType } from './external/Loading/src';

declare global {
  interface Window {
    Alpine: Alpine;
    __BUTTERFLY_CONFIG: {
      style: {
        mode: THEME_MODE;
      };
      loading: {
        type: LoadingType;
      };
    };
    __BUTTERFLY_LOADING: any;
    __BUTTERFLY_MAIN: any;
  }
}

export {};
