import React, { Component } from "react";
import PropTypes from "prop-types";
import * as api from "../api";
import Loader from "react-loader-spinner";
import Image from "./Image";
import Audio from "./Audio";
import "../App";

class Asset extends Component {
  state = {
    asset: null,
    isLoading: true,
    jsondata: null
  };
  render() {
    if (this.state.isLoading) {
      return <Loader type="ThreeDots" color="red" height="100" width="100" />;
    }

    // asset data
    const title = this.state.asset.data[0].title;
    const description = this.state.asset.data[0].description;
    const test = this.state.asset.href;
    const media_type = this.state.asset.data[0].media_type;

    return (
      <div className="asset-container">
        <header>{title}</header>
        {media_type === "image" && (
          <Image
            title={title}
            description={description}
            image={this.state.jsondata[1]}
          />
        )}
        {media_type === "audio" && <Audio url={this.state.jsondata[0]} />}
      </div>
    );
  }

  componentDidMount() {
    const { nasa_id } = this.props;
    api
      .getAssetById(nasa_id)
      .then(asset => {
        return Promise.all([api.getJSONdata(asset.href), asset]);
      })
      .then(([jsondata, asset]) => {
        this.setState({ jsondata, asset, isLoading: false });
      });
  }

  componentDidUpdate() {
    //if url changes
  }
}

Asset.propTypes = {};

export default Asset;
