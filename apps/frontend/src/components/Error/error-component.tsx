import { Alert } from 'antd';
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
        <Alert closable={true} message={message} type="error" showIcon />
      </ErrorContainer>
    );
  }
}
