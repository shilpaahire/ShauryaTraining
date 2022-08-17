import { Component, OnInit } from '@angular/core';
import { AvilableService } from '../avilable.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { AvailableVehicle } from './availableVehicle';

@Component({
  selector: 'app-available-vehicle',
  templateUrl: './available-vehicle.component.html',
  styleUrls: ['./available-vehicle.component.css']
})
export class AvailableVehicleComponent implements OnInit {
  vehicleData: any = [];
  vehicleForm !: FormGroup;
  textSearch: string="";
  // durationInSeconds = 5;
  deletedId!: number;
  formStatus:string = 'Add';
  selDetail!:any;

  constructor(private service: AvilableService, private formBuilder: FormBuilder, private snackBar : ToastrService) { }

  ngOnInit(): void {
    this.loadVehicle()
    this.addUpdateForm();
  }

  loadVehicle() {
    this.service.getAllVehicleStatus().subscribe((data: any) => {
      this.vehicleData = data;
    })
  }

  deleteDetail(objvehicle:AvailableVehicle) {
    this.service.deleteRecord(objvehicle).subscribe(() => {
      this.loadVehicle();
    })
  }

  onClose()
  {
    this.formStatus ='Add';
  }

  onEdit(obj:object)
  {
    this.formStatus = 'Update';
    this.selDetail = obj;
    this.addUpdateForm();
  }

  addUpdateForm()
  {
    this.vehicleForm = this.formBuilder.group({
      vehicleID:[this.formStatus == 'Update'? this.selDetail['vehicleID']:''],
      vehicleNumber:[this.formStatus == 'Update'? this.selDetail['vehicleNumber']:''],
      vehicleRoute:[this.formStatus == 'Update'? this.selDetail['vehicleRoute']:''],
      vehicleDate:[this.formStatus == 'Update'? this.selDetail['vehicleDate']:''],
      vehicleTime:[this.formStatus == 'Update'? this.selDetail['vehicleTime']:'']
    })
  }

  onSubmit()
  {
    let formValues = this.vehicleForm.value;

    if(this.formStatus != 'Add'){
      this.service.updateRecord(formValues).subscribe((res:any)=>{
      let ref = document.getElementById('cancel');
      ref?.click();
      this.vehicleForm.reset();
      this.loadVehicle();
    },
    err=>{
      console.log(err)
      alert("Something went wrong");
    })
    }else{
      this.service.addNewVehicle(formValues).subscribe((res:any)=>{
        let ref = document.getElementById('cancel');
        ref?.click();
        this.vehicleForm.reset();
        this.loadVehicle();
      },
      err=>{
        console.log(err)
        // alert("Something went wrong");
      })
    }
  }

  deleteSnack(){
  //   this.snackBar.open('test','action',{
  //     duration:2000,
  //   });
  //   this.snackBar.open("Login Success","ok",{duration: 4000})
  this.snackBar.success('Record deleted Successfully');
  }
}
