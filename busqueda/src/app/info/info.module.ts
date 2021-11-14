import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPageRoutingModule } from './info-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InfoPage } from './info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}
