import React from 'react'

const withHover = (C) => (
	class Enhancer extends React.Component {
		state = {
			isOnHover: false
		}

		render() {
			const { isOnHover } = this.state
			return (
				<C
					isOnHover={isOnHover}
					onMouseEnter={() => this.setState({isOnHover: true})}
					onMouseLeave={() => this.setState({isOnHover: false})}
					{...this.props}
				/>
			)
		}
	}
)

export default withHover
