import { useState } from "react";
import { useLoaderData, Form } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h1>{details.name}</h1>
      <h1>{details.category}</h1>
      <p>{details.price}</p>

      <div className="flex space-x-3">
        <Form method="post">
          <button type="submit" name="intent" value="delete">
            Delete
          </button>
        </Form>

        <button type="button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </div>

      {isEditing && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Product</h2>
            <Form method="post" onSubmit={() => setIsEditing(false)}>
              <input
                type="text"
                name="name"
                defaultValue={details.name}
                required
              />
              <input
                type="number"
                name="price"
                defaultValue={details.price}
                required
              />
              <input
                type="text"
                name="category"
                defaultValue={details.category}
                required
              />
              <input type="hidden" name="intent" value="update" />

              <div className="flex space-x-3">
                <button type="submit">Save</button>
                <button type="button" onClick={()=>setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;