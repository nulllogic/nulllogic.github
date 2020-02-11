import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Seo from "../components/Seo";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        posts: { edges: posts = [] },
        bgDesktop: {
          resize: { src: desktop }
        },
        bgTablet: {
          resize: { src: tablet }
        },
        bgMobile: {
          resize: { src: mobile }
        },
        site: {
          siteMetadata: { facebook }
        }
      }
    } = this.props;

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

    return (
        <React.Fragment>
          <ThemeContext.Consumer>
            {theme => (
                <Hero scrollToContent={this.scrollToContent} backgrounds={backgrounds} theme={theme} />
            )}
          </ThemeContext.Consumer>

          <div className="apps-list">
            <div className="container">
              <div className="row">
                <div className="xs-16 col-center text-center"><h2>Our products</h2></div>
                <div className="xs-16 col-center text-left"><h3>WordPress</h3>
                  <div className="sections row">
                    <div className="section xs-4">
                      <div className="item">
                        <div className="icon"><img className="img" src="/static/simplefavicon.png" /></div>
                        <a className="link" href="/wordpress/simpletweaker">Simple Tweaker</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="contacts">
            <div class="container">
              <div class="row text-center">
                <div class="xs-16">
                  <h5 class="title">Have more questions?</h5>
                  <p>Send email and get reply – simple and easy.</p>
                  <div>
                    <a href="#" class="btn btn-success">Contact us!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query AboutQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;

//hero-background
