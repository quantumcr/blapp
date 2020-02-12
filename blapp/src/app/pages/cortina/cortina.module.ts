import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CortinaPageRoutingModule } from './cortina-routing.module';

import { CortinaPage } from './cortina.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CortinaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CortinaPage]
})
export class CortinaPageModule {}
