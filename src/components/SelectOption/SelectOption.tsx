import { FC, useState } from 'react';
import './SelectOption.css';
import SelOpener from '../../assets/img/arrow.svg';

interface SelectOptionProps {
	text: string;
	options: Record<string, string>;
	onChange: (value: string) => void;
}

const SelectOption: FC<SelectOptionProps> = ({ text, options, onChange }) => {
	const [selIsOpen, setSelIsOpen] = useState(false);
	const [currOption, setCurrOption] = useState(Object.values(options)[0]);
	const toggleOpenClick = () => {
		setSelIsOpen(!selIsOpen);
	};
	const handleOptionClick = (value: string) => {
		setSelIsOpen(false);
		setCurrOption(value);
		onChange(Object.keys(options).find((key) => value === options[key])!);
	};
	return (
		<>
			<div className='main-option-cont' onClick={toggleOpenClick}>
				<p className='option-text'>{text}</p>
				<div className='option-cont'>
					<p className='option-cont__text'>{currOption}</p>
					<img
						src={SelOpener}
						alt='#'
						className='toggle-img'
						style={selIsOpen ? { transform: 'rotate(180deg)' } : undefined}
					/>
				</div>
				{selIsOpen &&
					Object.values(options)
						.filter((option) => option !== currOption)
						.map((e) => (
							<div onClick={() => handleOptionClick(e)} className='option-cont'>
								<p className='option-cont__text'>{e}</p>
							</div>
						))}
			</div>
		</>
	);
};

export default SelectOption;
