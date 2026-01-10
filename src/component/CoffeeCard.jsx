import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom"; 
import { FaEye, FaPen, FaTrash } from "react-icons/fa";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, quantity, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="flex items-center justify-between bg-[#F5F4F1] rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-[#D2B48C]/20 group">
      {/* Coffee Image */}
      <div className="w-1/3 overflow-hidden rounded-lg">
        <img
          src={photo}
          alt={name}
          className="w-full h-40 object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Coffee Info */}
      <div className="w-1/2 space-y-2">
        <h2 className="text-xl font-bold text-[#33312F]">
          <span className="text-gray-500 font-medium">Name:</span> {name}
        </h2>
        <p className="text-lg text-[#33312F] font-semibold">
          <span className="text-gray-500 font-medium">Price:</span> {price} TK
        </p>
        <p className="text-lg text-[#33312F] font-semibold">
          <span className="text-gray-500 font-medium">Quantity:</span> {quantity}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <Link to={`/coffeeDetails/${_id}`}>
          <button className="p-3 bg-[#D2B48C] hover:bg-[#b6966c] text-white rounded-lg transition-colors shadow-sm" title="View Details">
            <FaEye size={18} />
          </button>
        </Link>
        
        <Link to={`/updateCoffee/${_id}`}>
          <button className="p-3 bg-[#3C393B] hover:bg-[#2a282a] text-white rounded-lg transition-colors shadow-sm" title="Edit Coffee">
            <FaPen size={18} />
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="p-3 bg-[#EA4744] hover:bg-[#c63532] text-white rounded-lg transition-colors shadow-sm"
          title="Delete Coffee"
        >
          <FaTrash size={18} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;