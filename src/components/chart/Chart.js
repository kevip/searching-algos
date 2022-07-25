import './Chart.css';

function Chart(props) {
    return (<div className="chart-container">
        {props.bars.map((bar, key) =>
            <div className={bar.class} style={{ height: bar.height * 5 }} key={key}></div>
        )}
    </div>);

}
export default Chart;