import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
  }

  goToCreations() {
    this.router.navigate(['creation'], { relativeTo: this.route });
  }

  goToJoinCreations() {
    this.router.navigate(['joincreation'], { relativeTo: this.route });
  }

}
