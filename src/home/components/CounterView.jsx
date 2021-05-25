import React from 'react'

const counters = [
    { count: 78, title: "Wedding cakes" },
    { count: 23, title: "Artisan breads" },
    { count: 7, title: "Custom cakes" },
    { count: 374, title: "Tarts and pie" },
]

function CounterView() {
    return <div className="counters">
        <div className="container">
            <h2 className="counter-title">COUNTERS</h2>
            <div className="title-seperator"></div>
            <div className="counter-main">
                {
                    // counters.map( (counterItem, idx) => <Counter count={counterItem.count} title={counterItem.title} /> )
                    counters.map( (counterItem, idx) => <Counter  {...counterItem}  /> )
                }
                {/* {counters.map((counteritem, idx) => <div className="counter-box">
                    <h2>{counteritem.count}</h2>
                    <p>{counteritem.title}</p>
                </div>)} */}
                {/* <div className="counter-box">
                    <h2>78</h2>
                    <p>Wedding cakes</p>
                </div>
                <div className="counter-box">
                    <h2>23</h2>
                    <p>Artisan breads</p>
                </div>
                <div className="counter-box">
                    <h2>7</h2>
                    <p>Custom cakes</p>
                </div>
                <div className="counter-box">
                    <h2>374</h2>
                    <p>Tarts and pies</p>
                </div> */}
            </div>
        </div>
    </div>


    
}


// export function Counter(props) { // <Counter  title="Value" counter={34} props passing />
//     return <div className="counter-box">
//         <h2>{props.count}</h2>
//         <p>{props.title}</p>
//     </div>
// }


export function Counter({title, count}) { // <Counter  title="Value" counter={34} Props Destructions object example />
    return <div className="counter-box">
        <h2>{count}</h2>
        <p>{title}</p>
    </div>
}

export default CounterView
