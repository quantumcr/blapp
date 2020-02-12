import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PhonemeBarComponent } from './phoneme/phoneme-bar/phoneme-bar.component';
import { VocalPanelComponent } from './phoneme/vocal-panel/vocal-panel.component';
import { ConsonantPanelComponent } from './phoneme/consonant-panel/consonant-panel.component';
import { PhonemeComponent } from './phoneme/phoneme.component';
import { SemanticsComponent } from './semantics/semantics.component';
import { CategoriesPanelComponent } from './semantics/categories-panel/categories-panel.component';
import { SemanticsGamePanelComponent } from './semantics/semantics-game-panel/semantics-game-panel.component';
import { SemanticsBarComponent } from './semantics/semantics-bar/semantics-bar.component';
import { PhonemeGamePanelComponent } from './phoneme/phoneme-game-panel/phoneme-game-panel.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { StudentMenuComponent } from './menu-panel/student-menu/student-menu.component';
import { ProfessorMenuComponent } from './menu-panel/professor-menu/professor-menu.component';




@NgModule({
  declarations: [LoginComponent, NavigationBarComponent, PhonemeComponent,
    PhonemeBarComponent, VocalPanelComponent, ConsonantPanelComponent, PhonemeGamePanelComponent,
    SemanticsComponent, CategoriesPanelComponent, SemanticsGamePanelComponent, SemanticsBarComponent,
    MenuPanelComponent, StudentMenuComponent, ProfessorMenuComponent],
  exports: [LoginComponent, NavigationBarComponent, PhonemeComponent,
    PhonemeBarComponent, VocalPanelComponent, ConsonantPanelComponent, PhonemeGamePanelComponent,
    SemanticsComponent, CategoriesPanelComponent, SemanticsGamePanelComponent, SemanticsBarComponent,
    MenuPanelComponent, StudentMenuComponent, ProfessorMenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
