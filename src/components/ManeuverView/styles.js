/**
 * @imports
 */
import {Dimensions, StyleSheet} from 'react-native';
import { IconFont } from '../../constants/NavigationIcons';


/**
 * @styles
 */
export default props => StyleSheet.create({

    /**
     * @maneuverView
     */
    maneuverView: {
        padding: 15,
        flexDirection: "row",
        minHeight: 120,
        alignItems: "center",
        top: 10,
        position: "absolute",
        left: 16,
        width: Dimensions.get("window").width - 32,
        backgroundColor: props.backgroundColor,
        borderRadius: 14,
    },

    maneuverViewArrow: {
        flex: 0,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },

    maneuverViewDirection: {
        flex: 1,
    },

    maneuverClose: {
        flex: 0,
        width: 30,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    
});
