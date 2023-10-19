import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://niuwunfutjylyntkardg.supabase.co/storage/v1/object/public/cabin-images/cabin-003.jpg"
        alt=""
      />
    </Row>
  );
}

export default Cabins;
