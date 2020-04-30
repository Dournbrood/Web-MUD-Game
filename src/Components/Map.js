import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { axiosWithAuth } from "../Utils/axiosWithAuth";


var links = [
    //   { start: 11, end: 12 },
    //   { start: 1, end: 2 },
    //   { start: 2, end: 3 },
    //   { start: 1, end: 4 },
    //   { start: 0, end: 5 },
    //   { start: 5, end: 6 },
    //   { start: 5, end: 7 },
    //   { start: 4, end: 7 }
];

var mapStyles = { position: "relative" };
var svgStyles = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };

export default function Map({ width, height }) {
    const [nodes, setNodes] = useState([])
    var xScale = scaleLinear()
        .domain([0, 100])
        .range([0, width]);
    var yScale = scaleLinear()
        .domain([0, 100])
        .range([0, height]);

    useEffect(() => {
        axiosWithAuth()
            .get('adv/map')
            .then(res => {
                let node_data = res.data.all_rooms
                setNodes(node_data)
            })
            .catch(err => {
                console.log('error: ', err)
            })
        console.log(nodes)
    }, [])

    return (
        <div id="map" style={mapStyles}>
            <img
                src="https://m.media-amazon.com/images/I/21sTBN6+unL._SR500,500_.jpg"
                alt="map background"
            />
            <svg
                style={svgStyles}
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
            >
                {nodes.length > 0 ? nodes.map(node => (
                    <circle
                    key={node.id}
                    cx={xScale(node.x * 10 + 5)}
                    cy={yScale(node.y * 10 + 5)}
                    r="5"
                    fill={node.active === true ? "yellow" : "teal"}
                    />
                )) : null}
                {/* {nodes.length > 0 ? nodes.map((node, i) => (
                    <line
                    key={i}
                    x1={xScale(node.x)}
                    x2={xScale(node.x)}
                    y1={yScale(node.y)}
                    y2={yScale(node.y)}
                    strokeWidth={2}
                    stroke="teal"
                    />
                )) : null} */}
            </svg>
        </div>
    );
}

