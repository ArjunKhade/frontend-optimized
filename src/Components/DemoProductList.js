import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Form } from "react-bootstrap";
import { Search } from "@mui/icons-material";
import { SERVER_BASE_URL } from "../config";
//import { useStateValue } from "./StateProvider";

const DemoProductList = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios.get(SERVER_BASE_URL + "/category").then((response) => {
      const result = response.data;
      setCategory(result);
    });
  };

  const filteredcategory = category.filter((cate) => {
    return cate.categoryName.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="container row">
      {/* <div className="col-4">{<Side></Side>}</div> */}

      <div className="col-12">
        <section className="garamond ">
          <div className="pt-2 relative mx-auto text-gray-600 mb-6">
            {/* <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            onChange={handleChange}
          /> */}
            <Form className="d-flex">
              <Form.Control
                type="search"
                name="search"
                placeholder="Search Category "
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
              />
              <Search></Search>
            </Form>
          </div>

          <div className="row p-3">
            {filteredcategory.length !== 0 ? (
              filteredcategory.map((cat) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 col-sm-2 p-3 "
                    onClick={() => {
                      navigate(`/category/${cat.id}`);
                      sessionStorage.setItem("cat", cat.categoryName);
                    }}
                  >
                    <Card
                      className="card_shadow"
                      style={{
                        width: "18rem",
                      }}
                    >
                      <img
                        alt="Sample"
                        src={SERVER_BASE_URL + "/store/" + cat.categoryImage}
                      />
                      <CardBody>
                        <CardTitle tag="h5">{cat.categoryName}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          Card subtitle
                        </CardSubtitle>
                        <CardText>{cat.categoryDescription}</CardText>
                        {/* <Button onClick={addToBasket}>Add To Cart</Button> */}
                        {/* <Link
                          className="btn btn-info"
                          to={`/category/${cat.id}`}
                        ></Link> */}
                      </CardBody>
                    </Card>
                  </div>
                );
              })
            ) : (
              <h1 className="text-purple-700">
                Oopssss.....? 🙂 No category found
              </h1>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DemoProductList;
