import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-backboton',
  templateUrl: './backboton.component.html',
  styleUrls: ['./backboton.component.scss'],
})
export class BackbotonComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() texto: string = '';
  @Input() ruta: string = '';

  constructor() { }

  ngOnInit() {}

}
