import { CSSProperties, FC } from 'react';
import './Button.css';
import classNames from 'classnames';

export enum ButtonType {
	Oval,
	Rectangle,
}

interface ButtonProps {
	text: string;
	type: ButtonType;
	style?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({ text, type, style }) => {
	return (
		<span
			className={classNames({
				'oval-button': type === ButtonType.Oval,
				'rect-button': type === ButtonType.Rectangle,
			})}
			style={style}
		>
			{text}
		</span>
	);
};
