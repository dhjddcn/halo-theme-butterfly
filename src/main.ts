import 'virtual:uno.css';
import Loading from './behavior/loading';
import Theme from './behavior/theme';
import './style/main.scss';

const loading = new Loading({
  fullscreen: true,
  el: 'body',
});

loading.start();

const theme = new Theme();

export { loading, theme };
