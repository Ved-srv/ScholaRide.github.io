import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Tan Noteworthy Rook</title>
        <meta property="og:title" content="Tan Noteworthy Rook" />
      </Helmet>
      <div className="home-container1">
        <div className="home-container2">
          <span className="home-text">ScholaRide</span>
        </div>
        <div className="home-container3">
          <span className="home-text1">
            Travel seamlessly, make new friends
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text2">
            <span>
              save money, time and the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>environment</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <span className="home-text6">
              <span className="home-text7">Book your Scholaride today</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className="home-container6">
            <button className="home-button button">
              <img
                alt="image21816"
                src="/playground_assets/image21816-oak4-200h.png"
                className="home-image2"
              />
            </button>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/rectangle%2018-200w.png"
        className="home-image"
      />
    </div>
  )
}

export default Home
