import React from 'react/addons';
import Tabbar from '../app/cmps/tabbar/tabbar';
import Button from '../app/cmps/button/button';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass} = React.addons.TestUtils;

describe('Tabbar', () => {

  it('renders buttons', () => {
    const component = renderIntoDocument(
      <Tabbar tabs={[{
        label: 'Button',
        slug: 'Btn',
        icon: 'http://www.example.com/img.jpg',
       }]}
        activeSection="main"
        selectSection={() => {}}
      />
    );

    expect(component).to.be.instanceof(Tabbar);
  });

});
