import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home/home.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class AppModule {}
