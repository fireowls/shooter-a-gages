import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AuthService } from './service/auth.service';

@NgModule( {
    declarations: [
        LoginComponent,
        RegisterComponent,
        UserComponent
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        ReactiveFormsModule
    ],
    providers: [AuthService],
    exports: [
        LoginComponent,
        RegisterComponent,
        UserComponent
    ]
} )
export class AuthModule { }