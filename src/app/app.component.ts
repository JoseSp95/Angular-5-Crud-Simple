import { Component } from '@angular/core';
import { Employe } from './shared/models/employe';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employeArray: Employe[] = [
    {id: 1, name: 'Jose', country: 'Peru'},
    {id: 2, name: 'Victor', country: 'Bolivia'},
    {id: 3, name: 'Angy', country: 'Chile'},
  ];
  selectedEmploye: Employe = new Employe();
  public addOrEdit() {
    if (this.selectedEmploye.id == null) {
      this.selectedEmploye.id = this.employeArray.length + 1;
      this.employeArray.push(this.selectedEmploye);
    }
    this.selectedEmploye = new Employe();
  }
  public openToEdit(employe: Employe) {
    this.selectedEmploye = employe;
  }
  public delete(employe: Employe) {
    this.employeArray = this.employeArray.filter(x => x !== this.selectedEmploye);
    this.selectedEmploye = new Employe();
  }
}
