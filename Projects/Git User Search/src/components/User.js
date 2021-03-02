import React, { Component } from "react";
import axios from "axios";
import UserTable from "./UserTable";
import RepoTable from "./RepoTable";
import Loader from "react-loader-spinner";
import "./style.css";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      repo: "",
      lang: "",
      isrepo: false,
      isuserSearch: false,
      isShow: false,
      isUserData: false,
      isRepoData: false,
      userData: [],
      repoData: [],
      isLoading: false
    };
  }
  handleSelect = (e) => {
    if (e.target.value === "0") {
      this.setState({ isuserSearch: true, isrepo: false });
    } else if (e.target.value === "1") {
      this.setState({ isrepo: true, isuserSearch: false });
    } else {
      this.setState({ isuserSearch: false, isrepo: false });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    e.target.value.length > 0
      ? this.setState({ isShow: true })
      : this.setState({ isShow: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, repo, lang, isrepo } = this.state;
    this.setState({ isLoading: true });

    if (!isrepo) {
      const requestParams = {
        method: "get",
        url: "https://api.github.com/search/users",
        params: {
          q: username
        }
      };
      axios(requestParams)
        .then((response) => {
          this.setState({ isLoading: false });
          if (response.data.items.length > 0) {
            this.setState({
              userData: [...response.data.items],
              isUserData: true,
              isRepoData: false
            });
          } else {
            alert("Please provide valid Information!");
          }
        })
        .catch((error) => {
          this.setState({ isLoading: false });
          console.log(error);
        });
    } else {
      const requestParams = {
        method: "get",
        url: "https://api.github.com/search/repositories",
        params: {
          q: repo,
          language: lang
        }
      };
      axios(requestParams)
        .then((response) => {
          this.setState({ isLoading: false });
          if (response.data.items.length > 0) {
            this.setState({
              repoData: [...response.data.items],
              isRepoData: true,
              isUserData: false
            });
          } else {
            alert("Please provide valid Information!");
          }
        })
        .catch((err) => {
          this.setState({ isLoading: false });
          console.log(err);
        });
    }
    this.reset();
  };

  reset = () => {
    this.setState({
      username: "",
      repo: "",
      lang: "",
      isrepo: false,
      isuserSearch: false,
      isShow: false
    });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("https://api.github.com/search/users?q=masai")
      .then((response) => {
        this.setState({ isLoading: false });
        this.setState({
          userData: response.data.items,
          isUserData: true
        });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.log(error);
      });
  }

  render() {
    const {
      username,
      repo,
      lang,
      isUserData,
      isRepoData,
      userData,
      repoData,
      isuserSearch,
      isrepo,
      isLoading
    } = this.state;
    return (
      <div className="container">
        <h1 className="display-4 text-center text-light bg-success rounded">
          Github User Search
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 my-3 text-center">
            <div className="form-group">
              <select onChange={this.handleSelect} className="form-control">
                <option value="--"> Secrch By </option>
                <option value="0">Username</option>
                <option value="1">Repository</option>
              </select>
            </div>
            {isuserSearch && (
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  value={username}
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Enter Username"
                />
              </div>
            )}
            {isrepo && (
              <div className="form-group">
                <input
                  type="text"
                  name="repo"
                  value={repo}
                  className="form-control mb-3"
                  onChange={this.handleChange}
                  placeholder="Enter Repository"
                />
                <input
                  type="text"
                  name="lang"
                  value={lang}
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Enter Language"
                />
              </div>
            )}
            {this.state.isShow && (
              <button className="btn btn-outline-success">Search</button>
            )}
          </div>
        </form>
        <div className="center">
          <Loader
            type="Oval"
            color="#228B22"
            height={60}
            width={60}
            visible={isLoading}
          />
        </div>
        {isUserData && <UserTable data={userData} />}
        {isRepoData && <RepoTable data={repoData} />}
      </div>
    );
  }
}
