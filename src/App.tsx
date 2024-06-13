import { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPageLazy } from './pages/MainPage/MainPageLazy';
import { UploadNewCvsLazy } from './pages/UploadNewCvs/UploadNewCvsLazy';

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>loading</div>}>
				<Routes>
					<Route index path='/' element={<MainPageLazy />} />
					<Route index path='/upload-cvs' element={<UploadNewCvsLazy />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
