import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import {  ListboxModule } from 'primeng/listbox';
import { ModuleMenuTreeModel } from '../../../model/ModuleLinksDet';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-module-menu-tree',
  standalone: true,
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    ListboxModule,
    ReactiveFormsModule
  ],
  templateUrl: './module-menu-tree.component.html',
  styleUrls: ['./module-menu-tree.component.scss'],
})
export class ModuleMenuTreeComponent {
  @Input()
  public moduleMenuItems!:ModuleMenuTreeModel[];
  formGroup: FormGroup<any>;

  constructor() {
    this.moduleMenuItems = [
      { MMT_moduleName : 'ADMIN',MMT_modulePageIcon :'',MMT_modulePageTitle:'User Create',MMT_modulePageUrl:'/usercreate',MMT_name :'User Create',MMT_childManu : []},
      { MMT_moduleName : 'ADMIN',MMT_modulePageIcon :'',MMT_modulePageTitle:'User Update',MMT_modulePageUrl:'/usercreate',MMT_name :'User Update',MMT_childManu : []},
      { MMT_moduleName : 'ADMIN',MMT_modulePageIcon :'',MMT_modulePageTitle:'User Roles',MMT_modulePageUrl:'/usercreate',MMT_name :'User Roles',MMT_childManu : []},
      { MMT_moduleName : 'ADMIN',MMT_modulePageIcon :'',MMT_modulePageTitle:'User Authprities',MMT_modulePageUrl:'/usercreate',MMT_name :'User Authorities',MMT_childManu : []},
    ];
    this.formGroup = new FormGroup({
      selectedCity: new FormControl<ModuleMenuTreeComponent | null>(null)
    });
  }





}
