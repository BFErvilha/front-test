import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Product from "../../src/components/Produtcts/Product";

describe('Testing Product', () => {
  it('Testing product name', ()=> {
    const product = shallowMount(Product)
    product.setData({ title: 'Camisa Nike Corinthians I'});
    expect(product.find('h3').html()).to.contain('Camisa Nike Corinthians I')
  })
})

