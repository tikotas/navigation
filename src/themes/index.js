/**
 * @import
 */
import * as MarkerTypes from '../constants/MarkerTypes';
import * as PolylineTypes from '../constants/PolylineTypes';
import NavigationIcons from '../constants/NavigationIcons';

const imagePath = {
    roadStart: require("../../assets/image/roadStart.png"),
    roadEnd: require("../../assets/image/roadEnd.png"),
}


/**
 * defaultThemeSettings
 * @type {{[p: string]: *}}
 */
export const defaultThemeSettings = {

    /**
     * @markers
     */
    Markers: {
        [MarkerTypes.ORIGIN]: {
            // icon: NavigationIcons.place,
            icon: imagePath.roadStart,
            color: '#77dd77',
            fontSize: 40,
        },

        [MarkerTypes.DESTINATION]: {
            icon: imagePath.roadEnd,
            color: '#ff4500',
            fontSize: 40,
        },

        [MarkerTypes.POSITION_DOT]: {
            icon: NavigationIcons.compassDot,
            color: '#387bc1',
            fontSize: 30,
        },

        [MarkerTypes.POSITION_ARROW]: {
            icon: NavigationIcons.navigate,
            size: 100,
            fontSize: 80,
            color: '#ffffff',
            backgroundColor: '#387bc1'
        },
    },

    Polylines: {
        [PolylineTypes.ROUTE]: {
            fillColor: '#00b3fd',
            strokeColor: '#387bc1',
            strokeWidth: 18,
            borderWidth: 4,
        },
        [PolylineTypes.ROUTE_ALTERNATIVE]: {
            fillColor: '#cccccc',
            strokeColor: '#a0a0a0',
            strokeWidth: 18,
            borderWidth: 4,
        },
    }

};


/**
 * Theme Combiner
 * @param theme
 * @returns {*}
 */
const connectTheme = (theme) =>
{
    return Object.assign({}, defaultThemeSettings, theme);
};

/**
 * @exports
 */
export default connectTheme;

