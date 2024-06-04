import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const githubData = useLoaderData();

  return (
    <>
      <div className="m-4 grid grid-cols-4 text-center">
        <div className="col-span-2 ">Username: {githubData.login}</div>
        <div className="col-span-2 flex justify-center">
          <img className="h-24" src={githubData.avatar_url} alt=" logo" />{" "}
        </div>
      </div>
      <div className="m-4 grid grid-cols-4 text-center">
        <div className="col-span-2 ">Id: {githubData.id}</div>
      </div>
      <div className="m-4 grid grid-cols-4 text-center">
        <div className="col-span-2 ">Github-url: {githubData.url}</div>
      </div>
    </>
  );
}

export default Github;

export const getGithubInfo = async () => {
  const response = await fetch("https://api.github.com/users/praneetz");
  return response.json();
};
