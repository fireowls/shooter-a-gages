import { Type, Category } from './../models/gage.model';
import { Injectable } from '@angular/core';
import { Gage } from '../models/gage.model';

@Injectable()
export class GageService {

  public gages: Gage[];

  constructor() {
    this.pullDataBase();
  }

  public pullDataBase() {
    this.gages = [
      {
        type: Type.INSTANT,
        category: Category.FAMILY,
        desc: 'first gage'
      },
      {
        type: Type.INSTANT,
        category: Category.FAMILY,
        desc: 'second gage'
      }
    ];
  }


}
