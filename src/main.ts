import 'virtual:uno.css';
import './style/main.scss';
import useTheme from './modules/Theme';
import useHeader from './modules/Header';
import useAction from './modules/Action';

export const theme = new useTheme();
export const header = new useHeader();
export const action = new useAction();
