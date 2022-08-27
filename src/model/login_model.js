import Dao from "../DAO/loginDAO.js";

export default class LoginModel {
  addNovoLogin = async (login) => {
    const dao = new Dao();
    return await dao.insereLogin(login);
  };
}
