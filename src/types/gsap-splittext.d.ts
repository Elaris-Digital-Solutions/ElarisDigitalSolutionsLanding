declare module "gsap/SplitText" {
  export class SplitText {
    constructor(
      target: string | Element | Element[] | NodeListOf<Element>,
      vars?: Record<string, unknown>,
    );
    lines: HTMLElement[];
    words: HTMLElement[];
    chars: HTMLElement[];
    revert(): void;
  }

  export { SplitText as default };
}
