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
interface UserData{
    a1: string;
      a2: string;
      a3: string;
      a4: string;
      a5: string;
      a6: string;
      a7: string;
      a8: string;
      a9: string;
      a10: string;
     a11: string;
      a12: string;
      a13: string;
      a14: string;
      a15: string;
      a16: string;
      a17: string;
      a18: string;
      a19: string;
      a20: string;
      a21: string;
      a22: string;
      a23: string;
      a24: string;
      a25: string;
      a26: string;
      a27: string;
      a28: string;
      a29: string
      a30: string;
      a31: string;
      a32: string;
      a33: string;
      a34: string;
     a35: string;
      a36: string;
      a37: string;
      a38: string;
      a39: string
      a40: string;
      a41: string;
      a42: string;
      a43: string;
      a44: string;

  }
  const jiangjin:UserData = {"a1":"宗賢公袁氏","a2":"固公","a3":"盎公","a4":"焘公","a5":"恭公","a6":"良公","a7":"英公","a8":"安公","a9":"京公","a10":"准公","a11":"逢公","a12":"绍公","a13":"尚公","a14":"闳公","a15":"宏公","a16":"恩光公","a17":"灏公","a18":"盛公","a19":"淑公","a20":"灿公","a21":"昂公","a22":"元广公","a23":"聿修公","a24":"枢公","a25":"朗公","a26":"天纲公","a27":"客师公","a28":"恕己公","a29":"履谦公","a30":"二师公","a31":"中仁公","a32":"晔公","a33":"武仲公","a34":"厥公","a35":"富春公","a36":"孟翁公","a37":"礼公","a38":"身公","a39":"添平公","a40":"肇祥公","a41":"龍虎龍憲龍進龍德公","a42":"世明","a43":"貴賢威猛","a44":"多"}; 
  
  const guizhou:UserData = {"a1":"世盟公袁氏","a2":"固公","a3":"盎公","a4":"焘公","a5":"恭公","a6":"良公","a7":"英公","a8":"安公","a9":"京公","a10":"准公","a11":"逢公","a12":"绍公","a13":"尚公","a14":"闳公","a15":"宏公","a16":"恩光公","a17":"灏公","a18":"盛公","a19":"淑公","a20":"灿公","a21":"昂公","a22":"元广公","a23":"聿修公","a24":"枢公","a25":"朗公","a26":"天纲公","a27":"客师公","a28":"恕己公","a29":"履谦公","a30":"二师公","a31":"中仁公","a32":"晔公","a33":"武仲公","a34":"厥公","a35":"富春公","a36":"孟翁公","a37":"礼公","a38":"身公","a39":"添平公","a40":"肇祥公","a41":"龍虎龍憲龍進龍德公","a42":"世廷","a43":"闕","a44":"宗賢"}; 
//   const guizhouArray = guizhou.name.split('","');
  const hubei = {"a1": "清公袁氏","a2":"固公","a3":"盎公","a4":"焘公","a5":"恭公","a6":"良公","a7":"昌(家谱皆为“英公”)公","a8":"安公","a9":"京公","a10":"彭公","a11":"贺公","a12":"闳公","a13":"广公","a14":"焕公","a15":"淮公","a16":"冲公","a17":"宏公","a18":"恩公","a19":"豹公","a20":"洵公","a21":"顗公","a22":"昂公","a23":"元公","a24":"宪（繁体写作“憲”）公","a25":"承公","a26":"天纲公","a27":"客师公","a28":"恕己公","a29":"履谦公","a30":"二师公","a31":"中仁公","a32":"象先公","a33":"诠公","a34":"承宽公","a35":"修明公","a36":"文仲公","a37":"应彦公","a38":"世贤公","a39":"显/德公","a40":"熹/贵/聪公","a41":"汉烈/千亿/五十五公","a42":"袁璞/袁谟（为王字旁莫）/袁六四/","a43":"袁全/袁清/袁仲七"};
//   const hubeiArray = hubei.name.split('","');
  const guangdong = {"a1":"志君公袁氏","a2":"固公","a3":"盎公","a4":"焘公","a5":"恭公","a6":"良公","a7":"璋公","a8":"滂公","a9":"涣公","a10":"准公","a11": "冲公","a12":"耽公","a13":"贤公","a14":"豹公","a15":"洵公","a16": "觐公","a17":"昂公","a18":"君正(又为君臣)","a19":"颖公","a20":"恭公","a21":"频公","a22":"子温","a23":"士政","a24":"伦公","a25":"知元","a26":"晔公","a27":"滋公","a28":"宝公","a29":"济刚","a30":"又馀","a31":"信芝","a32":"在朝","a33": "宜正","a34": "甫襄","a35":"承恩", "a36":"公瑜","a37":"常恃","a38":"聪芝","a39":"少一","a40":"志君","a41":"多","a42":"多","a43":"多"};
