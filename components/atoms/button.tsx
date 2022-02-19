import React, { FunctionComponent } from 'react';

import styles from './button.module.css';

// TODO: remove sizes from type
export type InspireButtonType = 'primary' | 'secondary' | 'large' | 'small';
type InspireButtonSizeType = 'large' | 'small';

export interface IButtonProps {
    link?: string;
    text?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    className?: string;
    linkClassName?: string;
    type?: InspireButtonType;
    size?: InspireButtonSizeType;
    gtmId?: string;
    submit?: boolean;
    fullWidth?: boolean;
    ariaLabel?: string;
}

export const Button: FunctionComponent<IButtonProps> = (props) => {
    const { text, onClick, children, disabled, gtmId, submit, ariaLabel } = props;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(event);
    };

    if (children) {
        return (
            <button data-gtm-id={gtmId} onClick={handleClick}>
                {children}
            </button>
        );
    }

    return (
        <button
            type={submit ? 'submit' : 'button'}
            data-gtm-id={gtmId}
            disabled={disabled}
            className={styles.button}
            onClick={handleClick}
            tabIndex={0}
            aria-label={ariaLabel}
        >
            {text}
        </button>
    );
};
