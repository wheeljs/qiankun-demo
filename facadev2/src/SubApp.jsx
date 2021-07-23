import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import NotFound from './404';

export default function SubApp() {
    const { subapp } = useParams();

    if (subapp === '404') {
        return <NotFound />;
    }

    if (!['admin', 'about'].includes(subapp)) {
        return <Redirect to="/404" />
    }

    return <></>;
}
