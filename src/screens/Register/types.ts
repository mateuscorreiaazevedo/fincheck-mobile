export type RegisterFormStepArgs<T = unknown> = {
  onAction(data: T): void;
  defaultValues?: T;
};
