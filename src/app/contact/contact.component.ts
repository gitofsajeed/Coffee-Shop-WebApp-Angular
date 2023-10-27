import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
 
  isvalid = false
  constructor(private form : FormBuilder, private service: ServiceService){}

  addForm =  this.form.group({
    Name : ['', Validators.required], 
    email : ['', [Validators.required, Validators.email]],
    number : ['', Validators.required],
    message : ['', Validators.required],
  })

  onSubmit(){
    if(this.addForm.valid){
      this.service.ContactData.push(this.addForm.value);
      this.addForm.reset();
      this.isvalid =true
    }
  }
  
}
