import React from 'react'
import { IntlProvider } from 'react-intl';
import zh_TW from './i18n/zh-TW';
import en_US from './i18n/en-US';

export default class HotSwappingIntlProvider extends React.Component {
  constructor(props) {
    super(props);
    const { initialLocale: locale, initialMessages: messages } = props;
    this.state = { locale, messages };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (locale) => {
    let messages = en_US;
    if (locale !== 'en') {
      messages = zh_TW;
    }

    this.setState({
      locale: locale,
      messages: messages,
    });
  }

  render() {
    return (
      <IntlProvider locale={this.state.locale} key={this.state.locale} messages={this.state.messages}>
        {/* {this.props.children} */}
        {React.cloneElement(this.props.children, { setLang: this.handleChange })}
      </IntlProvider>
    );
  }
}