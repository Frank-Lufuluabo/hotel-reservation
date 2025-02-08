import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RoomContextProvider from './context';

ReactDOM.render(
  <React.StrictMode>
  <RoomContextProvider>
    <App />
    </RoomContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);