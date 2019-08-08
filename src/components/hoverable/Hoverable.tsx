import React from 'react';
import { isHoverEnabled } from './hoverCapability';
import * as Types from './type';

export default class Hoverable extends React.Component<Types.HoverableProps, Types.HoverableState> {
  state: Types.HoverableState = { isHovered: false, showHover: true, isPressing: false };

  constructor(props: Types.HoverableProps) {
    super(props);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handlePressIn = this._handlePressIn.bind(this);
    this._handlePressOut = this._handlePressOut.bind(this);
    this._handleGrant = this._handleGrant.bind(this);
    this._handleRelease = this._handleRelease.bind(this);
  }

  _handleMouseEnter() {
    if (isHoverEnabled() && !this.state.isHovered) {
      const { onHoverIn } = this.props;
      if (onHoverIn) {
        onHoverIn();
      }
      this.setState({ isHovered: true });
    }
  }

  _handleMouseLeave() {
    if (this.state.isHovered) {
      const { onHoverOut } = this.props;
      if (onHoverOut) {
        onHoverOut();
      }
      this.setState({ isHovered: false });
    }
  }

  _handleGrant() {
    this.setState({ showHover: false });
  }

  _handleRelease() {
    this.setState({ showHover: true });
  }

  _handlePressIn() {
    this.setState({ isPressing: true });
  }

  _handlePressOut() {
    this.setState({ isPressing: false });
  }

  render() {
    const { children } = this.props;
    const child =
      typeof children === 'function'
        ? children(this.state.showHover && this.state.isHovered, this.state.isPressing)
        : children;

    return React.cloneElement(React.Children.only(child), {
      onMouseEnter: this._handleMouseEnter,
      onMouseLeave: this._handleMouseLeave,
      // if child is Touchable
      onPressIn: this._handlePressIn,
      onPressOut: this._handlePressOut,
      // prevent hover showing while responder
      onResponderGrant: this._handleGrant,
      onResponderRelease: this._handleRelease
    });
  }
}
