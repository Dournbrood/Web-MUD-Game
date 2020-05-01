import React, { useEffect, useState, useContext } from "react";
import { scaleLinear } from "d3-scale";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import { Box } from "@chakra-ui/core";
import RoomContext from '../context/RoomContext'

var mapStyles = { position: "relative" };
var svgStyles = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };

export default function Map({ width, height }) {
  const [nodes, setNodes] = useState([]);
  const { roomData } = useContext(RoomContext)

  var xScale = scaleLinear().domain([0, 100]).range([0, width]);
  var yScale = scaleLinear().domain([0, 100]).range([0, height]);

  useEffect(() => {
    axiosWithAuth()
      .get("adv/map")
      .then((res) => {
        let node_data = res.data.all_rooms;
        setNodes(node_data);
        console.log(roomData)
      })
      .catch((err) => {
        console.log("error: ", err);
      });
    // console.log(nodes);
  }, []);

  return (
    <Box>
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
          {nodes.length > 0
            ? nodes.map((node, i) => (
                <>
                  {node.n_to !== 0 ? (
                    <line
                      key={node.id + 100}
                      x1={xScale(node.x * 10 + 5)} // node.x
                      x2={xScale(node.x * 10 + 5)} // next node.x
                      y1={yScale(node.y * 10 + 5)} // node.y
                      y2={yScale(node.y * 10 + 5 + 9)} // next node.y
                      strokeWidth={3}
                      stroke="teal"
                    />
                  ) : null}
                  {node.s_to !== 0 ? (
                    <line
                      key={node.id + 200}
                      x1={xScale(node.x * 10 + 5)} // node.x
                      x2={xScale(node.x * 10 + 5)} // next node.x
                      y1={yScale(node.y * 10 + 5)} // node.y
                      y2={yScale(node.y * 10 + 5 - 9)} // next node.y
                      strokeWidth={3}
                      stroke="teal"
                    />
                  ) : null}
                  {node.e_to !== 0 ? (
                    <line
                      key={node.id + 300}
                      x1={xScale(node.x * 10 + 5)} // node.x
                      x2={xScale(node.x * 10 + 5 + 9)} // next node.x
                      y1={yScale(node.y * 10 + 5)} // node.y
                      y2={yScale(node.y * 10 + 5)} // next node.y
                      strokeWidth={3}
                      stroke="teal"
                    />
                  ) : null}
                  {node.w_to !== 0 ? (
                    <line
                      key={node.id + 400}
                      x1={xScale(node.x * 10 + 5)} // node.x
                      x2={xScale(node.x * 10 + 5 - 9)} // next node.x
                      y1={yScale(node.y * 10 + 5)} // node.y
                      y2={yScale(node.y * 10 + 5)} // next node.y
                      strokeWidth={3}
                      stroke="teal"
                    />
                  ) : null}
                </>
              ))
            : null}
            {nodes.length > 0
            ? nodes.map((node) => (
                <circle
                  key={node.id}
                  cx={xScale(node.x * 10 + 5)}
                  cy={yScale(node.y * 10 + 5)}
                  r="7"
                  fill={roomData.title === node.title && roomData.description === node.description ? "yellow" : "teal"}
                />
              ))
            : null}
        </svg>
      </div>
    </Box>
  );
}
