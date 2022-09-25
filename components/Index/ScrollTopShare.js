import React, { useEffect } from "react";
import Link from "next/link";
import $ from "jquery";
const ScrollTopShare = () => {
  useEffect(() => {
    var condition = 0;
    window.addEventListener("scroll", function () {
      var currentlocation = document.documentElement.scrollTop;

      if (currentlocation > 500) {
        $("#iconshare").removeClass("animationDefaultFB");
        $("#iconshare").addClass("animationAddClassFB");
        $("#iconshare").removeClass("share");
        $("#scrollTop").addClass("animationAddClass");
        $("#scrollTop").show();
        condition = currentlocation + 1;
      } else {
        $("#iconshare").removeClass("animationAddClassFB");
        $("#scrollTop").hide();
        if (condition > 500) {
          $("#iconshare").addClass("animationDefaultFB");
        }
      }
    });
  }, []);
  const shareFB = () => {
    $("#share-FB-url").attr(
      "href",
      `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
    );
    console.log(window.location.href);
  };
  const scrollTopOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="circles-share">
      <a
        href=""
        // "shareFB('https://www.facebook.com/sharer/sharer.php?u=')"
        onClick={shareFB}
        id="share-FB-url"
      >
        <img
          src={"/images/icon/icon-share.png"}
          className="icon share"
          id="iconshare"
        />
      </a>
      <Link href="">
        <img
          src={"/images/icon/icon-scrollTop.png"}
          className="icon scrollTop"
          onClick={scrollTopOnClick}
          id="scrollTop"
        />
      </Link>
    </div>
  );
};

export default ScrollTopShare;
