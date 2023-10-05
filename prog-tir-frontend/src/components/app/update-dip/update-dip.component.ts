import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-update-dip',
  templateUrl: './update-dip.component.html',
  styleUrls: ['./update-dip.component.css']
})
export class UpdateDipComponent {
  @Output() closePopup: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
   
  }

  close(): void {
    this.closePopup.emit();
  } 

}
