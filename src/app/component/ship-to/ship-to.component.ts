import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ship-to',
  imports: [CommonModule],
  templateUrl: './ship-to.component.html',
  styleUrl: './ship-to.component.css',
})
export class ShipToComponent {
  dialogRef = inject(MatDialogRef<ShipToComponent>);

  address= [
    {
      id: '8554-0000',
      name: 'Ace 3rd party (Dallas)',
      street: '500 N Gulph Road',
      city: 'King of Prussia',
      state: 'PA',
      postalCode: '198556-52245',
      country: 'US'
    },
    {
      id: '8554-0001',
      name: 'Beta Warehouse',
      street: '123 Commerce Blvd',
      city: 'Philadelphia',
      state: 'PA',
      postalCode: '19103',
      country: 'US'
    },
    {
      id: '8554-0002',
      name: 'Gamma Depot',
      street: '789 Supply Chain Rd',
      city: 'Pittsburgh',
      state: 'PA',
      postalCode: '15222',
      country: 'US'
    }
  ];

  chooseAddress(row: any): void {
    this.dialogRef.close(row);
  }

  goBack(): void {
    this.dialogRef.close();
  }

  createNew(): void {
    alert('New address creation not implemented.');
  }
}
