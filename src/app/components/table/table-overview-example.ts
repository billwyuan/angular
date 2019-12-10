import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogExample} from '../dialog/dialog-example';
import {FirebaseService} from '../../containers/firebase.service';
export interface UserData {
    id: string;
    name: string;
    wife: string;
    desc: string;
    parent: string;
    children: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
    'maroon',
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'purple',
    'fuchsia',
    'lime',
    'teal',
    'aqua',
    'blue',
    'navy',
    'black',
    'gray'
];
const NAMES: string[] = [
    '袁家村',
    '中国陕',
    '袁家村',
    '袁家村',
    '袁家村',
    '中国陕',
    '唐太宗',
    '举世'
];

const settings = {
    timestampsInSnapshots: true
};
interface Pizza {
    name: string;
    addedAt: string;
}
export interface DialogData {
    animal: string;
    name: string;
}

@Component({selector: 'table-overview-example', styleUrls: ['table-overview-example.css'], templateUrl: 'table-overview-example.html'})
export class TableOverviewExample implements OnInit { // displayedColumns: string[] = ['代', '姓名', '陪偶', '描述','父母', '子女'];
    displayedColumns : string[] = [
        'id',
        'name',
        'wife',
        'desc',
        'parent',
        'children'
    ];
    displayedColumnsNames : string[] = [
        '代',
        '姓名',
        '陪偶',
        '描述',
        '父母',
        '子女'
    ];
    dataSource : MatTableDataSource<UserData>;
    searchUserReseult : Array<any>;

    @ViewChild(MatPaginator, {static: true})paginator : MatPaginator;
    @ViewChild(MatSort, {static: true})sort : MatSort;
    ref : any;
    piazzas$ : Observable<Pizza[]>;
    piazzaRef : AngularFirestoreCollection<Pizza>;

    userData$ : Observable<UserData[]>;
    userDataRef : AngularFirestoreCollection<UserData>;

    animal : string;
    name : string;

    userDetailsForm : FormGroup;
    constructor(private afs : AngularFirestore, private firebaseService : FirebaseService, private fb : FormBuilder, public dialog : MatDialog) { // Create 100 users
        const users = Array.from({
            length: 10
        }, (_, k) => createNewUser(k + 1));
        console.log(users.length);

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // firebase.firestore().settings(settings);
        console.log(this.ref);
        this.piazzaRef = this.afs.collection<Pizza>('pizzas');
        this.piazzas$ = this.piazzaRef.valueChanges();
        console.log('this.piazzas$:' + this.piazzas$);

        this.userDataRef = this.afs.collection<UserData>('pizzas');
        this.userData$ = this.userDataRef.valueChanges();
        console.log('this.userData$:' + this.piazzas$);

        this.userDetailsForm = this.fb.group({
            id: [
                '1', Validators.required
            ],
            name: [
                "Bill", Validators.maxLength(256)
            ],
            wife: [
                'Linda', Validators.required
            ],
            desc: [
                'a good wife?', Validators.required
            ],
            parent: [
                'Cai JiuYing', Validators.required
            ],
            children: ['LI lirong', Validators.required]
        });
    }
    addPizza(name : string) {
        this.piazzaRef.add({name, addedAt: new Date().toISOString()});
    }
    private addUser(value : any) {
        console.log(value.name);
        this.userDataRef.add({
            id: value.id,
            name: value.name,
            wife: value.wife,
            desc: value.desc,
            parent: value.parent,
            children: value.children
        });
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue : string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    sortData(event$ : any) {
        console.log(event$);
    }
    onSubmitUserDetails(value : any) {
        console.log('onSubmitUserDetails');
        // this.addUser(value);
        // this.createUser(value);
        // const returnedTarget = Object.assign(value, {name: 'dd'});
        // console.log('returnedTarget',returnedTarget);
        // const returnedTarget = {name: 'PP'};
        // this.updateUser(returnedTarget);
        // this.deleteUser('tYJlkLRJo7iLeljN8H9P');
        this.searchUsers('Bill');
        // this.searchUsersByName('Bill');
    }
    selectRow(row : any) {
        console.log(row);
    }
    openDialog(): void {
        const dialogRef = this.dialog.open(DialogExample, {
            width: '250px',
            data: {
                name: this.name,
                animal: this.animal
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    createUser(value) {
        this.firebaseService.createUser(value).then(res => {
            console.log(res);
        })
    }
    updateUser(value) {
        this.firebaseService.updateUser('u0DQoWbx8fSo3uhX1zvA', value).then(res => {
            console.log(res);
        })
    }
    searchUsers(value) { // debugger;
        this.firebaseService.searchUsers(value).subscribe(result => {
            this.searchUserReseult = result;
            console.log('this.searchUserReseult:' + this.searchUserReseult[0].name);
            this.searchUserReseult.filter(x2 => {
                console.log(x2.payload.doc.id, JSON.stringify(x2.payload.doc.data()));
            });

        })

    }
    searchUsersByName(value) {
        this.firebaseService.searchUsersByName(value).subscribe(result => {
            this.searchUserReseult = result;
            console.log('this.searchUsersByNameResult:' + JSON.stringify(this.searchUserReseult));
        })
    }
    deleteUser(value) {
        this.firebaseService.deleteUser(value).then(res => {
            console.log(res);
        })
    }

}
// end component


/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
        id: id.toString(),
        name: name,
        wife: name,
        desc: name,
        parent: name,
        children: name

    };
}
