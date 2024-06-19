import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar'; // MatToolbarModule importálása
import { MatListModule } from '@angular/material/list';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({"projectId":"szakdolgozat-50ac1","appId":"1:709666851956:web:842f49f59d026c80989521","databaseURL":"https://szakdolgozat-50ac1-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"szakdolgozat-50ac1.appspot.com","apiKey":"AIzaSyC1hUNMW8Tar7UStLTO9666w1iimgkpLwI","authDomain":"szakdolgozat-50ac1.firebaseapp.com","messagingSenderId":"709666851956"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
