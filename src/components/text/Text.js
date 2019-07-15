import React from 'react'
import PropTypes from 'prop-types'
import {Animated, StyleSheet} from 'react-native'
import {PRIMARY, SECONDARY, SECONDARY_TINT} from '../../constants/colors'

const propTypes = {
	color: PropTypes.string,
	colorHover: PropTypes.string,
	colorTint: PropTypes.string,
	disabled: PropTypes.bool,
	idEl: PropTypes.string,
	onPress: PropTypes.func
}

const defaultProps = {
	color: SECONDARY,
	colorHover: PRIMARY,
	colorTint: SECONDARY_TINT,
	disabled: false,
	idEl: null,
	onPress: null
}

class Text extends React.Component {
	constructor(props) {
		super(props)
		this.animHoveringColorValue = new Animated.Value(0)
	}

	_onMouseEnter = () => {
		Animated.timing(this.animHoveringColorValue, {
			toValue: 1,
			duration: 120
		}).start()
	}

	_onMouseLeave = () => {
		Animated.timing(this.animHoveringColorValue, {
			toValue: 0,
			duration: 120
		}).start()
	}

	render() {
		const {
			children,
			color,
			colorHover,
			colorTint,
			disabled,
			onPress
		} = this.props
		const hoveringColor = this.animHoveringColorValue.interpolate({
			inputRange: [0, 1],
			outputRange: [disabled ? colorTint : color, colorHover]
		})
		return (
			<Animated.Text
				onPress={onPress}
				onMouseEnter={this._onMouseEnter}
				onMouseLeave={this._onMouseLeave}
				style={[
					{
						color: hoveringColor
					}
				]}
			>
				{children}
			</Animated.Text>
		)
	}
}

Text.propTypes = propTypes
Text.defaultProps = defaultProps
export default Text
