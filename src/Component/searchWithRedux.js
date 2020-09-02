import React from 'react';
import Card from 'react-bootstrap/Card'
import {search} from "../Redux/Actions/index"
import { connect } from 'react-redux';

function mapStateToDispatch(dispatch){
    return{
        search:(url) =>dispatch(search(url))
    }
}

function mapStateToProps(state){
    return{ searchResult : state.searchResult}
}

class searchWithRedux extends React.Component{
    constructor(props) {
        super(props)
    }
    renderSearchResult = () => {
            return (
                <div className="row">
                    {this.props.searchResult.map(result => {
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
  
    onChangeTextHandler(e) {
        const query = e.target.value
        this.props.search(query)
    }
    render() {
        return (<>
            <div className="text-center">
                <h2 className=" py-2">React Live Search </h2>
            </div>
            <div className="d-flex justify-content-center">
                <input placeholder="Search" className="col-6 form-control my-3" onChange={this.onChangeTextHandler.bind(this)} />
            </div>
            {this.renderSearchResult()}
        </>);
    }
}

const example = connect(mapStateToProps,mapStateToDispatch)(searchWithRedux)
export default example;