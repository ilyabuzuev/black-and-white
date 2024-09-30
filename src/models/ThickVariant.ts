type NumberThickVariants = 300 | 400 | 500 | 600 | 700 | 800;
type StringThickVariants = '300' | '400' | '500' | '600' | '700' | '800';

export interface ThickVariant {
  variant: NumberThickVariants | StringThickVariants;
}
