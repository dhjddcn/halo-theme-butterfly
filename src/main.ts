import 'virtual:uno.css';
import './style/main.scss';
import useTheme from './modules/Theme';
import useHeader from './modules/Header';
import useAction from './modules/Action';
import useMain from './modules/Main';

export const theme = new useTheme();
export const action = new useAction();
export const header = new useHeader();
export const main = new useMain();
