import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

export default function CreateStudentComponent() {
  const createStudent = (studetInputs: unknown) => {
    new FormData();
  };
  return (
    <Button
      onClick={createStudent}
      type="primary"
      icon={<PlusCircleOutlined />}
      size="large"
      color="green"
    >
      Nuevo Alumno
    </Button>
  );
}
