import { FC, ReactNode } from 'react';

import classes from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <span className={classes.container}>
      <button
        className={classes.button + ' ' + props.className}
        onClick={props.onClick}
        type={props.type}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </span>
  );
};

export default Button;
