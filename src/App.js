import React, { Component } from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import Error404 from './Components/Error404';


class App extends Component {
  state = {
    photos: [],
    dogs: [],
    beach: [],
    coffee: [],
    query: '',
    loading: true
  }

  componentDidMount() {
    this.performSearch('dogs');
    this.performSearch('beach');
    this.performSearch('coffee');
  }
    
   performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&content_type=1`)
      .then(response => {
        if (query === 'dogs') {
          this.setState({ dogs: response.data.photos.photo });
        } else if (query === 'beach') {
          this.setState({ beach: response.data.photos.photo });
        } else if (query === 'coffee') {
          this.setState({ coffee: response.data.photos.photo });
        } else {
          this.setState({ photos: response.data.photos.photo });
        }
        this.setState({ loading: false });
        this.setState({ query: query });
    })
   .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }
    
    
  render() {
      console.log("Photos: " + this.state.photos)
    return (
      <BrowserRouter>
        <div className='container'>
          <SearchForm onSearch={this.performSearch} /> 
          <Nav />
          {
            (this.state.loading)
              ? <p>Loading...</p>
              : <Switch>
                <Route exact path='/' render={() => <Redirect to="/dogs" />} />
                <Route path='/dogs' render={() => <PhotoContainer data={this.state.dogs} />} />
                <Route path='/beach' render={() => <PhotoContainer data={this.state.beach} />} />
                <Route path='/coffee' render={() => <PhotoContainer data={this.state.coffee} />} />
                <Route path='/search/:query' render={() => <PhotoContainer data={this.state.photos} />} />
                <Route component={Error404} />
              </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

