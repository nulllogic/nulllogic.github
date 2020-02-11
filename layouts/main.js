import Head from 'next/head'
import Nav from '../components/nav'

import '../styles/16blocks.scss'
import '../styles/app.scss'

export default ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Nav></Nav>
    {children}

    <div className="footer">
      <div className="container">
        <div className="row">
          
          <div className="xs-16 text-center">
            <h6 className="title">Stay in touch with us!</h6>
          </div>

          <div className="xs-16 social">
            <ul>
              <li>
                <a title="Get tips, news, and updates via Facebook" className="facebook" href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a title="Get tips, news, and updates via Twitter" className="twitter" href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a title="Stay current on TechSmith news via G+" className="googleplus" href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a title="Get tips and news every month in your email inbox" className="email" href="#">
                  <i class="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="xs-16 terms-of-service">
            <ul>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Contact </a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          <div className="xs-16 copyright text-center">
            <p>© 2019 NullLogic</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)