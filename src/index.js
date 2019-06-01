import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//引入locale配置文件，具体路径根据实际情况填写
import zh_TW from './i18n/zh-TW';
// import en_US from './i18n/en-US';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import HotSwappingIntlProvider from './HotSwappingIntlProvider'

addLocaleData([...en, ...zh]);

ReactDOM.render(
    <HotSwappingIntlProvider initialLocale="en" initialMessages={zh_TW}>
        <App name="Zevi"/>
    </HotSwappingIntlProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
