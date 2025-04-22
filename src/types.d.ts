
import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    // Add custom attributes for animation
    style?: React.CSSProperties & {
      animationDelay?: string;
    };
  }
}
