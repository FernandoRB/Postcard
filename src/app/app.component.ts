import { Component, ContentChildDecorator, OnInit} from '@angular/core';
import { Contact } from './models/contact';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Postcard';
  public usuario : Contact;

  constructor(){
    this.usuario = new Contact("","","");
  }

  ngOnInit(){}
  OnSubmit(form: any){
    form.reset("formContacto"); 
    console.log("evento lanzado");
    console.log(this.usuario);

  }
}

