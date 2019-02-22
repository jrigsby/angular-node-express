import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TcrappService } from '../tcrapp.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  constructor(public service:TcrappService) {
    service.title = "Contact";
    this.model = {sent: false, error: false};
    service.setCookie();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.subject = new FormControl('', Validators.required);
    this.phone = new FormControl('', Validators.required);
    this.message = new FormControl('', Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      name: this.name,
      email: this.email,
      subject: this.subject,
      phone: this.phone,
      message: this.message
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit = () => {
    this.submitted = true;
    this.model.error=null;
    this.model.sent=null;
    if (this.myform.valid) {
      this.service.sendMail(this.name.value, this.email.value, this.phone.value, this.subject.value, this.message.value)
        .then(data=>{
           if(!data){
             this.model.error=true
           }
           else{
             this.model.sent=true
           }
        })
      this.submitted = false;
      this.myform.reset();
      this.subject.setValue("");
    }
  }

  model: {sent: boolean, error: boolean};
  myform: FormGroup;
  name: FormControl;
  email: FormControl;
  message: FormControl;
  phone: FormControl;
  subject: FormControl;
  submitted = false;
}
