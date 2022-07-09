/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();

const mapDiv = document.getElementById('map');
const googleMap = new Map(mapDiv!);

googleMap.addMarker(user);
googleMap.addMarker(company);
