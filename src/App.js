import React from 'react';
import Cardlist from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox'

const App = () =>{
    return(
        <div className= 'tc'>
            <h1>Robo Contact Card</h1>
            <SearchBox />
            <Cardlist robots={robots}/>
        </div>
          
    );
}


export default App;