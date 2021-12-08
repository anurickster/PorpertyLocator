import Post from './component/post/Post';
import { ToastContainer } from 'react-toastify';

const App = () => {
	return (
		<>
			<Post />
			<ToastContainer position="bottom-left" autoClose={5000} />
		</>
	);
};

export default App;
