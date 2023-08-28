import React from 'react'
import Navigateur from './Navigateur'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carte from './Carte';
import Formulaire from './Formulaire';
const App = () => {
  return (
    <React.Fragment>
        <div className='App'>
            {/*appel navbar*/} 
            <Navigateur/>
            {/*appel carte*/}
            <h1>Destinations</h1>
            <Carte/>
            {/*appel formulaire*/}
            <h2 style={{textAlign: "center"}}>Réservation</h2>
            <Formulaire/>

        </div>      
    </React.Fragment>
  )
}

export default App
