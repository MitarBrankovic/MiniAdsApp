import React, { Component } from 'react';
import AdService from '../services/AdService';
import UserService from '../services/UserService';
import Pagination from './Pagination';
import Moment from 'moment';
import Carousel from 'react-bootstrap/Carousel';

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            ads:[],
            adsHelper: [],
            pageOfItems: [],
            search: '',
            minPrice: 0,
            maxPrice: 0,
            category: '',
            isMine: false,
            loggedUser: JSON.parse(localStorage.getItem('user'))
    }

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
        this.changeSearchHandler = this.changeSearchHandler.bind(this);
        this.changeMinHandler = this.changeMinHandler.bind(this);
        this.changeMaxHandler = this.changeMaxHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeIsMineHandler = this.changeIsMineHandler.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    changeSearchHandler(e){
        this.setState({search: e.target.value});
    }

    changeMinHandler(e){
        this.setState({minPrice: e.target.value});
    }

    changeMaxHandler(e){
        this.setState({maxPrice: e.target.value});
    }

    changeCategoryHandler(e){
        this.setState({category: e.target.value});
    }

    changeIsMineHandler(e){
        this.setState({isMine: e.target.checked});
    }

    // pretraga na Frontu
    // nece da promeni listu na frontu - nevezano za ovu metodu
    /*searchAdsFront(){
        return this.state.pageOfItems.filter(ad => {
            return ad.name.toLowerCase().includes(this.state.search.toLowerCase())
        })
    }

    sortAdsByNewestDate(ads){
        return ads.sort((a,b) => {
            return new Date(b.dateOfCreation).getTime() - new Date(a.dateOfCreation).getTime()
        })
    }*/

    searchAds(){
        if(this.state.minPrice === ''){
            this.state.minPrice = 0;
        }
        if(this.state.maxPrice === ''){
            this.state.maxPrice = 0;
        }
        if(this.state.ads.length === 0){
            this.setState({
                ads: this.state.adsHelper
            })
        }
        let search ={
            name: this.state.search,
            minValue : this.state.minPrice,
            maxValue : this.state.maxPrice,
            category : this.state.category,
            isMine : this.state.isMine,
            userId : this.state.loggedUser.id
        }
        return AdService.searchAds(search).then((res)=>{
            this.setState({
                ads: res.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    resetMinValueInputWhenZero(){
        if(this.state.minPrice === 0){
            this.setState({
                minPrice: ''
            })
        }
    }

    resetMaxValueInputWhenZero(){
        if(this.state.maxPrice === 0){
            this.setState({
                maxPrice: ''
            })
        }
    }

    checkIfMyCard(ad){
        if(this.state.loggedUser !== null && ad.userApp.id === this.state.loggedUser.id){
            return true;
        }
        return false;
    }

    redirectAd(ad){
        this.props.history.push(`/selectedAd/${ad.id}`)
    }


    render() {

        return (
            <div>

            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" style={{height:"100%", maxHeight:"340px"}} src={process.env.PUBLIC_URL + '/shop1.jpg'} alt="First slide" />
                    <Carousel.Caption>
                    <h3>Welcome</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{height:"100%", maxHeight:"340px"}} src={process.env.PUBLIC_URL + '/shop2.jpg'} alt="Second slide" />

                    <Carousel.Caption>
                    <h3>Welcome</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{height:"100%", maxHeight:"340px"}} src={process.env.PUBLIC_URL + '/shop3.jpg'} alt="Third slide" />

                    <Carousel.Caption>
                    <h3>Welcome</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            <div className='mt-3'>
                <div className='container' style={{"borderWidth": "1px", "borderStyle": "solid", "borderColor": "turquoise", "backgroundColor": "#FAFAFA"}}>
                    <input type='text' className='input col-sm-4 mr-2 mt-2' value={this.state.search} onChange={this.changeSearchHandler} placeholder='Search' />
                    <input type='text' className='input col-sm-2 ml-2 mt-2' value={this.state.minPrice} onChange={this.changeMinHandler} onSelect={this.resetMinValueInputWhenZero.bind(this)} placeholder='MinPrice' />
                    <input type='text' className='input col-sm-2 ml-2 mt-2' value={this.state.maxPrice} onChange={this.changeMaxHandler} onSelect={this.resetMaxValueInputWhenZero.bind(this)} placeholder='MaxPrice' />
                    <button className='button is-primary ml-2 mt-2' onClick={this.searchAds.bind(this)}>Search</button>
                    <br/>
                    
                    <div className="select mt-3 mb-3">
                        <select value={this.state.category} onChange={this.changeCategoryHandler}>
                            <option value={""}>Select dropdown</option>
                            <option value={"clothing"}>Clothing</option>
                            <option value={"tools"}>Tools</option>
                            <option value={"sports"}>Sports</option>
                            <option value={"accessories"}>Accessories</option>
                            <option value={"furniture"}>Furniture</option>
                            <option value={"pets"}>Pets</option>
                            <option value={"games"}>Games</option>
                            <option value={"books"}>Books</option>
                            <option value={"technology"}>Technology</option>
                        </select>
                    </div><br/>
                    {this.state.loggedUser !== null ?  <div><input type="checkbox" className='mt-3' value={this.state.isMine} onChange={this.changeIsMineHandler} /><label className='ml-2'>Show mine only</label></div> : null}

                </div>

                <section className="section">
                    <div className="container">
                        <h3 className="title has-text-centered is-size-4">Related Products</h3>
                        <div className="columns is-multiline">
                        {
                        this.state.pageOfItems.map(item =>{
                                return <div className='column is-3' key={item.id}>
                                            <div className="card mt-5 ml-5 " style={{"borderColor": this.checkIfMyCard(item) ? "turquoise" : ""}}>
                                            <div className="card-image has-text-centered " style={{backgroundColor:"FloralWhite"}}>
                                                <img src={process.env.PUBLIC_URL + '/images/' + item.urlPhoto} style={{maxHeight:"150px"}} alt="Placeholder"/>
                                            </div>
                                            <div className="card-content" style={{height: "180px"}}>
                                                <p className="is-size-5"><b>{item.name}</b> (<i>{item.status}</i>)</p>
                                                <p><i>{Moment(item.dateOfCreation).format('DD.MM.YYYY.')}</i></p>
                                                <p>{item.price}rsd</p>
                                            </div>
                                            <footer className="card-footer">
                                            <p className="card-footer-item">
                                                <a className="has-text-grey" style={{textDecoration: "none"}} onClick={() => {this.redirectAd(item)}}>View</a>
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
                ads: res.data,
                adsHelper: res.data
            })
        })
        
        if (UserService.deleteLocalStorageIfExpired()){
            setTimeout(function(){window.location.reload()}, 1000);
        }
    }
}

export default HomePage;