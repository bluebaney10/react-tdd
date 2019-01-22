import React from 'react'
import loginForm from './loginForm'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'


it('should match the snapshot',()=>{
    const component=renderer.create(
        <loginForm/>
    )
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot()
})
/*
it('should display the correct text',()=>{
    const wrapper=shallow(<loginForm title="Login Screen" />)
    const titleText="Login Screen"
    expect(wrapper.contains(titleText)).toEqual(true)
})


it('should match the snapshot',()=>{
    const component=renderer.create(
        <loginForm/>
    )
    let tree=component.toJSON();
    expect(tree).toMatchSnapshot()
})

it('should render without crashing',()=>{
    shallow(<loginForm/>)
})
*/