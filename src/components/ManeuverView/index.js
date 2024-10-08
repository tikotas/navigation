/**
 * @imports
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Styles from './styles';
import ManeuverArrow from '../ManeuverArrow';
import ManeuverLabel from '../ManeuverLabel';
import CloseButton from "../CloseButton";
import Tts from "react-native-tts"


/**
 * @component
 */
export default class ManeuverView extends Component {

    /**
     * propTypes
     * @type {}
     */
    static propTypes = {
        step: PropTypes.any.isRequired,
        fontFamily: PropTypes.string,
        fontFamilyBold: PropTypes.string,
        fontSize: PropTypes.number,
        arrowSize: PropTypes.number,
        arrowColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        withCloseButton: PropTypes.bool,
        onClose: PropTypes.func,
        onPress: PropTypes.func,
    }

    /**
     * defaultProps
     * @type {}
     */
    static defaultProps = {
        step: undefined,
        fontFamily: undefined,
        fontFamilyBold: undefined,
        backgroundColor: '#00654f',
        fontSize: 20,
        arrowSize: 50,
        arrowColor: '#ffffff',
        withCloseButton: false,
        onClose: undefined,
        onPress: undefined,
    }


    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        if (!this.props.step) return
        this.callVoice()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.step?.instructions !== this.props.step?.instructions) {
            this.callVoice()
        }
    }

    callVoice() {
        Tts.speak(this.removeHtmlTags(this.props.step?.instructions), {
            iosVoiceId: "com.apple.ttsbundle.Moira-compact",
            rate: 0.5,
            androidParams: {
                KEY_PARAM_PAN: -1,
                KEY_PARAM_VOLUME: 0.5,
                KEY_PARAM_STREAM: "STREAM_MUSIC",
            },
        })
    }

    removeHtmlTags = (text) => text.replace(/<[^>]*>/g, "")


    /**
     * render
     * @returns {XML}
     */
    render() {
        const styles = Styles(this.props);

        const step = this.props.step;

        if (!step) return null;

        const maneuver = step.maneuver;

        return (
            <View style={styles.maneuverView}>
                <View style={styles.maneuverViewArrow}>
                    <ManeuverArrow
                        size={this.props.arrowSize}
                        color={this.props.arrowColor}
                        maneuver={maneuver}
                    />
                </View>
                <View style={styles.maneuverViewDirection}>
                    <ManeuverLabel
                        {...this.props}
                        instructions={step.instructions}
                        fontSize={this.props.fontSize}
                        color={this.props.fontColor}
                    />
                </View>
                {!this.props.withCloseButton ? null : (
                    <View style={styles.maneuverClose}>
                        <CloseButton onPress={() => this.props.onClose && this.props.onClose()}/>
                    </View>
                )}
            </View>
        );
    }
}

