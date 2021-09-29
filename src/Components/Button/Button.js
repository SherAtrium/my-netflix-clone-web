import PropTypes from 'prop-types';
import classNames from 'classnames';
import Styles from './Button.module.scss';

const BUTTON_SIZE = {
  SMALL: Styles.btnSm,
  MIDDLE: Styles.btnMd,
  LARGE: Styles.btnLg,
};

const BUTTON_COLOR = {
  TRANSPARENT: Styles.btnTransparent,
  RED: Styles.btnRed,
};

const BUTTON_STYLE = {
  OUTLINE: Styles.btnOutline,
  COMMON: Styles.button,
};

const Button = ({
  tooltip = '',
  children = null,
  isDisable = false,
  onClick = () => {},
  btnStyle = BUTTON_STYLE.COMMON,
  btnColor = '',
  btnSize = '',
}) => {
  return (
    <button
      type='button'
      className={classNames(btnColor, btnStyle, btnSize)}
      onClick={(...params) => onClick(...params)}
      disabled={isDisable}
      title={tooltip}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  isDisable: PropTypes.bool,
  tooltip: PropTypes.string,
  btnStyle: PropTypes.string,
  btnColor: PropTypes.string,
  btnSize: PropTypes.string,
};

export { Button, BUTTON_SIZE, BUTTON_COLOR, BUTTON_STYLE };
