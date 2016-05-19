import { Component } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { Contact } from './contact';
import { HighlightDirective } from '../highlight.directive'; 

@Component({
    templateUrl: 'app/contact/contact.component.html',
    directives: [HighlightDirective]
})

export class ContactComponent {
    public pageTitle: string = 'Contact';
    
    model = new Contact('nirjal@gmail.com','The long road to hell...');
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
    
    //get diagonstic() { return JSON.stringify(this.model);}
}