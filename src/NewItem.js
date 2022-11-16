import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import './FoodMenu.css'

const NewItemForm = ({ newItem }) => {
  const [formData, setFormData] = useState({
    description: "",
    name: "",
    recipe: "",
    serve: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const getInput = (e) => {
    e.preventDefault();
    newItem({
      ...formData,
      id: uuid(),
    });
    setFormData({
      description: "",
      name: "",
      recipe: "",
      serve: "",
    });
  };

  return (
    <div className='card'>
      <h1>Add a new snack or drink.</h1>
      <form className='newForm' onSubmit={getInput}>
        <div className="font-weight-bold text-center">
          <input
            onChange={handleChange}
            id="description"
            type="description"
            name="description"
            value={formData.description}
            placeholder="description"
            required
          />
        </div>

        <div className="font-weight-bold text-center">
          <input
            onChange={handleChange}
            id="name"
            type="name"
            name="name"
            value={formData.name}
            placeholder="name"
            required
          />
        </div>

        <div className="font-weight-bold text-center">
          <input
            onChange={handleChange}
            id="recipe"
            type="recipe"
            name="recipe"
            value={formData.recipe}
            placeholder="recipe"
            required
          />
        </div>

        <div className="font-weight-bold text-center">
          <input
            onChange={handleChange}
            id="serve"
            type="serve"
            name="serve"
            value={formData.serve}
            placeholder="serve"
            required
          />
          <br />
        <button>Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default NewItemForm;
