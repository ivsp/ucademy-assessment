import { Spin } from 'antd';
import React from 'react';
import { SpinnerContainer } from './styles/styles';

export default function LoadingDataComponent({
  isLoading,
}: {
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spin size="large" tip="Cargando..." />
      </SpinnerContainer>
    );
  }
}
