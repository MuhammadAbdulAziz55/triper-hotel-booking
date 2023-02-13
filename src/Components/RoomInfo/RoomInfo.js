import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { SlSizeActual } from "react-icons/sl";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const RoomInfo = () => {
  const [roomInfo, setRoomInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/room-info")
      .then((res) => res.json())
      .then((data) => setRoomInfo(data));
  }, []);
  return (
    <div>
      <h1
        className="text-black text-lg text-center mt-31
    "
      >
        All Rooms Info
      </h1>

      <div className="grid lg:grid-cols-3 gap-3 lg:mx-6 ">
        {roomInfo.map((room) => {
          return (
            <div className="">
              <div className="py-10">
                <div className="rounded overflow-hidden shadow-lg max-w-sm">
                  <img
                    src={room.img}
                    alt="roomImg"
                    className="w-full transition duration-100 ease-in-out hover:overflow-clip"
                  />
                  <div className="px-5 py-4">
                    <ul className="grid grid-flow-col pb-3">
                      <li className="mr-6 list-none">
                        <FaUser className="text-icon" />
                        <h4 className="font-sm mt-2">Capacity</h4>
                        <div className="text-capacity font-normal">
                          {room.capacity}
                        </div>
                      </li>
                      <li className="mr-6 list-none">
                        <SlSizeActual className="text-icon" />
                        <h4 className="font-sm mt-2">Size</h4>
                        <div className="text-capacity font-normal">
                          {room.size}
                        </div>
                      </li>
                      <li className="mr-6 list-none">
                        <BsEyeFill className="text-icon " />
                        <h4 className="font-sm mt-2">View</h4>
                        <div className="text-capacity font-normal">
                          {room.view}
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="px-5">
                    <h2 className="text-xl text-black">{room.title}</h2>
                  </div>
                  <div className="mt-10 ml-5 mb-10">
                    <Link
                      to=""
                      className="bg-white border-2 border-solid border-button py-4 px-5 text-sm text-customT "
                    >
                      <span>View Room</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomInfo;
