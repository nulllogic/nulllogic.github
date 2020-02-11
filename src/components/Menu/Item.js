import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Item = props => {
  const { theme, item: { label, to} = {}, onClick } = props;

  return (
    <React.Fragment>
      <li className={"hiddenItem" in props ? "hiddenItem" : "item"} key={label}>
        <Link
          to={to}
          className={"hiddenItem" in props ? "inHiddenItem" : ""}
          onClick={onClick}
          data-slug={to}
        >
          {label}
        </Link>
      </li>

    </React.Fragment>
  );
};

Item.propTypes = {
  item: PropTypes.object,
  hidden: PropTypes.bool,
  onClick: PropTypes.func,

  theme: PropTypes.object.isRequired
};

export default Item;
