import React from 'react'

import DangerousHTML from 'react-dangerous-html'
import { Helmet } from 'react-helmet'

import './home.css'
import heropic from '../images/hero-pic-main.png';
import rocket from '../images/rocket.png';
import analytics from '../images/analytics.png';
import act from '../images/act.png';
import logo from '../images/logo.png';
import logo_bw from '../images/logo/logo-low-res-no-bg-bw.png';

import {
  Link
} from "react-router-dom";


const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>DATATIDYR</title>
        <meta property="og:title" content="DATATIDYR CONTENT" />
      </Helmet>
      <section className="home-hero">
        <div className="home-menu">
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <img
                  alt="pastedImage"
                  src={logo}
                  className="home-logo1"
                />
                <div className="home-links1"></div>
              </div>
              <div className='home-right'>
                <a href='mailto:michaelbirkeland@gmail.com'>
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                </a>
                <a href='https://www.linkedin.com/in/michael-birkeland/' target="_blank">
                  <svg viewBox="0 0 877.7142857142857 1024" className="home-icon">
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
                <a href='https://github.com/birkeland007' target="_blank">
                  <svg viewBox="0 0 877.7142857142857 1024" className="home-icon">
                    <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <header className="home-header">
          <h1 className="home-text03">
            Take Control of Your Data With <span className='home-text-datatidyr'>datatidyr</span>!
          </h1>
          <p className="home-text04">
            Streamline your data management and make it easier to analyze!
          </p>
          <div className="home-get-started">
            <Link to="/editor" className="home-text05">Go to editor</Link>
          </div>
        </header>
        <div className="home-dashboard-preview">
          <div className="home-outline">
            <img
              alt="pastedImage"
              src={heropic}
              loading="lazy"
              className="home-image"
            />
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-title">
          <span className="home-text06">
            <span>
              Let&apos;s trim up your
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>data!</span>
          </span>
        </div>
      </section>
      {/*<section className="home-statistics">
        <div className="home-container1">
        </div>
              </section>*/}
      <section className="home-banners"></section>
      <section className="home-how-it-works">
        <div className="home-centered-container">
          <div className="home-heading">
            <span className="home-text13">How it works</span>
            <span className="home-text14 title">
              Managing your data has never been easier
            </span>
          </div>
          <div className="home-category">
            <div className="home-headng">
              <span className="home-text15">
                1 — Upload your data
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text16">
                With just a few clicks, you can securely upload your data to our
                platform. Our system accepts a wide range of file formats,
                including CSV, Excel, and SQL. Your data is protected with
                state-of-the-art encryption and can be accessed from anywhere
                with an internet connection.
              </span>
              <div className="home-get-started1 template-button">
                <Link to="/editor" className="home-text17">Go to editor</Link>
              </div>
            </div>
            <div className="home-container2">
              <img
                alt="pastedImage"
                src={rocket}
                className="home-pasted-image"
              />
            </div>
          </div>
          <div className="home-row">
            <div className="home-category1">
              <div className="home-headng1">
                <span className="home-text18">
                  2 — Gain Insights
                </span>
                <span className="home-text19">
                  <span>
                    Once your data is uploaded, you can easily clean, transform,
                    and enrich it using our intuitive data wrangling tools. Our
                    platform provides powerful data analysis capabilities,
                    including descriptive statistics, visualizations, and
                    machine learning algorithms. You can quickly discover
                    patterns and insights to help inform your decisions.
                  </span>

                </span>
                <img
                  alt="pastedImage"
                  src={analytics}
                  className="home-pasted-image2"
                />
              </div>
            </div>
            <div className="home-category2">
              <div className="home-headng2">
                <span className="home-text22">3 — Act</span>
                <span className="home-text23">
                  With the insights you gain from your data, it&apos;s time to
                  take action. Our platform enables you to collaborate with your
                  team, share your findings, and create reports and dashboards
                  to communicate your results. You can also automate processes,
                  build predictive models, and integrate with other systems to
                  streamline your workflows.
                </span>
                <img
                  alt="pastedImage"
                  src={act}
                  className="home-pasted-image3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-bottom">
          <img
            alt="pastedImage"
            src={logo_bw}
            className="home-branding"
          />
          <div className='footer-group-text'>
            <span className="home-text24">Copyright © datatidyr 2023</span>
            <span className="home-text25">Powered by <a className='footer-link' href='https://reactdatagrid.io/'>ReactDataGrid</a></span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
