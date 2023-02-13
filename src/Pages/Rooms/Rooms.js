import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { SlSizeActual } from "react-icons/sl";
import { GrView } from "react-icons/gr";

const Rooms = () => {
  const [roomInfo, setRoomInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/room-info")
      .then((res) => res.json())
      .then((data) => setRoomInfo(data));
  }, []);
  return (
    <div>
      <h1
        className="text-black text-lg text-center mt-40
      "
      >
        All Rooms Info
      </h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {roomInfo.map((room) => {
          return (
            <div>
              <div key={room.id} className=" relative pb-20 pt-30">
                <div className="max-w-screen-xl static px-4 py-0 my-0 mx-auto">
                  <div className="">
                    <div className="relative max-w-md">
                      <div className="overflow-hidden">
                        <img
                          className="inline-block max-w-full h-auto"
                          src={room.img}
                          alt="room"
                        />
                      </div>
                      <div className="bg-white border-2 border-solid border-grey-300 p-10">
                        <div className="absolute top-[-15px] right-10 py-0.5 px-3 text-sm text-white font-serif text-center">
                          150/Night
                        </div>
                        <div>
                          <ul className="flex flex-wrap pb-3">
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
                              <GrView className="text-white" />
                              <h4 className="font-sm mt-2">View</h4>
                              <div className="text-capacity font-normal">
                                {room.view}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default Rooms;
