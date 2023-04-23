/// <reference types="cypress-xpath" />
/// <reference types="Cypress" />

class SearchBar_PO {
  before() {
    //It will run before every test Case
    cy.visit("https://www.thesouledstore.com");
    //i write this line because first time it will take permission to allow
    // cy.contains("Allow").click()
    //it will click on the Men which is persent top of the menubar
    cy.xpath("//*[text()='MEN ']").click();
  }

  TC_37() {
    //This Test case for verifying the Search bar on menubar
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    cy.get("#search").type("Marvel Comics", { force: true });
    cy.wait(8000);
    cy.screenshot({ capture:"viewport"});
  }

  TC_38() {
    //validating the searchbar
    //it hover to search bar input box
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }

  TC_39() {
    //verifying filter By Product
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //assertion Filter By Product is visible or not
    cy.xpath("(//a[normalize-space()='Products'])[1]").should(
      "have.text",
      "Products "
    );
    cy.wait(5000);

    cy.screenshot({ capture: "viewport" });
  }
  TC_40() {
    //validating filter By Product
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //it will click on products dropdown
    cy.xpath("(//a[normalize-space()='Products'])[1]").click({ force: true });
    //it will check the checkbox
    cy.xpath("(//input[@type='checkbox'])[4]").check({ force: true });
    //it will apply the filter
    cy.contains("Apply").click({ force: true });
    //it will take screen shot
    cy.wait(5000);

    cy.screenshot({ capture: "viewport" });
  }
  TC_41() {
    //verifying filter By Themes
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //assertion Filter By Themes is visible or not
    cy.xpath("(//a[normalize-space()='Themes'])[1]")
      .should("have.text", "Themes ")
      .scrollIntoView();
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }
  TC_42() {
    //validating filter By Themes
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //click on themes
    cy.xpath("(//a[normalize-space()='Themes'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@type='checkbox'])[35]").check({ force: true });
    //click on apply
    cy.contains("Apply").click({ force: true });
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }

  TC_43() {
    //verifying filter By Size
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //assertion Filter By Size is visible or not
    cy.xpath("(//a[normalize-space()='Size'])[1]")
      .should("have.text", "Size ")
      .scrollIntoView();
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }

  TC_44() {
    //validating filter By Size
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //click on Size
    cy.xpath("(//a[normalize-space()='Size'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@type='checkbox'])[42]").check({ force: true });
    //click on apply
    cy.contains("Apply").click({ force: true });
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }
  TC_45() {
    //verifying filter By Color
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //assertion Filter By Color is visible or not
    cy.xpath("(//a[normalize-space()='Colors'])[1]")
      .should("have.text", "Colors ")
      .scrollIntoView();
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }

