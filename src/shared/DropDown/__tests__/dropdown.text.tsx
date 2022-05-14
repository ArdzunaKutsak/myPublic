import { EnzymeAdapter, shallow,  } from "enzyme"
import { DropDown } from "../DropDown"
import React from 'react';
import { snapshotSerializers } from "../../../../jest.config";

describe('Dropdown', () => {
    test('Should render', () => {
        const wrapper = shallow(<DropDown children={<div />} button={<button />} />)
        expect(wrapper).toBeDefined();
        expect(wrapper.find('#button')).toBeDefined();    
    })
    
})
