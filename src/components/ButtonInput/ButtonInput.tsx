import { CSSProperties, ChangeEvent, FC, PropsWithChildren } from 'react';
import './ButtonInput.css';

export enum ButtonInputType {}

interface ButtonInputProps extends PropsWithChildren {
	style?: CSSProperties;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

{
	/* <span>{text}</span> */
}

const ButtonInput: FC<ButtonInputProps> = ({ style, onChange, children }) => {
	return (
		<label className='button-input' style={style}>
			<div>{children}</div>
			<input type='file' onChange={onChange} />
		</label>
	);
};

export default ButtonInput;
