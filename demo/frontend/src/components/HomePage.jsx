import React, { Component } from 'react';
import AdService from '../services/AdService';
import UserService from '../services/UserService';
import Pagination from './Pagination';

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            ads:[],
            pageOfItems: []
    }




        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {

        return (
            <div>
                <section className="section">
                    <div className="container">
                        <h3 className="title has-text-centered is-size-4">Related Products</h3>
                        <div className="columns is-multiline">
                        {
                        this.state.pageOfItems.map(item =>{
                                return <div className='column is-3' key={item.id}>
                                            <div className="card mt-5 ml-5 " >
                                            <div className="card-image has-text-centered px-6">
                                                <img src={'https://bulma.io/images/bulma-logo.png'} alt="Placeholder"/>
                                            </div>
                                            <div className="card-content">
                                                <p>{item.price}rsd</p>
                                                <p className="title is-size-5">{item.name}</p>
                                            </div>
                                            <footer className="card-footer">
                                            <p className="card-footer-item">
                                                <a href="" className="has-text-grey">View</a>
                                            </p>
                                            </footer>
                                        </div>
                                    </div>
                                
                                })
                        
                        }
                        </div>
                    </div>
                    <br/>
                    <div className="container mt-5">
                        <div className="text-center">
                            <Pagination items={this.state.ads} onChangePage={this.onChangePage} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    componentDidMount() {
        UserService.getUsers().then((res)=>{
            this.setState({
                users: res.data
            })
        })

        AdService.getAllAds().then((res)=>{
            this.setState({
                ads: res.data
            })
        })
    }
}

export default HomePage;