import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { GenNode2, GEN_DATA2 } from '../../data/generation2';
export class FileNode {
    children : FileNode[];
    filename : string;
    type : any;
}


@Injectable()
export class FileDatabase {

dataChange = new BehaviorSubject<FileNode[] > ([]);

    get data(): FileNode[]{
        return this.dataChange.value;
    }
    constructor() {
        console.log('AppComponent');
        this.initialize();
    }
    initialize() {
        const dataObject = JSON.parse(GEN_DATA2);
        const data = this.buildFileTree(dataObject, 0);
        this.dataChange.next(data);
    }
    buildFileTree(obj : {
        [key : string]: any
    }, level : number): FileNode[]{
        return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
            const value = obj[key];
            const node = new FileNode();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                } else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
}
@Component({selector: 'app-gen1', templateUrl: 'gen1.component.html', styleUrls: ['gen1.component.css'], providers: [FileDatabase]})
export class Gen1Component {
    treeControl : FlatTreeControl<GenNode2>;
    treeFlattener : MatTreeFlattener<FileNode, GenNode2>;
    dataSource : MatTreeFlatDataSource<FileNode, GenNode2>;

    constructor(database : FileDatabase, private router : Router) {
        this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
        this.treeControl = new FlatTreeControl<GenNode2>(this._getLevel, this._isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(data => this.dataSource.data = data);
    }
    transformer = (node : FileNode, level : number) => {
        return new GenNode2(!!node.children, node.filename, level, node.type);
    }
    private _getLevel = (node : GenNode2) => node.level;
    private _isExpandable = (node : GenNode2) => node.expandable;
    private _getChildren = (node : FileNode): Observable<FileNode[]> => observableOf(node.children);
    hasChild = (_ : number, _nodeData : GenNode2) => _nodeData.expandable;

    btnClick () {
        console.log("click");
        this.router.navigate(['/flat']);
    };

}
