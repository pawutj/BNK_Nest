import React, { useState } from "react";
import logo from "./logo.svg";
import { Map, TileLayer, Polygon } from "react-leaflet";
import "./App.css";

import Choropleth from "react-leaflet-choropleth";

//import district shape data
import * as districtShape from "./data/district/districtNew.json";
import * as districtShapeGEOJSON from "./data/district/districtNew.geojson";

//import district expense data to display fill Visualization
import * as districtExpenseData from "./sample.json";

function MapDistrict() {
  console.log(console.log(districtExpenseData[0]));
  let [districtSelected, setDistrictSelected] = useState("");
  let [mouseOnDistrict, setmouseOnDistrict] = useState("");

  // style of choropleth
  const style = {
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.6,
  };

  return (
    <Map center={[13.7133, 100.501]} zoom={11}>
          <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Choropleth
        data={{ type: "FeatureCollection", features: districtShape.features }}
        identity = {(feature) => feature.properties.OBJECTID}
        valueProperty={(feature) => feature.properties.no_female}
        visible={feature => true}
        scale={[
          "#FDE725FF",
          "#73D055FF",
          "#29AF7FFF",
          "#238A8DFF",
          "#39568CFF",
          "#482677FF",
          "#440154FF",
        ]}
        steps={7}
        mode="e"
        style={style}
        onEachFeature={(feature, layer) =>
          layer.bindPopup(feature.properties.dname)
        }
        //ref={(el) => (this.Choropleth = el.leafletElement)}
      />
    </Map>
  );
}

export default MapDistrict;