import 'virtual:uno.css';
// import useLoading from './behavior/loading';
import useTheme from './behavior/theme';
import './style/main.scss';

const theme = new useTheme();

// const loading = useLoading();

// window.addEventListener('load', () => loading.stop(), { once: true });

// const Utils = {
//   useLoading,
// };

export { theme };
