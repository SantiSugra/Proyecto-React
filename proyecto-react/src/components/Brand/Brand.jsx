import { Link } from "react-router-dom";

function Brand() {
  return (
    <div>
      <Link to={"./"}>
        <h1
          style={{
            color: "tomato",
            fontSize: "40px",
          }}
        >
          Prod.SAN
        </h1>
      </Link>
    </div>
  );
}

export default Brand;