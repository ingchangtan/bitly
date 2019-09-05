import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {
     text = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  shortenURL() {
    // this.name.setValue('Nancy');
  }
    

}
