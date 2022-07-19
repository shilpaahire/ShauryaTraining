import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
msg:string="";
ContactIdErrMsg:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(frmConact:any)
  {
    if(frmConact.value.contactid?.length===0)
    {
      this.ContactIdErrMsg = true;
    } else {
      this.ContactIdErrMsg = false;
    }

    if(frmConact.status==='VALID')
    {
      this.msg = "Contact form Submitted";
    // console.log("Contact form Submitted");
    }
    else
    {
      this.msg = "Contact form is Invalid";
      // console.log("Contact form is Invalid");
    }
  }

}
