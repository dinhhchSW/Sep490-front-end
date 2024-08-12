import baseURL from '../api/instance'

const baseUrl_Gadget = 'gadget'

class Manage {

  //Gadget api
  getGadget() {
    return baseURL.get(baseUrl_Gadget + '/GetListGadGet')
  }

}

export default new Manage()