import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author4Src:
    'https://images.unsplash.com/photo-1598346762291-aee88549193f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Nzc5NDQ4MXw&ixlib=rb-4.1.0&q=80&w=1080',
  content1:
    'Read what our clients have to say about their experience working with us.',
  heading1: 'Client Testimonials',
  author1Alt: 'John Doe - CEO, Company ABC',
  review3:
    'Impressive work ethic and attention to detail. They truly understand the needs of their clients and go above and beyond.',
  author4Alt: 'Sarah Lee - Creative Director, Design Studio',
  review2:
    'I highly recommend their services. They delivered exceptional results and were a pleasure to collaborate with.',
  author1Position: 'CEO, Company ABC',
  review1:
    'Working with this team was a game-changer for our business. Their creativity and dedication exceeded our expectations.',
  author4Name: 'Sarah Lee',
  author1Src:
    'https://images.unsplash.com/photo-1740252117044-2af197eea287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Nzc5NDQ4MHw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1509868918748-a554ad25f858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Nzc5NDQ4MXw&ixlib=rb-4.1.0&q=80&w=1080',
  author3Alt: 'David Johnson - CTO, Tech Solutions Inc.',
  author3Src:
    'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Nzc5NDQ4MXw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Alt: 'Jane Smith - Marketing Director, Company XYZ',
  author1Name: 'John Doe',
  author3Name: 'David Johnson',
  author2Name: 'Jane Smith',
  author3Position: 'CTO, Tech Solutions Inc.',
  author2Position: 'Marketing Director, Company XYZ',
  author4Position: 'Creative Director, Design Studio',
  review4:
    'Their innovative approach brought a fresh perspective to our project. We were thrilled with the final outcome.',
}

Testimonial.propTypes = {
  author4Src: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  author1Alt: PropTypes.string,
  review3: PropTypes.string,
  author4Alt: PropTypes.string,
  review2: PropTypes.string,
  author1Position: PropTypes.string,
  review1: PropTypes.string,
  author4Name: PropTypes.string,
  author1Src: PropTypes.string,
  author2Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author3Name: PropTypes.string,
  author2Name: PropTypes.string,
  author3Position: PropTypes.string,
  author2Position: PropTypes.string,
  author4Position: PropTypes.string,
  review4: PropTypes.string,
}

export default Testimonial
