import PropTypes from 'prop-types';
import classNames from 'classnames';
import Styles from './Button.module.scss';

const BUTTON_STYLE = {
  PRIMARY: Styles.btnPrimary,
  OUTLINE: Styles.btnOutline,
  TRANSPARENT: Styles.btnTransparent,
};

const BUTTON_COLOR = {
  RED: Styles.btnRed,
};

const BUTTON_SIZE = {
  LARGE: Styles.btnLg,
  MIDDLE: Styles.btnMd,
  SMALL: Styles.btnSm,
};

const BUTTON_TYPE = {
  BUTTON: 'button',
  SUBMIT: 'submit',
  RESET: 'reset',
};

const Button = ({
  type = BUTTON_TYPE.BUTTON,
  tooltip = '',
  children = null,
  isDisable = false,
  onClick = () => {},
  btnStyle = '',
  btnColor = '',
  btnSize = '',
}) => {
  return (
    <button
      type={type}
      className={classNames(Styles.button, btnStyle, btnColor, btnSize)}
      onClick={(...params) => onClick(...params)}
      disabled={isDisable}
      title={tooltip}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  isDisable: PropTypes.bool,
  tooltip: PropTypes.string,
  btnStyle: PropTypes.string,
  btnColor: PropTypes.string,
  btnSize: PropTypes.string,
};

export { Button, BUTTON_SIZE, BUTTON_COLOR, BUTTON_STYLE, BUTTON_TYPE };
