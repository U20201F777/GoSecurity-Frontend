import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UbicacionC } from 'src/app/model/ubicacionC';
import { UbicacionCService } from 'src/app/service/ubicacion-c.service';

@Component({
  selector: 'app-listar-ubicacionc',
  templateUrl: './listar-ubicacionc.component.html',
  styleUrls: ['./listar-ubicacionc.component.css']
})
export class ListarUbicacioncComponent implements OnInit {
  role: string= "false";
  dataSource: MatTableDataSource<UbicacionC> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'departamento',
    'ciudad',
    'distrito',
    'direccion',
    'accion01',
    'accion02',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private uS: UbicacionCService) { }
  ngOnInit(): void {
    this.uS.List().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.uS.GetList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.uS.Delete(id).subscribe((data) => {
      this.uS.List().subscribe((data) => {
        this.uS.SetList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
  restriccion(){
    if(this.role=='POLICIA' || this.role=='CIUDADANO' || this.role=='ADMIN'){
      return true;
    }else{
      return false;
    }
  }
}
