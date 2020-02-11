import React from "react";
import Link from "next/link";
import Page from "../layouts/main";

import hero from '../static/hero.png'
import simple_favicon_img from '../static/products/simplefavicon/logo.png'
import bg from "../static/logo_white.png";


export default () => (
  <Page>
    <div className="hero" style={{backgroundImage: 'url(' + hero + ')'}}>
      <div className="container">
        <div className="row">
          <div className="md-16 text-center">
            <h1>Help & support</h1>
            <p>Search our knowledge base for answers to common questions</p>
            <div className="search-box">
              <form className="search-form" method="get">
                <i className="fa fa-search" />
                <label for="main-search" className="sr-only">
                  Search
                </label>
                <input
                  type="search"
                  name="search"
                  id="main-search"
                  placeholder="What can we help you with?"
                />
                <label for="submit" className="sr-only" />
                <input
                  type="submit"
                  name="submit"
                  value="Search"
                  id="submit"
                  className="btn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="apps-list">
      <div className="container">
        <div className="row">
          <div className="xs-16 col-center text-center">
            <h2>Our products</h2>
          </div>

          <div className="xs-16 col-center text-left">
            <h3>WordPress</h3>

            <div className="sections row">
              <div className="section xs-4">
                <div className="item">
                  <div className="icon">
                    <img className="img" src={simple_favicon_img} />
                  </div>
                  <Link href="/wordpress/simpletweaker">
                    <a className="link">Simple Tweaker</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="contacts">
      <div className="container">
        <div className="row text-center">
          <div className="xs-16">
            <h5 className="title">Have more questions?</h5>
            <p>Send email and get reply – simple and easy.</p>
            <div><a href="#" className="btn btn-success">Contact us!</a></div>

          </div>
        </div>
      </div>
    </div>
  </Page>
);
