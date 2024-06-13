import AnalyzeButton from '../../components/AnalyzeButton/AnalyzeButton';
import { Button, ButtonType } from '../../components/Button/Button';
import ButtonInput from '../../components/ButtonInput/ButtonInput';
import './MainPage.css';

const MainPage = () => {
	return (
		<div className='main-page'>
			<div className='title-cont'>
				<Button
					type={ButtonType.Oval}
					text={'sign in'}
					style={{
						position: 'absolute',
						top: 68,
						right: '122px',
					}}
				/>
				<p className='title'>
					Evaluate a CV of <br />a candidate with AI
				</p>
			</div>
			<div className='functions-cont'>
				<ButtonInput onChange={() => {}} style={{ borderRadius: '4px', marginBottom: '69px' }}>
					<span>Paste your job description</span>
				</ButtonInput>
				<ButtonInput onChange={() => {}} style={{ borderRadius: '4px', marginBottom: '105px' }}>
					<span>Upload some CV</span>
				</ButtonInput>
				<AnalyzeButton text={'Analyze'} price={10} />
			</div>
		</div>
	);
};

export default MainPage;
