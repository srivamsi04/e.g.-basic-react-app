import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Class from './assets/classs.jsx'
//import Hello,{Hi,Bye,AddAndRemove} from './assets/ArrowFunction.jsx'
import AboutArrays from './assets/ArrowFunction.jsx'
import Variables from './Variables.jsx'
import ArrayMap from './jsArraymap.jsx'
import Objects from './assets/Objects.jsx'
import MapParameter from './assets/mapParameters.jsx'

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
  <StrictMode>
  <>
  <Variables />
  <ArrayMap />
  <Class></Class>
  {element}

  <AboutArrays />
  <p>{date.toString()} <br />
  {(todate-10)}</p>
  <Objects />
  <MapParameter />
  </>
  </StrictMode>
  
)
