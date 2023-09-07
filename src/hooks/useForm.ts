import { useState, ChangeEvent } from 'react';

interface FormState {
  [key: string]: string;
}

interface FormActions {
  formState: FormState;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
}

export const useForm = (initialForm: FormState = {}): FormActions => {
  const [formState, setFormState] = useState<FormState>(initialForm);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    onInputChange,
    onResetForm,
  };
};