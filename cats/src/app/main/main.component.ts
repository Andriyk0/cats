import { Component, OnInit } from '@angular/core';
import { CatsService } from '../services/cats.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  public catsBreed:any;
  public showCats: any;

  public selectedValue:string = 'All';;

  constructor(private service:CatsService) {}

  ngOnInit(): void {
    this.getAllBreedFromServer()
  }

  getAllBreedFromServer() {
    this.service.getCats()
      .subscribe(response => {
        this.catsBreed = response;
        this.showCats = response;
        console.log(response);
    });
  }

  getFiltered() {
    if (this.selectedValue === 'All') {
      this.showCats = this.catsBreed;
    } else {
      let copy = [...this.catsBreed];
      this.showCats = copy.filter((item:any) => item.id === this.selectedValue);
    }
  }
}
