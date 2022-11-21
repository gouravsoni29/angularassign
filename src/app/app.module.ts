import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BookComponent } from './book/book.component';
import { AppoComponent } from './appo/appo.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes =[		
  {path:'',redirectTo: 'home', pathMatch: 'full'},
  {path:'home' , component:HomeComponent},
  {path:'book' , component:BookComponent},
  {path:'view' , component:AppoComponent},
  {path:'contactUs' , component:ContactusComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactusComponent,
    BookComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
