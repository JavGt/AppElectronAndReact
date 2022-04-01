import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const notificacion = () => {
		const NOTIFICATION_TITLE = 'Notificación';
		const NOTIFICATION_BODY =
			'Notificación del proceso Renderer. Haga clic para iniciar sesión en la consola';
		const CLICK_MESSAGE = 'Se hizo clic en la notificación';

		new Notification(NOTIFICATION_TITLE, {
			body: NOTIFICATION_BODY,
			icon: '../logo2.png',
			sound: '../sound.mp3',
		}).onclick = () => setCount(3);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Hello Vite + React!</p>
				<p>
					<button type='button' onClick={() => setCount(count => count + 1)}>
						count is: {count}
					</button>
					<button>Cerrar Ventana</button>
					<button onClick={notificacion}>Mostrar notificación</button>
				</p>
				<p>
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						Learn React
					</a>
					{' | '}
					<a
						className='App-link'
						href='https://vitejs.dev/guide/features.html'
						target='_blank'
						rel='noopener noreferrer'
					>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	);
}

export default App;
