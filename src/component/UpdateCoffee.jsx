import React from "react";
import { useLoaderData, Link } from "react-router";
import Swal from "sweetalert2";
import { ArrowLeft } from "lucide-react";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, price, taste, photo, supplier, category } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    // Send updated coffee to DB
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonColor: "#33312F",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] min-h-screen py-12 px-4 md:px-24">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link to="/" className="flex items-center gap-2 text-[#374151] font-rancho text-2xl hover:text-[#D2B48C] transition-colors">
          <ArrowLeft size={24} /> Back to home
        </Link>
      </div>

      <div className="bg-[#F4F3F0] border-2 border-[#D2B48C] rounded-lg p-8 md:p-24 shadow-sm max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-rancho font-bold text-[#374151]">Update Existing Coffee Details</h1>
          <p className="max-w-3xl mx-auto text-gray-500 text-lg">
            Updating: <span className="text-[#D2B48C] font-bold">{name}</span>. Modify the information below to keep your inventory accurate.
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee} className="space-y-6">
          {/* Row 1: Name and Quantity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-bold text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
                placeholder="Enter coffee name"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-gray-700">Quantity</label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
                placeholder="Enter coffee quantity"
              />
            </div>
          </div>

          {/* Row 2: Supplier and Taste */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-bold text-gray-700">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
                placeholder="Enter coffee supplier"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-gray-700">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
                placeholder="Enter coffee taste"
              />
            </div>
          </div>

          {/* Row 3: Category and Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-bold text-gray-700">Category</label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
                placeholder="Enter coffee category"
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-gray-700">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
                placeholder="Enter coffee price"
              />
            </div>
          </div>

          {/* Row 4: Photo URL */}
          <div className="form-control">
            <label className="label font-bold text-gray-700">Photo</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
              placeholder="Enter photo URL"
            />
          </div>

          {/* Submit Button */}
          <input 
            className="btn w-full bg-[#D2B48C] hover:bg-[#B6966C] border-2 border-[#33312F] text-[#33312F] font-rancho text-2xl mt-6 cursor-pointer transition-all" 
            type="submit" 
            value="Update Coffee Details" 
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;