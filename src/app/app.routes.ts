import { Routes } from '@angular/router';
import { UserSignInComponent } from './common/components/Authentication/sign-in/user-sign-in.component';
import { AppShellComponent } from './common/components/App Shell/app-shell/app-shell.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './common/components/Authentication/not-found/not-found.component';


export const routes: Routes = [
    {
        path: "",
        component: AppComponent,
        children: [
            {
                path: "", component: AppShellComponent,
                children: [
                    
                ]
            },
            { path: "login", component: UserSignInComponent },

        ]
    },
    { path: '**', component: NotFoundComponent }
];
