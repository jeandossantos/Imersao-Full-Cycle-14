import { DirectionsResponseData } from "@googlemaps/google-maps-services-js";
import { Route } from "@prisma/client";


export class RouteSerializer implements Omit<Route, 'directions'> {
    id: string;
    name: string;
    source: { name: string; } & { location: { lat: number; lng: number; }; };
    destination: { name: string; } & { location: { lat: number; lng: number; }; };
    duration: number;
    distance: number;
    directions: DirectionsResponseData & { request: any }
    createdAt: Date;
    updateAt: Date;

    constructor(route: Route) {
        this.id = route.id;
        this.name = route.name;
        this.duration = route.duration;
        this.distance = route.distance;
        this.directions = JSON.parse(route.directions as string);
        this.createdAt = route.createdAt;
        this.updateAt = route.updateAt;
        this.source = route.source;
        this.destination = route.destination;
    }
}