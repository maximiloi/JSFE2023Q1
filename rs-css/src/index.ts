import createHeader from './components/Header/index';
import createMain from './components/Main';
import createFooter from './components/Footer/index';
import './styles.scss';

createHeader('body');
createMain('.app');
createFooter('.app');
