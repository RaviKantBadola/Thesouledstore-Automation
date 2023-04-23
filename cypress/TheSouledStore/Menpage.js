import { it } from "mocha";
import MenPage_PO from "../support/PageObject/Menpage_PO";
describe("TSc_03", () => {
  const Menpage = new MenPage_PO();
  beforeEach(() => {
    Menpage.before();
  });

  //verifying carousel of Men Page
  it("TC_23", () => {
    Menpage.TC_23();
  });

  //Validating Carousel Next and Previous Page
  it("TC_24", () => {
    Menpage.TC_24();
  });
  //Verifying the collection Section and printing in log
  it("TC_25", () => {
    Menpage.TC_25();
  });
  //validating the collection section by clicking one of the image
  it("TC_26", () => {
    Menpage.TC_26();
  });

  it("TC_27", () => {
    Menpage.TC_27();
  });

  it("TC_28", () => {
    Menpage.TC_28();
  });
  it("TC_29", () => {
    Menpage.TC_29()
  });

  it("TC_30", () => {
    Menpage.TC_30()
  });
  it("TC_31", () => {
     Menpage.TC_31()
  });
  
  it('TC_32', () => {
   Menpage.TC_32()
  });
  it('TC_33', () => {
     Menpage.TC_33()
  });
   
  it('TC_34', () => {
    Menpage.TC_34()
  });
  it('TC_35', () => {
    Menpage.TC_35()
    
  });
  it('TC_36', () => {
   Menpage.TC_36()
    
  });
});
