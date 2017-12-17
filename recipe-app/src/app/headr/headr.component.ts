import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headr',
  templateUrl: './headr.component.html',
  styleUrls: ['./headr.component.css']
})
export class HeadrComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
