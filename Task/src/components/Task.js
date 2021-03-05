import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Task.css'

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filterData : [],
            isData: false,
            offset:0,
            perPage: 10,
            currentPage: 0,
        }
    }

    dataFetch() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (response) {
                    const content = response.data
                    const slice = content.slice(this.state.offset, this.state.offset + this.state.perPage)
                    this.setState({ data: slice, filterData : slice, isData: true, pageCount: Math.ceil(content.length / this.state.perPage), })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        // console.log(e.selected)

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.dataFetch()
        });

    };

    componentDidMount(){
        this.dataFetch()
    }

    titleSearch = (e) => {
        var word = e.target.value
       var filData = this.state.data.filter(name => name.title.toLowerCase().includes(word.toLowerCase()))
       this.setState({ filterData : filData })
    }
    
    render() {
        const { filterData, isData } = this.state
        return (
            <div className='container'>

                <div className='d-flex'>
                    <div className='float-left'>
                    <ReactPaginate
                        previousLabel={"<<"}
                        nextLabel={">>"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination "}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
                    </div>
                    <div className='ml-auto d-flex mt-3'>
                        <label className='h4 pr-2'>Search </label>
                        <input type="text" placeholder='Search By Title' className='form-control' value={this.state.search} onChange={this.titleSearch} id='u_name' />
                    </div>
                </div>

                <div className='col-12 col-md-10 offset-md-2 col-lg-12 offset-lg-0 my-2'>
                    {isData && filterData.map(element =>
                        <div key={element.id}>
                            <div className='card my-2 bg-light'>
                                <div className='row'>
                                    <div className='col-12 col-md-6 col-lg-3 text-center'>
                                        <img src="https://via.placeholder.com/150C/O https://placeholder.com/" alt="placeholder_image" className='img-thumbnail' />
                                    </div>
                                    <div className='col-12 col-md-9 col-lg-9 my-2'>
                                        <h4 className='text-primary '><strong className='text-danger'>Title</strong> :{element.title}</h4>
                                        <p className='text-primary'><strong className='text-danger'>Body :</strong>: {element.body}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Task;