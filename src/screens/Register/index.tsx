import { AuthLayout } from '@components/layouts';
import { FieldError } from '@components/ui';
import type { JSX } from 'react';
import { RegisterStepAccessData } from './components/StepAccessData';
import { RegisterStepPersonalData } from './components/StepPersonalData';
import { useRegisterScreenViewModel } from './viewModel';

export default function RegisterScreen() {
  const {
    goToNextStep,
    goToPrevStep,
    currentStep,
    isRegistering,
    error,
    values,
  } = useRegisterScreenViewModel();

  const steps: Record<number, JSX.Element> = {
    0: (
      <RegisterStepPersonalData
        defaultValues={values}
        onAction={goToNextStep}
      />
    ),
    1: (
      <RegisterStepAccessData
        isLoading={isRegistering}
        onAction={goToNextStep}
        onPrevStep={goToPrevStep}
      />
    ),
  };

  return (
    <AuthLayout>
      <AuthLayout.Header
        link={{
          href: 'Login',
          label: 'Fazer login',
        }}
        subtitle="Já possui uma conta?"
        title="Crie sua conta"
      />
      {error && <FieldError className="mb-2" error={error} />}
      {steps[currentStep]}
    </AuthLayout>
  );
}
