import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Ciudadano } from 'src/app/model/Ciudadano';
import { CiudadanoService } from 'src/app/service/ciudadano.service';

@Component({
  selector: 'app-ciudadano-listar',
  templateUrl: './ciudadano-listar.component.html',
  styleUrls: ['./ciudadano-listar.component.css']
})
export class CiudadanoListarComponent {
  dataSource: MatTableDataSource<Ciudadano> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'DNI',
    'idUsuario',
    //'accion01',
    'accion02',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: CiudadanoService) {}
  ngOnInit(): void {
    this.cS.List().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.cS.GetList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.cS.Delete(id).subscribe((data) => {
      this.cS.List().subscribe((data) => {
        this.cS.SetList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
