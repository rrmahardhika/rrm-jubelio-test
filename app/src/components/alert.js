import { observer } from "mobx-react-lite";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const Dialog = observer(({ MyState }) => {
  return (
    <>
      <ToastContainer className="p-3 stay-on-top" position="bottom-center">
        <Toast
          bg={MyState.alert.variant}
          onClose={MyState.closeAlert}
          show={MyState.alert.show}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
            <small>{MyState.alert.variant}</small>
          </Toast.Header>
          <Toast.Body>{MyState.alert.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
});

export default Dialog;
