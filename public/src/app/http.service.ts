import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPetsFromDb(){
    return this._http.get("/api/pets");
  }
  getOnePetFromDb(id){

    return this._http.get(`/api/pet/${id}`);
  }
  addPetToDb(pet){
    return this._http.post("/api/pet", pet)
  }
  editPetInDb(id, pet){
    return this._http.patch(`/api/pet/${id}`, pet);
  }
  deletePetFromDb(id){
    return this._http.delete(`/api/pet/${id}`);
  }
  addlikeToDb(id){
    console.log("service id: ", id)
    return this._http.patch(`/api/pet/like/${id}`, id)
  }
}
