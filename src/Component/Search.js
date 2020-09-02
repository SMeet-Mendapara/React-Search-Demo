import React from 'react';
import axios from "axios"
import Card from 'react-bootstrap/Card'

class search extends React.Component{
    constructor() {
        super()
        this.state = {
            query: "",
            results: [],
            loading: false,
            message: ""
        }
    }

    fetchSearchResult = (query) => {
    
        const searchURL = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}`
        axios.get(searchURL)
            .then((res) => {
                const resultNotFound = !res.data.hits.length ? "There are no more search result. please try a new search" : ""
                this.setState({
                    results: res.data.hits,
                    loading: false,
                    message: resultNotFound
                })
            }).catch((err) => {
                if (axios.isCancel(err) || err) {
                    this.setState({
                        loading: false,
                        message: "Failed to fetch data"
                    })
                }
            })
    }

    renderSearchResult = () => {
        const { results } = this.state
        if (Object.keys(results).length && results.length) {
            return (
                <div className="row">
                   
                    {results.map(result => {
                        return (<>
                         <div className="col-3 d-flex justify-content-center mt-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={result.previewURL} alt={result.user} />
                                <Card.Body>
                                    <Card.Title><a key={result.id} href={result.previewURL} ><h5>{result.user}</h5></a></Card.Title>
                                </Card.Body>
                            </Card>
                            </div>
                        </>)
                    })}
                  
                </div>
            )
        }
    }
    onChangeTextHandler(e) {

        const query = e.target.value
        if (!query) {
            this.setState({ query, results: [], message: '' })
        } else {
            this.setState({ query, loading: true, message: "" },
                () => {
                    this.fetchSearchResult(query)
                })
        }
    }
    render() {
        return (<>
            <div className="text-center">
                <h2 className=" py-2">React Live Search </h2>

            </div>
            <div className="d-flex justify-content-center">
                <input placeholder="Search" className="col-6 form-control my-3" onChange={this.onChangeTextHandler.bind(this)} />
            </div>
            {this.state.message && <p className="message">{this.state.message}</p>}
            {this.state.loading ? <h3 className="d-flex justify-content-center align-items-center">Loading...</h3> : this.renderSearchResult() }
            
        </>);
    }
}

export default search;