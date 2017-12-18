import React, { Component } from 'react'
import { View, Image, Text, FlatList, Animated, Easing, TouchableHighlight } from 'react-native'
import Dimensions from 'Dimensions'
import styles from './styles'
import Title from '../Title'
import Loading from '../Loading'
import { fetchNewIfNeeded } from '../../actions/movies'
import BannerAd from '../BannerAd'
import ModalPicker from 'react-native-modal-picker'
import _ from 'lodash'

class NewTitlesComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numColumns: 4,
      refreshing: false,
      isFetchingExtra: false,
      page: 1,
      days: 7,
      daysLabel: '7 Days'
    }

    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    this.setNumberColumns()
  }

  onNavigatorEvent(event) {
    const { navigator } = this.props

    if (event.type == 'DeepLink') {
      const parts = event.link;

      if (parts === 'newTitles') {
        return null
      }
    }
  }

  renderItem = ({item, index}) => (
    <Title key={index} movie={item} showText={false} navigator={this.props.navigator} tileWidth={this.getTileWidth()} noPadding={true}/>
  )

  getTileWidth() {
    return Dimensions.get('window').width / this.state.numColumns - 4
  }

  setNumberColumns() {
    let tileWidth = 110
    const tilePadding = 2
    const numColumns = Math.floor(Dimensions.get('window').width / (tileWidth + tilePadding))

    tileWidth = (Dimensions.get('window').width / numColumns) - 2
  }

  getNewDimensions(){
    this.setNumberColumns()
  }

  keyExtractor = (item, index) => { 
    if (item) return item.id || index
  }

  pullRefresh() {
    const { dispatch } = this.props
    this.setState({ refreshing: true })
    this.setState({ page: 1 })
    dispatch(fetchNewIfNeeded({ days: this.state.days }, () => {
      this.setState({ refreshing: false, days: this.state.days })
    }))
  }

  renderGrid(tvList) {
    if (!tvList && !tvList.results && !tvList.results.length) return null

    return (
      <FlatList
        initialNumToRender={20}
        contentContainerStyle={styles.gridContainer}
        keyExtractor={this.keyExtractor}
        data={tvList.results}
        renderItem={this.renderItem}
        numColumns={this.state.numColumns}
        showsVerticalScrollIndicator={false}
        style={styles.grid}
        onRefresh={this.pullRefresh.bind(this)}
        refreshing={this.state.refreshing}
      />
    )
  }

  setDuration(key, label) {
    const { dispatch } = this.props
    this.setState({ refreshing: true })

    dispatch(fetchNewIfNeeded({ days: key }, () => {
      this.setState({ refreshing: false, days: key, daysLabel: label })
    }))
  }

  renderDurationSelect() {
    const data = [
      { key: 'section', section: true, label: 'Get Recently Added' },
      { key: '1', label: '1 Day' },
      { key: '7', label: '7 Days' },
      { key: '14', label: '14 Days' },
      { key: '30', label: '30 Days' }
    ]

    return (
      <View>
        <ModalPicker
          data={data}
          initValue={ 'Duration' }
          onChange={(option) => this.setDuration(option.key, option.label)}
          cancelText={ 'Cancel' }
          optionTextStyle={{color: '#000', padding: 6, fontSize: 18 }}>
          <View 
            style={styles.durationSelect}
            underlayColor='#AA000E'>
            <Text style={styles.durationSelectText}>{ 'Recently Added' } ({ this.state.daysLabel })</Text>
          </View>
        </ModalPicker>
      </View>
    )
  }

  render() {

    const { newTitles } = this.props

    if (newTitles && newTitles.isFetching && !this.state.refreshing) return (
      <View style={styles.container}>
        <Loading loadingText={ 'Loading' } />
      </View>
    )
    
    const animatedValue = new Animated.Value(0)
    const animatedStyle = { opacity: animatedValue }
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 800
    }).start()

    return (
      <View>
        { this.renderDurationSelect() }
        <Animated.View style={[styles.container, animatedStyle]}
          onLayout={this.getNewDimensions.bind(this)}>
          <View style={styles.gridContainer}>
           { 
             newTitles.item.length < 2 ? (
                _.map(newTitles.item, (newTitlesList) => {
                  return this.renderGrid(newTitlesList)
                })
              ) : this.renderGrid(newTitles.item[newTitles.item.length - 1])
           }
          </View>
        </Animated.View>
      </View>
    )
  }
}

export default NewTitlesComponent