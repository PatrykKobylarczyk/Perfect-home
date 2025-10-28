declare module "locomotive-scroll" {
  export default class LocomotiveScroll {
    constructor(options: {
      el: HTMLElement;
      smooth: boolean;
      [key: string]: any;
    });
    update(): void;
    destroy(): void;
    scrollTo(target: string | HTMLElement | number, options?: object): void;
  }
}
