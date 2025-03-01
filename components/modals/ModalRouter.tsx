import { useModalStore } from '@/state/ui/modalStore';
import AddBoardModal from './AddBoardModal';

export default function ModalRouter() {
  const { modalType, isOpen } = useModalStore();

  if (!isOpen) return null;

  switch (modalType) {
    case 'addBoard':
      console.log('ModalRouter: addBoard');
      return <AddBoardModal />;
      break;
    case 'editBoard':
      console.log('ModalRouter: editBoard');
      //   return <EditBoardModal />;
      break;
    case 'deleteBoard':
      console.log('ModalRouter: deleteBoard');
      //   return <DeleteBoardModal />;
      break;
    case 'addColumn':
      console.log('ModalRouter: addColumn');
      //   return <AddColumnModal />;
      break;
    case 'editColumn':
      console.log('ModalRouter: editColumn');
      //   return <EditColumnModal />;
      break;
    case 'deleteColumn':
      console.log('ModalRouter: deleteColumn');
      //   return <DeleteColumnModal />;
      break;
    case 'addTask':
      console.log('ModalRouter: addTask');
      //   return <AddTaskModal />;
      break;
    case 'editTask':
      console.log('ModalRouter: editTask');
      //   return <EditTaskModal />;
      break;
    case 'deleteTask':
      console.log('ModalRouter: deleteTask');
      //   return <DeleteTaskModal />;
      break;
    case 'viewTask':
      console.log('ModalRouter: viewTask');
      //   return <ViewTaskModal />;
      break;
    default:
      console.log('ModalRouter: no modal');
      //   return null;
      break;
  }
}
