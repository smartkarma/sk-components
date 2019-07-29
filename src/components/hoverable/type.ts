export interface HoverableProps {
  onHoverIn?: () => void;
  onHoverOut?: () => void;
}

export interface HoverableState {
  isHovered?: boolean;
  showHover?: boolean;
}
