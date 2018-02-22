import * as React from 'react'
import Helmet from 'react-helmet'

import 'semantic-ui-css/semantic.min.css'
import './index.scss'

const TemplateWrapper = ({ children }: any) => (
    <>
        <Helmet
            title='React Native Seoul Community'
            meta={[
                { name: 'description', content: 'Homepage of the React Native Seoul Community' },
                { name: 'keywords', content: 'React Native, Seoul' },
            ]}
        />
        {children()}
    </>
)

export default TemplateWrapper
