import React from 'react'
import PropTypes from 'prop-types'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import {GREY_GREY, INACTIVE_GREY, JADE, WHITE} from '../../constants/colors'
import {TOUCH_OPACITY} from '../../constants/numbers'

const propTypes = {
	bordered: PropTypes.bool,
	shadowed: PropTypes.bool,
	disabled: PropTypes.bool,
	active: PropTypes.bool,
	title: PropTypes.string,
	style: PropTypes.object,
}

const defaultProps = {
	title: 'Click me!',
	disabled: false,
	active: false,
	bordered: false,
	shadowed: false,
}

class Button extends React.Component {
	render() {
		const {
			disabled,
			active,
			title
		} = this.props
		return (
			<TouchableOpacity disabled={disabled} activeOpacity={TOUCH_OPACITY} style={[styles.container, {backgroundColor: disabled ? INACTIVE_GREY : active ? JADE : GREY_GREY}]}>
				<Text style={{color: WHITE}}>{title}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 2,
		padding: 5,
		margin: 5,
	}
})

Button.propTypes = propTypes
Button.defaultProps = defaultProps
export default Button
