import AdminModal from '@/shared/AdminComponents/AdminModal';
import EditRestaurantModal from '@/shared/AdminComponents/EditRestaurantModal';

interface EditRestaurantModalProps {
  hidden: boolean;
  setHidden: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const EditRestaurantModal: FC<EditRestaurantModalProps> = ({ hidden, setHidden }) => (
  <AdminModal
    hidden={hidden}
    Sethidden={setHidden}
    addName={"Edit Restaurant"}
    imgName={"Upload Image"}
    informationName={"Edit your Restaurant's information"}
    component={<EditRestaurantModal />}
  />
);

export default EditRestaurantModal;
