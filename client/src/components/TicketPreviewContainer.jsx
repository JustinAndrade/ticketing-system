import React from "react";

const TicketPreviewContainer = ({ ticket, date }) => {
  return (
    <div className="bg-white mx-2 my-2 p-2 shadow-lg w-full mx-auto rounded-lg">
      <div className="flex items-center">
        <h4 className="text-left text-lg px-2">{ticket.title}</h4>
        <span className="text-gray-500 italic text-xs">#{ticket.id}</span>
      </div>
      <div className="flex items-center px-2">
        <p className="mr-2">{ticket.created_by} - </p>
        <p className="text-gray-600 italic font-bold text-xs">
          created: {date}
        </p>
      </div>
    </div>
  );
};

export default TicketPreviewContainer;
