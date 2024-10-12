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
