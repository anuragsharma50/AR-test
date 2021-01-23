window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Magnemite',
            location: {
                lat: 28.734282,
                lng: 77.510596,
            },
             rotation: '0 0 0',
        },
         {
            name: 'Arrow',
            location: {
                lat: 28.734229,
                lng: 77.510661,
            },
            rotation: '0 90 0',
        },
         {
            name: 'Arrow2',
            location: {
                lat: 28.734229,
                lng: 77.510661,
            },
            rotation: '0 180 0',
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
         console.log(place.name);
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/arrow.glb');
         console.log(place.rotation);
         if (place.rotation) {
               model.setAttribute('rotation', place.rotation);
          }
         else{
               model.setAttribute('rotation', '0 0 0');
         }

//         model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
