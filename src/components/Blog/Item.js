
import Img from "gatsby-image";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Item = props => {
  const {
    theme,
    post: {
      excerpt,
      fields: { slug, prefix },
      frontmatter: {
        title,
        category,
        author,
        cover: {
          children: [{ fluid }]
        }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <li>
        <Link to={slug} key={slug} className="link">
          <div className="gatsby-image-outer-wrapper">
            <Img fluid={fluid} />
          </div>
          <h1>
            {title} 
          </h1>
          <p className="meta">
            <span>
               {prefix}
            </span>
            <span>
               {author}
            </span>
            {category && (
              <span>
                 {category}
              </span>
            )}
          </p>
          <p>{excerpt}</p>
        </Link>
      </li>

    </React.Fragment>
  );
};

Item.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Item;
