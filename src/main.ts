import 'virtual:uno.css';
// import useLoading from './behavior/loading';
import useTheme from './behavior/theme';
import './style/main.scss';

const theme = new useTheme();

console.log(theme);
// const loading = useLoading();

// window.addEventListener('load', () => loading.stop(), { once: true });

// const Utils = {
//   useLoading,
// };

// export { loading, theme, Utils };
