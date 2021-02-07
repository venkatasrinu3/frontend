import React from 'react'
import Axios from 'axios';
import UserTable from './UserTable'
import RepoTable from './RepoTable'
class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Userdata : '',
            Repodata : '',
            language : '',
            isUser : false,
            isRepo : false,
            isShow : false,
            isUserData : false,
            isRepoData : false,
            UserInfo : [],
            RepoInfo : []
        }
    }
    handleSelect = (e) =>{
        if(e.target.value == 0){
            this.setState({isUser:true ,isRepo:false})
        }
        else if(e.target.value == 1){
            this.setState({isUser:false ,isRepo:true})
        }
        else{
            this.setState({isUser:false ,isRepo:false})
        }  
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        }); 
        e.target.value.length>0 
        ? this.setState({isShow:true})
        : this.setState({isShow:false})
    };
    hanldeSubmit = (e) =>{
        e.preventDefault()
        const {Userdata,Repodata,language,isRepo} = this.state
        if(!isRepo){
            const reqparams={
                method : 'get',
                url : 'https://api.github.com/search/users',
                params : {
                    q: Userdata
                }
            }
            Axios(reqparams)
            .then((response)=>{
                if(response.data.items.length > 0){
                    this.setState({
                        UserInfo : [...response.data.items],
                        isUserData:true,
                        isRepoData:false
                    })
                }else{
                    alert('Please Provide Valid Information')
                }
            })
        }else{
            const reqparams = {
                method:'get',
                url : 'https://api.github.com/search/repositories',
                params : {
                    q:Repodata,
                    lang : language
                }
            }
            Axios(reqparams)
            .then((response) =>{
                if(response.data.items.length>0){
                    this.setState({
                        RepoInfo:[...response.data.items],
                        isUserData: false,
                        isRepoData:true
                    })
                } else {
                    alert('Please provide valid information')
                }
            })
            .catch((error)=>{
                console.log('There is an'+ error)
            })
        }
        this.reset()
    }
    reset=()=>{
        this.setState({
            Userdata : "",
            Repodata : "",
            language : "",
            isUser : false,
            isRepo : false,
            isShow : false,
        })
    }
    componentDidMount(){
        Axios.get('https://api.github.com/search/users')
        .then((response) =>{
            this.setState({
                UserInfo : response.data.items,
                isUserData : true,
                isRepoData : false
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render(){
        console.log(this.state.RepoInfo)
        return(
            <div className='container'>
                <div className='display-4 bg-success text-center mt-2 '>Github User Search</div>
                <form onSubmit={this.hanldeSubmit}>
                    <div className='from-group'>
                        <div className='col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 my-3 text-center '>
                            <select className='form-control bg-warning text-dark' onClick={this.handleSelect} >
                                <option value="--">Search By</option>
                                <option value="0">User Data</option>
                                <option value="1">Repo Data</option>
                            </select>
                            {this.state.isUser && <div className='form-group mt-3'>
                                <input type="text" name='Userdata' value={this.state.Userdata} className='form-control' onChange={this.handleChange} placeholder='Enter your Username' />
                            </div>}
                            {this.state.isRepo && <div className='form-group '>
                                <input type="text" name='Repodata' value={this.state.Repodata} className='form-control my-3' onChange={this.handleChange} placeholder='Enter your Repository Name' />
                                <input type="text" name='language' value={this.state.language} className='form-control' onChange={this.handleChange} placeholder='Enter your Language' />
                            </div>}
                            {this.state.isShow && <div className='text-center mt-3'>
                                <button className='btn btn-outline-primary'>Search</button>
                            </div>}
                        </div>
                    </div>
                </form>
                {this.state.isUserData && <UserTable data={this.state.UserInfo}/>}
                {this.state.isRepoData && <RepoTable data={this.state.RepoInfo}/>}
            </div>
        )
    }
}
export default User