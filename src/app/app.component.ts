import { Component, OnInit } from '@angular/core';
import { JsonService } from './services/json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-examples';

  constructor (private jsService : JsonService) {}

  ngOnInit(): void {
    // this.getRaw();
    this.getPaginated();
  }


  getRaw() {
    this.jsService.getRawData().subscribe({
      next: (x : any) => {
        console.log(x)
      }
    })
  }

  getPaginated() {
    this.jsService.getPaginated(2,9).subscribe({
      next: (x : any) => {
        console.log(x)
      }
    })
  }
}
