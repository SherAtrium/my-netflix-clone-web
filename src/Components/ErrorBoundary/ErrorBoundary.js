import { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './ErrorBoundary.module.scss';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorMessage: errorInfo,
    });
  }

  render() {
    const {
      state: { hasError, errorMessage },
      props: { children },
    } = this;

    return hasError ? (
      <div className={Styles.errorBoundary}>
        <h1>Something went wrong. Please, try to refresh page.</h1>
        <code>ERROR MESSAGE: {errorMessage}</code>
      </div>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
