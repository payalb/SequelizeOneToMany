const db = require("../models")

class PassportRepository{

    static async save(u){
        var passport = db.Passport.build(u);
        return passport.save().then((data)=>  data);
    }

    static async getAllPassports(){
      return db.Passport.findAll();
    }

    static async getPassportById(pid){
      return db.Passport.findOne({where: {id: pid}});
    }

   static async deletePassportById(pid){
      return db.Passport.destroy({where: { id: pid}});
    }

    static async updatePassportById(u, pid){
      await db.Passport.update(u, {where: {id: pid}});
      return db.Passport.findByPk(pid);
    }
}

module.exports = PassportRepository;