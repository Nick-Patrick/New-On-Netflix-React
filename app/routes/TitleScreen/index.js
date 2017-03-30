import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class TitleScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.opened || false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just openned');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

  render() {
    return (
      <Modal
        style={[styles.modal, styles.modal1]}
        ref={"modal1"}
        swipeToClose={this.state.swipeToClose}
        onClosed={this.onClose}
        onOpened={this.onOpen}
        onClosingState={this.onClosingState}>
          <Text style={styles.text}>Basic modal</Text>
          <Button title="closeButton" onPress={() => this.setState({swipeToClose: !this.state.swipeToClose})} style={styles.btn}>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Button>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({

  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
    height: 300
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }

});

module.exports = TitleScreen;
