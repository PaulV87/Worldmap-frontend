import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";

const highlighted = [  
  "Germany",
  "South Africa"
];


const Worldmap = ({ setState }) => (
  <div className="map-container">
    <div className="map">
    <ComposableMap width={300} height={500} style={{ width: "100%", height: "100%" }}>
      <ZoomableGroup>
      <Geographies geography="/features.json">
        {({ geographies }) => (
          geographies.map(geo => {            
            const isHighlighted = highlighted.indexOf(geo.properties.name) !== -1;
            return(
              <Geography 
                key={geo.rsmKey} 
                geography={geo} 
                fill={isHighlighted ? "#b2d450" : "#D6D6DA"}   
                onMouseEnter={() => {
                  setState(`${geo.properties.name}`);
                }}
                onMouseLeave={() => {
                  setState("Hover over a country to see it's name");
                }}        
                onClick= {() => {
                  //setState(`${geo.properties.name}`);
                }}    
                style={{                  
                  hover: {
                    fill: "#F53",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none"
                  }
                }}
              />
            )
          })
        )}
      </Geographies>
      </ZoomableGroup>
    </ComposableMap>
    </div>
  </div>
);


export default Worldmap