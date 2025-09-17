import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Class from './assets/classs.jsx'
import hello,{hi,Bye} from './assets/ArrowFunction.jsx'
const element=(
  <table>
    <tr>
      <th>name</th>
    </tr>
    <tr>
      <td>
        vamsi
      </td>
    </tr>
    <tr>
      <td>
        sir
      </td>
    </tr>
  </table>
)

createRoot(document.getElementById('root')).render(
  <>
  <Class></Class>
  {element}
  <p>{hello()}</p>
  {hi()}
  {Bye('2500')}
  </>
  
)
