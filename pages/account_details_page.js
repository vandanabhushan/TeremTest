const { I } = inject();

module.exports = {

  fields:{
    wishlist:'//span[contains(text(),"My wishlists")]',
    wishlistlink: '//a[contains(text(),"My wishlist")]',
    quantity: "//input[@id='quantity_1_1']",
    qty2: '//input[@id="quantity_1_3"]',
    deleteicon:'//a[@class="icon"]',
    backtoaccount: '//ul[@class="footer_links clearfix"]/li[1]/a',
  },

    gotowishlistpage(){
    I.waitForClickable(this.fields.wishlist,5);
    I.click(this.fields.wishlist);
  },

    clickwishlistdetails(){
    I.waitForClickable(this.fields.wishlistlink,5);
    I.click(this.fields.wishlistlink);
  },

    checkcountoftheexistingitem(){
    I.seeInField('//input[@id="quantity_1_1"]',2);
    },

    checkcountofdefaultitem(){
    I.seeInField('//input[@id="quantity_1_1"]',1);
    },


    checkcountofnewlyaddeditem(){
    I.seeInField('//input[@id="quantity_1_3"]',1);
    },

    clearwishlist(){
    I.waitForClickable(this.fields.wishlist,5);
    I.click(this.fields.wishlist);
    I.waitForClickable(this.fields.deleteicon,5);
    I.click(this.fields.deleteicon);
    I.click(this.fields.backtoaccount);
    },
}
