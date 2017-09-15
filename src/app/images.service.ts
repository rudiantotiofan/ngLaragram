import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Image } from './image.model';

@Injectable()
export class ImagesService {
    baseUrl = 'http://localhost:8000';

    constructor(private http: Http) {}

    getImagesList(): Observable<Image[]> {
        const url = `${this.baseUrl}/api/images`;
        return this.http.get(url)
        .map(Response => Response.json() as Image[]);
    }

    getImage(id: number): Observable<Image> {
        const url = `${this.baseUrl}/api/images/${id}`;
        return this.http.get(url)
        .map(Response => Response.json() as Image);
    }
}
