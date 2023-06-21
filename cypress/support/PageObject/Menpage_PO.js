/// <reference types="cypress-xpath" />
/// <reference types="Cypress" />
class MenPage_PO {
  before() {
    //It will run before every test Case
    cy.visit("https://www.thesouledstore.com");
    //i write this line because first time it will take permission to allow
    // cy.contains("Allow").click()
    //it will click on the Men which is persent top of the menubar
    cy.xpath("//*[text()='MEN ']").click();
  }

  TC_23() {
    //this is test case for carousel visible or not
    cy.wait(8000);
    //this line of code of taking sreenshot of carousel
    cy.xpath("(//div[@class='VueCarousel-wrapper'])[1]").first().screenshot({ capture: "fullPage", padding: 140 });
  }

  TC_24() {
    //validating test carousel "Next Button"
    cy.xpath("(//button[@aria-label='Next page'])[1]").click();
    //this code for assertion of Next Button
    cy.xpath("(//button[@aria-label='Next page'])[1]").should("be.visible");
    //validating test carousel "Previous Button"
    cy.xpath(
      "(//button[@class='VueCarousel-navigation-button VueCarousel-navigation-prev'])[1]"
    ).click();
    //this code for assertion of Previous Button
    cy.xpath(
      "(//button[@class='VueCarousel-navigation-button VueCarousel-navigation-prev'])[1]"
    ).should("be.visible");
  }

  TC_25() {
    //verifying and loging the collection section
    cy.contains("COLLECTIONS").invoke("text").then((text) => {
        cy.log(text);
      });
    cy.wait(10000);
    //This code will take sreenshot of collection section
    cy.contains("COLLECTIONS").scrollIntoView().screenshot({capture: "fullPage",padding: 240,});
  }

  TC_26() {
    //for validating the collection section
    //i click on first image in this code
    cy.xpath("(//img[@title='men/oversized-tshirts'])[1]").click();
    //assertion for it redirecting men/oversized collection page or not
    cy.url().should(
      "equal",
      "https://www.thesouledstore.com/men/oversized-tshirts"
    );
  }
  TC_27() {
    // //verifying and loging the categories section
    cy.contains("Categories")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.wait(10000);
    cy.contains("Categories").scrollIntoView();
    //This code will take sreenshot of categories section
    cy.contains("Categories").screenshot({ capture: "fullPage", padding: 240 });
  }
  TC_28() {
    //for validating the catogories section
    //i click on first image in this code
    cy.xpath("(//img[@alt='T-shirts'])[1]").click();
    //assertion for it redirecting to T-Shirts categories page or not
    cy.url().should("equal", "https://www.thesouledstore.com/men/t-shirts");
  }

  TC_29() {
    cy.wait(10000);
    cy.contains("Official Merchandise")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.wait(10000);
    cy.contains("Official Merchandise").scrollIntoView();
    //This code will take sreenshot of categories section
    cy.contains("Official Merchandise").screenshot({capture: "fullPage",padding: 240,});
  }

  TC_30() {
    //for validating the Official Merchandise section
    //i click on marvel image in this code
    cy.xpath(
      "(//img[@title='/artists/marvel-official-merchandise'])[1]"
    ).click();
    //assertion for it redirecting to marvel merchandise page or not
    cy.url().should("equal","https://www.thesouledstore.com/artists/marvel-official-merchandise");
  }
  TC_31() {
    //printing th top selling section
    cy.contains("Top Selling")
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });
    cy.wait(10000);
 
    //This code will take sreenshot of top selling section
    cy.contains("Top Selling").scrollIntoView().screenshot({capture: "fullPage",padding: 240,});
  }

  TC_32(){
//for validating the top selling section
    //i click on first image in this code
    
    cy.xpath( "(//img[@title='Solids: Mid Blue Wash (Straight Fit) undefined at The Souled Store'])[1]").click();
    //assertion for it redirecting to first image single product page or not
    cy.wait(3000)
    cy.url().should("equal","https://www.thesouledstore.com/product/solids-mid-blue-wash-men-jeans?gte=1");

  }
  TC_33(){
    //printing the membership section
    cy.xpath("(//h3[normalize-space()='Membership'])[1]")
    .invoke("text")
    .then((text) => {
      cy.log(text);
    });
  cy.wait(12000);

  //This code will take sreenshot of Membership section
  cy.xpath("(//h3[normalize-space()='Membership'])[1]").scrollIntoView().screenshot({capture: "fullPage",padding: 240,});
  }
  TC_34(){
    //for validating the Membership section
    //i click on poster in this code
    cy.xpath(
      "(//img[@alt='exclusive'])[1]"
    ).click();
    //assertion for it redirecting to first image single product page or not
    cy.url().should("equal","https://www.thesouledstore.com/membership");
  }
 TC_35(){
  //verifying the "Straight Out Of Celebrity Closets" section
  cy.contains("Straight Out Of Celebrity Closets").invoke("text").then((text)=>{
    cy.log(text)
  })
  cy.contains("Straight Out Of Celebrity Closets").scrollIntoView().screenshot({capture:"fullPage",padding:240})
 }
  TC_36(){
    //for validating the  section  "Straight Out Of Celebrity Closets"
    //i click on poster in this code
    cy.xpath(
      "(//img[@alt='/tags/hardik-pandya'])[1]"
    ).click();
    //assertion for it redirecting "Straight Out Of Celebrity Closets" product page or not
    cy.url().should("equal","https://www.thesouledstore.com/hardik-pandya");
  }
}

export default MenPage_PO;
