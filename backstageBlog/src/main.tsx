import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
)
