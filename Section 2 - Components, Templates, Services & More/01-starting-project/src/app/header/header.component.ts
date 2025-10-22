import { Component } from '@angular/core';

@Component({
    selector: "app-header",
    standalone: true,
    templateUrl: "./header.component.html",
    styleUrl: './header.component.css'
    // styleUrls: ["./header.component.css"] -> array of multiple external style files
    // styles: ['h1 { color: red }'] -> array of inline styles where you define the CSS styles
})
export class HeaderComponent {}
