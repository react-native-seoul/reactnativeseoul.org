import * as React from 'react'
import Link from 'gatsby-link'

import {
    Button,
    Segment,
    Container,
    Grid,
    Header,
    Icon,
} from 'semantic-ui-react'

export default () => (
    <>
        <Segment vertical inverted textAlign='center' className='masthead'>
            <Container text>
                <Header inverted as='h1'>React Native Seoul</Header>
                <Header inverted as='h2'>We <Icon name='heart' /> React Native</Header>
            </Container>
        </Segment>

        <Segment vertical className='stripe'>
            <Grid stackable verticalAlign='middle' className='container'>
                <Grid.Row>
                    <Grid.Column width='8'>
                        <Header>Lorem ipsum</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                        </p>
                        <Header>Dolor sit amet</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                        </p>
                    </Grid.Column>
                    <Grid.Column width='6' floated='right'>
                        <Header>Lorem ipsum</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                        </p>
                        <Header>Dolor sit amet</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment vertical className='stripe alternate feature'>
            <Grid columns='3' textAlign='center' divided relaxed stackable className='container'>
                <Grid.Row>
                    <Grid.Column>
                        <Header icon>
                            <Icon name='wizard' />
                            A kind of magic!
                        </Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptas eaque at quae cupiditate aspernatur quibusdam!
                            Distinctio quod non, harum dolorum earum molestias,
                            beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header icon>
                            <Icon name='wizard' />
                            A kind of magic!
                        </Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptas eaque at quae cupiditate aspernatur quibusdam!
                            Distinctio quod non, harum dolorum earum molestias,
                            beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header icon>
                            <Icon name='wizard' />
                            A kind of magic!
                        </Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptas eaque at quae cupiditate aspernatur quibusdam!
                            Distinctio quod non, harum dolorum earum molestias,
                            beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </>
)
