import React from 'react';

import {
    BarLoader,
    BeatLoader,
    BounceLoader,
    CircleLoader,
    ClipLoader,
    ClimbingBoxLoader,
    DotLoader,
    FadeLoader,
    GridLoader,
    HashLoader,
    MoonLoader,
    PacmanLoader,
    PropagateLoader,
    PulseLoader,
    RingLoader,
    RiseLoader,
    RotateLoader,
    ScaleLoader,
    SyncLoader,
} from 'react-spinners';

const loaders = [
    BarLoader,
    BeatLoader,
    BounceLoader,
    CircleLoader,
    ClipLoader,
    ClimbingBoxLoader,
    DotLoader,
    FadeLoader,
    GridLoader,
    HashLoader,
    MoonLoader,
    PacmanLoader,
    PropagateLoader,
    PulseLoader,
    RingLoader,
    RiseLoader,
    RotateLoader,
    ScaleLoader,
    SyncLoader,
]

export const RandomSpinner = (loading, css) => {
    let Spin = loaders[Math.floor(Math.random() * loaders.length)]
    return <Spin loading={loading} css={css} />
}