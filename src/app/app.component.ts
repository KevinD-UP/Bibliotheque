import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDP98qH42bElVJx8DdJm3llvwD4qop6kMM",
      authDomain: "bookshelves-68d5d.firebaseapp.com",
      databaseURL: "https://bookshelves-68d5d.firebaseio.com",
      projectId: "bookshelves-68d5d",
      storageBucket: "bookshelves-68d5d.appspot.com",
      messagingSenderId: "996498913898",
      appId: "1:996498913898:web:e057795423d800e4dc2813"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
