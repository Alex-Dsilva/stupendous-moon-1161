
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
// import i18n from './utils/i18n'
import './utils/i18n'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter >
      <Suspense fallback={(<div>Loading...</div>)}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </BrowserRouter >
)

