import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadArticles
} from './../redux/actions/actions'
import AsideFeed from './AsideFeed'
import './../assets/card.css'

const mapStateToProps = state => {
    return {
        articles: state.articles.articles
    }
}

class Series extends Component {

    componentWillReceiveProps(nextProps) {
        
    }
        
    componentWillMount() {
        this.props.loadArticles()
    }
    
    render() {
    const articles = this.props.articles.reverse().map((article)=>
                <div className="post-panel"style={{marginTop:'20px'}}>
                    <div className="wrapper" style={{marginRight:'50px'}}>
        <div className="main_series_card">
          <div className="card_series_left">
            <div className="card_series_datails">
              <h1>Tôi đã "khô máu" với nodejs như thế nào?</h1>
              <div className="card_series_cat">
                <p className="PG">Tuấn Khang</p>
                <p className="year">2018</p>
                <p className="genre">Nodejs </p>
                <p className="time">HTML</p>
              </div>
              <p className="disc">Đây là series chuyên sâu về nodejs!!</p>
              <a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
              <div className="social-btn">
                {/* WATCH TRAILER*/}
                <button className="button series">
                  <i className="fa ellipsis-h" /> READ SERIES
                </button>
              </div>	
            </div>
          </div>
          <div className="card_series_right">
            <div className="img_container">
              <img src="https://images.wallpaperscraft.com/image/mountains_lake_trees_144998_1366x768.jpg" alt="" />
            </div>
            <div className="play_btn">
              <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                <i className="fa fa-angle-double-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
                    
                </div>
            )

        return ( 
            <div>
                <div className="container-fluid main-container">
                    <div className="col-md-6 col-md-offset-1 dashboard-main-content">
                        <div className="posts-wrapper animated fadeInUp" data-behavior="endless-scroll" data-animation="fadeInUp-fadeOutDown">

                            {articles}
                        </div>
                    </div>
                    {this.props.articles ? <AsideFeed _articles={this.props.articles} /> : ''}
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, { loadArticles })(Series);