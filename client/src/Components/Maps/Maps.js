// import {GoogleMap} from '@react-google-maps/api'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { useEffect,useState } from 'react';
import mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';



const Maps=(props)=> {
  let pickupcoord=props.pickupcoord;
  let dropoffcoord=props.dropoffcoord;
  const retirveDistance=props.retirveDistance;
  const [distance,setDistance]=useState(0)
    mapboxgl.accessToken = 'pk.eyJ1IjoibWl0YWxlZWtvbmRlIiwiYSI6ImNsMm45Ym42dzBvZ2ozYmt6MDd4ZTA5NmUifQ.J4YXTtkSlSwZfOwX0ztdyw';
    console.log(props.pickupcoord+" "+props.dropoffcoord);
    // Add the control to the map.
    
    const marker = new mapboxgl.Marker();



useEffect(()=>{
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: props.pickupcoord,
        zoom: 13
    });
    function getRoute(start,end,map) {
      // make a directions request using cycling profile
      // an arbitrary start will always be the same
      // only the end or destination will change
      console.log(start+" "+end);
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' }
      ).then(resp=>resp.json())
      .then((jsonData)=>{
        const data = jsonData.routes[0];
        console.log("Distance "+(data["distance"]/1000)+"km");
        setDistance(data["distance"]/1000);
        retirveDistance(data["distance"]/1000);
      const route = data.geometry.coordinates;
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };
      // if the route already exists on the map, we'll reset it using setData
      if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
      }
      // otherwise, we'll make a new request
      else {
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: geojson
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#222222',
            'line-width': 4,
            'line-opacity': 0.75
          }
        });
      }
      }).catch(error=>console.log(error))
      // add turn instructions here at the end
    }
    
    map.on('load', () => {
      // make an initial directions request that
      // starts and ends at the same location
      map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: props.pickupcoord,
        zoom: 13
    });
    if(pickupcoord!=[] || dropoffcoord!=[])getRoute(props.pickupcoord,props.dropoffcoord,map);
    
      // Add starting point to the map
      map.addLayer({
        id: 'point',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: props.pickupcoord
                }
              }
            ]
          }
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#444444'
        }
      });
      // this is where the code from the next step will go
    });
    // get route
    
})

      const mapStyles = {
        width: "100%",
        height: "100%",
      };
      return (
        // <GoogleMap>
        <>
        <div id="Distance" style={{position:"absolute",zIndex:"1000",color:"black",padding:'1em',margin:'1em',backgroundColor:"rgba(255,255,255,0.8)",borderRadius:"5px"}}>
          Distance: {distance.toFixed(2)}km
        </div>
        <div id='map' style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          width: "100%"
        }}></div>
       </>
      );
  }
  export default Maps;


// import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// export class MapContainer extends React.Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyB4KG0UWWbHnX4TTwprlmCUWMWj17crPdw"
// })(MapContainer)




// import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// export class MapContainer extends React.Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyB4KG0UWWbHnX4TTwprlmCUWMWj17crPdw"
// })(MapContainer)