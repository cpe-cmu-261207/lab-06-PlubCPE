import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import UserCard from "../components/UserCard";
import axios from "axios";

export default function Home() {
  const [data, dataInput] = useState("");
  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (data > 0) {
      const resp = await axios.get(
        `https://randomuser.me/api/?results=${data}`
      );
      const newUsers = [];
      for (const x of resp.data.results) {
        newUsers.push({
          name: x.name.first + " " + x.name.last,
          email: x.email,
          imgUrl: x.picture.large,
          address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
        });
      }
      setUsers(newUsers);
    } else {
      alert("Invalid number of user");
    }
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => dataInput(event.target.value)}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {users.map((x) => (
        <UserCard
          key={x.name}
          name={x.name}
          email={x.email}
          imgUrl={x.imgUrl}
          address={x.address}
        />
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Chakkapop Soiwicha 640610622
      </p>
    </div>
  );
}
