import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LugarHecho } from 'src/app/model/lugarHecho';

@Component({
  selector: 'app-listar-lugarhecho',
  templateUrl: './listar-lugarhecho.component.html',
  styleUrls: ['./listar-lugarhecho.component.css']
})
export class ListarLugarhechoComponent implements OnInit {
  dataSource: MatTableDataSource<LugarHecho> = new MatTableDataSource();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { }
  ngOnInit(): void {

  }
}
