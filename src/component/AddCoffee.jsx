import React from "react";
import Swal from "sweetalert2";
import { ArrowLeft } from "lucide-react"; 
import { Link } from "react-router";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // Send coffee data to the DB
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully!",
            icon: "success",
            confirmButtonColor: "#33312F",
          });
          form.reset(); // Form clear hobe success er por
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
          <h1 className="text-5xl font-rancho font-bold text-[#374151]">Add New Coffee</h1>
          <p className="max-w-3xl mx-auto text-gray-500 text-lg">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Use this form to add premium coffee beans to our shop inventory.
          </p>
        </div>

        <form onSubmit={handleAddCoffee} className="space-y-6">
          {/* Row 1: Name and Quantity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-bold text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
                placeholder="Enter coffee name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-gray-700">Quantity</label>
              <input
                type="text"
                name="quantity"
                className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
                placeholder="Enter coffee quantity"
                required
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
                className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
                placeholder="Enter coffee supplier"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-gray-700">Taste</label>
              <input
                type="text"
                name="taste"
                className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
                placeholder="Enter coffee taste"
                required
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
                className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
                placeholder="Enter coffee category"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-gray-700">Price</label>
              <input
                type="text"
                name="price"
                className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
                placeholder="Enter coffee price"
                required
              />
            </div>
          </div>

          {/* Row 4: Photo URL */}
          <div className="form-control">
            <label className="label font-bold text-gray-700">Photo</label>
            <input
              type="text"
              name="photo"
              className="input input-bordered w-full bg-white text-black focus:border-[#D2B48C]"
              placeholder="Enter photo URL"
              required
            />
          </div>

          {/* Submit Button */}
          <input 
            className="btn w-full bg-[#D2B48C] hover:bg-[#B6966C] border-2 border-[#33312F] text-[#33312F] font-rancho text-2xl mt-6 cursor-pointer transition-all" 
            type="submit" 
            value="Add Coffee" 
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;