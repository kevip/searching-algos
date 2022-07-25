import { useState } from "react";

function NavHeader(props) {
    const [algorithm, setAlgorithm] = useState(1);

    let algos = [
        {
            value: 1,
            label: 'Bubble Sort'
        },
        {
            value: 2,
            label: 'QuickSort'
        }
    ];
    let startSearch = () => {
        props.onStartSearch(algorithm);
    }

    return <div className="nav-header">
        <div className="nav-header__algorithm-form">
            <label>Algorithm:&nbsp;</label>
            <select defaultValue={algorithm}>
                {algos.map((algo) => <option value={algo.value} key={algo.value}>{algo.label}</option>)}
            </select>
            <button onClick={startSearch}>Execute</button>
        </div>
    </div>
}

export default NavHeader;