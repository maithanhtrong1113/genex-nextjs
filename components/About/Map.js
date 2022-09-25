import React, { Fragment } from "react";

const Map = () => {
  return (
    <Fragment>
      <div id="map" style={{ width: "100%", height: "480px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9372725508156!2d106.71353132110255!3d10.816112436795178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175289c0f46ed83%3A0xd0a3a785337cf758!2zMTcvMzkgVGhhbmggxJBhLCBQaMaw4budbmcgMjcsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1657258460068!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          title="map"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default Map;
