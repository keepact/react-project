import * as React from 'react';

export interface HelloWorldProps { firstName: string; lastName: string; }

const HelloWorld = (props: HelloWorldProps) => <h1>Hi there from React! Welcome {props.firstName} and {props.lastName}!</h1>;

export default HelloWorld;