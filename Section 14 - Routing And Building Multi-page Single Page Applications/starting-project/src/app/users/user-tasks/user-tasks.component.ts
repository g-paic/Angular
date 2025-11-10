import { Component, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink]
})
export class UserTasksComponent {
  // userId = input.required<string>();
  message = input.required<string>();
  userName = input.required<string>();
  // private activatedRoute = inject(ActivatedRoute);

  // private usersService = inject(UsersService);
  // userName = computed(() => this.usersService.users.find(u => u.id === this.userId())?.name);

  /* userName = "";
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    console.log("Input Data: " + this.message());
    console.log(this.activatedRoute);
    console.log(this.activatedRoute.snapshot);
    console.log(this.activatedRoute.snapshot.paramMap.get("userId"));
    
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => this.userName = this.usersService.users.find(u => u.id === paramMap.get("userId"))?.name || ""
    });
    
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: data => console.log(data)
    });
  }*/
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName = usersService.users.find(u => u.id === activatedRoute.paramMap.get("userId"))?.name || "";

  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  return resolveUserName(activatedRoute, routerState) + "\'s Tasks";
};
