import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    variant?: ButtonVariant
}

type ButtonVariant = 'primary' | 'danger' | 'info';

const variantToColor = {
    primary: 'bg-green-500',
    danger: 'bg-red-500',
    info: 'bg-blue-200'
}

const Button: React.FC<ButtonProps> = ({ children, className, variant = 'primary', ...props }) => {
    const color = variantToColor[variant];
    const classes = classnames('rounded-full p-3 w-auto', className, color);
    
    return (
        <button className={classes} {...props}>{children}</button>
    )
}

export default Button;