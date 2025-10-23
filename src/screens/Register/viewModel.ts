import type { HttpRegisterRequestDto } from '@services/auth';
import { useState } from 'react';
import type { StepPersonalDataRegisterFormData } from './components/StepPersonalData/viewModel';
import { useRegisterMutation } from './hooks/useRegisterMutation';

export function useRegisterScreenViewModel() {
  const [currentStep, setCurrentStep] = useState(0);
  const { isRegistering, onRegister } = useRegisterMutation();
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState<StepPersonalDataRegisterFormData>({
    firstName: '',
    lastName: '',
  });

  const goToNextStep = (data: Partial<HttpRegisterRequestDto>) => {
    if (currentStep === 0) {
      setCurrentStep(prev => prev + 1);
      setValues({
        firstName: data.firstName ?? '',
        lastName: data.lastName ?? '',
      });
      return;
    }

    onRegister(
      {
        firstName: values.firstName,
        lastName: values.lastName,
        email: data.email ?? '',
        password: data.password ?? '',
      },
      {
        onSuccess() {
          setError(null);
        },
        onError(err) {
          setError(err.message);
        },
      }
    );
  };

  const goToPrevStep = () => {
    if (currentStep === 0) {
      return;
    }
    setCurrentStep(prev => prev - 1);
  };

  return {
    error,
    currentStep,
    goToNextStep,
    goToPrevStep,
    isRegistering,
    values,
  };
}
