import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MahaminingService } from '../service/mahamining.service';

@Component({
  selector: 'app-mahamining',
  templateUrl: './mahamining.component.html',
  styleUrls: ['./mahamining.component.css']
})
export class MahaminingComponent implements OnInit {
  mahaminForm !: FormGroup;
  formFilter!: FormGroup;
  formData = [];
  stateData: any = [];
  divisionData: any = [];
  departmentData: any = [];
  districtData: any = [];
  getData: any = [];
  pageNo: number = 1;
  flag: string = "i";
  editFlag !: boolean;
  filterResult: any = [];

  constructor(private formbuilder: FormBuilder, private service: MahaminingService) { }

  ngOnInit(): void {

    this.officeData();
    this.getAllState();
    // this.getAllDivision();
    this.getAllDepartment();
    this.fillterFields();
    this.getAllData();
    this.submitFillterForm();
  }

  officeData() {
    this.mahaminForm = this.formbuilder.group({
      "id": [],
      "organizationId": [0],
      "name": [''],
      "address": [''],
      "stateId": [1],
      "divisionId": [0],
      "districtId": [0],
      "landlineNo": [''],
      "emailId": [''],
      "contactPersonName": [''],
      "mobileNo": ['']
    })

    this.formFilter = this.formbuilder.group({
      "stateId": [1],
      "divisionId": [0],
      "districtId": [0],
      "organizationId": [0]
    })
  }

  onSubmit(frm:any) {
    let obj = this.mahaminForm.value;
    let obj1 = {
      "id": +obj.id,
      "organizationId": +obj.organizationId,
      "name": obj.name,
      "address": obj.address,
      "stateId": +obj.stateId,
      "divisionId": +obj.divisionId,
      "districtId": +obj.districtId,
      "contactPersonName": obj.contactPersonName,
      "mobileNo": (obj.mobileNo).toString(),
      "landlineNo": (obj.landlineNo).toString(),
      "createdBy": 1,
      "emailId": obj.emailId,
      "flag": this.editFlag ? 'u' : 'i'
    }

    this.service.saveDepartment(JSON.stringify(obj1)).subscribe((data: any) => {
      if (data.statusCode == '200') {
        alert("Data Saved Successfully");
        this.clearForm();
        this.submitFillterForm();
      }
    })
  }

  getAllState() {
    this.service.getAllState().subscribe((data: any) => {
      this.stateData = data.responseData;
    })
  }

  getAllDepartment() {
    this.service.getAllDepartment().subscribe((data: any) => {
      this.departmentData = data.responseData;
    })
  }

  getAllDivision(event: any) {
    let id = event.target.value;
    this.service.getAllDivision(id).subscribe((data: any) => {
      this.divisionData = data.responseData;
    })
  }

  getAllDistrict(event: any) {
    let id = event.target.value;
    this.service.getAllDistrict(id).subscribe((data: any) => {
      this.districtData = data.responseData;
    })
  }

  getAllData() {
    let formVal = this.mahaminForm.value;
    
    this.service.getDepartment(formVal).subscribe((data: any) => {
      this.formData = data.responseData.data;
      console.log("hiiiiii",this.formData);
    })
  }

  fillterFields() {
    this.service.getAllDepartment().subscribe((res: any) => {
      this.getData = res.responseData.data;
    })
    console.log(this.mahaminForm.value);
  }

  // fillterFormSubmit() {
  //   // let obj =  this.filterFrm.value;
  //   // obj['pageNo'] = this.pageNo;
  //   // debugger
  //   this.service.getDepartment(this.formFilter.value).subscribe((res: any) => {
  //     this.filterResult = res.responseData.data;
  //   })
  //   console.log(this.formFilter.value);
  // }

  // getOfficeData() {
  //   let formVal = this.formFilter.value;

  //   this.service.getDepartment(formVal).subscribe((data: any) => {
  //     this.formData = data.responseData.data;
  //     console.log("hiiiiii",this.officeData);
  //   })
  // }

  editForm(obj: any) {
    this.editFlag = true;
    this.mahaminForm.patchValue({
      id: obj.id,
      organizationId: obj.organizationId,
      name: obj.name,
      address: obj.address,
      stateId: obj.stateId,
      divisionId: obj.divisionId,
      districtId: obj.districtId,
      landlineNo: obj.landlineNo,
      emailId: obj.emailId,
      contactPersonName: obj.contactPersonName,
      mobileNo: obj.mobileNo,
    })
  }

  clearForm() {
    this.mahaminForm.reset();
    this.editFlag = false;
  }

  submitFillterForm() {
    // let obj =  this.filterFrm.value;
    // obj['pageNo'] = this.pageNo;
    // debugger
    this.service.getDepartment(this.formFilter.value).subscribe((res: any) => {
      this.filterResult = res.responseData.data;
    })
    console.log(this.formFilter.value);
  }
}

