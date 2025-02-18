import 'virtual:uno.css';
import Loading from './behavior/loading';
import Theme from './behavior/theme';
import './style/main.scss';

const loading = Loading({
  fullscreen: true,
  el: 'body',
});

const d = Loading({
  el: '.adadxx',
});

loading.start();

const theme = new Theme();

const Utils = {
  Loading,
};

export { loading, theme, Utils };
