import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateParserPipe } from './date-parser.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DateParserPipe],
  exports: [DateParserPipe]
})
export class CommonPipeModule { }
