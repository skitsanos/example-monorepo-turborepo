import {debug, Dot} from '@skitsanos/uibits';
import React from 'react';

const page = () => <div>hello
    <div>
        debug: {debug} <Dot/>
        <Dot color={'#fb0'} size={8} />
    </div>
</div>;
export default page;