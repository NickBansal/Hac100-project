import React, { Component } from 'react';
import './ProductNews.css'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import * as api from '../api';
import ProductNews from './ProductNews';

class ProductButton extends Component {

  state = {
    modal: false,
    nestedModal: false,
    closeAll: false,
    news: {
      title: "The truth about blue light: does it really cause insomnia and increased risk of cancer?",
      story: "Long attached to visions of clear skies and calm seas, the colour blue historically could not be more welcome, refreshing and natural. Yet, because of the proliferation of blue-emitting LEDs in our artificially lit lives, blue light has come to represent bleary eyes, sleeplessness and the poor health associated with disruption of the circadian rhythm. Of the spectrum of lightwaves emitted by the sun that our eyes can detect, it is the shorter “blue” ones that get reflected and bounced around most by the molecules in the Earth’s atmosphere.They are the reason the sky is blue.So why is blue light apparently so bad for us ? Earlier this month, a study published in The Lancet Psychiatry looked at data from 91, 105 middle - aged people and found that those with disrupted sleep patterns were more likely to have depression or bipolar disorder.The worst affected were described by one of the authors of the paper, Professor Daniel Smith at the University of Glasgow, as those with “very poor sleep hygiene – people on their mobile phones at midnight checking Facebook or getting up to make a cup of tea in the middle of the night”.He reiterated the now common advice from sleep experts: switch off electronic devices an hour before bedtime.",
      url: "https://www.theguardian.com/lifeandstyle/2018/may/28/blue-light-led-screens-cancer-insomnia-health-issues"
    },
    review: {
      title: "Help needed - should I buy this she pen?",
      body: "I always wanted to write but I kept this a secret so that I am not laughed at. Also knew it would be hard for my parents and my husband to support this silly idea. Still I was writing secretly when noone could see me, when I had a few minutes because the twins were asleep. I took one of my husband's handwritten notes from his desk and tried to copy the characters there. I had no idea what they were saying. Just copied the small p, the large o and then the twins were crying again, apparently they had woken up. The twins have just graduated and I am here writing this review! This is my great accomplishment, my dream has come true although I was always too shy and insecure to believe that one day this could become reality.I have not yet told my husband that I can write now.He has already explained to me repeatedly that writing is useless for me as I am a woman, he was also blaming the feminazis for this idea, although I have no idea what that means.I am still wondering if I should tell him.Perhaps not.The most important thing is to keep our marriage safe.",
      rating: 2,
      date: "01/01/2018"
    }
  }

  render() {

    const customStyles = {
      // top: '50%',
      // left: '50%',
      // right: 'auto',
      // bottom: 'auto',
      // marginRight: '-50%',
      // transform: 'translate(-50%, -50%)',
      width: '120px',
      height: '800px',
      overflow: 'scroll'
    }
    const { news, review } = this.state;
    return (
      <div>
        <Button onClick={this.toggle} color="primary">Don't buy now</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} style={customStyles}>
          <ModalHeader toggle={this.toggle}>Are you sure you want to buy this? - LOL</ModalHeader>
          <ModalBody>
            <ProductNews news={news} />
            <Button className="YesPlease" color="danger" onClick={this.toggleNested}>YES, please!</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>{review.title}</ModalHeader>
              <ModalBody>{review.body}</ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={this.toggleNested}>Yes</Button>
                <Button color="primary" onClick={this.toggleAll}>No</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            {!this.state.nestedModal && <Button color="danger" onClick={this.toggle} disabled>LOSER</Button>}{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  componentDidMount() {
    const { id } = this.props.productId;
    /* this.getNews(); */
  }

  async getNews(id) {
    const {
      news,
      error
    } = await api.fetchNews(id);

    if (error) return this.setState({ error });
    this.setState({ news });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }
}

export default ProductButton;