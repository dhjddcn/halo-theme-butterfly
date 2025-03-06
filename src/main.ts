import 'virtual:uno.css';
import './style/main.scss';
import useTheme from './modules/Theme';
import useHeader from './modules/Header';

export const theme = new useTheme();
export const header = new useHeader();
