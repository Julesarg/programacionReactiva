import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    Component1Component,
    Component2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    Component1Component,
    Component2Component
  ]
})
export class SharedModule { }
