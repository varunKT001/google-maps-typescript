// Instruction to every other Class on how they can be an argument to `addMarker` method
// Exporting the interface we can use them in other files too
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContentInHTML(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(mapDiv: HTMLElement) {
    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', function () {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContentInHTML(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
