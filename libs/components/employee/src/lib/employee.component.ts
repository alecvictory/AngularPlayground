import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-employee',
  template: `
    <p>
      employee works!
    </p>
  `,
  styles: [
  ]
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
