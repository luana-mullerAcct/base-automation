import plpAssortments from '../fixtures/plpAssortment.json'

describe('Validação dos cenários da PLP', () => {
    it('Acessando PLP da loja',()=>{
        cy.visit('eletrodomesticos/geladeiras---refrigeradores?utmi_p=home&utmi_pc=menu-eletrodomesticos')
        cy.get('.vtex-search-result-3-x-galleryTitle--layout').should('be.visible')
    })

    it('Validação ordenação - mais vendidos', () => {
        cy.visit(plpAssortments.OrderByTopSaleDESC.url)
        cy.getAssortment(plpAssortments.OrderByTopSaleDESC.description)
    })
   
    it('Validação ordenação - mais recente', () => {
        cy.visit(plpAssortments.OrderByReleaseDateDESC.url)
        cy.getAssortment(plpAssortments.OrderByReleaseDateDESC.description)
    })

    it('Validação ordenação - desconto', () => {
        cy.visit(plpAssortments.OrderByBestDiscountDES.url)
        cy.getAssortment(plpAssortments.OrderByBestDiscountDES.description)
    })

    it('Validação ordenação - Do maior para o menor', () => {
        cy.visit(plpAssortments.OrderByPriceDESC.url)
        cy.getAssortment(plpAssortments.OrderByPriceDESC.description)
    })

    it('Validação ordenação - Do menor para o maior', () => {
        cy.visit(plpAssortments.OrderByPriceASC.url)
        cy.getAssortment(plpAssortments.OrderByPriceASC.description)
    })

    it('Validação ordenação - ordem alfabética crescente', () => {
        cy.visit(plpAssortments.OrderByNameASC.url)
        cy.getAssortment(plpAssortments.OrderByNameASC.description)
    })

    it('Validação ordenação - ordem alfabética decrescente', () => {
        cy.visit(plpAssortments.OrderByNameDESC.url)
        cy.getAssortment(plpAssortments.OrderByNameDESC.description)
    })

    it('Validação faixa de preço', () =>{
        cy.visit(plpAssortments.sort_desc.url)
        //validando minimo
        cy.get('.vtex-search-result-3-x-priceRangeInputWrapper > :nth-child(1) > :nth-child(1) > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input')
        .clear().type('3000')
        //validado maximo
        //cy.get('.:nth-child(2) > :nth-child(1) > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').clear().type('20500')//.should('have.value', '20500')
        cy.contains('button', 'Aplicar').click()
    })

    it('Acessando um produto', () =>{
        cy.visit(plpAssortments.sort_desc.url)
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink').click()
    })
})


    /*
    beforeEach(() => {
        cy.setVercelCookie(cookies.vercelCookieName, vercelCookieValue)
        cy.visit('/')
        cy.removeModal()
        })
    }
   
    it('Validação de filtro da PLP', () => {
        cy.visit(plpAssortments.name_desc.url)
        cy.checkFilter()
    })

        //acessando uma categoria em expecifico e confirmando que é a mesma.
        //cy.get('#email').type('luana.muller@qualitydigital.global')
        //cy.get('.vtex-button__label').click()
        //cy.get('#password').type('')
        //cy.get('.vtex-styleguide-9-x-input').click
    
}) */