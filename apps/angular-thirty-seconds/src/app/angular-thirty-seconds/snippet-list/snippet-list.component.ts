import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'codelab-snippet-list',
  templateUrl: './snippet-list.component.html',
  styleUrls: ['./snippet-list.component.css']
})
export class SnippetListComponent {
  demoIndex = -1;
  snippets: any[];

  constructor(private route: ActivatedRoute) {
    this.snippets = route.snapshot.data.snippets;
  }
}
