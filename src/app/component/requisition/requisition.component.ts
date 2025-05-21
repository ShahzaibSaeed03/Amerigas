import { Component } from '@angular/core';
import { ShipToComponent } from '../ship-to/ship-to.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-requisition',
  imports: [],
  templateUrl: './requisition.component.html',
  styleUrl: './requisition.component.css'
})
export class RequisitionComponent {
constructor(private dialog: MatDialog) {}

  openShipToDialog(): void {
    this.dialog.open(ShipToComponent, {
     maxWidth: '1200px',
     panelClass: 'custom-dialog-container'
    });
  
}
}