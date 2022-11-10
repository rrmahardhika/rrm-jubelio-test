import { observer } from "mobx-react-lite";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Dialog = observer(({ MyState }) => {
  return (
    <>
      <Modal size="xl" show={MyState.show} onHide={MyState.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {MyState.edit_mode ? "Detail Produk" : "Entri Produk"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row no-gutters">
            <div className="col-12 col-md-6 modal-img">
              <img
                className="img-thumbnail"
                alt="product"
                src={MyState.modal_data.Image}
              ></img>
            </div>
            <div className="col-12 col-md-6 modal-form">
              <Form>
                <Form.Group className="mb-3" controlId="productName">
                  <Form.Label>Nama Produk</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={MyState.modal_data.Name}
                    onChange={(evt) => MyState.updateProductName(evt)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="sku">
                  <Form.Label>SKU</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={MyState.modal_data.SKU}
                    onChange={(evt) => MyState.updateSKU(evt)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                  <Form.Label>Harga</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder=""
                    value={MyState.modal_data.Price}
                    onChange={(evt) => MyState.updatePrice(evt)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={MyState.modal_data.Description}
                    onChange={(evt) => MyState.updateDescription(evt)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="image">
                  <Form.Label>Image Link</Form.Label>
                  <Form.Control
                    type="text"
                    value={MyState.modal_data.Image}
                    onChange={(evt) => MyState.updateImage(evt)}
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="danger"
            disabled={!MyState.edit_mode}
            onClick={MyState.deleteData}
          >
            Delete
          </Button>
          <Button
            variant="primary"
            onClick={
              MyState.edit_mode ? MyState.updateData : MyState.submitData
            }
          >
            {MyState.edit_mode ? "Save Changes" : "Save New Product"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default Dialog;