  TC_46() {
    //validating filter By Colors
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //click on Colors
    cy.xpath("(//a[normalize-space()='Colors'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@type='checkbox'])[66]").check({ force: true });
    //click on apply
    cy.contains("Apply").click({ force: true });
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }
  TC_47() {
    //verifying filter By Gender
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //assertion Filter By Gender is visible or not
    cy.xpath("(//a[normalize-space()='Gender'])[1]")
      .should("have.text", "Gender ")
      .scrollIntoView();
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }
  TC_48(){
    //validating filter By Gender
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //click on Gender
    cy.xpath("(//a[normalize-space()='Gender'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@rel='Men'])[1]").check({ force: true });
    //click on apply
    cy.contains("Apply").click({ force: true });
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }
  TC_49(){
    //verifying filter By Stock
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //assertion Filter By Stock is visible or not
    cy.xpath("(//a[normalize-space()='Stock'])[1]")
      .should("have.text", "Stock ")
      .scrollIntoView();
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }
  TC_50(){
    //validating filter By Stock
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //click on Stock
    cy.xpath("(//a[normalize-space()='Stock'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@rel='In stock'])[1]").check({ force: true });
    //click on apply
    cy.contains("Apply").click({ force: true });
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }
  TC_51(){
     //verifying filter By Price
     cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //assertion Filter By Price is visible or not
    cy.xpath("(//a[normalize-space()='Prices'])[1]")
      .should("have.text", "Prices ")
      .scrollIntoView();
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }
  TC_52(){
    //validating filter By Price
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //click on Price
    cy.xpath("(//a[normalize-space()='Prices'])[1]").click({ force: true });
    //click on checkbox
    cy.wait(2000)
    cy.xpath("(//div[@class='vue-slider-dot-handle'])[1]").invoke('val', '499').trigger('change').click({force:true})
    //click on apply
    cy.contains("Apply").click({ force: true });
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }
  TC_53(){
    //verifying Sorting
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    //assertion Sort is visible or not
    cy.xpath("(//a[normalize-space()='sort'])[1]")
      .should("have.text", "sort ")
      .scrollIntoView();
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }
  TC_54(){
//validating Sort
cy.xpath(
  "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
).trigger("mousemove");
// for typing marvel comics in console
cy.get("#search").type("Marvel Comics", { force: true });
//then click on search and it will direct to particuler page which search for
cy.xpath(
  "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
).click();
//assertion for url
cy.url().should(
  "equal",
  "https://www.thesouledstore.com/search?q=Marvel%20Comics"
);
//click on sort
cy.xpath("(//a[normalize-space()='sort'])[1]").click({ force: true });
//click on checkbox
cy.wait(2000)
cy.xpath("(//input[@value='POPULARITY'])[1]").check({ force: true });
//click on apply
cy.contains("Apply").click({ force: true });
cy.wait(5000);
cy.screenshot({ capture: "viewport" });
  }
  TC_55(){
//verifying all the filter and sorting 
cy.xpath(
  "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
).trigger("mousemove");
// for typing marvel comics in console
cy.get("#search").type("Marvel Comics", { force: true });
//then click on search and it will direct to particuler page which search for
cy.xpath(
  "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
).click();
//assertion for url
cy.url().should(
  "equal",
  "https://www.thesouledstore.com/search?q=Marvel%20Comics"
);
//assertion all filter section is visible or not 
//product
cy.xpath("(//a[normalize-space()='Products'])[1]").should(
      "have.text",
      "Products "
    );
    //Theme
    cy.xpath("(//a[normalize-space()='Themes'])[1]")
    .should("have.text", "Themes ");
    //Size
    cy.xpath("(//a[normalize-space()='Size'])[1]")
    .should("have.text", "Size ");

    //colors
    cy.xpath("(//a[normalize-space()='Colors'])[1]")
    .should("have.text", "Colors ");
    //stock
    cy.xpath("(//a[normalize-space()='Stock'])[1]")
    .should("have.text", "Stock ");
    //Price
    cy.xpath("(//a[normalize-space()='Prices'])[1]")
    .should("have.text", "Prices ");
    //sort
    cy.xpath("(//a[normalize-space()='sort'])[1]")
    .should("have.text", "sort ");
    cy.wait(8000);
    cy.screenshot({ capture:"fullPage" });
  }
  TC_56(){
    //validating Sort
cy.xpath(
  "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
).trigger("mousemove");
// for typing marvel comics in console
cy.get("#search").type("Marvel Comics", { force: true });
//then click on search and it will direct to particuler page which search for
cy.xpath(
  "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
).click();
//assertion for url
cy.url().should(
  "equal",
  "https://www.thesouledstore.com/search?q=Marvel%20Comics"
);

//it will click on products dropdown
    cy.xpath("(//a[normalize-space()='Products'])[1]").click({ force: true });
    //it will check the checkbox
    cy.xpath("(//input[@type='checkbox'])[4]").check({ force: true });
    //click on themes
    cy.xpath("(//a[normalize-space()='Themes'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@type='checkbox'])[35]").check({ force: true });
    //click on Size
    cy.xpath("(//a[normalize-space()='Size'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@type='checkbox'])[42]").check({ force: true });
    //click on Colors
    cy.xpath("(//a[normalize-space()='Colors'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@type='checkbox'])[66]").check({ force: true });
    //click on Gender
    cy.xpath("(//a[normalize-space()='Gender'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@rel='Men'])[1]").check({ force: true });
    //click on Stock
    cy.xpath("(//a[normalize-space()='Stock'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@rel='In stock'])[1]").check({ force: true });
    //click on Price
    // cy.xpath("(//a[normalize-space()='Prices'])[1]").click({ force: true });
    //click on checkbox
    //cy.wait(2000)
    //cy.xpath("(//div[@class='vue-slider-dot-handle'])[1]").invoke('val', '499').trigger('change').click({force:true})
    //click on sort
    cy.xpath("(//a[normalize-space()='sort'])[1]").click({ force: true });
    //click on checkbox
    cy.wait(2000)
    cy.xpath("(//input[@value='POPULARITY'])[1]").check({ force: true });
    //click on apply
    cy.contains("Apply").click({ force: true });
    cy.wait(5000);
    cy.screenshot({ capture: "viewport" });
  }
  TC_57(){
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).trigger("mousemove");
    // for typing marvel comics in console
    cy.get("#search").type("Marvel Comics", { force: true });
    //then click on search and it will direct to particuler page which search for
    cy.xpath(
      "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
    ).click();
    //assertion for url
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/search?q=Marvel%20Comics"
    );
    cy.contains("Clear").should('have.text','Clear')
    cy.wait(8000)
     cy.screenshot({capture:"viewport"})
  }
  TC_58(){
     //validating Sort
cy.xpath(
  "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
).trigger("mousemove");
// for typing marvel comics in console
cy.get("#search").type("Marvel Comics", { force: true });
//then click on search and it will direct to particuler page which search for
cy.xpath(
  "(//span[@class='fa fa-search icon search-btn-margin'])[1]"
).click();
//assertion for url
cy.url().should(
  "equal",
  "https://www.thesouledstore.com/search?q=Marvel%20Comics"
);

//it will click on products dropdown
    cy.xpath("(//a[normalize-space()='Products'])[1]").click({ force: true });
    //it will check the checkbox
    cy.xpath("(//input[@type='checkbox'])[4]").check({ force: true });
    //click on themes
    cy.xpath("(//a[normalize-space()='Themes'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@type='checkbox'])[35]").check({ force: true });
    //click on Size
    cy.xpath("(//a[normalize-space()='Size'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@type='checkbox'])[42]").check({ force: true });
    //click on Colors
    cy.xpath("(//a[normalize-space()='Colors'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@type='checkbox'])[66]").check({ force: true });
    //click on Gender
    cy.xpath("(//a[normalize-space()='Gender'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@rel='Men'])[1]").check({ force: true });
    //click on Stock
    cy.xpath("(//a[normalize-space()='Stock'])[1]").click({ force: true });
    //click on checkbox
    cy.xpath("(//input[@rel='In stock'])[1]").check({ force: true });
    //click on Price
    // cy.xpath("(//a[normalize-space()='Prices'])[1]").click({ force: true });
    //click on checkbox
    //cy.wait(2000)
    //cy.xpath("(//div[@class='vue-slider-dot-handle'])[1]").invoke('val', '499').trigger('change').click({force:true})
    //click on sort
    cy.xpath("(//a[normalize-space()='sort'])[1]").click({ force: true });
    //click on checkbox
    cy.wait(2000)
    cy.xpath("(//input[@value='POPULARITY'])[1]").check({ force: true });
    //click on apply
    cy.contains("Apply").click({ force: true });
    cy.wait(5000);
    //first its sreen shot after applying all the filter
    cy.screenshot({ capture: "viewport" });
    //then the clear button will clear all the filter
    cy.contains("Clear").click({force:true})
    cy.wait(5000)
    //it will take sreenshot after clear the all filter
    cy.screenshot({capture:"viewport"})
  }
}

export default SearchBar_PO;
