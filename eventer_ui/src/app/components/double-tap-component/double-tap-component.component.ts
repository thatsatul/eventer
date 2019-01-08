import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-double-tap-component',
  templateUrl: './double-tap-component.component.html',
  styleUrls: ['./double-tap-component.component.scss']
})
export class DoubleTapComponent implements OnInit {

  @Input() value: any;
  @Output() onSave = new EventEmitter();
  @ViewChild('myInput') myInput: ElementRef;
  editActive: boolean = false;
  valueCopy: any;


  constructor(private renderer: Renderer, private elementref: ElementRef) { }

  ngOnInit() {
    this.valueCopy = this.value;
  }

  doubleTap() {
    this.editActive = true;
    // const element = this.elementref.nativeElement.querySelector('ion-input');
    // let timeOut = setTimeout(() => {
    //   this.renderer.invokeElementMethod(element, 'focus', []);
    //   console.log(this.myInput);
    //   clearTimeout(timeOut);
    // }, 100);
  }

  save() {
    this.value = this.valueCopy;
    this.editActive = false;
    this.onSave.emit(this.value);
  }

  cancel() {
    this.valueCopy = this.value;
    this.editActive = false;
  }

}
