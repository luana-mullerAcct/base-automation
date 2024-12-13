import products from '../fixtures/products.json'

describe('Validações na PDP', () => {
    beforeEach(() => {
       cy.visit('')
       //cy.get('#password').type('American@s')
       
    })

    it('Validação do breadcrumb', () => {
        cy.visitPdp(products[0].url)
        cy.getBreadcrumb()
    })

    it('Validação do título do produto', () => {
        cy.visitPdp(products[0].url)
        cy.getProductTitle()
    })

    it('Validação da descrição do produto', () => {
        cy.visitPdp(products[0].url)
        cy.getProductDescription()
    })

    it('Validação da opção Mais Informações', () => {
        cy.visitPdp(products[0].url)
        //cy.getProductMoreInfo().click()
        cy.get('.electrolux-scroll-into-view-0-x-callToActionText').click()
        //DANDO ERRO NO CLICK PORQUE? VERIFICAR
    })

    it('Validação da galeria de imagens', () => {
        cy.visitPdp(products[0].url)
        cy.getProductImageGallery()
    })

    //it('Validação da mensagem de Vendido e Entregue por', () => {
    //    cy.visitPdp(products[0].url)
    //    cy.getProductSoldBy()
    //})
    
    it('Validação do preço do produto', () => {
        cy.visitPdp(products[0].url)
        cy.getProductPrice()
    })
/*
    it('Validação do incremento de quantidade do produto', () => {
        cy.visitPdp(products[0].url)
        cy.productIncreaseQty()
    })

    it('Validação da subtração de quantidade do produto', () => {
        cy.visitPdp(products[0].url)
        cy.productDecreaseQty()
    })*/

    it.only('Validação da adição do produto ao minicart', () => {
        cy.visitPdp(products[0].url)
        cy.addProductToMinicart()
        //cy.validateItemAddedMinicart()
    })
})