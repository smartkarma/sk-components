import React from 'react'
import PropTypes from 'prop-types'
import {View, StyleSheet} from 'react-native'

const propTypes = {
	idEl: PropTypes.string,
}

const defaultProps = {

}

class Blueprint extends React.Component {
	render() {
		return (
			<View style={[styles.container]}>

			</View>
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

Blueprint.propTypes = propTypes
Blueprint.defaultProps = defaultProps
export default Blueprint
