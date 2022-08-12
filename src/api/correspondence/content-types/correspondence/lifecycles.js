module.exports = {
  async afterCreate(event){
    const {result} = event;
    console.log(result)
    try{
      await strapi.plugins['email'].services.email.send({
        to:'samueltaziocolles@hotmail.com',
        from: 'samuelcolles@outlook.com',
        subject:`Correspondence from ${result.name}`,
        text:`From: ${result.name}\nEmail: ${result.email}\n\n${result.message}`
      })
    } catch(err){
      console.log(err)
    }
  }
}
