import React from 'react';
import VeiwPager from './VeiwPager';
// import Styled from 'styled-components';
import '../veiwPager.css';

// const Wrapper = Styled.div`
// overscroll-behavior-y: contain;
// margin: 0;
// padding: 0;
// height: 100%;
// width: 100%;
// user-select: none;
// font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
//   segoe ui, arial, sans-serif;
// position: fixed;
// overflow: hidden;
// `;






export default function VeiwPagerExportDiv(){
   return( 
         <div >
        <VeiwPager className="element"/>
 </div>
    )
}