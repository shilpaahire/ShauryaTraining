import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MahaminingService {

  constructor(private http: HttpClient) { }

  getAllDepartment() {
    return this.http.get<any[]>("http://awsapi.mahamining.com/mineral-mapping/consumer-project/get-organization?UserId=1");
  }

  getAllState() {
    return this.http.get("http://awsmaster.mahamining.com/master/states/1");
  }

  getAllDivision(id: any) {
    return this.http.get("http://awsmaster.mahamining.com/master/divisions/1/" + id);
  }

  getAllDistrict(id: any) {
    return this.http.get("http://awsmaster.mahamining.com/master/districts/GetDistrictByUserIdDivisionId/1/" + id);
  }

  getDepartment(data: any) {
    return this.http.get("http://awsapi.mahamining.com/mineral-mapping/department/get-department-details?OrganizationId=" + data.organizationId + "&StateId=" + data.stateId + "&DivisionId=" + data.divisionId + "&DistrictId=" + data.districtId + "&" + "NoPage=1&RowsPerPage=10");
  }

  saveDepartment(data:any)
  {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json; charset=utf-8');

  return this.http.post("http://awsapi.mahamining.com/mineral-mapping/department/save-department", data, {headers:headers})
  }

  updateData(data:any)
  {
      let headers: HttpHeaders = new HttpHeaders();
  headers = headers.append('Content-Type', 'application/json; charset=utf-8');
      return this.http.put<any>("http://awsapi.mahamining.com/mineral-mapping/department/save-department"+data.id,data,{headers:headers});
  }
}
