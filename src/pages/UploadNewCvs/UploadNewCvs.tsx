import AnalyzeButton from '../../components/AnalyzeButton/AnalyzeButton';
import ButtonInput from '../../components/ButtonInput/ButtonInput';
import SelectOption from '../../components/SelectOption/SelectOption';
import NavBar from '../../widgets/NavBar/NavBar';
import './UploadNewCvs.css';

const UploadNewCvs = () => {
	return (
		<div className='upload-cvs-page'>
			<NavBar />
			<div className='upload-cvs-page__content'>
				<h2>Add new candidates</h2>
				<SelectOption
					text='Choose a role for CV evaluation from current jobs:'
					options={{
						FrontDev: 'Frontend Developer',
						BackendDev: 'Backend Developer',
						Devops: 'Devopser',
					}}
					onChange={(val) => {}}
				/>
				<ButtonInput
					onChange={() => {}}
					style={{
						width: '405px',
						marginTop: '80px',
						backgroundColor: 'white',
						color: 'black',
						fontSize: '20px',
						height: '35px',
						borderRadius: '4px',
					}}
				>
					... or paste a new Job Description
				</ButtonInput>
				<ButtonInput
					onChange={() => {}}
					style={{
						marginTop: '90px',
						backgroundColor: 'white',
						color: 'black',
						fontSize: '30px',
						borderRadius: '4px',
						height: '95px',
						marginBottom: '90px',
					}}
				>
					Upload <br />
					new CVs
				</ButtonInput>
				<AnalyzeButton text='Analyze' price={10} />
			</div>
		</div>
	);
};

export default UploadNewCvs;
