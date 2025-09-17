// components/ui/toast.ts
import * as React from "react";

/**
 * Minimal stub so hooks/use-toast.ts can import types.
 * Replace with a real toast implementation later if you need it.
 */

export type ToastActionElement = React.ReactElement;

export type ToastProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  /**
   * Visual style of the toast. Keep the union consistent with your UI kit if you add one.
   */
  variant?: "default" | "destructive" | "success" | "info";
  /**
   * Optional action button / element.
   */
  action?: React.ReactNode;
};
