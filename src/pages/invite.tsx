import * as React from 'react'
import Helmet from 'react-helmet'

// tslint:disable-next-line:max-line-length
const SLACK_INVITE_LINK = 'https://join.slack.com/t/reactnativeseoul/shared_invite/enQtMjY4ODI2OTgzNzE0LWQ1ZDA4Mjk3ZjNmNjZjNjYyMzEwMDVhNGJjNDJlMGVhYmI1Y2M5Y2JmMDQ5MTMwMTFiNTUyOTcxZmQwNGRjMmE'

export default () => (
    <Helmet>
        <script>{`window.location = '${SLACK_INVITE_LINK}'`}</script>
    </Helmet>
)
