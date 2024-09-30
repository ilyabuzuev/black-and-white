import type { Color } from '@/types/Color';
import type { Size } from '@/types/Size';

export interface Button {
  label?: string | null;
  color?: Color;
  bgColor?: Color;
  size?: Size;
  disabled?: boolean;
  outlined?: boolean;
  icon?: string;
  padding?: boolean;
}
