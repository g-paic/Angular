import { CanMatchFn, RedirectCommand, Route, Router, Routes, UrlSegment } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { userRoutes } from "./users/users.routes";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    
    if(shouldGetAccess < 0.5) {
        return true;
    }
    
    return new RedirectCommand(router.parseUrl("/unauthorized"));
};

export const routes: Routes = [
    {
        path: "", // <your-domain>/
        component: NoTaskComponent,
        // redirectTo: "tasks",
        // pathMatch: "full" => prefix would cause infinite root loop
        title: "No Task Selected"
    },
    {
        path: "users/:userId", // <your-domain>/users/<uid>
        component: UserTasksComponent,
        children: userRoutes,
        canMatch: [dummyCanMatch],
        data: { message: "Hello!" },
        resolve: { userName: resolveUserName },
        title: resolveTitle
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
