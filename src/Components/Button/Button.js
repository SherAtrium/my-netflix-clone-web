import PropTypes from 'prop-types';
import classNames from 'classnames';
import Styles from './Button.module.scss';

const BUTTON_SIZE = {
  SMALL: Styles.btnSm,
  MIDDLE: Styles.btnMd,
  LARGE: Styles.btnLg,
};

const BUTTON_STYLE = {
  TRANSPARENT: Styles.btnTransparent,
  OUTLINE: Styles.btnOutlineRed,
  RED: Styles.btnRed,
};

const Button = ({
  tooltip = '',
  children = null,
  isDisable = false,
  onClick = () => {},
  btnSize = BUTTON_SIZE.MIDDLE,
  btnStyle = BUTTON_STYLE.RED,
}) => {
  return (
    <button
      type='button'
      className={classNames(Styles.button, btnStyle, btnSize)}
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
  btnSize: PropTypes.string,
  btnStyle: PropTypes.string,
};

export { Button, BUTTON_SIZE, BUTTON_STYLE };