//   const guangdongArray = guangdong.name.split('","');
   const jiangxi = {"a1": "江西袁氏","a2":"固公","a3":"盎公","a4":"焘公","a5":"恭公","a6":"良公","a7": "英公","a8": "安公","a9": "京公","a10": "彭公","a11": "贺公","a12": "闳公","a13": "广公","a14": "焕公","a15": "淮公","a16": "冲公","a17": "宏公","a18": "恩公","a19": "豹公","a20": "洵公","a21": "顗公","a22": "昂公","a23": "元公","a24": "宪（繁体写作“憲”）公","a25": "承公","a26": "天纲公","a27": "客师公","a28": "恕己公","a29": "履谦公","a30": "二师公","a31": "中仁公","a32": "象先公","a33": "诠公","a34": "承宽公","a35": "修明公","a36": "文仲公","a37": "应彦公","a38": "世贤公","a39": "显/德公","a40": "熹/贵/聪公","a41": "汉烈/千亿/五十五公","a42": "多","a43": "多"};
//   const jiangxiArray = jiangxi.name.split('","');
  // console.log(guizhouArray.length) ;
  // console.log(hubeiArray.length) ;
  // console.log(guangdongArray.length) ;
  // console.log(jiangxiArray.length) ;
  const ELEMENT_DATA:UserData[]  = [guizhou,jiangjin ]; 
  
@Component({selector: 'song-component', styleUrls: ['song.component.css'], templateUrl: 'song.component.html'})
export class TableSongComponent implements OnInit { // displayedColumns: string[] = ['代', '姓名', '陪偶', '描述','父母', '子女'];
    displayedColumns : string[] = [
        '0',
        '1',
        '2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43'
    ];
    displayedColumnsNames : string[] = [
        '地区',
        '1',
        '2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44'
    
    ];
    dataSource : MatTableDataSource<UserData>;
    searchUserReseult : Array<any>;

    @ViewChild(MatPaginator, {static: true})paginator : MatPaginator;
    @ViewChild(MatSort, {static: true})sort : MatSort;
    ref : any;

    userData$ : Observable<UserData[]>;
    userDataRef : AngularFirestoreCollection<UserData>;

    userDetailsForm : FormGroup;
    // dataSource: MatTableDataSource<UserData>;
    // dataSource = ELEMENT_DATA;
    constructor(private afs : AngularFirestore, private firebaseService : FirebaseService, private fb : FormBuilder, public dialog : MatDialog) { // Create 100 users


        // const set = new Set([{
        //     id: "贵州袁氏",
        //     name: "固公","盎公","焘公","恭公","良公","英公","安公","京公","准公","逢公","绍公","尚公","闳公","宏公","恩光公","灏公","盛公","淑公","灿公","昂公","元广公","聿修公","枢公","朗公","天纲公","客师公","恕己公","履谦公","二师公","中仁公","晔公","武仲公","厥公","富春公","孟翁公","礼公","身公","添平公","凤竹公",
        // }, {
        //     id: "湖北袁氏",
        //     name: "固公","盎公","焘公","恭公","良公","昌(家谱皆为“英公”)公","安公","京公","彭公","贺公","闳公","广公","焕公","淮公","冲公","宏公","恩公","豹公","洵公","顗公","昂公","元公","宪（繁体写作“憲”）公","承公","天纲公","客师公","恕己公","履谦公","二师公","中仁公","象先公","诠公","承宽公","修明公","文仲公","应彦公","世贤公","显/德公","熹/贵/聪公","汉烈/千亿/五十五公","袁璞/袁谟（为王字旁莫）/袁六四/","袁全/袁清/袁仲七",
        // }, {
        //     id: "广东袁氏",
        //     name: "固公","盎公","焘公","恭公","良公","璋公","滂公","涣公","准公","冲公","耽公","贤公","豹公","洵公","觐公","昂公","君正(又为君臣)","颖公","恭公","频公","子温","士政","伦公","知元","晔公","滋公","宝公","济刚","又馀","信芝","在朝","宜正"," 甫襄","承恩","公瑜","常恃","聪芝","少一","志君",
        // }, {
        //     id: "江西袁氏",
        //     name: "固公","盎公","焘公","恭公","良公","英公","安公","京公","彭公","贺公","闳公","广公","焕公","淮公","冲公","宏公","恩公","豹公","洵公","顗公","昂公","元公","宪（繁体写作“憲”）公","承公","天纲公","客师公","恕己公","履谦公","二师公","中仁公","象先公","诠公","承宽公","修明公","文仲公","应彦公","世贤公","显/德公","熹/贵/聪公","汉烈/千亿/五十五公",
        // }]);


        // Assign the data to the data source for the table to render
        // console.log( ELEMENT_DATA) ;
      
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);

        
        this.userDetailsForm = this.fb.group({
            // id: [
            //     '贵州袁氏', Validators.required
            // ],
            // name: [
            //     "湖北袁氏", Validators.maxLength(256)
            // ]
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
    

    
}
// end component

