import React, { Component } from "react";
import PropTypes from "prop-types";
import Sound from "react-sound";

class Audio extends Component {
  render() {
    return (
      <Sound
        url={this.props.url}
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
      />
    );
  }
}

Audio.propTypes = {};

export default Audio;
