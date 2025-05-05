import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { CitybikesApiService } from '../../services/citybikes-api.service';
import { City } from '../../model/city.entity';


@Component({
  selector: 'app-city-list',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule, TranslateModule],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  cities: Array<City> = [];
  displayedColumns: string[] = ['id', 'name', 'location', 'href', 'company', 'gbfs_href'];
  dataSource: any;

  constructor(private citybikesApiService: CitybikesApiService) {}

  ngOnInit(): void {
    this.citybikesApiService.getCities().subscribe(
      (data: City[]) => {
        console.log('Productos cargados:', data);
        this.cities = data;
      },
      (error) => {
        console.error('Error al cargar los productos:', error);
      }
    );
  }
}
