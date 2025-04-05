import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from '../../../models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrl: './tecnico-list.component.css'
})
export class TecnicoListComponent {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Henrique',
      cpf: '056.515.934-56',
      email: 'henrique@email.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '05/04/2025'
    }
  ];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);



  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(){}
  ngOnInit(): void {}

}


