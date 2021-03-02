import React from "react";
import ShowModal from "./ShowModal";

class RepoTable extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-12 col-lg-12 table-responsive">
        <table className="table border">
          <thead className="thead-dark">
            <tr className='text-light'>
              <th>Profile Pic</th>
              <th>Repo Name</th>
              <th>Repo Id</th>
              <th>Created At</th>
              <th>Forks Count</th>
              <th>HTML Url</th>
              <th>Profile Info</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((element) => (
              <tr key={element.id} className="font-weight-bold">
                <td>
                  {
                    <img src={element.owner.avatar_url}height={100}width={100}/>
                  }
                </td>
                <td className="pt-5 text-light">{element.name}</td>
                <td className="pt-5 text-light">{element.id}</td>
                <td className="pt-5 text-light">{element.created_at}</td>
                <td className="pt-5 text-center text-light">
                  {element.forks_count}
                </td>
                <td className="pt-5">
                  <a href={element.html_url}>External Link</a>
                </td>
                <td className="pt-5">
                  <ShowModal
                    name={element.name}
                    label="Repo Name"
                    img={element.owner.avatar_url}
                    id={element.id}
                    score={element.created_at}
                    tag="Created At"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default RepoTable;
