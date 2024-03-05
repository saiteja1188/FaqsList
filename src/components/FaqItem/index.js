import {Component} from 'react'

import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div className="answer-container">
          <hr className="hr-line" />
          <p className="ansewr-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  toggleImg = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImg = () => {
    const {isActive} = this.state
    const imageUrl = isActive ? minusImg : plusImg
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.toggleImg}>
        <img className="image" src={imageUrl} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question-heading">{questionText}</h1>
          {this.renderActiveImg()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
