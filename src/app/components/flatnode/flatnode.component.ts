import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {GenNode3, GEN_DATA3} from '../../data/generation3';


/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'flatnode-component',
  templateUrl:'flatnode.component.html',
  styleUrls: ['flatnode.component.css'],
})
export class FlatNodeExample {
  treeControl = new FlatTreeControl<GenNode3>(
      node => node.level, node => node.expandable);

  dataSource = new ArrayDataSource(GEN_DATA3);

  hasChild = (_: number, node: GenNode3) => node.expandable;

  getParentNode(node: GenNode3) {
    const nodeIndex = GEN_DATA3.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (GEN_DATA3[i].level === node.level - 1) {
        return GEN_DATA3[i];
      }
    }

    return null;
  }

  shouldRender(node: GenNode3) {
    const parent = this.getParentNode(node);
    return !parent || parent.isExpanded;
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */