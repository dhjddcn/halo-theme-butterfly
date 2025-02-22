import 'virtual:uno.css';
import Loading from './behavior/loading';
import Theme from './behavior/theme';
import './style/main.scss';

const theme = new Theme();

const loading = Loading();

window.addEventListener('load', () => loading.stop(), { once: true });

const Utils = {
  Loading,
};

export { loading, theme, Utils };
