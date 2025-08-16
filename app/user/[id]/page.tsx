import React from "react";

const UserPage = async ({params}: {params: {id: string}}) => {
  return <div>ID: {params.id}</div>;
};

export default UserPage;
