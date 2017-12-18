import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Theme from '../../constants/Theme'
import Spinner from 'react-native-spinkit'

class Loading extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { loadingText } = this.props
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.colors.backgroundColor
      }}>
        <Spinner style={{marginBottom: 60}} isVisible={true} size={60} type={'WanderingCubes'} color={'#ffffff'} />
        { loadingText
          ? (<Text style={{color: '#fff', fontWeight: '700', fontFamily: Theme.fonts.mainFont}}>{loadingText}</Text>)
          : null
        }
      </View>
    )
  }
}

export default Loading