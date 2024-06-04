//6.Implement middleware to validate the geographic location of the client. If the request is not coming from an expected region, respond with an error.

const geoip = require("geoip-lite");


const expectedRegion = "US";

const locationValidationMiddleware = (req, res, next) => {
<<<<<<< HEAD
  const ip ="207.97.227.239";
  
=======
  const ip ="49.249.117.102";
  // 49.249.117.102  
>>>>>>> bd73d3bcfb0e9e9cfcf9dc6a80140585cd93a7f4
  const geo = geoip.lookup(ip);
  

  if (!geo || !geo.country || geo.country !== expectedRegion) {
    return res
      .status(403)
      .send({ error: "Unauthorized: Request not from expected region" });
  }
  next();
};

module.exports = locationValidationMiddleware;