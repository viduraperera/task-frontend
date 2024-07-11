import FacebookIcon from "@/common/icons/FacebookIcon";
import InstagramIcon from "@/common/icons/InstagramIcon";
import TiktokIcon from "@/common/icons/TiktokIcon";
import React from "react";

const SocialIcons: React.FC = () => (
  <ul className="list-unstyled d-flex">
    <li className="ms-3">
      <a className="link-body-emphasis" href="#">
        <TiktokIcon />
      </a>
    </li>
    <li className="ms-3">
      <a className="link-body-emphasis" href="#">
        <InstagramIcon />
      </a>
    </li>
    <li className="ms-3">
      <a className="link-body-emphasis" href="#">
        <FacebookIcon />
      </a>
    </li>
  </ul>
);

export default SocialIcons;
