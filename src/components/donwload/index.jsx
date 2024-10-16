import PropTypes from "prop-types";
import "./style.css";

export default function Download({ url, text }) {
  return (
    <a href={url} download target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}

Download.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
