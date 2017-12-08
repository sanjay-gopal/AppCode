import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MaterialModel } from './material.model';
import {animation} from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ToolBarMenuComponent } from './tool-bar-menu/tool-bar-menu.component';
import { CoverComponent } from './cover/cover.component';
import { MatMenu } from '@angular/material/menu/typings/menu-directive';
import { AboutComponent } from './about/about.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { DescriptionComponent } from './description/description.component';
import { GetContactDetailsComponent } from './get-contact-details/get-contact-details.component';
import { TotalComponent } from './total/total.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolBarMenuComponent,
    CoverComponent,
    AboutComponent,
    OrganisationComponent,
    DescriptionComponent,
    GetContactDetailsComponent,
    TotalComponent,
    ContactInformationComponent,
    CopyrightsComponent,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,FormsModule,MaterialModel,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
