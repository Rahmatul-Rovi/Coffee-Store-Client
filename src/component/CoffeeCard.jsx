import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { Eye, Pencil, Trash2 } from "lucide-react"; // npm install lucide-react koro ba icon change kore nio

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, quantity, photo, category } = coffee;

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
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffees = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-[#F5F4F1] shadow-xl border-none p-4 items-center gap-4 hover:shadow-2xl transition-all duration-300">
      {/* Coffee Image Container */}
      <figure className="w-1/3">
        <img 
          src={photo} 
          alt={name} 
          className="w-full h-40 object-contain rounded-lg drop-shadow-lg" 
        />
      </figure>

      {/* Info and Actions Container */}
      <div className="flex w-full justify-between items-center pr-4">
        {/* Coffee Details */}
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-[#1B1B1B] font-rancho">
            <span className="font-semibold">Name:</span> {name}
          </h2>
          <p className="text-gray-600">
            <span className="font-semibold">Quantity:</span> {quantity}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Price:</span> {price} Taka
          </p>
        </div>

        {/* Action Buttons */}
        <div className="card-actions">
          <div className="join join-vertical space-y-3">
            <Link to={`/coffee/${_id}`}>
              <button className="btn btn-sm join-item bg-[#D2B48C] hover:bg-[#B6966C] border-none text-white">
                <Eye size={18} />
              </button>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn btn-sm join-item bg-[#3C393B] hover:bg-[#2C292B] border-none text-white">
                <Pencil size={18} />
              </button>
            </Link>
            <button 
              onClick={() => handleDelete(_id)} 
              className="btn btn-sm join-item bg-[#EA4744] hover:bg-[#C23936] border-none text-white"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;