import { Component, OnInit } from '@angular/core';
import {ArrayDataSource} from '@angular/cdk/collections';
import { NestedTreeControl} from '@angular/cdk/tree';
import {GenNode1, GEN_DATA1} from '../../data/generation1';
@Component({
  selector: 'tree-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent implements OnInit {
  treeControl2 = new NestedTreeControl<GenNode1>(node => node.children);
  dataSource2 = new ArrayDataSource(GEN_DATA1);

  hasChild2 = (_ : number, node : GenNode1) => !!node.children && node.children.length > 0;
  constructor() { }

  ngOnInit() {
  }

}
