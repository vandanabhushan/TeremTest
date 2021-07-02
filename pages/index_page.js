const { I } = inject();

module.exports = {

  fields:{
    more:'//div[@class="tab-content"]/ul/li[1]/div[@class="product-container"]',
    home:'//div[@id="center_column"]/ul/li/a',
    wishlist:'//a[@id="wishlist_button"]',
    close:'//body/div[2]/div[1]/div[1]/a[1]',
    customeraccount:'//span[contains(text(),"vandana bhushan")]',
    sizedropdown:'//select[@id="group_1"]',
    selectsizem:'//select[@id="group_1"]',
  },

  gotohomepage(){
  I.click(this.fields.home);
  },

  addawishlistitem(){
    I.click(this.fields.more);
    I.click(this.fields.wishlist);
    I.click(this.fields.close);
    I.waitForClickable(this.fields.customeraccount,5);
    I.click(this.fields.customeraccount);
  },

  addfirstpopularitem(){
  I.click(this.fields.more);
  I.click(this.fields.wishlist);
  I.click(this.fields.close);
  I.waitForClickable(this.fields.customeraccount,5);
  I.click(this.fields.customeraccount);
  },
  addfirstpopularitemsizem(){
  I.click(this.fields.more);
  I.click(this.fields.sizedropdown);
  I.selectOption(this.fields.selectsizem,'M');
  I.pressKey('Escape');
  I.click(this.fields.wishlist);
  I.click(this.fields.close);
  I.waitForClickable(this.fields.customeraccount,5);
  I.click(this.fields.customeraccount);
  },
}
