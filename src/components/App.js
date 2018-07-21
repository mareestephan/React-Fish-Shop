import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

 
class App extends React.Component {

    state = {
        fishes : {},
        order : {}
    };

    addFish = fish => {
       //1. Take a copy of the exsiting state
       const fishes = {...this.state.fishes};
       //2. add our new fish to that fishes variable
       fishes[`fish${Date.now()}`] = fish;

       this.setState({ fishes  })
    };

    loadSampleFishes = () => {
        this.setState({ fishes : sampleFishes })
    };

        //Order column

    addToOrder = (key) => {
        //1. take a copy of state
        const order = {...this.state.order };
        //2. Either add to the order, or update number in the order
        order[key] = order[key] + 1 || 1;
        //3. Call setState to update our state object
        this.setState({ order });


    };

    

    render() {
        return (
            <div className="catch-of-the-day">
            <div className="menu">

             < Header tagline="Vrugte is amazing" />
             <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => (
              <Fish 
                key={key} 
                index={ key }
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder}
                />
              ))};
             </ul>

            </div>
             <Order fishes={this.state.fishes} order={this.state.order} />
            <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
           

            </div>

        );
    }

}

export default App;