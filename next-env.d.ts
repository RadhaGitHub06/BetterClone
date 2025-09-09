/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

// Ensure JSX namespace is available to TS when using the app router
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}