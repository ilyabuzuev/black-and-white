import type { SizeVariant } from '@/models/SizeVariant';
import type { ThickVariant } from '@/models/ThickVariant';
import type { ColorVariant } from '@/models/ColorVariant';

export interface Typography {
  tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5';
  size?: SizeVariant['variant'];
  thick?: ThickVariant['variant'];
  lineHeight?: SizeVariant['variant'] | 'none';
  color?: ColorVariant['variant'];
  caps?: boolean;
  bold?: boolean;
  italic?: boolean;
  underlined?: boolean;
  overlined?: boolean;
}