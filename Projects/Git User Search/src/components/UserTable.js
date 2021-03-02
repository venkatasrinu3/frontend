 import React from "react";
import ShowModal from "./ShowModal";

const UserTable = (props) => {
  return (
    <div className="col-12 col-md-12 col-lg-12 table-responsive">
      <table className="table border">
        <thead className="thead-dark">
          <tr className='text-warning'>
            <th>Profile Pic</th>
            <th>Login Name</th>
            <th>Id</th>
            <th>HTML Url</th>
            <th>Repo's Link</th>
            <th>Profile Info</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((element) => (
            <tr key={element.id} className="font-weight-bold ">
              <td>
                {<img src={element.avatar_url} height={100} width={100} />}
              </td>
              <td className="pt-5 text-light">{element.login}</td>
              <td className="pt-5 text-light">{element.id}</td>
              <td className="pt-5">
                <a href={element.html_url} target="_blank">
                  External Github
                </a>
              </td>
              <td className="pt-5">
                <a href={element.repos_url} target="_blank">
                  Repo's
                </a>
              </td>
              <td className="pt-5">
                <ShowModal
                  name={element.login}
                  label="User Name"
                  img={element.avatar_url}
                  id={element.id}
                  score={element.score}
                  tag="Score"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
