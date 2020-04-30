import React from "react";
// import { scaleLinear } from "d3-scale";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

var nodes = [
//   { x: 40, y: 60, room_id: 9, active: true }
//   { x: 50, y: 60, active: true },
//   { x: 50, y: 50 },
//   { x: 50, y: 40},
//   { x: 50, y: 70 },
//   { x: 60, y: 60 },
//   { x: 70, y: 60 },
//   { x: 60, y: 70 }
];

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
//   var xScale = scaleLinear()
//     .domain([0, 100])
//     .range([0, width]);
//   var yScale = scaleLinear()
//     .domain([0, 100])
//     .range([0, height]);

    axiosWithAuth()
        .get('adv/map')
        .then(res => {
            let node_data = res.data.all_rooms
            node_data.forEach(element => {
                const node = {
                    x: element.x * 10,
                    y: element.y * 10,
                    room_id: element.id
                }
                nodes.push(node)
            });
        })
        .catch(err => {
            console.log('error: ', err)
        })
        console.log(nodes)

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
        {nodes.map(node => (
            <circle
            key={node.room_id}
            cx={node.x}
            cy={node.y}
            r="5"
            fill={node.active === true ? "yellow" : "teal"}
            />
        ))}
        {/* {links.map((link, i) => (
            <line
            key={i}
            x1={nodes[link.start].x}
            x2={nodes[link.end].x}
            y1={nodes[link.start].y}
            y2={nodes[link.end].y}
            strokeWidth={2}
            stroke="teal"
            />
        ))} */}
      </svg>
    </div>
  );
}

