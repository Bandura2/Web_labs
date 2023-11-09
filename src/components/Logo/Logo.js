import React from "react";
import { Spider } from '@styled-icons/fa-solid';
import { Logotype } from "./Logo.styled";

const Logo = () => {
    return (
        <Logotype>
        <div className='Wraper'>
          <a href='/'><Spider size={30} /></a>
          <a className='LogoName' href='/'>Terra_rium</a>
        </div>
      </Logotype>
    );
};

export default Logo;