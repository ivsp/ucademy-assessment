import { useState } from 'react';
import { Student } from '../../../../Entities/Students/Domain/students.interface';
import ErrorComponent from '../../../../components/Error/error-component';
import {
  ButtonGroup,
  CancelButton,
  ErrorText,
  FormContainer,
  Label,
  SaveButton,
  StyledInput,
} from './styles';

interface StudentFormProps {
  student?: Student | null;
  cancelButtonText: string;
  onChange: (updatedStudent: Partial<Student>) => void;
  onSave: (studentData: Partial<Student>) => void;
  onCancel: () => void;
  isLoading: boolean;
  isError: boolean;
}

export default function StudentForm({
  student,
  cancelButtonText,
  onChange,
  onSave,
  onCancel,
  isLoading,
  isError,
}: StudentFormProps) {
  const [formData, setFormData] = useState<Partial<Student>>(student || {});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (key: keyof Student, value: string) => {
    const updatedStudent = { ...formData, [key]: value };
    setFormData(updatedStudent);
    onChange(updatedStudent);
  };

  const validateFields = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio';
    if (!formData.lastName) newErrors.lastName = 'El apellido es obligatorio';
    if (!formData.email) newErrors.email = 'El email es obligatorio';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateFields()) {
      onSave(formData);
    }
  };
  console.log('isError', isError);
  return (
    <FormContainer>
      <ErrorComponent isError={isError} message="Error al crear al alumno" />
      <ButtonGroup>
        <CancelButton onClick={onCancel}>{cancelButtonText}</CancelButton>
        <SaveButton disabled={isLoading} onClick={handleSave}>
          Guardar
        </SaveButton>
      </ButtonGroup>
      <Label>Nombre</Label>
      <StyledInput
        value={formData.name || ''}
        onChange={(e) => handleInputChange('name', e.target.value)}
        placeholder="Nombre"
        required
      />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Label>Apellidos</Label>
      <StyledInput
        value={formData.lastName || ''}
        onChange={(e) => handleInputChange('lastName', e.target.value)}
        placeholder="Apellidos"
        required
      />
      {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}

      <Label>Email</Label>
      <StyledInput
        type="email"
        value={formData.email || ''}
        onChange={(e) => handleInputChange('email', e.target.value)}
        placeholder="Email"
        required
      />
      {errors.email && <ErrorText>{errors.email}</ErrorText>}

      <Label>Móvil</Label>
      <StyledInput
        value={formData.phone || ''}
        onChange={(e) => handleInputChange('phone', e.target.value)}
        placeholder="Móvil"
      />
    </FormContainer>
  );
}
