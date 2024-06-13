import { FC } from 'react';
import './AnalyzeButton.css';

interface AnalyzeButtonProps {
	text: string;
	price: number;
}

const AnalyzeButton: FC<AnalyzeButtonProps> = ({ text, price }) => {
	return (
		<button className='analyze-button'>
			<span className='analyze-button__text'>{text}</span>
			<span className='analyze-button__price'>({price} tokens)</span>
		</button>
	);
};

export default AnalyzeButton;
