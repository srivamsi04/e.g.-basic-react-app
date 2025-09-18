import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Class from './assets/classs.jsx'
import hello,{hi,Bye} from './assets/ArrowFunction.jsx'
import Variables from './Variables.jsx'
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
const date=new Date();
const todate=date.getDate();

createRoot(document.getElementById('root')).render(
  <>
  <Variables />
  <Class></Class>
  {element}
  <p>{hello()}</p>
  {hi()}
  {Bye('2500')}
  <p>{date.toString()} <br />
  {(todate-10)}</p>
  </>
  
)
