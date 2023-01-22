import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { useAlertContext } from '../context/alertContext';
import { useRef } from 'react';

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === 'success';

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={4}
          backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}
          style={{ maxHeight: '100px' }}
        >
          <AlertDialogHeader
            fontSize="lg"
            fontWeight="bold"
            style={{ paddingLeft: '20px' }}
          >
            {isSuccess ? 'All good!' : 'Oops!'}
          </AlertDialogHeader>

          <AlertDialogBody style={{ paddingLeft: '20px' }}>
            {message}
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
