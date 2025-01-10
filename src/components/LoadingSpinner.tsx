import { cva, VariantProps } from "class-variance-authority";

const loadingSpinnerVariantes = cva(
  "border-brand-200 border-t-brand-600 rounded-full animate-spin",
  {
    variants: {
      size: {
        sm: "size-4 border-2",
        md: "size-6 border-4",
        lg: "size-8 border-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface LoadingSpinnerProps
  extends VariantProps<typeof loadingSpinnerVariantes> {
  className?: string;
}

const LoadingSpinner = ({ className, size }: LoadingSpinnerProps) => {
  return (
    <div>
      <div className={loadingSpinnerVariantes({ className, size })} />
    </div>
  );
};

export default LoadingSpinner;
