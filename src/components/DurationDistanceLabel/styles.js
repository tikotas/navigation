/**
 * @imports
 */
import { StyleSheet} from 'react-native';
import { NavigationIconsFont } from '../../constants/NavigationIcons';


/**
 * @styles
 */
export default props => StyleSheet.create({

    /**
     * @durationDistanceText
     */
    durationDistanceText: {
        fontFamily: props.fontFamily,
        fontSize: props.fontSize * 0.8,
        opacity: props.opacity,
        color: props.color,
        flexWrap: 'wrap',
    },

    durationDistanceTravelModeIcon: {
        ...NavigationIconsFont,
        fontSize: props.fontSize * 0.8,
        opacity: props.opacity,
        color: props.color,
        marginRight: 8,
    },

});
