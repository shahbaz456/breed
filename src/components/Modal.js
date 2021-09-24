import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../App.css";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Modal1 = ({ toggle, modal, currentIndex }) => {
  const breedImages = useSelector((state) => state.data.breedImages);

  const history = useHistory();
  let query = useQuery();
  const location = useLocation();

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>DogImage</ModalHeader>
        <ModalBody className="mbody">
          {breedImages.length > 0 && (
            <div className="modal-img">
              <img
                src={breedImages[currentIndex]}
                alt="LArge"
                height="400"
                width="400"
              />
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => {
              if (location.pathname === "/home") {
                history.push(`/home?breed=${query.get("breed")}`);
              } else {
                history.push(`/favourite`);
              }

              toggle();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Modal1;
