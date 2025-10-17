import React, { Component } from "react";
import Embed from 'react-music-embed'

class MusicPlatforms extends Component {
  constructor(props) {
    super(props);
    this.background = props.banner;
  }
  render() {
    if (this.props.sharedBasicInfo) {
      var itunesLink = this.props.sharedBasicInfo.itunesLink;
      var spotifyLink = this.props.sharedBasicInfo.spotifyLink.replace("https://open.spotify.com/","https://open.spotify.com/embed/");
      var youtubeLink = this.props.sharedBasicInfo.youtubeLink;
    }
    return (
      <section id="project">
        <div className="col-md-12" style={{
          height: window.innerHeight,
          backgroundImage: `url(${process.env.PUBLIC_URL + this.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}>
          <div className="row">
            <div className="col-md-4 p-3 mx-auto">
              <Embed
                  width="100%" height="450" frameBorder="0" allowFullScreen=""
                  url={itunesLink}/>
            </div>
            <div className="col-md-4 p-3 mx-auto">
              <iframe data-testid="embed-iframe" style={{borderRadius: 12}}
                      src={spotifyLink}
                      width="100%" height="450" frameBorder="0" allowFullScreen=""
                      allow="accelerometer; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            <div className="col-md-4 p-3 mx-auto">
              <iframe width="100%" height="450" src={youtubeLink}
                      title="YouTube video player" frameBorder="0" style={{borderRadius: 12}}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MusicPlatforms;
