import { Alert } from 'antd';
import React from 'react';
import { ErrorContainer } from '../Error/styles/styles';

export default function ErrorComponent({
  isError,
  message,
}: {
  isError: boolean;
  message: string;
}) {
  if (isError) {
    return (
      <ErrorContainer>
        <Alert message={message} type="error" showIcon />
      </ErrorContainer>
    );
  }
}
