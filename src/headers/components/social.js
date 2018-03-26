import React from 'react';
import Icon from "../../icons/components/icon";
import './social.css';

function Social(props) {
  return (
    <div className="Social">
      {
        props.social.map((social) => {
          return (
            <Icon
              key={social.name}
              src={"./images/social/" + social.name + ".png"}
              alt={social.name + " logo"}
              size={25}
            />
          )
        })
      }
    </div>
  )
}

export default Social;