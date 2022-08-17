import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AvailableVehicle } from './available-vehicle/availableVehicle';

@Injectable({
  providedIn: 'root'
})
export class AvilableService {
  // strURL:any="http://localhost:3000/vehicle/";
  baseUrl:string="https://rentpetruck.mahamining.com/api/";
  getStrURL:string = this.baseUrl+"VehicleAvailable/GetAllVehicleAvailable";
  postStrURL:string = this.baseUrl+"VehicleAvailable/AddVehicleAvailable";
  deleteStrURL:string = this.baseUrl+"VehicleAvailable/DeleteVehicleAvailable";
  updateStrURL:string = this.baseUrl+"VehicleAvailable/UpdateVehicleAvailable";

  // mineralMappingUrl:any="http://awsapi.mahamining.com/mineral-mapping/";
  // masterUrl: any = "http://awsmaster.mahamining.com/master/"

  constructor(private http : HttpClient) { }

  // getAllVehicleStatus()
  // {
  //   return this.http.get(this.strURL);
  // }

  // // getState(vehicle:any)
  // // {
  // // //  for passing two parameter
  // //   return this.http.get<any>(this.masterUrl + "/states/" +1 +"/"+1,vehicle).pipe(map((res:any)=>{
  // //     return res;
  // //   }))
  // // }

  // addNewVehicle(vehicle:any)
  // {
  //   return this.http.post<any>("http://localhost:3000/vehicle/",vehicle).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // deleteRecord(id:any)
  // {
  //   const DeleteURL = this.strURL + id;
  //   return this.http.delete(DeleteURL);
  // }

  // updateRecord(data:any)
  // {
  //   return this.http.put<any>("http://localhost:3000/vehicle/"+ data.id,data).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  getAllVehicleStatus():Observable<AvailableVehicle[]>
  {
    return this.http.get<AvailableVehicle[]>(this.getStrURL);
  }

  addNewVehicle(vehicle:AvailableVehicle):Observable<number>
  {
    return this.http.post<number>(this.postStrURL,vehicle).pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteRecord(vehicle:AvailableVehicle):Observable<AvailableVehicle>
  {
    return this.http.post<AvailableVehicle>(this.deleteStrURL,vehicle);
  }

  updateRecord(data:any):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    httpOptions.headers = httpOptions.headers.set('Authorization', '');
    return this.http.post<any>(this.updateStrURL,data).pipe(map((res:any)=>{
        return res;
      }))
  }
}
