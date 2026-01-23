const express = require("express");
const { getAllBanners , createBanner , findBannerById ,updateBannerById , deleteBannerById} = require("../controllers/banner.controller");
const { uploadBannerFile } = require("../controllers/upload.controller");
const BannerRouter = express.Router();

BannerRouter.route("/")
            .get(getAllBanners)
            .post(uploadBannerFile , createBanner);

BannerRouter.route("/:id")
            .get(findBannerById)
            .put(uploadBannerFile , updateBannerById)
            .delete(deleteBannerById);
module.exports = BannerRouter;