import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ArtWorkListComponent } from './art-work-list/art-work-list.component';
import { AppComponent } from './app.component';
import { NxExpertModule } from '@aposin/ng-aquila/config';
import { NxPaginationModule } from '@aposin/ng-aquila/pagination';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ArtWorkListComponent
  ],
  imports: [
    HttpClientModule,
    NxInputModule,
    NxFormfieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NxExpertModule,
    NxPaginationModule,
    NxDropdownModule,
    NxGridModule,
    NxCardModule,
    NxModalModule,
    FormsModule,
    ReactiveFormsModule,
    NxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
