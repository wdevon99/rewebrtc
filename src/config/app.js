import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default {
  screenWidth: window.width,
  screenHeight: window.height,
  thumbnailHeight: 100,
  useRCTView: true, //debug or not?
  video: {
    minWidth: 600,
    minHeight: 400,
    minFrameRate: 30
  }
}
