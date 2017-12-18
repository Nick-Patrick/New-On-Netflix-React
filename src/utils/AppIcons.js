import { PixelRatio, Platform } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const navIconSize = (Platform.OS === 'android') ? PixelRatio.getPixelSizeForLayoutSize(40) : 40
const replaceSuffixPattern = /--(active|big|small|very-big)/g
const icons = {
  'video-camera': [24],
  'globe': [24],
  'bars': [24],
  'filter': [24]
}

const iconsMap = {}
const iconsLoaded = new Promise((resolve, reject) => {
	new Promise.all(
		Object.keys(icons).map(iconName =>
		FontAwesome.getImageSource(
			iconName.replace(replaceSuffixPattern, ''),
			icons[iconName][0],
			icons[iconName][1],
			icons[iconName][2],
			icons[iconName][3]
		))
	).then(sources => {
		Object.keys(icons)
			.forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

		resolve(true)
	})
})

export {
	iconsMap,
	iconsLoaded
}