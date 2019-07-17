import React from 'react';
import Title from 'src/components/atoms/Title';
import SubTitle from 'src/components/atoms/SubTitle';
import Square from 'src/components/atoms/Square';

const MainHeading = () => {
    return ( 
        <div>
            <Square width='50' height='30' border='35' left='100' top='200' />
            <Title title="Hello, I'm Jakub" />
            <SubTitle text="And I'm front-end developer" />
        </div>
     );
}
 
export default MainHeading;