import axios from "axios";

export default {
  // Gets all members
  getMembers: function() {
    return axios.get("/api/member");
  },
  // Gets the Membes with the given id
  getMember: function(id) {
    return axios.get("/api/member/" + id);
  },
  // Saves a Member to the database
  saveMember: function(MemberData) {
    return axios.post("/api/member", MemberData);
  }
};
