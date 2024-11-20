import './styles/main.scss';
import 'virtual:uno.css';

import Alpine from 'alpinejs';
import Index from './alpine-data/index';

Alpine.data('index', Index);
window.Alpine = Alpine;
Alpine.start();
