import { Button, ButtonType } from '../../components/Button/Button';
import ButtonInput from '../../components/ButtonInput/ButtonInput';
import './NavBar.css';

const NavBar = () => {
	return (
		<div className='navbar'>
			<div></div>
			<div className='button-cont'>
				<div style={{ marginRight: '31px', display: 'flex', gap: '15px', alignItems: 'center' }}>
					<Button text={'Home'} type={ButtonType.Rectangle} />
					<Button text={'Jobs'} type={ButtonType.Rectangle} />
				</div>
				<div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
					<ButtonInput onChange={() => {}} style={{ backgroundColor: '#077E1A', height: 81 }}>
						<div className='green-button-input__text'>Upload new CVs</div>
						<div className='green-button-input__price'>10 tokens</div>
					</ButtonInput>
					<Button text={'Account icon'} type={ButtonType.Oval} />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
