// $lib/src/components/atoms/Button/Button.type.ts

export type Variant = 'primary' | 'outline';

export interface ButtonProps {
    href?: string;
    variant: Variant;
    arialabel?: string;
    className?: string;
    children?: any;
}
