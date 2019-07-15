import React from 'react'
import PropTypes from 'prop-types'
import {noop} from 'lodash-es'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import {GREY_GREY, INACTIVE_GREY, JADE, WHITE} from '../../constants/colors'
import {TOUCH_OPACITY} from '../../constants/numbers'
import withHover from '../withHover'

class Button extends React.Component {
	static propTypes = {
		onPress: PropTypes.func,
		bordered: PropTypes.bool,
		shadowed: PropTypes.bool,
		disabled: PropTypes.bool,
		active: PropTypes.bool,
		title: PropTypes.string,
		style: PropTypes.object
	}

	static defaultProps = {
		title: 'Click me!',
		onPress: noop,
		disabled: false,
		active: false,
		bordered: false,
		shadowed: false
	}

	render() {
		const {
			active,
			disabled,
			isOnHover,
			onPress,
			onMouseEnter,
			onMouseLeave,
			title
		} = this.props
		return (
			<TouchableOpacity
				activeOpacity={TOUCH_OPACITY}
				disabled={disabled}
				onPress={onPress}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				style={[
					styles.container,
					{backgroundColor: disabled ? INACTIVE_GREY : active ? JADE : GREY_GREY}
				]}
			>
				<Text style={{color: WHITE}}>{title}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 2,
		padding: 5,
		margin: 5
	}
})

export default withHover(Button)
