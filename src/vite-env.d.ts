/// <reference types="vite/client" />

import type { Alpine } from 'alpinejs';
import { LoadingType } from './plugins/Loading/types';

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
