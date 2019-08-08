export interface HoverableProps {
  onHoverIn?: () => void;
  onHoverOut?: () => void;
}

export interface HoverableState {
  isPressing?: boolean;
  isHovered?: boolean;
  showHover?: boolean;
}
