import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TipoCaso } from 'src/app/model/TipoCaso';
import { TipoCasoService } from 'src/app/service/tipo-caso.service';

@Component({
  selector: 'app-tipo-caso-listar',
  templateUrl: './tipo-caso-listar.component.html',
  styleUrls: ['./tipo-caso-listar.component.css']
})
export class TipoCasoListarComponent implements OnInit{
  dataSource: MatTableDataSource<TipoCaso> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'TipoCaso',
    'Estado',
    'accion01'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private tS: TipoCasoService) {}
  ngOnInit(): void {
    this.tS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.tS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.tS.delete(id).subscribe((data) => {
      this.tS.list().subscribe((data) => {
        this.tS.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
