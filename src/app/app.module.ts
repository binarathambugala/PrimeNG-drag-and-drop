import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { CommonModule } from "@angular/common";
import { DragDropModule } from "primeng/dragdrop";
import { PanelModule } from "primeng/panel";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { CodeHighlighterModule } from "primeng/codehighlighter";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    DragDropModule,
    PanelModule,
    TableModule,
    TabViewModule,
    CodeHighlighterModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
