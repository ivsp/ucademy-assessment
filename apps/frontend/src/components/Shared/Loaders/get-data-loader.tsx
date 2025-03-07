import { Spin, Alert } from 'antd';
import React from 'react';
import { SpinnerContainer } from './styles/styles';
import { ErrorContainer } from '../Errors/styles/styles';

export default function LoadingDataComponent({
  isLoading,
  isError,
}: {
  isLoading: boolean;
  isError: boolean;
}) {
  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spin size="large" tip="Cargando..." />
      </SpinnerContainer>
    );
  }

  if (isError) {
    return (
      <ErrorContainer>
        <Alert message="Error al cargar los datos" type="error" showIcon />
      </ErrorContainer>
    );
  }
}
