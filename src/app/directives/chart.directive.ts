import { Directive, ElementRef } from '@angular/core';

declare var require;
@Directive({
  selector: '[appChart]'
})
export class ChartDirective {

  constructor(private element: ElementRef) {
    setTimeout(() => this.drawChart(element), 50);
  }

  async drawChart (el) {
    const canvas = <HTMLCanvasElement> el.nativeElement;
    console.log(canvas);
    if (canvas.tagName === 'CANVAS') {
      const Chart = await import('chart.js');
      const parseJson = (json) => JSON.parse(json);
      const options = {
        type: 'pie',
        data: {
          datasets: [{
            data: parseJson(canvas.dataset.value),
            backgroundColor: [
              '#fe6283',
              '#ffcd56',
              '#4cc0c0',
              '#37a2eb',
              '#ff9f40',
              '#ff40dd',
            ]
          }],
          labels: parseJson(canvas.dataset.label)
        },
        options: {
          responsive: true
        }
      }
      // build chart
      const chart = new Chart(canvas.getContext('2d'), options);
    }
  }

}
