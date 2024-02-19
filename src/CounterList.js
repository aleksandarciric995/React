import { useState } from "react";
import Counterlistitem from "./CounterListitem";

const CountersList = () => {
    const [counters, setCounters] = useState([
        {id: 1, value: 0},
        {id: 2, value: 5},
        {id: 3, value: 9},
    ]);

    return (<div>
        <h1>Counters list:</h1>
        <ul>
            {/* Array.map() - vraca transformisane elemente */}
            {/* Array.forEach() - simply iterates / ide kroz niz bez da vraca bilo sta */}
            {/* {counters.map((counter, index) => (<li key={counter.id}>{counter.value}</li>))} */}
            {
                counters.map(counter => {
                    return (
                    <div key={counter.id}>
                        id: {counter.id}: <Counterlistitem counter={counter}/>
                    </div>
                )})
            }
        </ul>
    </div>
    );
};

export default CountersList;

