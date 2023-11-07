import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Policia } from 'src/app/model/Policia';
import { PoliciaService } from 'src/app/service/policia.service';

@Component({
  selector: 'app-policia-listar',
  templateUrl: './policia-listar.component.html',
  styleUrls: ['./policia-listar.component.css']
})
export class PoliciaListarComponent {
  dataSource: MatTableDataSource<Policia> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'Placa',
    'FotoRostro',
    'FotoIdentificacion',
    'Rango',
    'Usuario',
    //'accion01',
    'accion02',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private pS: PoliciaService) {}
  ngOnInit(): void {
    this.pS.List().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.pS.GetList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.pS.Delete(id).subscribe((data) => {
      this.pS.List().subscribe((data) => {
        this.pS.SetList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
