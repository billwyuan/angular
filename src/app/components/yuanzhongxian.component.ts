import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {GenNode, LONGDE} from '../data/yuanlongde';
@Component({
  selector: 'app-yuanzhongxian',
  templateUrl: './yuanzhongxian.component.html',
  styleUrls: ['./yuanzhongxian.component.scss'],

})
export class YuanzhongxianComponent  {
  treeControl = new FlatTreeControl<GenNode>(
    node => node.level, node => node.expandable);

dataSource = new ArrayDataSource(LONGDE);

hasChild = (_: number, node: GenNode) => node.expandable;

getParentNode(node: GenNode) {
  const nodeIndex = LONGDE.indexOf(node);

  for (let i = nodeIndex - 1; i >= 0; i--) {
    if (LONGDE[i].level === node.level - 4) {
      return LONGDE[i];
    }
  }

  return null;
}

shouldRender(node: GenNode) {
  const parent = this.getParentNode(node);
  return !parent || parent.isExpanded;
}
}
