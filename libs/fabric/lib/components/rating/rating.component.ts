import { InputRendererOptions, passProp, ReactWrapperComponent } from '@angular-react/core';
import { ChangeDetectorRef, Component, ElementRef, Input, NgZone, Output, Renderer2, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { IRatingProps, IRatingStarProps } from 'office-ui-fabric-react/lib/Rating';

@Component({
  selector: 'fab-rating',
  exportAs: 'fabRating',
  template: `
    <Rating
      #reactNode
      [componentRef]="componentRef"
      [rating]="rating"
      [min]="min"
      [max]="max"
      [allowZeroStars]="allowZeroStars"
      [icon]="icon"
      [unselectedIcon]="unselectedIcon"
      [size]="size"
      [Change]="onChange"
      [Changed]="onChanged"
      [ariaLabelFormat]="ariaLabelFormat"
      [ariaLabelId]="ariaLabelId"
      [readOnly]="readOnly"
      [getAriaLabel]="getAriaLabel"
      [styles]="styles"
      [theme]="theme"
      [RenderStar]="renderStar && onRenderStar"
    ></Rating>
  `,
  styles: ['react-renderer'],
})
export class FabRatingComponent extends ReactWrapperComponent<IRatingProps> implements OnInit {
  @ViewChild('reactNode', { static: true }) protected reactNodeRef: ElementRef;

  @Input() componentRef?: IRatingProps['componentRef'];
  @Input() rating?: IRatingProps['rating'];
  @Input() min?: IRatingProps['min'];
  @Input() max?: IRatingProps['max'];
  @Input() allowZeroStars?: IRatingProps['allowZeroStars'];
  @Input() icon?: IRatingProps['icon'];
  @Input() unselectedIcon?: IRatingProps['unselectedIcon'];
  @Input() size?: IRatingProps['size'];
  // @Input() onChanged?: IRatingProps['onChanged'];
  @Input() ariaLabelFormat?: IRatingProps['ariaLabelFormat'];
  @Input() ariaLabelId?: IRatingProps['ariaLabelId'];
  @Input() readOnly?: IRatingProps['readOnly'];
  @Input() getAriaLabel?: IRatingProps['getAriaLabel'];
  @Input() styles?: IRatingProps['styles'];
  @Input() theme?: IRatingProps['theme'];
  @Input() renderStar?: InputRendererOptions<IRatingStarProps>;

  @passProp() onRenderStar: (props?: IRatingStarProps) => JSX.Element;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() readonly onRatingChange = new EventEmitter<{ ev?: FocusEvent, rating?: number }>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() readonly onRatingChanged = new EventEmitter<{ rating?: number }>();

  constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, ngZone: NgZone) {
    super(elementRef, changeDetectorRef, renderer, { ngZone });

    this.onChange = this.onChange.bind(this);
    this.onChanged = this.onChanged.bind(this);
  }

  ngOnInit() {
    this.onRenderStar = this.createRenderPropHandler(this.renderStar);
  }

  onChange(ev?: React.FocusEvent<HTMLElement>, rating?: number) {
    this.onRatingChange.emit({
      ev: ev && ev.nativeEvent,
      rating
    });
  }

  onChanged(rating?: number) {
    this.onRatingChanged.emit({
      rating
    })
  }
}