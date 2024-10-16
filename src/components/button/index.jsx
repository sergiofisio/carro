import PropTypes from "prop-types";

export default function Button({ type, onClick, text, ...props }) {
  return (
    <button
      className={`${props.disabled ? "disabled" : "enabled"} ${
        props.className
      }`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
