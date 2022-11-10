import { observer } from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Dialog = observer(({ ModalState }) => {
  return (
    <>
      <Modal size="xl" show={ModalState.show} onHide={ModalState.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {ModalState.edit_mode ? "Detail Produk" : "Entri Produk"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row no-gutters">
            <div className="col-12 col-md-6 modal-img">
              <img
                className="img-thumbnail"
                alt="product"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
              ></img>
            </div>
            <div className="col-12 col-md-6 modal-form">
              <Form>
                <Form.Group className="mb-3" controlId="productName">
                  <Form.Label>Nama Produk</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    defaultValue={ModalState.modal_data.name}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="sku">
                  <Form.Label>SKU</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    defaultValue={ModalState.modal_data.sku}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                  <Form.Label>Harga</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder=""
                    defaultValue={ModalState.modal_data.price}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    defaultValue={ModalState.modal_data.description}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Image Link</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={ModalState.modal_data.images}
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" disabled={!ModalState.edit_mode}>
            Delete
          </Button>
          <Button variant="primary">
            {ModalState.edit_mode ? "Save Changes" : "Save New Product"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default Dialog;
