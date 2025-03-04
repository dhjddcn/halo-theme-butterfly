import 'virtual:uno.css';
import './style/main.scss';
import useTheme from './modules/Theme';
import useHeader from './modules/Header';

const theme = new useTheme();
const header = new useHeader();

export { theme, header };
