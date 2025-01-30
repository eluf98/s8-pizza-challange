describe('Pizza Sipariş Formu', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/OrderPizza'); // Sipariş sayfasını ziyaret et
  });

  it('Form alanlarının doldurulması ve siparişin başarılı gönderimi', () => {
    cy.get('[data-cy=ad-input]').type('Ala Ahmet'); // İsim gir
    cy.get('[data-cy=size-input]').check('Büyük'); // Boyut seç
    cy.get('[data-cy=hamur-input]').select('İnce'); // Hamur seç
    cy.get('[data-cy=ekler-input]').first().check(); // İlk ek malzemeyi seç
    cy.get('[data-cy=ekler-input]').eq(1).check(); // İkinci ek malzemeyi seç
    
    cy.get('.quantity-button').contains('+').click(); // Adeti artır
    cy.get('.quantity-value').should('contain', '2'); // Adet kontrolü

    cy.get('.form-submit').click(); // Sipariş Ver butonuna tıkla

    cy.url().should('include', '/Success'); // Başarı sayfasına yönlendirildi mi?
  });

  it('Eksik bilgiyle sipariş verilememeli', () => {
    cy.get('.form-submit').click(); // Boş form ile gönder
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Lütfen tüm gerekli alanları doldurun.');
    });
  });

  it('10’dan fazla malzeme seçilememeli', () => {
    cy.get('[data-cy=ekler-input]').each(($el, index) => {
      if (index < 10) {
        cy.wrap($el).check();
      }
    });

    cy.get('[data-cy=ekler-input]').eq(10).should('be.disabled'); // 11. seçenek seçilememeli
  });
});
