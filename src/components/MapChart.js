import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const cities = [
  {
    lon: 7.626263414093006,
    lat: 51.96068624131465,
    label: "Münster",
  },
  {
    lon: 13.729963643455521,
    lat: 51.05513892485769,
    label: "Dresden",
  },
];

const getStyle = (geo) => ({
  fill: geo.properties.NAME === "Germany" ? "#ABC" : "#DDD",
  outline: "none",
});
const MapChart = ({ lon, lat }) => {
  return (
    <ComposableMap
      // height={1000}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.5, -51.2, 0],
        scale: 4200,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: getStyle(geo),
                hover: getStyle(geo),
                pressed: getStyle(geo),
              }}
            />
          ))
        }
      </Geographies>
      {cities.map((city) => (
        <Marker
          key={`${city.lon}/${city.lat}`}
          coordinates={[city.lon, city.lat]}
        >
          <circle r={10} fill={"#DEF"} />
          <text
            textAnchor="middle"
            y={4}
            x={35}
            style={{
              fontFamily: "system-ui",
              fill: "#5D5A6D",
              fontSize: 10,
            }}
          >
            {city.label}
          </text>
        </Marker>
      ))}
      {lon && lat && (
        <Marker coordinates={[lon, lat]}>
          <circle r={10} fill="#FEA" />
        </Marker>
      )}
    </ComposableMap>
  );
};

export default MapChart;
